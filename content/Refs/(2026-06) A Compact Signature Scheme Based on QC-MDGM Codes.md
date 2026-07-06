---
published: "2026-06-19"
link: "https://eprint.iacr.org/2026/1290"
authors: ["[[Alessandro Annechini]]", "[[Alessandro Barenghi]]", "[[Gerardo Pelosi]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Constructing a post-quantum signature scheme that is simultaneously compact and efficient remains a central challenge in code-based cryptography. Existing schemes based on turning a zero-knowledge identification scheme into a signature exhibit either large signatures or slow verification procedures. On the other hand, the design of hash-and-sign code-based schemes initiated by Courtois, Finiasz and Sendrier in $2001$ has led to schemes such as Wave and MIRANDA, that provide small signatures at the cost of massive public key sizes, with comparatively demanding signature algorithms.
> In this work, we present ASTRA-Sign: a quASi-cyclic code-based full-distance decoding TRApdoor Signature Scheme, combining the hash-and-sign paradigm with quasi-cyclic moderate density generator matrix codes to obtain small signatures and small public keys. The security of our scheme is based on the hardness of finding low weight codewords in quasi-cyclic codes, and on the hardness of finding a codeword that has full Hamming distance from a given random vector. We analyse key recovery and signature forgery attacks against ASTRA, and we propose several parameter sets achieving $128$-, $192$- and $256$-bit security. Our scheme exhibits public keys and signatures below $1$kB for $128$ bits of security, with sub $50\mu$s verification times.
