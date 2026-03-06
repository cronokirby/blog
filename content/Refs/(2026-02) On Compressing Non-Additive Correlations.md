---
published: "2026-02-13"
link: "https://eprint.iacr.org/2026/255"
authors: ["[[Geoffroy Couteau]]", "[[Alexander Koch]]", "[[Nikolas Melissaris]]", "[[Peter Scholl]]", "[[Sacha Servan-Schreiber]]", "[[Xiaxi Ye]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Compressing correlated randomness is a key component of secure computation protocols in the silent preprocessing model and has received significant attention in recent years. However, to date, all known constructions are restricted to generating additive correlations, where the parties receive additive shares of a relation. The only known exceptions are constructions from indistinguishability obfuscation.
> 
> In this work, we initiate the study of compressing useful forms of correlated randomness for non-additive correlations, without resorting to indistinguishability obfuscation (iO). We provide several constructions for pseudorandom correlation generators and functions, overcoming the long-standing "iO-barrier" in the field. Concretely, we focus on two types of non-additive correlations in this work.
> 
> First, we introduce pseudorandom permutation functions, where each party obtains a portion of a pseudorandom permutation $\pi$ over the set $\set{1,\dots, n}$, such that no subset of $n-2$ colluding parties learn the full permutation $\pi$. 
> We give a three-party construction of a pseudorandom correlation function (PCF) for permutations from homomorphic secret sharing satisfying a special share programmability property. This construction can be instantiated from a variety of standard assumptions and can even be concretely efficient (generating pseudorandom permutations in a fraction of a second).  We describe two applications of pseudorandom permutation functions: one in anonymous broadcast and the other in single secret leader election.
> 
> Second, we introduce pseudorandom correlation generators for classical correlations (such as Beaver triples) where additive secret sharing is replaced with threshold} secret sharing. We obtain a pseudorandom correlation function for constant-degree Shamir shares of low-degree correlations from a variety of standard assumptions.  We also introduce two new $t$-out-of-$n$ PCG constructions where either $t$ or $n-t$ is a constant and $t$ denotes the threshold. These constructions rely on the conjunction of the LPN and MQ assumptions.
