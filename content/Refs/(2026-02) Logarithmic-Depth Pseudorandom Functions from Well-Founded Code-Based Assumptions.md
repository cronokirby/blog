---
published: "2026-02-14"
link: "https://eprint.iacr.org/2026/261"
authors: ["[[Youlong Ding]]", "[[Aayush Jain]]", "[[Ilan Komargodski]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We give the first $\mathsf{NC}^1$-computable Pseudorandom Function (PRF) constructions from well-founded (non-ad-hoc) code-based assumptions. Specifically, we give two constructions based on two different classical variants of the learning parity with noise (LPN) assumption:
>     (1) An $\mathsf{NC}^1$-computable PRF from hardness of Sparse-LPN [Alekhnovich, FOCS~'03] (with respect to a sublinear-depth explicit expander graph family). This PRF is also key-homomorphic.
>     (2) An $\mathsf{NC}^1$-computable PRF from hardness of Ring-LPN [Heyse et al., FSE~'12].
> 
> Both of these assumptions have been used and studied for many years. Notably, within the range of parameters that we need, none of these assumptions is known to imply collision-resistant hashing, and the first is not known to imply public-key encryption. Prior constructions of code-based PRFs (let alone key-homomorphic) are either super-logarithmic depth, or rely on ad-hoc and new assumptions. 
> As a bonus, we give a similar result relying on the \emph{classical} LPN assumption, albeit with quasi-polynomial hardness:
>     -A key-homomorphic $\mathsf{NC}^1$-computable PRF from quasi-polynomial hardness of classical LPN [Blum et al., CRYPTO~'93].
> 
> Technically, all of our results are obtained via a refinement and substantial extension of the recent ideas of [Ding, Jain, and Komargodski, STOC~'25].
