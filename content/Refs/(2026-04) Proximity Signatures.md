---
published: "2026-04-08"
link: "https://eprint.iacr.org/2026/694"
authors: ["[[Guillermo Angeris]]", "[[Kobi Gurkan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this note we introduce the concept of proximity signatures, where verifiers who can only access a small part of some data would like a guarantee that (a) this data is “close” to a uniquely decodable message (so the message can be decoded from the data via error decoding) and (b) the uniquely decodable message is signed by an associated secret key. This is useful in situations where the message is very large but the verifiers are small devices who only need the guarantee that the message was signed by some specific secret key or set of keys. As a motivating example, we consider the data availability problem. There, users submit large signed pieces of data that together form a larger data matrix. The signatures and integrity of this data must then be checked by nodes who can only download a small proportion of this matrix. We present a construction inspired by linear subspace signatures.
