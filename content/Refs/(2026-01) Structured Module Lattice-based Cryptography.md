---
published: "2026-01-21"
link: "https://eprint.iacr.org/2026/098"
authors: ["[[Joppe W. Bos]]", "[[Joost Renes]]", "[[Frederik Vercauteren]]", "[[Peng Wang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The ongoing transition to Post-Quantum Cryptography (PQC) has highlighted the need for cryptographic schemes that offer high security, strong performance, and fine-grained parameter selection. In lattice-based cryptography, particularly for the popular module variants of learning with errors (Module-LWE) and learning with rounding (Module-LWR) schemes based on power-of-two cyclotomics, existing constructions often force parameter choices that either overshoot or undershoot desired security levels due to structural constraints. In this work, we introduce a new class of techniques that are the best of both worlds: structured Module-LWE (or LWR) embeds more algebraic structure than a module such that it significantly improves performance, yet less structure than a power-of-two cyclotomic ring such that it still enables more flexible and efficient parameter selection. We present two concrete instances: a construction based on a radical extension of a two-power cyclotomic field denoted radical Ring-LWE (RR-LWE) or Ring-LWR (RR-LWR), and a cyclotomic block-ring module lattice approach (BRM-LWE or BRM-LWR). These new structured Module-LWE and LWR reduce the required number of uniformly random bytes in its matrix by a factor up to the module rank and allows efficient NTT implementations while enabling more granular security-performance trade-offs. We analyze the security of these constructions, provide practical parameter sets, and present implementation results demonstrating a performance improvement of up to 37% compared to an optimized implementation of ML-KEM. Our techniques apply to both key encapsulation mechanisms and digital signature schemes, offering a pathway to more adaptable and performant PQC standards.
