---
published: "2026-02-25"
link: "https://eprint.iacr.org/2026/392"
authors: ["[[Youssef El Housni]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Computing cube roots in quadratic extensions of finite fields is a subroutine that arises in elliptic-curve point decompression, hash-to-curve and isogeny-based protocols. We present a new algorithm that, for $p \equiv 1 \pmod{3}$ –which holds in all settings where $\mathbb{F}_{p^2}$ cube roots arise in practice– reduces the $\mathbb{F}_{p^2}$ cube root to operations entirely in the base field $\mathbb{F}_p$ via the algebraic torus $\mathbb{T}_2(\mathbb{F}_p)$ and Lucas sequences. We prove correctness in all residuosity cases and implement the algorithm using the $\texttt{gnark-crypto}$ open-source library. Benchmarks on six primes spanning pairing-based and isogeny-based cryptography show $1.6$–$2.3\times$ speed-ups over direct (addition chain) exponentiations in $\mathbb{F}_{p^2}$. We also extend the approach to $p \equiv 2 \pmod{3}$ and, more generally, to any odd $n$-th roots in quadratic towers $\mathbb{F}_{p^{2^k}}$ with $\gcd(n, p+1) = 1$.
