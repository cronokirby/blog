---
published: "2026-04-08"
link: "https://eprint.iacr.org/2026/688"
authors: ["[[Rui-Jie Wang]]", "[[Hong-Sen Yang]]", "[[Zhong-Xiao Wang]]", "[[Qun-Xiong Zheng]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The Learning with Errors (LWE) problem forms the foundation for numerous post-quantum cryptographic schemes, such as the NIST-selected CRYSTALS-KYBER and CRYSTALS-DILITHIUM. Algebraic analysis on LWE traditionally relies on solving the Arora-Ge system via Gröbner bases, yet its performance is far from satisfactory when only a limited number of samples is available. Meanwhile, recent dual attacks have proven highly effective against concrete LWE-based algorithms. This gap motivates us to investigate whether integrating the technique from dual attacks into algebraic analysis can have a positive effect.
> 
> We propose a novel, two-stage algebraic algorithm for LWE. First, dual lattice reduction is applied to transform the original samples into a reduced dimension. From an algebraic perspective, this stage reduces the number of variables at the cost of increasing the noise. Second, instead of solving the classic Arora-Ge system, we introduce a new polynomial construction that exploits the error distribution and solves it via a resultant-based method. When given \(m = n\) samples, our two-stage algorithm yields better complexity estimates for CRYSTALS-KYBER than Gröbner bases reported in Steiner’s work (Eurocrypt~2024). As an independent contribution, we show that for LWE with a small secret, applying the resultant-based method directly to the Arora-Ge system provides a provable complexity estimate that achieves an exponential speed-up over the proven bounds established by Steiner.
> 
> Finally, we show how various forms of side information---namely, perfect hints, modular hints, and approximate hints---can be systematically incorporated into our two-stage algorithm.
