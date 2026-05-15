---
published: "2026-04-28"
link: "https://eprint.iacr.org/2026/834"
authors: ["[[Muhammad Ibrahim]]", "[[Vishnu Ajith]]", "[[Muhammed Sihan Haroon]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The transition to post-quantum cryptography (PQC)
> is essential to safeguard networked systems against future
> quantum-enabled adversaries. While recent standardisation efforts
> have introduced PQC algorithms such as ML-KEM into
> protocols like TLS 1.3, verifying their correct deployment in realworld
> systems remains a challenge. Existing approaches rely on
> configuration-level inspection or high-level cryptographic libraries,
> which do not reflect actual runtime behaviour.
> This paper presents a novel methodology for detecting postquantum
> and hybrid TLS key exchange mechanisms through
> direct inspection of raw TLS handshake records. By parsing
> ServerHello messages at the byte level and extracting keyshare
> group identifiers from the key share extension, the proposed
> approach enables accurate classification of endpoints
> into CLASSICAL_ONLY, PQC_ONLY, and HYBRID_CONFIRMED
> states.
> We implement the methodology within a prototype compliance
> system and evaluate it across 38 production endpoints and a
> controlled three-node cloud testbed spanning two validation
> phases. Phase 1 reveals that all three testbed nodes — including
> a PQC-capable application server — are correctly classified
> as CLASSICAL_ONLY, exposing an application-layer versus
> transport-layer mismatch invisible to configuration auditing.
> Phase 2, following an OQS-capable TLS frontend upgrade,
> produces a confirmed HYBRID_CONFIRMED result with group
> 0x11EC (X25519MLKEM768) on the same physical server,
> achieving 100% target accuracy across all three nodes. We
> further document a critical false positive failure mode in
> naive string-matching approaches and validate correct four-state
> classification under known ground-truth conditions. Unlike prior
> work, this approach provides verifiable, evidence-based assessment
> of cryptographic posture, enabling reliable auditing of PQC
> readiness.
