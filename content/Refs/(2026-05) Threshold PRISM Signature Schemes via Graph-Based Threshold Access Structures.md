---
published: "2026-05-13"
link: "https://eprint.iacr.org/2026/945"
authors: ["[[Hyeonhak Kim]]", "[[Won Kim]]", "[[Changmin Lee]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Threshold signatures for distributed systems require compact public keys and signatures to reduce communication overhead by avoiding packet fragmentation.
> However, with existing post-quantum threshold signatures, either the public key or the signature no longer fits within a single unfragmented network packet.
> 
> In this work, we present Threshold PRISM, an isogeny-based post-quantum threshold signature scheme whose public keys and signatures both fit within a single unfragmented network packet at every NIST security level.
> To the best of our knowledge, Threshold PRISM is the first post-quantum threshold signature scheme to do so, with arbitrary number of parties.
> While isogeny-based signatures such as SQIsign and PRISM are known for exceptionally compact public keys and signatures, their algebraic structure makes thresholdization for general number of parties highly nontrivial.
> We address this challenge by introducing a novel graph-based threshold access structure tailored to the isogeny setting.
> 
> Across our various parameter choices with trade-off between signing speed and size of public key and signature, at NIST security levels I/III/V, our constructions achieve public keys of 65-129/97-193/129-257 bytes and signatures of 159-222/239-335/319-447 bytes, respectively.
> Among the schemes submitted to the NIST MPTC (Multi-Party Threshold Cryptography) Round-1 call whose public keys fit within a single unfragmented network packet, our constructions achieve the smallest signature sizes.
> We also provide a proof-of-concept implementation of Threshold PRISM.
