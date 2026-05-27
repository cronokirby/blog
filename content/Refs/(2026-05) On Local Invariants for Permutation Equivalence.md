---
published: "2026-05-19"
link: "https://eprint.iacr.org/2026/995"
authors: ["[[Benjamin Ben\u010dina]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We give an efficiently computable invariant for the (Signed) Permutation Code Equivalence ((S)PCE) problem we call the square class invariant, that was previously not recognised in coding theory. Our invariant naturally yields a distinguisher for the decision version of (S)PCE as defined at Eurocrypt 2025 by Albrecht, Benčina and Lai [ABL25], breaking the hardness assumption that underpins the security of their updatable public-key encryption scheme.
> 
>   Moreover, we extend a 2023 result by Bruin, Ducas and Gibbons by showing the genus of the Construction A lattice of a code generator matrix with any hull dimension is completely determined by the hull dimension and our square class invariant, and that neither of these genera splits non-trivially into spinor genera (as soon as the lattice dimension is at least \(5\)), implying the genus of the Construction A \(q\)-ary lattice encodes all known efficiently computable coding-theoretic invariants for (S)PCE and vice versa. Thus our distinguisher can be rephrased as comparing the genera of Construction A lattices of the (S)PCE instance in the spirit of the Lattice Isomorphism Problem. We also give a complete description of the genus distribution of uniformly random \(q\)-ary lattices.
> 
>   This motivates the definition of a genus of a linear code as the genus of the Construction A lattice of any of its generator matrices, and we adapt the sampling algorithm from [ABL25] to sample from a single genus uniformly at random, and can thus restrict their hardness assumption for (S)PCE to a single genus. Restricting PCE to one genus and using our sampling algorithms is then used with a slight modification to the security proof to mend the scheme from [ABL25].
> 
>   Finally we show that associating to a linear code generator matrix a quadratic space whose geometry is given by the corresponding Gram matrix and computing its Witt decomposition yields the same invariants that define the code genus, implying two \(q\)-ary lattices are locally equivalent if and only if the quadratic spaces associated to their underlying linear codes share a Witt decomposition type.
