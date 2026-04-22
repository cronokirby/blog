---
published: "2026-04-12"
link: "https://eprint.iacr.org/2026/712"
authors: ["[[Isaac M Hair]]", "[[Amit Sahai]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We give a public key encryption scheme with plausible quasi-exponential security based on the conjectured intractability of two constraint satisfaction problems (CSPs), both of which are instantiated with a corruption rate of $1 - o(1)$. First, we conjecture the hardness of a new large alphabet random predicate CSP (LARP-CSP) defined over an arbitrary but strongly expanding factor graph, where the vast majority of predicate outputs are replaced with random outputs. Second, we conjecture the hardness of the standard $k$XOR problem defined over a random factor graph, again where the vast majority of parity computations are replaced with random bits. In support of our hardness conjecture for LARP-CSPs, we give a variety of lower bounds, ruling out many natural attacks including all known attacks that exploit non-random factor graphs.
> 
> Our public key encryption scheme is the first to leverage high corruption CSPs while simultaneously achieving a plausible security level far above quasi-polynomial. At the heart of our work is a new method for planting cryptographic trapdoors based on the label extended factor graph for a CSP. 
>     
> Along the way to achieving our result, we give the first uniform construction of an error-correcting code that has an expanding, low density generator matrix while simultaneously allowing for efficient decoding from a $1 - o(1)$ fraction of corruptions.
