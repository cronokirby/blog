---
published: "2026-04-01"
link: "https://eprint.iacr.org/2026/638"
authors: ["[[Jai Hyun Park]]", "[[Alain Passel\u00e8gue]]", "[[Damien Stehl\u00e9]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We describe THED, a threshold version of the Dilithium signature scheme (ML-DSA), whose issued signatures are valid for the genuine Dilithium verification algorithm. The signing protocol has two rounds of communication, one of which that lends itself to pre-processing. The scheme supports arbitrary number of users and threshold parameter. 
> 
> The construction consists in running Dilithium's signing algorithm under Threshold Fully Homomorphic Encryption (ThFHE), except for the computation of the signing challenge that happens in clear. Due to the type of operations performed, we rely on the CKKS scheme for homomorphic computations. However, a number of challenges remain, for which we develop new tools. In particular, we describe a CKKS-BFV continuum that helps for modular operations in the context of other non-arithmetic operations, a hybrid-format homomorphic comparison when the input is the sum of a bit-decomposed integer and a small integer, and a modulus-thrifty homomorphic comparison of larger non-bit-decomposed integers. Furthermore, to ensure the protocol is communication efficient, we developed a new threshold decryption method for CKKS providing more compact decryption shares. 
> 
> Our proof-of-concept implementation of the FHE components of the signing protocol runs in 1.343s on an RTX-5090 GPU, with 23.6KB of communication per party for the NIST level-2 Dilithium variant. Most of it can be run in an offline phase without the message to be signed, the online cost then shrinks to~0.202s and 4.10KB per party. Apart from the two decryption steps, this computation is entirely public and can be delegated to a server with more powerful hardware.
