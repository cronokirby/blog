---
published: "2026-01-23"
link: "https://eprint.iacr.org/2026/106"
authors: ["[[Hyunji Kim]]", "[[Kyungbae Jang]]", "[[Siyi Wang]]", "[[Anubhab Baksi]]", "[[Gyeongju Song]]", "[[Hwajeong Seo]]", "[[Anupam Chattopadhyay]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> This paper improves quantum circuits for realizing Shor's algorithm on elliptic curves. We present optimized quantum point addition circuits that primarily focus on reducing circuit depth, while also taking the qubit count into consideration. Our implementations significantly reduce circuit depth and achieve up to 40% improvement in the qubit count-depth product compared to previous works, including those by M. Roetteler et al. (Asiacrypt'17) and T. Häner et al. (PQCrypto'20).
> 
> Using our quantum circuits, we newly assess the post-quantum security of elliptic curve cryptography. Under the MAXDEPTH constraint proposed by NIST, which limits the maximum circuit depth to $2^{40}$, the maximum depth in our work is $2^{28}$ for the P-521 curve (well below this threshold). For the total gate count and full depth product, a metric defined by NIST for evaluating quantum attack resistance, the maximum complexity for the same curve is $2^{65}$, far below the post-quantum security level 1 requirement of $2^{157}$.
> 
> Beyond these logical analyses, we estimate the fault-tolerant costs (i.e., at the level of physical resources) for breaking elliptic curve cryptography. As one of our results, the P-224 curve (comparable to RSA-2048 in security) can be broken in 34 minutes using 19.1 million physical qubits, or in 96 minutes using 6.9 million physical qubits under our two optimization approaches.
