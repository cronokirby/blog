---
published: "2026-02-25"
link: "https://eprint.iacr.org/2026/387"
authors: ["[[Sopan Chavhan]]", "[[Shrikant Chaudhari]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The recent digital signature scheme proposed by Grigoriev, Monico, and Shpilrain (GMS26) attempts to leverage the NP-hardness of tropical matrix factorization as its security foundation. We present a systematic cryptanalysis revealing multiple structural vulnerabilities. First, we demonstrate an existential forgery attack in the chosen-hash model requiring only polynomial-time operations. Second, we establish that the scheme is fundamentally malleable, allowing an adversary to generate arbitrarily many distinct valid signatures for any observed message—thereby breaking strong unforgeability. Third, we show that collecting a polynomial number of honest signatures enables partial key recovery through probabilistic leakage of private key entries. Finally, we present an SMT-based key recovery attack that, given only two valid signatures, recovers the full private key in seconds for the recommended parameters. Our attacks do not rely on solving the claimed NP-hard problem but exploit algebraic properties of the signing equations. Combined, they demonstrate that the scheme fails to achieve the standard security notions of existential unforgeability, strong unforgeability, and key confidentiality.
