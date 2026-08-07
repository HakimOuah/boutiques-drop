# Bascules PROD : SQL Server EBP + Outlook

## Bascule Gmail → Outlook / Microsoft Graph (boîtes DB Industrie)

Les employés DB Industrie sont sur Outlook. 5 nœuds à remplacer, la logique métier ne change pas :

| Nœud actuel (Gmail) | Remplacement (Microsoft Outlook) | Note |
|---|---|---|
| Mail entrant (Gmail) — trigger | Microsoft Outlook Trigger (nouveaux messages) | Voir adaptation "Normaliser mail" ci-dessous |
| Envoyer proposition (Gmail) | Outlook → Send message | Champs sujet/corps identiques |
| Marquer mail traite (lu) | Outlook → Update message (isRead=true) | id du message propagé pareil |
| Appliquer label (Gmail) | Outlook → Update message (categories) | PLUS SIMPLE : les catégories Outlook sont des noms libres, pas d'IDs — le mapping Label_1..4 de "Classer mail" devient directement "Publicité", "Suivi commande", etc. |
| Envoyer recap (Gmail) — workflow récaps | Outlook → Send message | |

Adaptations code :
- **"Normaliser mail"** : le format Microsoft Graph diffère du format Gmail — `from.emailAddress.address` (au lieu de headers), `subject` en direct, `body.content` (HTML unifié, PAS de multipart à parser — plus simple que Gmail), `receivedDateTime` (ISO) pour la date. Ajouter ces champs dans les fallbacks existants (le nœud est déjà multi-format, ~10 lignes).
- **"Classer mail"** : remplacer le mapping label_id par les noms de catégories Outlook.
- **Anti-boucle** (filtres sur sujet "PROPOSITION A VALIDER" / "RECAP MAILS DB") : inchangé.

Prérequis côté DB Industrie / IT : credential Microsoft Outlook OAuth2 dans n8n — nécessite un consentement sur le tenant Microsoft 365 de DB Industrie (à prévoir avec leur informatique ou Isocell).

---

# Bascule Data Table n8n → SQL Server EBP (au retour d'Isocell)

Contexte : en attendant l'accès SQL Server EBP (lecture seule), le workflow n8n interroge
deux **Data Tables n8n** chargées depuis les exports EBP du 2026-06-29 :
- `catalogue_articles` (~80 000 articles) — colonnes : `ref, ref_norm, designation, pv_ht, pa_ht, id_ebp`
- `clients_ebp` (~960 clients) — colonnes : `code, nom, emails`

Le jour où l'accès SQL est fourni, il suffit de remplacer le nœud
**"Candidats catalogue (Data Table)"** du workflow "POC DB Industrie - Recherche produit"
par un nœud **Microsoft SQL** exécutant la requête ci-dessous. Le code des nœuds amont/aval
ne change pas si on garde les mêmes alias de colonnes.

## Requête catalogue (remplace la Data Table catalogue_articles)

Base : EBP Gestion Commerciale ELITE 25.4 (schéma v1.522.10270.0). Table `Item`, clé primaire `Id`.

```sql
SELECT
    Id                    AS ref,          -- code article (ex: 1236205-2RSH-SKF)
    LOWER(Id)             AS ref_norm,     -- la normalisation fine (retrait -_. espaces) reste faite dans n8n
    Caption               AS designation,  -- libellé
    SalePriceVatExcluded  AS pv_ht,        -- prix de VENTE HT (PAS PurchasePrice !)
    PurchasePrice         AS pa_ht,        -- prix d'achat (info marge opérateur)
    UniqueId              AS id_ebp        -- identificateur unique EBP (GUID)
FROM Item
WHERE ActiveState = 0                      -- 0=Actif, 1=En sommeil, 2=Bloqué, 3=Partiellement bloqué
  AND (
       REPLACE(REPLACE(REPLACE(REPLACE(LOWER(Id),'-',''),' ',''),'_',''),'.','') LIKE '%' + @ref1 + '%'
    OR REPLACE(REPLACE(REPLACE(REPLACE(LOWER(Id),'-',''),' ',''),'_',''),'.','') LIKE '%' + @ref2 + '%'
    OR Caption LIKE '%' + @mot1 + '%'
    OR Caption LIKE '%' + @mot2 + '%'
  );
```

Les paramètres `@ref1, @ref2, @mot1, @mot2` viennent du nœud "Preparer requetes catalogue"
(`{{ $json.ref1 }}` etc.). Garder la ligne sentinelle inutile en SQL : à la place, activer
`alwaysOutputData` sur le nœud SQL OU conserver une ligne `UNION SELECT '__SENTINEL__', ...`
pour garantir ≥1 ligne par mail (nécessaire au chaînage des items n8n).

## Requête clients (remplace la Data Table clients_ebp)

```sql
SELECT
    Id                          AS code,    -- code tiers (ex: CLI000)
    Name                        AS nom,
    CONCAT_WS(';', NULLIF(MainInvoicingContact_Email,''), NULLIF(MainDeliveryContact_Email,'')) AS emails
FROM Customer
WHERE ActiveState = 0;
```

NB : d'autres emails existent dans la table `Contact` (85 colonnes, liée aux tiers) —
à ajouter si la reconnaissance par email rate trop de clients.

## Avertissement EBP (repris du schéma)

L'écriture directe en base est fortement déconseillée par EBP : toute écriture (création de
devis, etc.) doit passer par le **SDK EBP** ou les imports natifs. Le workflow actuel est
en lecture seule — conforme.

## Données chargées le 2026-07-09

- Source : `Liste des articles(in).csv` + `Listes de clients(in).csv` (exports EBP du 2026-06-29)
- 80 025 articles uniques importés (dédupliqués par GUID) sur ~88 000 enregistrements ;
  ~8 400 enregistrements au format non standard (RTF multi-lignes) non importés — le passage
  au SQL direct rendra le catalogue exhaustif.
- ⚠️ Le prix affiché par l'ancien catalogue embarqué (800 produits) était en réalité le
  PRIX D'ACHAT. Corrigé : la Data Table porte `pv_ht` (SalePriceVatExcluded) ET `pa_ht`
  (PurchasePrice) distinctement.
