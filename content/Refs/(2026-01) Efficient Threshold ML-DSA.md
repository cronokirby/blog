---
published: "2026-01-05"
link: "https://eprint.iacr.org/2026/013"
authors: ["[[Sof\u00eda Celi]]", "[[Rafa\u00ebl del Pino]]", "[[Thomas Espitau]]", "[[Guilhem Niot]]", "[[Thomas Prest]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Threshold signature schemes allow a group of users to jointly generate a digital signature, providing resilience against faults and enhancing decentralization. With the advent of post-quantum cryptography, lattice-based threshold signatures have gained attention as viable PQ-threshold solutions. Nevertheless, existing constructions are limited in terms of their scalability, robustness. Worse, none is compatible with standardized schemes, particularly with the NIST-selected and standardized Module-Lattice-based Digital Signature Algorithm (ML-DSA) algorithm.
> 
> In this work, we present the first threshold signature scheme that is fully compatible with ML-DSA, supporting secure and efficient signing for a small number of parties, with an average communication per party upper bounded by 1 MB up to 6 parties. Our construction leverages advanced short secret sharing techniques and integrates optimized rejection sampling to achieve a favorable balance between communication efficiency and correctness in distributed environments. We implement our construction in Go and evaluate its performance across local, LAN, and WAN network settings. Our benchmarks demonstrate that our threshold ML-DSA scheme is not only practically deployable but also well-suited for real-world applications, including multi-device cryptocurrency wallets, threshold-based TLS authentication, and for Tor's directory authorities.
