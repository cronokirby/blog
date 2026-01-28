---
published: "2026-01-24"
link: "https://eprint.iacr.org/2026/114"
authors: ["[[Pierrick Dartois]]", "[[Max Duparc]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The devastating attacks against SIDH (Supersingular Isogeny Diffie-Hellman) have popularised the practical use of isogenies of dimension $2$ and above in cryptography. Though this effort was primarily focused on dimension 2, $4$-dimensional isogenies, have been used in several isogeny-based cryptographic constructions including SQIsignHD, SQIPrime, (qt-)Pegasis and MIKE. These isogenies are also interesting for number theoretic applications related to higher dimensional isogeny graphs. In 2024, a work by Pierrick Dartois introduced algorithms to compute efficiently chains of $2$-isogenies with Mumford's level $2$ theta coordinates in all dimensions, focusing on cryptographic applications in dimension $4$. In this paper, we improve Dartois' results by providing a simpler and faster method to compute generic isogenies in any dimension, and new computation and evaluation algorithms adapted to gluing isogenies from a product of four elliptic curves, with techniques that generalise a previous work by Max Duparc in dimension $2$. Unlike previous algorithms by Dartois, the algorithms we propose are both easy to implement and naturally constant time. We apply our results to propose the first constant time C implementation of a $4$-dimensional chain of $2$-isogenies, adapted to the qt-Pegasis algorithm and running in less than $25$ ms for a $500$ bit prime. With our new gluing evaluation method, we are able to work fully over $\mathbb{F}_p$ instead of $\mathbb{F}_{p^2}$, allowing further efficiency gains. Indeed, our new formulae accelerate the proof of concept SageMath implementation of qt-Pegasis by up to 19 % for a $500$ bit prime.
