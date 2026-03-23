---
published: "2026-03-20"
link: "https://eprint.iacr.org/2026/560"
authors: ["[[Haetham Al Aswad]]", "[[C\u00e9cile Pierrot]]", "[[Emmanuel Thom\u00e9]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The Number Field Sieve algorithm and its variants are the best known algorithms to solve the discrete logarithm problem in finite fields. When the extension degree is composite, the Tower variant TNFS is the most efficient. Looking at finite fields with composite extension degrees such as $6$ and $12$ is motivated by pairing-based cryptography that does not yet have a good quantum-resistant equivalent. 
> The two most costly steps in TNFS are the relation collection} and linear algebra steps. Although the use of order $k$ Galois automorphisms allows one to accelerate the relation collection step by a factor of $k$, their use to accelerate the linear algebra step remains an open problem. In previous work, this problem is solved for $k=2$, leveraging a quadratic acceleration factor equal to $4$.
> 
> In this article, we bring a solution both for $k=6$ and $k=12$. We propose a new construction that allows the use of an order $6$ (resp. $12$) Galois automorphism in any finite field $\mathbb{F}_{p^6}$ (resp. $\mathbb{F}_{p^{12}}$), thus accelerating the linear algebra step with approximately a factor of $36$ (resp. $144$). Moreover, we provide a SageMath implementation of TNFS and our construction, and validate our findings on small examples.
