#!/usr/bin/env python3
"""
Analyse Semrush Amazon.fr organic positions — Filtrage strict + scoring niches dropshipping high-ticket
Version 2 — Classification élargie
"""

import pandas as pd
import re
import warnings
warnings.filterwarnings('ignore')

# ─────────────────────────────────────────────────
# 1. CHARGEMENT DU FICHIER
# ─────────────────────────────────────────────────
FILE = 'amazon.fr-organic.Positions-fr-20260301-2026-03-02T16_02_34Z.xlsx'
df = pd.read_excel(FILE)
print(f"[1] Fichier charge : {len(df)} lignes, {len(df.columns)} colonnes")

# ─────────────────────────────────────────────────
# 2. FILTRAGE — EXCLUSIONS
# ─────────────────────────────────────────────────

# --- 2a. Marques à exclure ---
BRANDS = [
    'samsung', 'apple', 'nike', 'dyson', 'adidas', 'puma', 'reebok', 'asics',
    'skechers', 'converse', 'vans', 'fila', 'new balance', 'timberland',
    'lacoste', 'gucci', 'hermes', 'hermès', 'chanel', 'louis vuitton', 'dior',
    'versace', 'prada', 'burberry', 'balenciaga', 'givenchy', 'yves saint laurent',
    'cartier', 'rolex', 'omega', 'boss', 'hugo boss', 'tommy hilfiger',
    'calvin klein', 'ralph lauren', 'armani', 'dolce gabbana', 'michael kors',
    'coach', 'tiffany', 'pandora', 'swarovski', 'fossil',
    'sony', 'philips', 'braun', 'bosch', 'siemens', 'tefal', 'moulinex',
    'seb ', 'delonghi', 'kenwood', 'kitchenaid', 'smeg', 'whirlpool',
    'electrolux', 'miele', 'rowenta', 'krups', 'magimix', 'nespresso',
    'senseo', 'tassimo', 'dolce gusto',
    'iphone', 'ipad', 'macbook', 'airpod', 'airpods', 'nintendo', 'playstation',
    'xbox', 'ps5 ', 'ps4 ', 'logitech', 'razer', 'corsair', 'steelseries',
    'lenovo', 'asus', 'acer', 'dell ', 'msi ', 'intel ', 'amd ', 'nvidia',
    'geforce', 'radeon', 'ryzen', 'lego ', 'lego\b', 'playmobil',
    'karcher', 'kärcher', 'husqvarna', 'stihl', 'makita', 'dewalt', 'milwaukee',
    'parkside', 'ryobi', 'black decker', 'black+decker',
    'xiaomi', 'redmi', 'oppo', 'huawei', 'oneplus', 'honor ', 'motorola', 'google pixel',
    'garmin', 'fitbit', 'gopro', 'bose ', 'jbl', 'sonos', 'marshall',
    'harman kardon', 'beats ', 'sennheiser', 'bang olufsen',
    'ikea', 'maison du monde', 'conforama', 'leroy merlin', 'castorama',
    'decathlon', 'intersport',
    'oral b', 'oral-b', 'gillette', "l'oreal", 'loreal', 'maybelline', 'nyx ',
    'revlon', 'mac cosmetics', 'estee lauder', 'clinique', 'lancome', 'kiko',
    'bioderma', 'la roche posay', 'vichy', 'avene', 'caudalie', 'nuxe',
    'victoria secret', "victoria's secret", 'bath body works',
    'creality', 'anycubic', 'bambu lab',
    'dreame', 'roborock', 'ecovacs', 'irobot', 'roomba',
    'weber ', 'campingaz', 'ooni',
    'north face', 'columbia', 'patagonia', 'salomon', 'merrell',
    'birkenstock', 'crocs', 'ugg ', 'dr martens', 'caterpillar',
    'levis', "levi's", 'wrangler', 'diesel ', 'replay ', 'superdry',
    'zara ', 'mango ', 'uniqlo', 'primark',
    'red bull', 'redbull', 'monster energy', 'pepsi', 'coca cola',
    'nestle', 'danone', 'nutella', 'gerble', 'gerblé',
    'cabaia', 'eastpak', 'samsonite', 'kipling', 'chabrand',
    'disney', 'pokemon', 'pikachu', 'sonic ', 'sonic\b',
    'hello kitty', 'barbie', 'hot wheels', 'fisher price',
    'adopt ', 'sephora', 'yves rocher', 'nocibe',
    'blackview', 'cubot', 'doogee', 'oukitel', 'umidigi',
    'hisense', 'tcl ', 'toshiba', 'sharp ', 'panasonic',
    'beaba', 'babyzen', 'chicco', 'cybex', 'maxi cosi',
    'lunii', 'tonies', 'vtech',
    'bissell', 'tineco', 'momcozy',
    'cecotec', 'thrustmaster', 'percko', 'remarkable',
    'kinderkraft', 'babymoov', 'sophie la girafe',
    'goyard', 'cellublue', 'etiaxil', 'divain', 'casetify',
    'reolink', 'ezviz', 'posca', 'obut', 'legami',
    'coros', 'whoop', 'loberon', 'schleich', 'fincut',
    'springfield', 'qwetch', 'byoma', 'desenio', 'isotoner',
    'victorinox', 'leatherman',
    'de buyer', 'dji ', 'pixel ', 'nokia',
    'flipper zero', 'kodak', 'canon pixma',
    'calor', 'valberg',
    'intex ', 'bestway',
    'quechua',
    'stanley ', 'gourde stanley',
    'lg ', 'hp ',
]

