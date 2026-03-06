---
published: "2026-02-17"
link: "https://eprint.iacr.org/2026/283"
authors: ["[[Junru Li]]", "[[Yifan Song]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this work, we study the concrete efficiency of SPDZ-type MPC protocols in the dishonest majority setting with maximum corruption, where $t=n-1$ out of $n$ parties can be corrupted. In the semi-honest setting, the state-of-the-art SPDZ protocol achieves an amortized communication cost of $4n$ field elements per multiplication gate, assuming a pseudorandom correlation generator (PCG) that prepares random Beaver triples silently in the offline phase. However, achieving security against malicious adversaries typically incurs a substantial overhead. Existing works either require communication of at least $10n$ field elements per gate, or additionally require an additively homomorphic encryption scheme. 
>     
>     In this work, we construct a maliciously secure SPDZ-type protocol with the same amortized communication complexity as the semi-honest variant, i.e., $4n$ field elements per multiplication gate, assuming a PCG for tensor-product correlations. We note that the tensor-product correlations come free as by-products from almost all existing constructions of PCGs for random Beaver triples. These by-products allow us to construct an efficient preprocessing phase and a recursive check protocol, which enables an online evaluation of the circuit without authenticating all the wire values. The correctness of the online computation can also be checked efficiently with a sublinear communication cost in the circuit size.
