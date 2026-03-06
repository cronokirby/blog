---
published: "2026-02-23"
link: "https://eprint.iacr.org/2026/370"
authors: ["[[Diana Ghinea]]", "[[Ivana Klasovit\u00e1]]", "[[Chen-Da Liu-Zhang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Byzantine Agreement is a fundamental primitive in cryptography and distributed computing, and minimizing its round complexity is of paramount importance. The seminal works of Karlin and Yao [Manuscript'84] and Chor, Merritt and Shmoys [JACM'89] showed that any randomized $r$-round protocol must fail with probability at least $(c\cdot r)^{-r}$, for some constant $c$, when the number of corruptions is linear in the number of parties, $t = \theta(n)$. The work of Ghinea, Goyal and Liu-Zhang [Eurocrypt'22] introduced the first \emph{round-optimal BA} protocol matching this lower bound. However, the protocol requires a trusted setup for unique threshold signatures and random oracles.
> 
> In this work, we present the first round-optimal BA protocols without trusted setup: a protocol for $t<n/3$ with statistical security, and a protocol for $t<(1-\epsilon)n/2$ with any constant $\epsilon > 0$, assuming a bulletin-board PKI for signatures.