# --- 2b. Mots adultes/sensibles ---
ADULT_WORDS = [
    'plug anal', 'gode ', 'godemich', 'sextoy', 'sex toy', 'vibromasseur',
    'dildo', 'cockring', 'menottes', 'bondage', 'erotique', 'érotique',
    'lingerie sexy', 'string borat', 'camwhore', 'porn', 'xxxx', 'xxc ',
    'xhxx', 'xvid', 'nude', 'naked', 'hentai', 'squirt game',
    'animals sex', 'body painting', 'plug ', ' anal',
    'aphrodisiaque', 'miel aphrodisiaque', 'osmooz hot', 'xtape',
    'fetish', ' sexy', 'adulte sensuel', 'stimulateur clito',
    'theync', 'wullu', 'haokkv', 'xnx', 'xvideo', 'xxxz',
    'nsfw', 'tamil sex', 'vaginette', 'tushy', 'vody',
    'justream', 'laboubou',
]

# --- 2c. Mots navigationnels ---
NAV_WORDS = [
    'amazon', 'amaz', 'amzone', 'alazon', 'amz ',
    'ebay', 'aliexpress', 'wish ', 'cdiscount', 'fnac', 'darty',
    'boulanger', 'leclerc', 'carrefour', 'auchan', 'lidl',
    'mon compte', 'mes commandes', 'panier', 'commande en ligne',
    'soldes', 'promo', 'black friday', 'prime day', 'liquidation',
    'partenaire', 'advertising', 'fire tv stick', 'fire stick',
    'kindle', 'alexa ', 'echo dot', 'amazon pay', 'amazon photo',
    'amazon music', 'amazon video', 'amazon prime',
    'bruneau', 'damard', 'astoly', 'frameto',
    'iparcours', 'market place',
]

# --- 2d. Films, séries, personnages fictifs, jouets enfants purs ---
FICTION_WORDS = [
    'film', 'movie', 'serie ', 'saison ', 'dvd', 'blu ray', 'bluray',
    'comics', 'manga ', 'anime ', 'figurine', 'funko',
    'prison break', 'grey anatomy', "grey's anatomy", 'inception',
    'assassin creed', 'great gatsby', 'sin city', 'wonka', 'candide',
    'ocean 12', 'spotless sunshine', 'skyfall', 'star wars',
    'harry potter', 'lord of the rings', 'game of thrones',
    'stranger things', 'breaking bad', 'walking dead',
    'marvel', 'dc comics', 'batman', 'superman', 'spiderman',
    'avengers', 'naruto', 'dragon ball', 'one piece ',
    'les 8 salopard', 'cloak and dagger', 'bully bully',
    'hymn for the weekend', 'last guardian',
    'l homme qui valait', 'journal prisonnier', 'abbe prevost',
    'wimpy kid', 'sesamath', 'homer simpson',
    'luigi mansion', 'ffx game', 'skull king',
    'nicolas sarkozy', 'renaud camus', 'jasmine disney',
    'coloriage', 'mon petit poney', 'my little pony', 'paw patrol',
    'peppa pig', 'minnie mouse', 'my melody',
    'vaiana', 'reine des neiges', 'frozen',
    'skylanders', 'bakugan', 'beyblade', 'monster high',
    'poupee lol', 'poupee annabelle',
    'cloak dagger', 'secret hitler', 'great eastern entertainment',
    'mould king', 'ninjago', 'aquaman', 'le hobbit', 'hobbit',
    'bienvenue chez les', 'old boy', 'azur et asmar',
    'belle gibson', 'farming simulator', 'david goggins',
    'kaamelott', 'manon lescaut', 'the revenant', 'fifi brindacier',
    'the crow', 'le prestige', 'v pour vendetta',
    'l\'histoire sans fin', 'jurassic world', 'rain man',
    'la ferme des animaux', 'les oiseaux se cachent',
    'le livre perdu', 'loup de wall street', 'bumblebee',
    'pirates des', 'freddy', 'groot', 'albator',
    'changer l\'eau des fleurs', 'les 5 blessures',
    '7 péchés capitaux', 'gargantua', 'ou est charlie',
    'donjon et dragon', 'mr wolff', 'kuromi', 'nezuko',
    'bisounours', 'rainbow high', 'scoubidou', 'furby',
    'polly pocket', 'ken doll', 'nerf ', 'en nerf',
    'toupie beyblade', 'slime ', 'poupee', 'peluche',
    'pokeball', 'evolution prismatique', 'fifa ',
    'pendule oui non', 'trivial pursuit',
    'sans complexe', 'drapeau ',
    'fourth wing',  # novel, not kitchen
    'speed bac', 'calculatrice',
    'forcapil', 'cicaplast', 'bepanthen', 'vermifuge',
    'repulsif chat', 'rhino horn', 'bleu de méthylène',
    'alcool isopropylique', 'peroxyde',
    'cerf volant', 'ballon ', 'squishy', 'kawaii',
    'cadeau fete', 'photobooth',
]

