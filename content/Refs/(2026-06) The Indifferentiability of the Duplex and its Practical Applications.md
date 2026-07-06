---
published: "2026-06-17"
link: "https://eprint.iacr.org/2026/1275"
authors: ["[[Jean Paul Degabriele]]", "[[Marc Fischlin]]", "[[J\u00e9r\u00f4me Govinden]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The Duplex construction, introduced by Bertoni et al. (SAC 2011), is the Swiss Army knife of permutation-based cryptography. It can be used to realise a variety of cryptographic objects—ranging from hash functions and MACs, to authenticated encryption and symmetric ratchets. Testament to this is the STROBE protocol framework which is a software cryptographic library based solely on the Duplex combined with a rich set of function calls. While prior works have typically focused their attention on specific uses of the Duplex, our focus here is its indifferentiability. More specifically, we consider the indifferentiability of the Duplex construction from an online random oracle—an idealisation which shares its same interface. As one of our main results we establish the indifferentiability of the Duplex from an online random oracle. However indifferentiability only holds for the standard Duplex construction and we show that the full-state variant of the Duplex cannot meet this notion. Our indifferentiability theorem provides the theoretical justification for the security of the Duplex in a variety of scenarios, amongst others, its use as a general-purpose cryptographic primitive in the STROBE framework. Next we move our attention to AEAD schemes based on the Duplex, namely SpongeWrap, which is the basis for NIST's Lightweight Cryptography standard Ascon. We harness the power of indifferentiability by establishing that SpongeWrap offers security against key-dependent message inputs, related-key attacks, and is also committing.
