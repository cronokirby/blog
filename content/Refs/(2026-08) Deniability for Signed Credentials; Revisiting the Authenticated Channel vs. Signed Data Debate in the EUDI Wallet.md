---
published: "2026-08-10"
link: "https://eprint.iacr.org/2026/1648"
authors: ["[[Magdalena Bertram]]", "[[Anja Lehmann]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The European Digital Identity Wallet (EUDI Wallet) is currently adopting ECDSA-based signed credentials as part of its core architecture, which raised concerns that such designs inherently lack plausible deniability compared to authenticated-channel approaches such as the German electronic identity card. This paper revisits this perceived trade-off and argues that it is not a property of signature schemes themselves, but of the credential presentation protocol. We show that standard cryptographic techniques - specifically lightweight OR-proofs over the native ECDSA verification equation - can be used to transform signed credential presentations into non-transferable, verifier-bound transcripts. 
> Our contribution is not a new cryptographic primitive, but a careful instantiation of well-established techniques within the EUDI context, showing that deniability can be added to signed credentials while preserving their deployment advantages.