# --- 2e. Mode : vêtements, chaussures, sacs, bijoux, montres, accessoires ---
FASHION_WORDS = [
    'vetement', 'vêtement', 'tshirt', 't-shirt', 'tee shirt',
    'chemise', 'pantalon', 'jean ', 'jeans', 'robe ', 'jupe',
    'manteau', 'veste ', 'blouson', 'pull ', 'sweat', 'hoodie',
    'polo ', 'short ', 'bermuda', 'pyjama', 'lingerie',
    'sous vetement', 'slip ', 'boxer ', 'calecon', 'soutien gorge',
    'brassiere', 'legging', 'collant',
    'chaussure', 'basket ', 'sneaker', 'botte ', 'sandale',
    'escarpin', 'mocassin', 'tong ', 'mule ', 'sabot',
    'sac a main', 'sac à main', 'sacoche', 'pochette', 'besace',
    'porte monnaie', 'portefeuille',
    'bijou', 'collier', 'bracelet', 'bague ', 'boucle oreille',
    'pendentif', 'jonc ', 'broche ',
    'montre homme', 'montre femme', 'montre ',
    'ceinture', 'echarpe', 'écharpe', 'foulard', 'bonnet ',
    'casquette', 'chapeau', 'gant ', 'gants ', 'lunettes soleil',
    'cravate', 'noeud papillon', 'bretelle',
    'deguisement', 'déguisement', 'costume ', 'cosplay',
    'sac a dos', 'sac à dos', 'vanity', 'trousse ',
    'string ', 'tanga ', 'corset', 'bustier',
    'pins ', 'gloss ', 'barrette', 'serre tete',
    'chaussette', 'body ',
    'stitch ', # character merch
]

# --- 2f. Tout ce qui s'ingère ---
INGEST_WORDS = [
    'complement alimentaire', 'complément', 'vitamine', 'proteine', 'protéine',
    'whey', 'bcaa', 'creatine', 'créatine', 'omega 3', 'magnesium',
    'zinc ', 'calcium', 'probiotique', 'collagene', 'collagène',
    'spiruline', 'curcuma', 'ashwagandha', 'melatonine', 'mélatonine',
    'l glutamine', 'glutamine', 'carnitine',
    'thé ', 'café ', 'cafe ', 'tisane', 'infusion',
    'boisson', 'sirop ', 'soda ',
    'chocolat', 'biscuit', 'gateau', 'gâteau', 'bonbon', 'snack',
    'chips ', 'cereale', 'céréale', 'muesli', 'granola',
    'huile olive', 'huile coco', 'huile de coco', 'vinaigre',
    'miel ', 'confiture', 'pate a tartiner',
    'poivre', 'epice', 'épice',
    'nutrition', 'alimentaire',
    'henné', 'henne', 'nido ', 'treets', 'nature valley',
    'yogi tea', 'chin mudra', 'instant feet',
    'pilly', 'sel d oseille',
    'calendrier avent', "calendrier de l'avent",
    'cachaça', 'pepperoni', 'kadaif', 'vergeoise',
    'matcha', 'milia matcha',
]

