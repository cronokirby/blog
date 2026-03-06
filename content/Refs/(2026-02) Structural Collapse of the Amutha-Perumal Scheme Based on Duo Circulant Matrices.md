---
published: "2026-02-22"
link: "https://eprint.iacr.org/2026/354"
authors: ["[[Sopan Chavhan]]", "[[Shrikant Chaudhari]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Amutha and Perumal recently proposed a two-party key exchange protocol based on \(\alpha\)-\(v\)-\(w\)-duo circulant matrices over the max-plus semiring, claiming resistance to known tropical attacks and suitability for IoT environments. This paper presents a complete cryptanalysis of this protocol. We uncover a fundamental structural weakness: the construction imposes an affine parameterization on the secret matrices, reducing each matrix to a single integer parameter. Consequently, the public messages become simple shifts of a publicly computable matrix, and the session key reduces to a constant shift of another public matrix. An eavesdropper can recover the shared secret in constant time after a one-time precomputation. The attack is deterministic, succeeds with probability 1, and requires only passive observation. We verify the attack on the authors' own example.
