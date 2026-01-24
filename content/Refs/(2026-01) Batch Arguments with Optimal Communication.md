---
published: "2026-01-01"
link: "https://eprint.iacr.org/2026/003"
authors: ["[[Nico D\u00f6ttling]]", "[[Giulio Malavolta]]", "[[Omer Paneth]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Batch arguments (BARGs) are non-interactive arguments for conjunctions of NP statements, with proof size that is sublinear in the number of statements.
> Several previous works studied the communication complexity of BARGs, focusing both on the CRS size and on the additive overhead of the proof, defined as the difference between the proof size and the size $m$ of a single NP witness: 
> - Devadas et al.~[FOCS 22] constructed BARGs with additive overhead that is independent of $m$, however, their CRS size is polynomial in $m$.
> - Paneth and Pass [FOCS 22] constructed BARGs where the CRS size is independent of $m$, but with higher additive overhead $m^{1-\epsilon}$.  
> 
> Under the hardness of LWE, we construct BARGs where both the CRS size the additive overhead of the proof are independent of $m$.
> Such BARGs can be recursively composed an unbounded polynomial number of times without losing succinctness.  
> Along the way, we also considerably simplify the construction of fully local somewhere extractable hash functions used in the construction of Devadas et al.