# --- 2g. Produits à faible valeur / petites babioles ---
LOW_VALUE_WORDS = [
    'faux ongle', 'mandoline cuisine', 'entonnoir',
    'bouchon ', 'pile ', 'piles ', 'ampoule led', 'bougie ',
    'scotch ', 'ficelle', 'colle ',
    'aiguille', 'epingle', 'épingle', 'trombone', 'punaise',
    'elastique', 'élastique',
    'stylo ', 'crayon', 'feutre ', 'marqueur', 'surligneur',
    'gomme ', 'cahier', 'classeur',
    'enveloppe', 'post it', 'post-it', 'bloc note',
    'paille', 'gobelet', 'assiette jetable', 'serviette papier',
    'sac poubelle', 'papier toilette', 'papier alu', 'film etirable',
    'fiche bristol', 'rafia', 'bibelot', 'semainier',
    'attrape reve', 'boule disco', 'boule a facette', 'sablier',
    'cutter ', 'gyrophare',
    'laisse chien', 'laisse pour chien', 'collier chien',
    'gond de porte', 'mousseur robinet', 'mousseur pour robinet',
    'mousseur lait', 'mousseur a lait',
    'derouleur papier', 'porte manteau', 'roulette porte',
    'pommeau douche', 'pommeau de douche',
    'brosse a dent', 'brosse dent',
    'pistolet a eau', 'pistolet eau',
    'spinner ', 'yos yos', 'yo yo',
    'carte micro sd', 'cle usb', 'clé usb',
    'adaptateur prise', 'adaptateur ',
    'support telephone', 'support téléphone',
    'coque iphone', 'coque samsung', 'coque ',
    'cadre photo', 'cadre 30x40',
    'herbier', 'pate fimo', 'pate a modeler',
    'tapis de souris', 'tapis souris',
    'shaker ', 'gourde ',
    'latte de lit',
    'echenilloir', 'rateau a feuille',
    'chariot plage', 'chariot de plage',
    'boite au lettre', 'boîte aux lettres',
    'dropshipping', 'booknook',
    'figured art', 'knex', 'jokari',
    'cronus', 'cronus zen',
    'cpl ', 'dash ',
    'tringle rideau', 'tringle',
    'cable ethernet', 'cable usb', 'câble',
    'multiprise',
    'telecommande', 'télécommande',
    'serpillère', 'serpillere',
    'scrapbooking', 'resine epoxy',
    'soundboard',
    'batterie externe',
    'mandoline', 'loupe ', 'dictaphone',
    'rideau douche', 'rideau de douche',
    'deboucheur', 'aimant ',
    'seau ',
]

# --- 2h. Beauté / cosmétiques consommables ---
BEAUTY_WORDS = [
    'shampoing', 'shampooing', 'apres shampoing', 'après-shampooing',
    'gel douche', 'savon', 'creme ', 'crème ', 'serum', 'sérum',
    'masque visage', 'masque cheveux', 'gommage', 'exfoliant',
    'fond de teint', 'mascara', 'rouge levre', 'rouge à lèvres',
    'eye liner', 'eyeliner', 'fard', 'blush', 'poudre huda',
    'vernis', 'dissolvant', 'demaquillant', 'démaquillant',
    'deodorant', 'déodorant', 'parfum', 'eau de toilette',
    'huile essentielle', 'baume ', 'lait corporel',
    'ponceuse ongle', 'faux cils', 'extension cils',
    'autobronzant', 'ecran solaire',
    'dentifrice', 'bain bouche',
    'biodance', 'isispharma', 'huile pepin', 'huile lavante',
    'brume ', 'vaillant parfum',
]

# --- 2i. Jouets / jeux enfants (pas high-ticket) ---
TOYS_WORDS = [
    'jouet ', 'jouets', 'poupée', 'peluche', 'doudou',
    'puzzle ', 'coloriage', 'loisir creatif', 'loisirs créatifs',
    'pate a modeler', 'perles ', 'origami',
    'toupie ', 'billes', 'cerf volant',
    'jeu de carte', 'jeu de societe', 'jeu de société',
    'dame jeanne',
]

# --- 2j. Livres / culture ---
BOOKS_WORDS = [
    'livre ', 'livres ', 'roman ', 'bd ', 'bande dessinee',
    'florence foresti',
]

# --- Compile all exclusion patterns ---
def build_pattern(word_list):
    escaped = [re.escape(w.strip()) for w in word_list if w.strip()]
    return re.compile('|'.join(escaped), re.IGNORECASE)

pat_brands = build_pattern(BRANDS)
pat_adult = build_pattern(ADULT_WORDS)
pat_nav = build_pattern(NAV_WORDS)
pat_fiction = build_pattern(FICTION_WORDS)
pat_fashion = build_pattern(FASHION_WORDS)
pat_ingest = build_pattern(INGEST_WORDS)
pat_lowval = build_pattern(LOW_VALUE_WORDS)
pat_beauty = build_pattern(BEAUTY_WORDS)
pat_toys = build_pattern(TOYS_WORDS)
pat_books = build_pattern(BOOKS_WORDS)

kw = df['Keyword'].astype(str)

mask_brand   = kw.str.contains(pat_brands)
mask_adult   = kw.str.contains(pat_adult)
mask_nav     = kw.str.contains(pat_nav)
mask_fiction  = kw.str.contains(pat_fiction)
mask_fashion = kw.str.contains(pat_fashion)
mask_ingest  = kw.str.contains(pat_ingest)
mask_lowval  = kw.str.contains(pat_lowval)
mask_beauty  = kw.str.contains(pat_beauty)
mask_toys    = kw.str.contains(pat_toys)
mask_books   = kw.str.contains(pat_books)

