---
published: "2026-02-26"
link: "https://eprint.iacr.org/2026/394"
authors: ["[[Luca De Feo]]", "[[Li-Jie Jian]]", "[[Ting-Yuan Wang]]", "[[Bo-Yin Yang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We present the first vectorized implementation of SQIsign for high-performance Arm architectures. SQIsign is a promising candidate in the NIST On-Ramp Digital Signatures Call Round 2 to its most compact key and signature sizes. However, its signing performance remains a primary bottleneck, particularly the ideal-to-isogeny conversion. The conversion requires a large number of operations on elliptic curves and Abelian varieties, which depend on finite field arithmetic. Despite recent algorithmic improvements, research on high-performance implementations and efficient vectorized finite field arithmetic for SQIsign is still unexplored.
> 
> Our main contribution is the first demonstration of non-trivial vectorization speedups for SQIsign. By leveraging the NEON instruction set, we implement highly efficient finite field arithmetic and batched elliptic curve operations tailored for 2-dimensional isogeny chain computations. This accelerates the subroutine by 2.24$\times$ over the state-of-the-art. Moreover, our improvements are completely orthogonal to the recent algorithmic improvement Qlapoti (Asiacrypt 2025), offering similar performance gains in the SQIsign signing algorithm. When combined with Qlapoti, our implementation achieves a speedup of more than 2.24$\times$ in signing at NIST security level I. We expect our work to inspire further SQIsign optimization from a vectorization perspective, especially for quaternion computations with precise bounds.
