---
published: "2026-02-27"
link: "https://eprint.iacr.org/2026/408"
authors: ["[[Samuel Jaques]]", "[[Lars Ran]]", "[[Simona Samardjiska]]", "[[Melvin Seitner]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The complexity of many algebraic algorithms for solving non-linear polynomial systems of equations over finite fields such as the XL (eXtended Linearization) algorithm or variants of the F4/F5 algorithms is directly determined by the so called degree of regularity. In essence, we need to form a Macaulay matrix at this degree, which can be thought of as the linearization of monomial multiples of the polynomials from the problem instance, and then solve the obtained linear system. Although the degree of regularity guarantees we can solve the system, it is a rather coarse parameter. This means that sometimes, we end up with a heavily overdetermined Macaulay matrix in order to provably deal with  underdeterminedness in a lower degree.  
> 
> To reduce this coarseness, and thus avoid unnecessary high time and memory complexity, we propose a technique for ``smoothing'' the degree of regularity that can be seen as operating at a degree in-between two integer values. Instead of the full Macaulay matrix, we consider specific submatrices that we show are sufficient to solve the given system. Under a mild assumption that generalizes the notion of semi-regularity, which we experimentally verify for a range of parameters, we show that our approach smooths the complexity of XL