# Also exclude navigational intent (pure nav)
mask_nav_intent = df['Keyword Intents'].astype(str).str.contains('navigational', case=False, na=False)
mask_pure_nav = mask_nav_intent & ~df['Keyword Intents'].astype(str).str.contains('transactional|commercial', case=False, na=False)

mask_exclude = mask_brand | mask_adult | mask_nav | mask_fiction | mask_fashion | mask_ingest | mask_lowval | mask_beauty | mask_pure_nav | mask_toys | mask_books

df_filtered = df[~mask_exclude].copy()

print(f"[2] Apres exclusions : {len(df_filtered)} lignes restantes (exclu {len(df) - len(df_filtered)})")
print(f"    - Marques: {mask_brand.sum()}")
print(f"    - Adulte/sensible: {mask_adult.sum()}")
print(f"    - Navigationnel: {mask_nav.sum()}")
print(f"    - Fiction/films/jouets: {mask_fiction.sum()}")
print(f"    - Mode: {mask_fashion.sum()}")
print(f"    - Ingestion: {mask_ingest.sum()}")
print(f"    - Faible valeur: {mask_lowval.sum()}")
print(f"    - Beaute conso: {mask_beauty.sum()}")
print(f"    - Jouets enfants: {mask_toys.sum()}")
print(f"    - Livres: {mask_books.sum()}")
print(f"    - Intent nav pur: {mask_pure_nav.sum()}")

# ─────────────────────────────────────────────────
# 3. CLASSIFICATION EN NICHES (ELARGIE)
# ─────────────────────────────────────────────────

