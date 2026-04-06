---
published: "2026-03-31"
link: "https://eprint.iacr.org/2026/631"
authors: ["[[Giuseppe D'Alconzo]]", "[[Andrea Gangemi]]", "[[Lorenzo Romano]]", "[[Giuliano Romeo]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Among the schemes in the second round of NIST's additional call for Post-Quantum signatures, PERK builds its security on the intractability of the Permuted Kernel Problem (PKP). In its original formulation, this problem asks, on input three matrices $\mathbf H,\mathbf X,\mathbf Y$, to find a permutation matrix $\mathbf P$ such that $\mathbf H \mathbf P \mathbf X = \mathbf Y$. To achieve better performance and smaller signatures, in its first proposal, the PERK signature modified the security assumption in the following way: given a PKP instance, the matrix $\mathbf P$ does not have to verify the exact previous equation but a relaxed one, taking care of a non-null vector $\mathbf v$ such that $(\mathbf H \mathbf P \mathbf X)\mathbf v = \mathbf Y \mathbf v$.
> In this work, we rephrase the relaxed problem so that it no longer depends on the PKP instance nor the vector $\mathbf v$. We show that it suffices to find $\mathbf P$ such that $\mathbf H\mathbf P \mathbf X - \mathbf Y$ has rank deficiency. This generalized formulation is easier to model and allows us to design an algebraic attack inspired by those of MinRank and Rank Syndrome Decoding, writing a polynomial system in the entries of $\mathbf P$. Moreover, we can consider it as linear in the minors of $\mathbf P$ and provide some results on them, which may be of independent interest.
