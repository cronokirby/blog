---
published: "2026-01-16"
link: "https://eprint.iacr.org/2026/064"
authors: ["[[Zhuo Huang]]", "[[Yu Yu]]", "[[Xiaogang Zhou]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Targeting the suite of four cryptographic schemes under review in Malaysia's MySEAL 2.0 initiative, we present practical key recovery attacks that break three of them: the KAZ-KA key agreement scheme, the KAZ-KEM key encapsulation mechanism, and the KAZ-SIGN v2.0 digital signature. All three schemes operate over $\mathbb{Z}_N$ where $N$ is a primorial-the product of consecutive small primes. This design choice makes the group order $\varphi(N)$ extremely smooth, enabling efficient attacks. For KAZ-KA and KAZ-KEM, we recover the private key by enumerating candidates modulo each small prime factor and solving discrete logarithms in small groups. For KAZ-SIGN v2.0, we exploit the linear structure of signatures to formulate a hidden number problem instance, which we solve using lattice reduction with only two signatures. Our attacks, executed on a MacBook, recover the secret keys in under one second for all recommended security levels (128, 192, and 256 bits), demonstrating that these schemes are fundamentally insecure.