NICHE_RULES = [
    # Electromenager cuisine (large)
    ("Electromenager cuisine", r'friteuse|air fryer|robot cuisine|robot patissier|robot pâtissier|blender|mixeur|centrifugeuse|extracteur jus|autocuiseur|cookeo|multicuiseur|mijoteuse|machine a pain|machine à pain|deshydrateur|déshydrateur|bouilloire|grille pain|toaster|raclette|fondue|appareil raclette|crêpière|crepiere|gaufrier|machine a gaufre|rice cooker|cuiseur riz|cuiseur a riz|cuiseur à riz|wok electrique|micro onde|four |plaque induction|yaourtiere|yaourt|sorbetiere|machine a glace|machine glace|percolateur|cafetiere|cafetière|machine cafe|machine expresso|lave vaisselle|mini lave vaisselle|mini frigo|congelateur|congélateur|refrigerateur|réfrigérateur|hotte |robot menager'),

    # Aspirateurs / nettoyage maison
    ("Aspirateurs & nettoyage", r'aspirateur|balai vapeur|nettoyeur vapeur|nettoyeur haute pression|monobrosse|autolaveuse|shampouineuse|balayeuse|robot aspirateur|laveur sol|injecteur extracteur|nettoyeur sol'),

    # Climatisation / chauffage / ventilation / qualite air
    ("Climatisation & chauffage", r'climatiseur|clim mobile|ventilateur|chauffage|radiateur|poele a bois|poêle à bois|poele a granule|convecteur|deshumidificateur|déshumidificateur|humidificateur|purificateur air|purificateur d.air|chauffage soufflant|seche serviette|rafraichisseur|cheminee electrique|cheminée électrique|chauffage exterieur|parasol chauffant|ventilateur plafond|ventilateur poele'),

    # Mobilier & aménagement intérieur
    ("Mobilier & aménagement", r'\bbureau\b|bureau gaming|\btable\b|\bchaise\b|fauteuil|canape|canapé|\blit\b|lit \d|lit mezzanine|lit coffre|lit escamotable|matelas|sommier|etagere|étagère|armoire|commode|meuble|bibliotheque|bibliothèque|buffet|bar cuisine|tabouret|banquette|\bbanc\b|pouf |secretaire|secrétaire|console meuble|paravent|miroir mural|miroir plein pied'),

    # Literie & confort sommeil
    ("Literie & confort", r'matelas |oreiller|couette |surmatelas|protege matelas|traversin|couverture lest|couverture ponder'),

    # Equipement bureau / télétravail
    ("Equipement bureau & teletravail", r'ecran pc|écran pc|ecran incurv|moniteur |imprimante|scanner |destructeur document|lampe bureau|siege bureau|siège bureau|repose pied|bureau assis debout|webcam |hub usb|station accueil|onduleur|nas |serveur nas|disque dur|imprimante sublimation|imprimante 3d'),

    # Outillage & bricolage
    ("Outillage & bricolage", r'perceuse|visseuse|meuleuse|scie |scie circulaire|scie sauteuse|scie onglet|scie sabre|rabot |defonceuse|défonceuse|ponceuse|decapeur|compresseur|poste a souder|poste soudure|touret|caisse a outils|caisse outils|dremel|pistolet peinture|station peinture|niveau laser|telemetre|télémètre|detecteur|échafaudage|echafaudage|generatrice|groupe electrogene|etabli|étau '),

    # Jardin motorisé & équipement extérieur
    ("Jardin & extérieur motorisé", r'tondeuse|robot tondeuse|tronconneuse|tronçonneuse|debroussailleuse|débroussailleuse|souffleur feuille|coupe bordure|taille haie|motoculteur|motobineuse|scarificateur|broyeur vegetaux|broyeur |nettoyeur haute pression|arrosage automatique|pompe a eau|pompe arrosage|pompe relevage|pompe vide cave|pompe piscine|abri jardin|serre jardin|pergola|store banne|parasol |salon jardin|barbecue|brasero|spa gonflable|jacuzzi|piscine|robot piscine|electrolyseur|filtre piscine|secateur electrique|sécateur|toboggan|portique|balancoire|balançoire|trampoline'),

    # Fitness & sport equipment
    ("Fitness & musculation", r'velo.{0,3}appartement|vélo.{0,3}appartement|velo elliptique|vélo elliptique|tapis.{0,3}course|tapis de course|rameur |banc.{0,3}musculation|rack musculation|cage musculation|barre musculation|haltere|haltère|kettlebell|power rack|smith machine|stepper|home trainer|station musculation|poulie musculation|punching ball|sac de frappe|velo biking|trottinette electrique|trottinette enfant|trotinette'),

    # Bien-être & santé (appareils)
    ("Bien-etre appareils", r'masseur|massage |pistolet massage|coussin massant|tapis acupression|sauna |infrarouge|luminotherapie|luminothérapie|electrostimulateur|électrostimulateur|tensiometre|tensiomètre|oxymetre|oxymètre|inhalateur|aerosol|nebuliseur|nébuliseur|pressotherapie|pressothe|fauteuil massant|siege massant|appareil massage'),

    # Bébé & puériculture (gros équipement)
    ("Puericulture equipement", r'poussette|landau|siege auto|siège auto|lit bebe|lit bébé|lit parapluie|berceau|parc bebe|parc bébé|transat bebe|balancelle|chaise haute|rehausseur|babyphone|ecoute bebe|écoute bébé|sterilisateur|stérilisateur|tire lait|porte bebe|porte-bébé|trotteur bébé|trotteur bebe|baignoire bébé|baignoire bebe'),

    # Camping & plein air
    ("Camping & plein air", r'tente |tente camping|tente gonflable|tente plage|hamac|sac couchage|sac de couchage|matelas gonflable|lampe frontale|rechaud|réchaud|glaciere|glacière|auvent|bivouac|kayak|paddle |canoe|canoë|jumelle|longue vue|telescope|télescope'),

    # Animalerie (gros équipement)
    ("Animalerie equipement", r'panier chien|niche chien|cage chien|cage chat|arbre a chat|arbre à chat|fontaine.{0,5}chat|distributeur croquette|chatiere|chatière|aquarium|terrarium|poulailler|enclos|clapier|voliere|volière|filtre aquarium'),

    # Gaming / setup (peripheriques premium)
    ("Gaming setup", r'chaise gaming|fauteuil gaming|ecran gaming|clavier mecanique|clavier mécanique|clavier qwerty|clavier azerty|manette |gamepad|volant ps|volant gaming|pedalier|cockpit gaming|playseat|sim racing|bras moniteur|casque gaming|setup gaming'),

    # Rangement & organisation maison
    ("Rangement & organisation", r'rangement chaussure|rangement |coffre rangement|boite rangement|dressing|penderie|portant vetement|meuble chaussure|vestiaire|rack rangement|organisateur'),

    # Photo / vidéo
    ("Photo & video", r'trepied|trépied|stabilisateur|gimbal|ring light|anneau lumineux|fond vert|softbox|eclairage photo|éclairage photo|studio photo|camera |appareil photo|objectif photo|drone |mini camera|camera de chasse|camera chasse'),

    # Entretien linge
    ("Entretien linge", r'machine a laver|lave linge|seche linge|sèche linge|fer a repasser|fer à repasser|centrale vapeur|defroisseur|défroisseur|table repasser|etendoir|séchoir|sechoir|essoreuse|mini machine a laver'),

    # Sécurité & surveillance
    ("Securite & surveillance", r'camera surveillance|camera securite|caméra surveillance|alarme maison|alarme sans|detecteur fumee|détecteur fumée|detecteur monoxyde|coffre fort|coffre-fort|serrure |verrou|interphone|visiophone|sonnette video'),

    # Transport / mobilité électrique
    ("Transport & mobilite electrique", r'trottinette electrique|trottinette électrique|velo electrique|vélo électrique|overboard|hoverboard|gyroroue|monoroue|draisienne|scooter electrique|velo cargo|velo pliant|booster batterie'),

    # Domotique & maison connectée
    ("Domotique & connecte", r'domotique|thermostat|prise connectee|prise connectée|ampoule connect|volet roulant|store electrique|motorisation volet|iptv|box tv'),

    # Audio premium
    ("Audio premium", r'enceinte bluetooth|enceinte portable|barre de son|home cinema|ampli |amplificateur|platine vinyle|tourne disque|lecteur cd|haut parleur|caisson basse|subwoofer'),

    # Cuisine équipement (ustensiles premium, pas electro)
    ("Cuisine equipement premium", r'batterie cuisine|cocotte |faitout|couteau cuisine|bloc couteau|pierre a pizza|machine sous vide|tajine|couscousier|plancha '),

    # Eclairage intérieur premium
    ("Eclairage interieur", r'lustre|suspension |plafonnier|applique murale|lampadaire|lampe led|lampe uv|lampe anti moustique|lampe à huile|lampe a lave|led ruban|projecteur led|chandelier|spot encastrable|spot led'),

    # Soin corps appareils (non consommable)
    ("Soin corps appareils", r'epilateur|épilateur|tondeuse barbe|tondeuse cheveux|rasoir electrique|lisseur|fer a lisser|seche cheveux|sèche cheveux|brosse lissante|brosse soufflante|miroir grossissant|appareil anti ride|dermaroller|ipl |lumiere pulsee|lumière pulsée|shark flexstyle'),

    # Electroménager divers premium
    ("Electromenager divers", r'machine a coudre|machine coudre|robot laveur|lave vitre|machine a laver'),

    # Traceurs / GPS / electronique utilitaire
    ("Electronique utilitaire", r'traceur gps|talkie walkie|walkie talkie|tablette graphique|chromebook|tablet'),
]

