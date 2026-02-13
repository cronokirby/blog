---
published: "2026-02-10"
link: "https://eprint.iacr.org/2026/213"
authors: ["[[Zikai Zhou]]", "[[William Seo]]", "[[Edward Chen]]", "[[Alex Ozdemir]]", "[[Fraser Brown]]", "[[Wenting Zheng]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Fully Homomorphic Encryption (FHE) allows computation on encrypted data without decrypting it. In theory, FHE makes privacy-preserving machine learning possible. In practice, however, it remains impractically slow for real workloads. A major source of slowdown is bootstrap operations; in CKKS, a popular FHE scheme for tensor workloads, the slowdown is compounded by scale management and rescale operations.  
> 
> FHE compilers aim to make bootstrap placement and scale management efficient and easy by compiling high-level programs into low-level, optimized FHE computations. Unfortunately, existing approaches miss crucial optimization opportunities because they overlook a key property of CKKS programs: bootstrap and rescale placement are fundamentally coupled through the level budget. In this paper, we present Orbit, an FHE compiler that jointly optimizes bootstrap and rescale placement through a novel Integer Linear Programming (ILP) formulation that reasons about both ciphertext level and scale constraints. To make this formulation tractable for end-to-end programs, we introduce three techniques that reduce ILP complexity while preserving optimality. Across five convolutional neural networks and multiple cryptographic parameter configurations, Orbit achieves a geometric mean speedup up to 1.19× over DaCapo, 1.73× over Orion, and 1.52× over ReSBM, keeps compilation under 6 minutes, and retains model accuracy within 0.3% of plaintext execution.
