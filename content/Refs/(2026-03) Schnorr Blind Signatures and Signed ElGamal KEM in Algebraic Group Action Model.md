---
published: "2026-03-12"
link: "https://eprint.iacr.org/2026/508"
authors: ["[[Dung Hoang Duong]]", "[[Willy Susilo]]", "[[Chuanqi Zhang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Schnorr blind signature is one of the most efficient and widely used blind signatures. At CRYPTO'23, Katsumata et al. proposed CSI-Otter, the first blind signature from isogenies, which does not follow the construction framework of the Schnorr blind signature. Instead, CSIOtter was constructed from the sigma protocol for an OR relation that captures the idea of the Abe-Okamoto signature and hence can adapt the proof techniques by Kastner, Loss and Xu (PKC'22) into its security proof. Unfortunately, the concurrent security of CSIOtter was later broken independently by Katsumata et al. (PKC'24) and Do et al. (Eurocrypt'24). As a result, CSI-Otter and all Schnorr-like blind signature schemes constructed from sigma protocols with small challenge space are limited to the sequential setting, though it is still a very meaningful security guarantee. 
> 
> In this paper, we provide an intensive study of the Schnorr blind signature from isogenies in the Algebraic Group Action Model (AGAM) and the Random Oracle Model (ROM). In particular, we first prove the tight security of the existing Schnorr signature from isogenies under the group action discrete logarithm assumption (GADLOG) in AGAM + ROM, which serves as the foundation for the proof of the sequential security, the log-concurrent security, and the 2-concurrent security of the Schnorr blind signature in AGAM + ROM under the hardness of the one-more group action discrete logarithm (OMGADLOG) assumption. In addition, of independent interest, we also present the Schnorr-Signed Hashed ElGamal KEM from isogenies and prove its CCA2 security in AGAM + ROM under the hardness of GADLOG.
