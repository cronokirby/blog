---
published: "2026-02-17"
link: "https://eprint.iacr.org/2026/280"
authors: ["[[Cl\u00e9mence Chevignard]]", "[[Pierre-Alain Fouque]]", "[[Andr\u00e9 Schrottenloher]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Solving the Discrete Logarithm problem on the group of points of an elliptic curve is one of the major cryptographic applications of Shor's algorithm. However, current estimates for the number of qubits required remain relatively high, and notably, higher than the best recent estimates for factoring of RSA moduli. For example, recent work by Gidney (arXiv 2025) estimates 2043 logical qubits for breaking 3072-bit RSA, while previous work by Häner et al. (PQCrypto 2020) estimates a requirement of 2124 logical qubits for solving discrete logarithm instances on 256-bit elliptic curves over prime fields. Indeed, for an $n$-bit elliptic curve, the most space-optimized optimized implementation by Proos and Zalka (Quant. Inf. Comput. 2003) gives $5n + o(n)$ qubits, as more additional space is required to store the coordinates of points and compute the addition law.
> 
> In this paper, we propose an alternative approach to the computation of point multiplication in Shor's algorithm (on input $k$, computing $k P$ where $P$ is a fixed point). Instead of computing the point multiplication explicitly, we use a Residue Number System to compute directly the projective coordinates of $k P$ with low space usage. Then, to avoid performing any modular inversion, we compress the result to a single bit using a Legendre symbol.
> 
> This strategy allows us to obtain the most space-efficient polynomial-time algorithm for the ECDLP to date, with only $3.12n + o(n)$ qubits, at the expense of an increase in gate count, from $\mathcal{O}(n^3)$ to $\widetilde{\mathcal{O}}(n^3)$. For $n = 256$ we estimate that 1098 qubits would be necessary, with 22 independent runs, using $2^{38.10}$ Toffoli gates each. This represents a much higher gate count than the previous estimate by Häner et al. (roughly $2^{30}$), but half of the corresponding number of qubits (2124).
