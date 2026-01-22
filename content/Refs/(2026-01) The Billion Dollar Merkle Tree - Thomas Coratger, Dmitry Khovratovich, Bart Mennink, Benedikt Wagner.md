---
published: "2026-01-20"
link: "https://eprint.iacr.org/2026/089"
authors: ["[[Thomas Coratger]]", "[[Dmitry Khovratovich]]", "[[Bart Mennink]]", "[[Benedikt Wagner]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The Plonky3 Merkle tree implementation has become one of the most widely deployed Merkle tree constructions due to its high efficiency, and—through its integration into numerous succinct-argument systems—it currently helps secure an estimated \$4 billion in assets. Somewhat paradoxically, however, the underlying 2-to-1 compression function is not collision-resistant, nor even one-way, which at first glance appears to undermine the security of the entire Merkle tree. The prevailing ad-hoc countermeasure is to pre-hash data before using them as leaves in this otherwise insecure Merkle tree.
> 
> In this work, we provide the first rigorous security analysis of this Merkle tree design and show that the Plonky3 approach is, in fact, sound. Concretely, we show (strong) position-binding and extractability.