def classify_keyword(keyword):
    kw_lower = keyword.lower()
    for niche_name, pattern in NICHE_RULES:
        if re.search(pattern, kw_lower):
            return niche_name
    return None

df_filtered['niche'] = df_filtered['Keyword'].apply(classify_keyword)

df_niched = df_filtered[df_filtered['niche'].notna()].copy()
print(f"[3] Keywords classes en niches : {len(df_niched)} (non classes : {len(df_filtered) - len(df_niched)})")

# Show unclassified with high volume
unclassified = df_filtered[df_filtered['niche'].isna()].sort_values('Search Volume', ascending=False)
print(f"\n    Top 40 keywords non classes (pour verification) :")
for _, row in unclassified.head(40).iterrows():
    print(f"      {row['Search Volume']:>6} | KD {row['Keyword Difficulty']:>2} | {row['Keyword']}")

# ─────────────────────────────────────────────────
# 4. SCORING PAR NICHE
# ─────────────────────────────────────────────────

niche_stats = df_niched.groupby('niche').agg(
    nb_keywords=('Keyword', 'count'),
    vol_total=('Search Volume', 'sum'),
    kd_moyen=('Keyword Difficulty', 'mean'),
    cpc_moyen=('CPC', 'mean'),
    traffic_total=('Traffic', 'sum'),
).reset_index()

def normalize(series):
    mn, mx = series.min(), series.max()
    if mx == mn:
        return pd.Series([50]*len(series))
    return 100 * (series - mn) / (mx - mn)

niche_stats['score_volume'] = normalize(niche_stats['vol_total'])
niche_stats['score_seo'] = normalize(100 - niche_stats['kd_moyen'])  # KD bas = facile = score haut
niche_stats['score_cpc'] = normalize(niche_stats['cpc_moyen'])
niche_stats['score_nbkw'] = normalize(niche_stats['nb_keywords'])

# Score composite: volume 40% + SEO ease 30% + CPC 15% + nb keywords 15%
niche_stats['score'] = (
    niche_stats['score_volume'] * 0.40 +
    niche_stats['score_seo'] * 0.30 +
    niche_stats['score_cpc'] * 0.15 +
    niche_stats['score_nbkw'] * 0.15
)

niche_stats = niche_stats.sort_values('score', ascending=False).reset_index(drop=True)
niche_stats.index += 1

# ─────────────────────────────────────────────────
# 5. FOURCHETTES DE PRIX PAR NICHE
# ─────────────────────────────────────────────────

