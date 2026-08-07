#!/usr/bin/env python3
"""
Run a session with one of the 8 managed agents.

Usage:
    python run_agent.py <agent-name> "Your prompt here"

Examples:
    python run_agent.py niche-analyst "Analyse la niche des lampes de bureau LED haut de gamme"
    python run_agent.py pricing-engine "Calcule le pricing pour un produit acheté 18€, shipping 5€, CPA 8€"
    python run_agent.py product-writer "Rédige une fiche produit pour une lampe de bureau LED avec bras articulé"
    python run_agent.py gmc-checker "Vérifie la conformité GMC de cette fiche produit: ..."

Available agents:
    niche-analyst   product-writer   pricing-engine   ads-architect
    cro-optimizer   ux-auditor       gmc-checker      image-maker
"""

import json
import sys
from pathlib import Path

from anthropic import Anthropic

REGISTRY_PATH = Path(__file__).parent / "managed_agents_registry.json"


def load_registry():
    if not REGISTRY_PATH.exists():
        print("Erreur : managed_agents_registry.json introuvable.")
        print("Lance d'abord : python setup_managed_agents.py")
        sys.exit(1)
    return json.loads(REGISTRY_PATH.read_text())


def run_session(agent_name: str, prompt: str):
    registry = load_registry()

    if agent_name not in registry["agents"]:
        available = ", ".join(registry["agents"])
        print(f"Erreur : agent '{agent_name}' inconnu.")
        print(f"Agents disponibles : {available}")
        sys.exit(1)

    agent_id = registry["agents"][agent_name]["id"]
    env_id = registry["environment"]["id"]

    client = Anthropic()

    # Create session
    session = client.beta.sessions.create(
        agent=agent_id,
        environment_id=env_id,
        title=f"{agent_name} — {prompt[:50]}",
    )
    print(f"Session: {session.id}")
    print(f"Agent:   {agent_name} ({agent_id})")
    print("-" * 60)

    # Stream response
    with client.beta.sessions.events.stream(session.id) as stream:
        client.beta.sessions.events.send(
            session.id,
            events=[{
                "type": "user.message",
                "content": [{"type": "text", "text": prompt}],
            }],
        )

        for event in stream:
            if event.type == "agent.message":
                for block in event.content:
                    print(block.text, end="", flush=True)
            elif event.type == "agent.tool_use":
                print(f"\n[{event.name}]", flush=True)
            elif event.type == "session.status_idle":
                print("\n" + "-" * 60)
                print("Session terminée.")
                break


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)

    agent_name = sys.argv[1]
    prompt = " ".join(sys.argv[2:])
    run_session(agent_name, prompt)


if __name__ == "__main__":
    main()
