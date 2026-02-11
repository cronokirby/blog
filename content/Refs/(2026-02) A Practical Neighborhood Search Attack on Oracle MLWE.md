---
published: "2026-02-03"
link: "https://eprint.iacr.org/2026/177"
authors: ["[[Hongxiao Wang]]", "[[Muhammed F. Esgin]]", "[[Ron Steinfeld]]", "[[Markku-Juhani O. Saarinen]]", "[[Siu-Ming Yiu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The Oracle Module Learning with Errors (Oracle MLWE) assumption, recently introduced by Liu et al. (Asiacrypt~2025), strengthens standard (Module) LWE by allowing masked linear leakages of the secret under an adversarially-chosen challenge matrix. This feature is used for the construction of new efficient primitives such as Oracle MLWE-based multi-message multi-recipient KEM/PKE (mmKEM/mmPKE) without requiring public-key well-formedness proofs. In this work, we present a practical cryptanalytic attack on Oracle MLWE, which we call a neighborhood search attack. Our attack exploits adversarially-chosen matrices (or maliciously generated public keys), together with the small ring dimension and small-norm secrets required for correctness, showing that rounding errors can be recovered via a bounded search, leading to recovery of the underlying MLWE secret. To demonstrate the effectiveness of our attack, we apply it against the Oracle MLWE-based mmKEM of Liu et al. (Asiacrypt~2025), proving that its recommended parameter sets do not achieve the claimed security level. We further implement the attack in SageMath and report concrete timings, showing that an adversary controlling a moderate number of recipients can recover other recipients' encapsulated keys within a few seconds on a standard PC under the proposed parameters, which were claimed to achieve a 128-bit security level.
