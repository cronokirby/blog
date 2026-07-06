---
published: "2026-06-14"
link: "https://eprint.iacr.org/2026/1254"
authors: ["[[Antonio Sanso]]", "[[Giuseppe Vitto]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Poseidon is one of the most widely deployed arithmetization-oriented cryptographic permutations and plays a central role in modern zero-knowledge proof systems. Although several algebraic attacks on reduced-round variants have been proposed, the security of the recommended parameter sets remains intact. A central difficulty in such attacks is controlling the degree growth of the polynomial representations induced by the permutation.
> 
> In this work, we introduce degree annihilation, a new framework for algebraic cryptanalysis of Poseidon. Unlike round-skipping techniques, which reduce complexity by removing rounds from the algebraic model, degree annihilation reduces the contribution of existing rounds by imposing algebraic constraints that force dominant degree terms to vanish. This yields polynomial systems of substantially lower effective degree.
> 
> We first present a simple bivariate form of degree annihilation and show how it combines naturally with classical round-skipping techniques. The gain depends on the multiplicity with which the annihilated degree contribution propagates through the remaining nonlinear layers; when this multiplicity matches the contribution of one S-box layer, the effect is the same as skipping an additional nonlinear layer. We then generalize the technique to multivariate settings, where systems of control equations are used to annihilate successive partial-round degree contributions. These systems can be solved using elimination, resultants, and Gröbner basis techniques.
> 
> As a proof of concept, we apply the framework to reduced-round Poseidon instances and obtain new CICO-2 attacks. More broadly, our results suggest that constructing algebraic varieties that actively control degree growth may provide a new direction for the cryptanalysis of arithmetization-oriented primitives.
