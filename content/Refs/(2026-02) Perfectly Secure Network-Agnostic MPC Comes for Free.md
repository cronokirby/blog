---
published: "2026-02-24"
link: "https://eprint.iacr.org/2026/377"
authors: ["[[Xiaoyu Ji]]", "[[Chen-Da Liu-Zhang]]", "[[Yifan Song]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Secure multiparty computation (MPC) allows a set of parties to jointly compute a function while keeping their inputs private. Classical MPC protocols assume either a synchronous or an asynchronous network. Synchronous protocols tolerate more corrupted parties but rely on a timing bound, while asynchronous protocols make no timing assumptions but handle fewer corruptions.
> 
> The network-agnostic model aims to combine the advantages of both. It requires security without knowing in advance whether the network is synchronous or asynchronous, guaranteeing resilience against up to $t_s$ corruptions in the synchronous case and $t_a$ corruptions in the asynchronous case. The optimal corruption threshold for perfect security has been established as $n = 2\max(t_s, t_a) + \max(2t_a, t_s) + 1$, but prior work either falls short of this threshold or requires exponential local computation.
> 
> In this work, we present the first perfectly secure network-agnostic MPC protocol with polynomial communication and computation complexity under the optimal threshold. Our protocol achieves expected communication complexity $\mathcal{O}((|C|n + (D+C_I)n^2 + n^6)\log n)$ bits for a circuit of size $|C|$ over a finite field $\mathbb{F}$ of size $\mathcal{O}(n)$, depth $D$, and input size $C_I$.
> 
> Our main technical contribution is a compiler that generates Beaver triples in the network-agnostic setting using synchronous and asynchronous triple-generation protocols in a black-box way. Beyond the cost of the underlying protocols, it only requires $\mathcal{O}(n^2)$ instances of network-agnostic Byzantine agreement.
