---
published: "2026-02-25"
link: "https://eprint.iacr.org/2026/393"
authors: ["[[Simon Langowski]]", "[[Kaiwen He]]", "[[Srini Devadas]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Modular arithmetic with a large prime modulus is a dominant computational cost in number-theoretic cryptography. Modular operations are especially challenging to parallelize efficiently on CPUs using vector instructions; standard CPU implementations rely on costly carry operations and permutation instructions to align with the multiplication datapath, negating the benefits of vectorization.
> 
> We develop vectorized algorithms for modular addition and multiplication, and present a new, constant-time modular multiplication algorithm suitable for general moduli - prime or otherwise. Our method uses a Residue Number System (RNS) representation to align the arithmetic naturally with wide vector units, and strategically eliminate extraneous instructions. Existing works either require the use of customized hardware or fail to show latency improvements.
> 
> Reducing the latency of modular arithmetic results in speedups for cryptographic applications. We accelerate RSA-4096 signatures by $4.0\times$ (verify) and $1.3\times$ (sign) over OpenSSL, and speed up BLS signature verifications by $3.43\times$ over the assembly-optimized BLST library. To facilitate broad practical adoption, we plan to upstream our implementation into BoringSSL, where it will directly benefit real-world TLS and cryptographic deployments.
