---
published: "2026-04-05"
link: "https://eprint.iacr.org/2026/665"
authors: ["[[Mahir Bilen Can]]", "[[Eli Coe Naig]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We introduce metric-aware code-based cryptography by moving beyond the Hamming metric to the Niederreiter-Rosenbloom-Tsfasman (NRT) and sum-rank metrics and by exploiting their linear isometry groups via Bruhat-Chevalley-Renner decompositions. On the structural side, we give isometry-invariant distance tests: a parity-check prefix-rank test for single-chain NRT, its multi-prefix extension for block-NRT, and a block rank-profile test for sum-rank. We also analyze orbit structure under the relevant isometry subgroups and prove NP-hardness of a block-NRT canonicalization problem via a reduction from Exact-3-Cover, pinning down the difficulty of public ``structure recovery.'' On the design side, we propose an inner-outer Niederreiter cryptosystem that couples a short rowwise single-chain NRT inner code with $k_V$ outer binary Goppa codes across columns. For the resulting matrix code we prove a distance guarantee $d_{\mathrm{NRT}}\!\ge\!\delta_V\cdot \min_t d^{(t)}$ and give a simple two-stage decoder (outer Goppa per coordinate, then inner per column). Public keys are dense, obfuscated parity-checks $M=S H_{\mathrm{sys}} (PD)$ drawn from a metric-preserving subgroup, preserving
> decodability while hiding structure. Finally, we reduce NRT and sum-rank syndrome decoding to classical Hamming/Rank decoding, yielding one-wayness of the public syndrome map at standard regimes.
