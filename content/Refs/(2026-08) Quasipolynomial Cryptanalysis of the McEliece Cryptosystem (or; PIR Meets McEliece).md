---
published: "2026-08-07"
link: "https://eprint.iacr.org/2026/1630"
authors: ["[[Ashrujit Ghoshal]]", "[[Yuval Ishai]]", "[[Aayush Jain]]", "[[Nuozhou Sun]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The McEliece code-based cryptosystem, utilizing binary Goppa codes, is the earliest public-key encryption scheme that is still considered post-quantum secure. We present a simple, classical quasipolynomial-time distinguisher for Goppa--McEliece in the asymptotic "Classic McEliece" regime: for code length $n$, extension degree $m=\Theta(\log n)$, Goppa degree $t=\Theta(n/\log n)$, and public-code dimension $k=\Theta(n)$, the algorithm runs in time $n^{{\mathcal O}(\log n)}$ and distinguishes the McEliece public key from the uniform distribution over $\mathbb F_2^{k\times n}$ with advantage $1-o(1)$. The distinguisher is not merely asymptotic: it applies to all Classic McEliece parameter sets considered in the NIST process and yields improved (though not yet practical) concrete attack estimates.
> 
> Our distinguishing attack originated from a failed attempt to construct doubly efficient private information retrieval (PIR) protocols from algebraic locally decodable codes, and can be intuitively explained from the PIR perspective. We extend this provable algorithm to a heuristic $n^{{\mathcal O}(\log n)}$-time ciphertext-decryption attack that recovers the message from a noisy codeword.
