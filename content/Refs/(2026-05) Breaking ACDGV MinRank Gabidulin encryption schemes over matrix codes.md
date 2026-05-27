---
published: "2026-05-16"
link: "https://eprint.iacr.org/2026/972"
authors: ["[[Thai Hung Le]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Enhanced Gabidulin Matrix Codes (EGMC), introduced by Aragon, Couvreur, Dyseryn, Gaborit, and Vincotte at Asiacrypt 2024, were designed to hide the algebraic structure of Gabidulin matrix codes while enabling very compact McEliece- and Niederreiter-type encryption schemes, with ciphertexts as small as 65 bytes at the claimed 128-bit security level.  Their security relies on the assumption that a masked EGMC code is hard to distinguish from a random matrix code.  We show that this enhanced construction leaves enough structure for an equivalent code of the secret key to be recovered.  Unlike previous cryptanalysis, our attack combines combinatorial and algebraic techniques to recover a Gabidulin-equivalent compressed code. This code can then be extended to a full-length equivalent secret key in polynomial time. As a result, the attack provides both a distinguisher and a key-recovery attack against the EGMC encryption schemes. The attack breaks all 16 proposed EGMC parameter sets by large margins. For example, for the claimed 128-bit parameter set $(2,17,37,4,0)$, it reduces the security level from 186 bits to 35 bits. In our implementation, the equivalent secret key is recovered in less than 10 minutes.
