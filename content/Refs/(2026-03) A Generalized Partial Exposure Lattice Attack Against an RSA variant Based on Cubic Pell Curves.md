---
published: "2026-03-14"
link: "https://eprint.iacr.org/2026/519"
authors: ["[[Michel Seck]]", "[[Hortense Boudjou Tchapgnouo]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Nitaj and Seck recently published an RSA variant (MJAGA 2024) based on the cubic Pell equation $\mathcal{P}_c(N): u^3+cv^3+c^2w^3-3cuvw= 1$ over $\mathbb{Z}/N\mathbb{Z}$ when $N=p^rq^s$. In their cryptosystem, the public exponent $e$ and the private exponent $d$ are related to the key equation $d\equiv e^{-1}\pmod{p^{2(r-1)}q^{2(s-1)}(p-1)^2(q-1)^2}$. In AfricaCrypt 2025, Rahmani and Nitaj published a lattice attack on their scheme in the particular case of $r=s=1$ by exploiting the key equation $ed - (p-1)^2(q-1)^2 k = 1$. 
> 
> In this paper, we present a new generalized partial exposure lattice attack on the scheme of Nitaj and Seck by examining the key equation $eu_0 - (p-1)^2(q-1)^2 v_0 = w_0$ when some bits of $p$ or $q$  are known.
