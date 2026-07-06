---
published: "2026-06-16"
link: "https://eprint.iacr.org/2026/1262"
authors: ["[[Long Wang]]", "[[Zhaoman Liu]]", "[[Jing Fan]]", "[[Yanhong Fan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Satellite communication systems, as critical long-lifecycle infrastructure, face a dual security challenge in the coming decades: the threat of quantum computers and the operational rigidity of traditional Public Key Infrastructure (PKI). While migrating to Post-Quantum Cryptography (PQC) addresses the former, it fails to solve the inefficiency of certificate management, where in-orbit policy updates require a prohibitively slow and complex multi-party re-issuance process.
>  
> To address these challenges, we introduce the concept of a Post-Quantum Sanitizable Multi-Signature (), a novel primitive that enables controlled certificate adaptation across hierarchical trust while preserving the integrity of the root of trust. Building on this, we present (ellite  daptable ost-quantum ertificate cheme), which cryptographically decouple a certificate's immutable, multi-signed identity from its dynamic operational policies. This allows a delegated entity to perform lightweight, in-orbit policy updates while the foundational signature from the original consortium of authorities remains unchanged and valid.
> 
> We instantiate  based on the NIST-standard CRYSTALS-Dilithium signature and a ISIS-based chameleon hash, and prove its security under standard lattice assumptions. Furthermore, Performance evaluation demonstrates that  bypasses the interactive re-signing loop of traditional PKI, achieving an order-of-magnitude reduction in update bandwidth.
