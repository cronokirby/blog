---
published: "2026-05-06"
link: "https://eprint.iacr.org/2026/889"
authors: ["[[Callum London]]", "[[Daniel Gardham]]", "[[Constantin Catalin Dragan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Ring signatures provide authentication over messages, whilst providing anonymity amongst a set of signer-defined public keys. They see active use in cryptocurrencies, e-voting and concurrent signature domains. However, post-quantum constructions typically rely on lattices, specifically utilising the Learning with Errors (LWE) and Short-Integer-Solution (SIS) problems, which cause inefficiencies when compared with classical constructions. 
> 
> One promising route to circumvent the inherent challenges of these underlying assumptions is the Lattice Isomorphism Problem (LIP), which underpins the HAWK signature scheme by Ducas et. al, currently a second round candidate in the NIST standardisation project Post Quantum Cryptography: Additional Digital Signature Schemes. It offers significant performance improvements over standard lattice assumptions due to its improved decoding, however, the only known construction of a ring signature from LIP has been shown to not satisfy linkability or correctness. 
> 
> In this paper we propose RingSLIP, a secure linkable ring signature based on LIP, utilising the HAWK signature. The resulting ring signature is logarithmic in the number of ring members, and concretely has size 46KB when targeting 128 bits of security for 4096 ring members, which is competitive with other lattice-based schemes. Furthermore, we observe that our construction also benefits from online/offline computation, resulting in a signature with online signing and verification only requiring $8.54 \times 10^4$ and $1.48 \times 10^5$ CPU cycles respectively, compared to $1.35 \times 10^{11}$ without these optimisations.
