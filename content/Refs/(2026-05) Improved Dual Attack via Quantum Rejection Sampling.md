---
published: "2026-05-18"
link: "https://eprint.iacr.org/2026/979"
authors: ["[[Nicholas Zhao]]", "[[Cong Ling]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this work, we revisit the dual attack framework proposed by Pouly and Shen, focusing on the lattice Gaussian sampling term that is a significant bottleneck in the overall attack complexity. We show that this sampling step can be quantumly accelerated by combining the lower bound underlying Wang and Ling's analysis of Klein's algorithm with the quantum rejection sampling (QRS) framework proposed by Ozols et al. Specifically, this lower bound gives precisely the pointwise condition required for quantum rejection sampling when given coherent oracle access to a truncated Klein proposal distribution, which yields a quantum procedure for preparing the truncated dual $q$-ary lattice Gaussian with a quadratic reduction in the sampling complexity. The truncation radius is chosen so that the truncated distribution is negligibly close to the full lattice Gaussian in total variation distance. Substituting this sampler into their dual attack framework results in reduced overall attack-cost estimates. Compared with the Pouly and Shen dual attack (no modulus switching), our method reduces the estimated attack cost by $9$, $4$, and $13$ bits for Kyber-512, Kyber-768, and Kyber-1024 respectively.
