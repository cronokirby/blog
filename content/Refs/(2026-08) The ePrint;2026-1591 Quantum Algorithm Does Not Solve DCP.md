---
published: "2026-08-15"
link: "https://eprint.iacr.org/2026/1693"
authors: ["[[Aparna Gupte]]", "[[Seyoon Ragavan]]", "[[Mark Zhandry]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this note, we formally show that the recent algorithm by Simon (ePrint:2026/1591, August 11 2026) does not extract the least-significant bit of the dihedral coset problem (DCP) secret with non-negligible guessing advantage, and therefore does not solve DCP. We emphasize that our result is not merely about Simon's analysis of his algorithm; we are showing directly that the algorithm cannot possibly work.
> 
> Our no-go encompasses a much broader class of algorithms than the specific algorithm by Simon. The main message of our no-go is that an algorithm for DCP following the template of the reduction by Regev (SIAM Journal on Computing, 2004) will probably have to make extensive use of the classical Fourier labels in the uncomputation stage. On the other hand, the algorithm by Simon can be implemented, up to error $\mathsf{poly}(n)2^{-n/3}$, using only the most-significant third of the classical Fourier labels, and therefore cannot succeed.
> 
> To help with verifiability, we release Lean 4 code for our results, available at https://github.com/sragavan99/lean-ePrint-2026-1591-refutation.
