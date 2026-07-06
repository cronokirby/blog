---
published: "2026-06-26"
link: "https://eprint.iacr.org/2026/1321"
authors: ["[[Niels Duif]]", "[[Daan S. Meijer]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Stateful hash-based signature schemes like LMS and XMSS are built on the Winternitz one-time signature. The effect of state reuse for these schemes has been shown to be disastrous [1][2]. This paper shows that the signer can mitigate this effect if a state is reused only once. This is achieved by repeating the randomized hashing step until a hash value with specific properties is found. Our results show that at least 80 bits of security can be achieved in 99% of the key reuses, an improvement of 49 bits. This requires the signer to repeat the randomized hashing step 1.4 million times on average. Slightly lower security can be reached with much less hashing.