PRICE_RANGES = {
    "Electromenager cuisine": "60 - 400EUR",
    "Aspirateurs & nettoyage": "80 - 500EUR",
    "Climatisation & chauffage": "50 - 600EUR",
    "Mobilier & aménagement": "80 - 800EUR",
    "Literie & confort": "80 - 1200EUR",
    "Equipement bureau & teletravail": "80 - 600EUR",
    "Outillage & bricolage": "60 - 500EUR",
    "Jardin & extérieur motorisé": "80 - 2000EUR",
    "Fitness & musculation": "80 - 1500EUR",
    "Bien-etre appareils": "50 - 800EUR",
    "Puericulture equipement": "60 - 600EUR",
    "Camping & plein air": "50 - 500EUR",
    "Animalerie equipement": "50 - 300EUR",
    "Gaming setup": "80 - 600EUR",
    "Rangement & organisation": "50 - 300EUR",
    "Photo & video": "60 - 500EUR",
    "Entretien linge": "80 - 600EUR",
    "Securite & surveillance": "50 - 400EUR",
    "Transport & mobilite electrique": "200 - 2000EUR",
    "Domotique & connecte": "50 - 400EUR",
    "Audio premium": "60 - 500EUR",
    "Cuisine equipement premium": "50 - 350EUR",
    "Eclairage interieur": "50 - 400EUR",
    "Soin corps appareils": "50 - 400EUR",
    "Electromenager divers": "80 - 500EUR",
    "Electronique utilitaire": "50 - 400EUR",
}

# ─────────────────────────────────────────────────
# 6. AFFICHAGE RÉSULTATS
# ─────────────────────────────────────────────────

print("\n" + "=" * 130)
print("  CLASSEMENT DES NICHES DROPSHIPPING HIGH-TICKET - Amazon.fr (Semrush Organic Positions)")
print("=" * 130)

header = f"{'RANG':>4} | {'NICHE':<38} | {'Nb KWs':>7} | {'Vol Total':>10} | {'KD moy':>7} | {'CPC moy':>8} | {'Score':>6} | {'Prix estime':<18}"
print(header)
print("-" * 130)

for idx, row in niche_stats.iterrows():
    prix = PRICE_RANGES.get(row['niche'], "N/A")
    print(f"{idx:>4} | {row['niche']:<38} | {row['nb_keywords']:>7} | {row['vol_total']:>10,} | {row['kd_moyen']:>7.1f} | {row['cpc_moyen']:>7.2f}EUR | {row['score']:>6.1f} | {prix:<18}")

# ─────────────────────────────────────────────────
# 7. DÉTAIL TOP 15 NICHES
# ─────────────────────────────────────────────────

print("\n\n" + "=" * 130)
print("  DETAIL DES TOP 15 NICHES - Keywords principaux")
print("=" * 130)

top15 = niche_stats.head(15)

for idx, niche_row in top15.iterrows():
    niche_name = niche_row['niche']
    prix = PRICE_RANGES.get(niche_name, "N/A")

    niche_kws = df_niched[df_niched['niche'] == niche_name].sort_values('Search Volume', ascending=False)

    print(f"\n{'_' * 100}")
    print(f"  #{idx} -- {niche_name.upper()}")
    print(f"  {niche_row['nb_keywords']} keywords | Volume total: {niche_row['vol_total']:,} | KD moyen: {niche_row['kd_moyen']:.1f} | CPC moyen: {niche_row['cpc_moyen']:.2f}EUR")
    print(f"  Fourchette de prix e-commerce: {prix}")
    print(f"{'_' * 100}")
    print(f"  {'Keyword':<50} | {'Volume':>8} | {'KD':>4} | {'CPC':>6} | {'Traffic':>8} | {'Pos':>4}")
    print(f"  {'-'*50}-+-{'-'*8}-+-{'-'*4}-+-{'-'*6}-+-{'-'*8}-+-{'-'*4}")

    for _, kw_row in niche_kws.head(10).iterrows():
        print(f"  {str(kw_row['Keyword'])[:50]:<50} | {kw_row['Search Volume']:>8,} | {kw_row['Keyword Difficulty']:>4} | {kw_row['CPC']:>5.2f}E | {kw_row['Traffic']:>8,} | {kw_row['Position']:>4}")

# ─────────────────────────────────────────────────
# 8. RESUME EXECUTIF
# ─────────────────────────────────────────────────

print("\n\n" + "=" * 130)
print("  RESUME EXECUTIF - TOP 5 NICHES RECOMMANDEES")
print("=" * 130)

top5 = niche_stats.head(5)
for idx, row in top5.iterrows():
    prix = PRICE_RANGES.get(row['niche'], "N/A")
    niche_kws = df_niched[df_niched['niche'] == row['niche']].sort_values('Search Volume', ascending=False)
    top_kw = ', '.join(niche_kws['Keyword'].head(5).tolist())

    print(f"\n  {idx}. {row['niche'].upper()} (Score: {row['score']:.1f})")
    print(f"     {row['nb_keywords']} keywords | Vol: {row['vol_total']:,} | KD: {row['kd_moyen']:.0f} | CPC: {row['cpc_moyen']:.2f}EUR | Prix: {prix}")
    print(f"     Top KWs: {top_kw}")

print("\n\n" + "=" * 130)
print("  ANALYSE TERMINEE")
print("=" * 130)
