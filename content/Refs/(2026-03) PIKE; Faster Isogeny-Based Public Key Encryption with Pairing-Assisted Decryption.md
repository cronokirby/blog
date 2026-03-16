---
published: "2026-03-07"
link: "https://eprint.iacr.org/2026/473"
authors: ["[[Shiping Cai]]", "[[Mingjie Chen]]", "[[Yi-Fu Lai]]", "[[Kaizhan Lin]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Recent work at Eurocrypt 2025 by Basso and Maino introduced POKÉ, an isogeny-based public key encryption (PKE) scheme.  POKÉ shows how two parties can derive a shared secret on a higher-dimensional, SIDH-like commutative diagram via basis evaluations, giving the fastest isogeny-based PKE to date with performance comparable to the original SIDH.
>     
> In this paper we present PIKE, a new isogeny-based PKE obtained by tweaking the POKÉ design. Our key change is to use pairings to derive the shared secret while preserving post-quantum security. This brings two benefits: (i) decryption is directly faster, and (ii) by relaxing the required prime form, we can choose smaller primes, further improving overall runtime.
>     
> We provide a proof-of-concept implementation in SageMath. Under the NIST~I setting, our benchmarks show speedups of $1.30\times$ (key generation), $1.24\times$ (encryption), and $1.47\times$ (decryption) over POKÉ, while maintaining competitive public key and ciphertext sizes. In addition, we provide a C implementation. The encryption and decryption take 53~Mcycles (23~ms) and 34~Mcycles (15~ms) on an Intel i7 2.3 GHz CPU, respectively.
