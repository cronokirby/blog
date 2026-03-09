---
published: "2026-03-02"
link: "https://eprint.iacr.org/2026/420"
authors: ["[[Felix Gunther]]", "[[Vadim Lyubashevsky]]", "[[Rolfe Schmidt]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> FALCON (Prest et al. NIST submission) is a lattice-based digital signature scheme that is intended to be standardized by NIST under the name FN-DSA. This scheme has smaller signature and public key sizes than the ``primary'' NIST scheme, ML-DSA, but is more complicated to implement due to floating-point requirements.  For this reason, NIST has recommended the scheme be used in special situations where smaller key and signature sizes are particularly important. 
> 
> There are certain situations, where one can make small modifications to FALCON which results in even shorter outputs, which is particularly interesting for FALCON's intended use cases where smaller outputs are important. 
> In the scenario where one would like to minimize the total public key plus signature length, one could use FALCON in key recovery mode, which is a fairly straight-forward procedure specified in the FALCON document. 
> 
> In the scenario where one would like to minimize the total signature plus message length, one could use the message recovery mode (which is a somewhat less straight-forward modification) as described in (del Pino et al. SCN 2017).  The purpose of this note is to fully specify the details of this latter mode for developers wishing to implement it.  The savings of using FALCON in message recovery mode is up to 226 bytes as compared to FALCON-512 and up to 434 bytes compared to FALCON-1024 for the same security levels (i.e. NIST levels 1 and 5, respectively).  We also sketch how the same technique can be applied to the ring signature version of FALCON from (Gajland et al. Crypto 2024).
> 
> The main algorithmic building blocks of FALCON, such as key generation and trapdoor sampling, remain exactly the same.  The only algorithmic changes are in the hashing and parsing of the messages, randomness, and the hash function.
