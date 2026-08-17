---
published: "2026-08-04"
link: "https://eprint.iacr.org/2026/1597"
authors: ["[[Minki Hhan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We present randomized algorithms for the shortest vector problem (SVP). For the -dimensional lattice , our algorithms solve SVP in time  classically and  quantumly and space , improving the previous best algorithm running in  time and space of Aggarwal, Dadush, Regev, and Stephens-Davidowitz [STOC'15].
> 
> Our algorithms heavily use the property of the Hessian of the periodic Gaussian function at the half shortest vector: For a shortest vector , the Hessian at  has the eigenvector close to , which can be used to recover  using the (preprocessing) bounded distance decoding algorithm. Given the periodicity modulo , the candidate midpoints are indexed by the parity classes in . Our algorithm searches for the class of a shortest vector by estimating the corresponding Hessians using discrete Gaussian samples. 
> 
> We optimize the algorithm using random sublattice cosets and various sampling technique, achieving the final complexity. The optimization techniques may be of independent interest.
