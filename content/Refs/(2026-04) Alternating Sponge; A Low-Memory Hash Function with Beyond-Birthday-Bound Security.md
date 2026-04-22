---
published: "2026-04-10"
link: "https://eprint.iacr.org/2026/707"
authors: ["[[Ziyang Luo]]", "[[Yaobin Shen]]", "[[Hailun Yan]]", "[[Lei Wang]]", "[[Dawu Gu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> An improved low-memory hash function scheme called Alternating Sponge (ASP) is proposed to achieve the beyond-birthday-bound security with respect to the capacity $c$. The scheme redesigns the state layout and permutation mechanism of double sponge construction, effectively reducing the total state space from $2r+2c$ bits to $2r+c$ bits and increasing the number of bits squeezed per round from $r$ to $2r$. The scheme introduces a two-phase serial permutation sequence to update the shared state, achieving a complete state transition without increasing the input size of the permutation function. A security proof is provided within the indifferentiability framework, demonstrating that the scheme can achieve security comparable to the double sponge construction, while operating with a reduced state size and an increased number of squeezed bits. Overall, the design ensures the compactness and diffusion of each round of processing through layered absorption and alternating permutations, providing a solution for deploying high-security hash functions in memory-constrained environments.
