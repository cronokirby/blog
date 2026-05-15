---
published: "2026-04-25"
link: "https://eprint.iacr.org/2026/815"
authors: ["[[Vipul Goyal]]", "[[David Heath]]", "[[Abhishek Jain]]", "[[Yibin Yang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Garbled circuits are a fundamental primitive in cryptography. While the size of garbled circuits in Yao's original scheme grows linearly with the circuit size, a recent line of work on stacked garbling (SGC) [Heath-Kolesnikov, CRYPTO'20] has achieved near-sublinear size for branching computations, based only on one-way functions. Specifically, these schemes achieve garbled size growing only with the size of a single branch and the total input length to all the branches. Due to the latter dependence, these results are best suited to "small" input settings.  
> 
> We present a stacked garbling scheme for "large" input settings based on one-way functions. The garbled size in our scheme grows only with the size of a single branch and its input length (up to logarithmic factors), plus an additive term in the number of branches (as in prior SGC).
> 
> To obtain our result, we uncover a connection between stacked garbling and the notion of (adaptive) programmable pseudorandom functions (apPRFs) [Boneh-Lewi-Wu, PKC'17]. While existing apPRF constructions either rely on stronger assumptions (e.g., learning with errors or indistinguishability obfuscation) or incur noticeable security losses under weaker assumptions, we identify a relaxed notion of non-adaptive programmable PRFs (napPRFs) that suffices for our result, and establish its feasibility based on one-way functions. Interestingly, we build on techniques from the SGC literature to construct napPRFs with our desired efficiency, and then apply napPRFs back to SGC to obtain our main result.
> 
> Along the way, as an additional result of independent interest, we provide the first construction of (adaptive) programmable PRFs for polynomial-size domains based on one-way functions.
