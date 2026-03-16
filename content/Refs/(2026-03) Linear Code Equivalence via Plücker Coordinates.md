---
published: "2026-03-10"
link: "https://eprint.iacr.org/2026/495"
authors: ["[[Gessica Alecci]]", "[[Giuseppe D'Alconzo]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The assumed hardness of the Linear Code Equivalence problem (LCE) lies at the core of the security of the LESS signature scheme and other signature schemes with advanced functionalities. The LCE problem asks to determine whether two linear codes are equivalent. This equivalence is represented by a monomial matrix $Q$, i.e. the product of a diagonal matrix $D$ and a permutation matrix $P$. The recovery of $Q=DP$ is known to be reduced to the recovery of the permutation matrix $P$ alone. Exploiting this fact, we construct an algebraic model for LCE involving only the matrix $P$. To this end, we study the action of monomial matrices on linear codes using tools from algebraic geometry, including Plücker coordinates and fields of invariant rational functions. In particular, we analyse the action of diagonal matrices on linear codes, which can be interpreted as diagonal scaling of the coordinates of elements of the Grassmannian. We propose a method to determine algebraically independent generators of the field of rational functions invariant under this action, without relying on Reynolds operators or Gröbner basis computations. Furthermore, given two equivalent codes, we apply our results to explicitly construct, for each invariant function, a polynomial having $P$ as a root. However, the resulting polynomials are not of practical use: their degrees are high for cryptographically relevant parameters, and the number of monomials grows exponentially, making them infeasible to manipulate. Despite this limitation, our results are of theoretical interest, as they constitute the first application of these tools to the cryptanalysis of LCE and provide insight into how algebraic geometry and invariant theory can be employed in Cryptography.
