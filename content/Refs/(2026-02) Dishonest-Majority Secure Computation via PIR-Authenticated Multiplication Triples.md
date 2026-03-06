---
published: "2026-02-13"
link: "https://eprint.iacr.org/2026/257"
authors: ["[[Elette Boyle]]", "[[Niv Gilboa]]", "[[Matan Hamilis]]", "[[Yuval Ishai]]", "[[Ariel Nof]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We revisit the question of minimizing the overhead of security against malicious parties in dishonest-majority secure computation. 
> 
> A leading approach, pioneered by the SPDZ line of protocols, uses homomorphic MACs to authenticate computation:  Parties effectively compute a MAC on the computation output using authenticated multiplication triples (AMT). However, securely generating these AMTs presently sits as the cost bottleneck.
> 
> In this work, we introduce a new technique for enabling SPDZ-style verification via homomorphic MACs, while bypassing the need for AMT. We instead rely on the specific structure of state-of-the-art fast pseudorandom correlation generators (PCG) for generating standard (unauthenticated) multiplication triples (MT).
> Parties authenticate the computation result via an authenticated variant of private information retrieval (PIR), relying on the sparse representation of MT produced by these PCGs.
> 
> This opens the door to a wide range of PIR optimizations and tradeoffs from the literature, resulting in asymptotic and concrete improvements over the traditional AMT-based approach. For example, in the Boolean 2-party case with \(\sigma=40\), we get a \(3\times\) to \(8\times\) computation improvement (and comparable communication) over best approaches using PCG to generate AMT, where the latter exploits variants of the Stationary Syndrome Decoding assumption of Kolesnikov et al. (Crypto 2025). With \(m\ge 3\) parties we obtain even larger improvements while reducing the asymptotic dependence on \(m\) from cubic to quadratic.
