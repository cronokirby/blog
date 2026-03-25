---
published: "2026-03-23"
link: "https://eprint.iacr.org/2026/576"
authors: ["[[Masaomi Shibata]]", "[[Hiroshi Onuki]]", "[[Tsuyoshi Takagi]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Chenu and Smith introduced the notion of $(d,\varepsilon)$-structures, pairs consisting of an elliptic curve over $\mathbb{F}_{p^2}$ and an isogeny of degree $d$ from the curve to its Galois conjugate. They also defined an ideal class group action on a set of supersingular $(d,\varepsilon)$-structures, inherited from the action on oriented supersingular elliptic curves. As cryptographic applications of this action, they outlined extensions of the CSIDH key exchange and of the Delfs-Galbraith algorithm for the supersingular isogeny problem. In particular, their extension of the Delfs-Galbraith algorithm, called the generalized Delfs-Galbraith algorithm, is expected to be more efficient than the original one by a constant factor. Therefore, it is important to find efficient methods for evaluating the ideal class group action on $(d, \varepsilon)$-structures.
> 
> In this paper, we focus on the case $d=2$ and present explicit radical 3-isogenies for evaluating the action of the class of a prime ideal above 3. Our approach relies on two representations of $(2,\varepsilon)$-structures: (i) reductions of degree-2 $\mathbb{Q}$-curves and (ii) Montgomery curves. In particular, we show that any $(2,\varepsilon)$-structure can be represented as a pair of a curve coefficient (of a degree-2 $\mathbb{Q}$-curve or a Montgomery curve) and a single sign. From these representations, we derive radical 3-isogenies that efficiently implement the action of the class of a prime ideal above 3. As an application of our radical 3-isogenies, we give an explicit algorithm of the meet-in-the-middle method for finding an ideal class connecting two given $(2, \varepsilon)$-structures, which is a part of the generalized Delfs-Galbraith algorithm.
