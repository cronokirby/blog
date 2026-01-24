---
published: "2025-12-23"
link: "https://eprint.iacr.org/2025/2315"
authors: ["[[David Richardson]]", "[[Mike Rosulek]]", "[[Jiayu Xu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Yao's famous protocol for secure 2-party computation, based on garbled circuits, is well-known to be insecure against an actively corrupt garbler. We introduce a new and extremely simple variant of Yao's protocol that is fully secure against active adversaries, for a certain class of functions that we call conditionally input-revealing.
> 
> We then show how to use this new protocol as the basis for fuzzy password authenticated key exchange (fuzzy PAKE). In fuzzy PAKE, two parties each hold a low-entropy secret (e.g., a password), and they interact to obtain a secure high-entropy key if and only if the passwords are sufficiently ``close.'' Our new fuzzy PAKE protocol supports completely arbitrary predicates for password ``closeness''. Compared to prior fuzzy PAKE protocols, ours is roughly $2\times$ cheaper in communication, computation, and round complexity.
