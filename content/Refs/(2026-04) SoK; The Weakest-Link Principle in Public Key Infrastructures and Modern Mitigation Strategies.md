---
published: "2026-04-01"
link: "https://eprint.iacr.org/2026/642"
authors: ["[[Kertis Mwanza]]", "[[Carsten K\u00f6hn]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> As digital transformation accelerates, securing communication through hierarchical Public Key Infrastructures (PKIs) is increasingly critical. Yet, this centralized trust architecture remains inherently vulnerable. As a Systematization of Knowledge (SoK), this paper maps the threat landscape of hierarchical PKIs, demonstrating how a compromise at any single node from a Root CA breach to an operational revocation failure can trigger a cascading loss of global trust. Grounded in the Weakest-Link Principle, our analysis reveals that a PKI ecosystem is only as resilient as its least protected vector. Traditional revocation mechanisms, particularly CRLs and OCSP, exhibit significant operational and privacy flaws, and are often rendered ineffective by client-side "soft-fail" policies. To address these vulnerabilities, we advocate for a shift: replacing unconditional trust in individual entities with decentralized,verifiable protocols. We evaluate Certificate Transparency (CT) as a core mitigation strategy, illustrating how append-only Merkle trees make misissuance publicly visible and cryptographically auditable. Finally, we synthesize essential operational hardening measures such as strict key cryptoperiods and procedural policies to ensure long-term ecosystem resilience.
