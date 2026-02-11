---
published: "2026-02-02"
link: "https://eprint.iacr.org/2026/172"
authors: ["[[Mengce Zheng]]", "[[Abderrahmane Nitaj]]", "[[Maher Boudabra]]", "[[Michel Seck]]", "[[Oumar Niang]]", "[[Djiby Sow]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> This paper introduces a generalized cryptanalytic framework for RSA and its variants, systematizing existing attacks while revealing a wide class of structural weaknesses independent of the private exponent's size. While traditional analyses exploit the key equation $ed \equiv 1 \pmod{(p-1)(q-1)}$ or its extensions like $ed \equiv 1 \pmod{(p^n-1)(q^n-1)}$ for a given RSA modulus $N=pq$ and its public exponent $e$, we unify these approaches by investigating the more general algebraic property defined by the congruence $eu \equiv 1 \pmod{(p^n-a)(q^n-b)}$, where $a$, $b$, and $u$ are unknown small integer parameters.
> Using Coppersmith's method with unravelled linearization, we demonstrate that the modulus $N$ can be factored in polynomial time if such a relation exists for parameters within a new, rigorously derived bound. Our framework not only unifies and generalizes several well-known attacks (retrieving their bounds as special cases when $a=b=1$) but also significantly expands the set of weak keys. We show that an RSA instance secure against all previous small private exponent attacks may still be broken if its public key possesses this hidden algebraic structure. This work serves as a comprehensive security analysis, highlighting a new family of weak keys that future cryptographic designs should avoid.
