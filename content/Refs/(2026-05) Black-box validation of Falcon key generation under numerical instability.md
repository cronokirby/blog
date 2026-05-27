---
published: "2026-05-13"
link: "https://eprint.iacr.org/2026/954"
authors: ["[[Maxime Bros]]", "[[Christopher Celi]]", "[[Pierre Ciadoux]]", "[[Ray Perlner]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Falcon is a lattice-based digital signature scheme offering excellent performance and key sizes, and it has been selected for standardization by the National Institute of Standards and Technology (NIST) as part of their post-quantum standardization project. However, the use of floating-point and/or fixed-point arithmetic in Falcon presents unique challenges. One such challenge is the lack of reproducibility, which can arise due to the inexact representation of fractional numbers. Traditionally, implementations are validated for correctness using Known Answer Tests (KATs), but this approach requires exact reproducibility.
> We propose a novel alternate procedure for validating the correctness of Falcon’s key generation. Our procedure never rejects correct implementations of Falcon that vary due to the numerical instability of floating and fixed-point arithmetic. It is still strict enough to guarantee that differences in generated keys due to these variations will not create security problems, although like all black-box testing methods, it does not rule out security problems due to other implementation characteristics, such as side channels. Combined with black-box conformance testing on signing and verification, this provides a path for validating the correctness of Falcon implementations on defined platforms. We further study Falcon’s keys by defining and computing perfect keys that are generated using infinite precision. Last, we estimate the total number of valid keys that could be generated from a single seed. Our work is based on extensive experiments for which the code is available.
