---
published: "2026-04-16"
link: "https://eprint.iacr.org/2026/749"
authors: ["[[Yu Dai]]", "[[Youssef El Housni]]", "[[Dimitri Koshelev]]", "[[Krijn Reijnders]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Subgroup membership testing (SMT) on an elliptic curve with non-trivial cofactor is essential to prevent small-subgroup attacks in cryptographic protocols. In the existing literature, there exist two non-trivial methods for SMT on elliptic curves with modest cofactor (typically a power of $2$): Pornin's approach tests membership by repeatedly dividing by prime divisors of the cofactor (mostly halving), finishing with Legendre symbols; Koshelev's approach replaces all divisions with Tate pairings (possibly in the quadratic extension of the base field), but requires non-degeneracy conditions that are not always met. In this paper, we observe that both approaches sit at the extremes of a single division-pairing trade-off. The resulting method, Divide-and-Pair, is always at least as fast as either Pornin's or Koshelev's method and strictly faster in many cases. We instantiate Divide-and-Pair on five curves in widespread use, including Curve25519, Curve448, GC256A, Four$\mathbb{Q}$ and JubJub. Our Go implementation, built on the open-source $\texttt{gnark-crypto}$ library, achieves significant speedups over state-of-the-art tests, namely of $2.4\times$ on Curve25519, of $1.6\times$ on Curve448, of $1.7\times$ on GC256A, of $8.2\times$ on Four$\mathbb{Q}$ and of $7.5\times$ on JubJub.
