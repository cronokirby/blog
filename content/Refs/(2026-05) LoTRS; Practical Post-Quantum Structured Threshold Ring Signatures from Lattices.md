---
published: "2026-05-17"
link: "https://eprint.iacr.org/2026/974"
authors: ["[[Nikai Jagganath]]", "[[Muhammed F. Esgin]]", "[[Ron Steinfeld]]", "[[Amin Sakzad]]", "[[Markku-Juhani O. Saarinen]]", "[[Dongxi Liu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Threshold ring signatures (TRS) enable a quorum of $T$ users to jointly sign a message while hiding which $T$ of the $N$ ring members participated, supporting privacy-preserving endorsement in ad-hoc settings. That said, many deployments do not need anonymity over every $T$-subset of a ring: when the approval pattern is already public, a structured ring can be sufficient. In this work, we first formalize this setting as a structured threshold ring signature (sTRS) and introduce $\mathsf{LoTRS}$, a lattice-based sTRS that avoids a dedicated leader and keeps interaction to the optimal number of two rounds by separating the threshold signing relation from the anonymity mechanism. 
> To the best of our knowledge, $\mathsf{LoTRS}$ is the first construction in which a TRS variant is obtained by
> combining: (i) an aggregated signing layer: a two-round lattice-based multisignature protocol producing an aggregated signature relation, with (ii) a selection-hiding layer: a $1$-out-of-$N$ proof that hides the chosen ring element supporting that relation.
> While it is natural to use a $T$-out-of-$N$ proof to build a TRS, our $\mathsf{LoTRS}$ exploits a $1$-out-of-$N$ proof to significantly improve efficiency.
> $\mathsf{LoTRS}$ concretely instantiates the aggregated signing layer using $\mathsf{DualMS}$ (Crypto'23) and the selection-hiding layer arising from Esgin et al.'s lattice-based one-out-of-many proof (IEEE S&P'22).
> 
> Our $(T, N\!\cdot\!T)$-$\mathsf{LoTRS}$ construction achieves $\mathsf{polylog}(N, T)$ signature size and outperforms $(T, N)$-TRS schemes significantly. For example, for $N=100$ and $T=50$, our signature size is only $36$ KB, which is $\approx3.5 \times$ smaller than the previously best performing lattice-based scheme $\mathsf{LastRings}$ by Jeon et al (ISC'25).
> Our Rust reference implementation further supports practicality: for $T=16$ and $N=32$, i.e., structured ring size $T\cdot N = 512$, it produces $25$ KB signatures, with mean signing time $149$ ms and verification time $43$ ms in a release build on a Ryzen AI 9 HX 370 laptop.
