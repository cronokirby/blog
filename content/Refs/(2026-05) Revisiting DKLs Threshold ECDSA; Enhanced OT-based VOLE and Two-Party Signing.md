---
published: "2026-05-17"
link: "https://eprint.iacr.org/2026/976"
authors: ["[[Gilad Asharov]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Threshold ECDSA signing has become a standard building block for securing cryptocurrency assets, with the protocol of Doerner, Kondi, Lee, and shelat (DKLs, IEEE S&P 2024) emerging as a leading solution due to its efficiency and widespread industry adoption. 
> 
> In this work, we revisit the DKLs protocol to evaluate its concrete security and implementation trade-offs:
> 
> * Vector Oblivious Linear Evaluation (VOLE): We identify subtle issues in the underlying OT-based Vector Oblivious Linear Evaluation (VOLE) sub-protocol, showing that original parameter choices must be adjusted to reach intended security levels. To address this, we provide a complete analysis of three VOLE variants offering different trade-offs between bandwidth and round complexity. 
> 
> * Two-Party Signing: We introduce an optimized two-party signing protocol that shifts the majority of computation and communication to a message- and key-independent preprocessing phase. This results in an exceptionally efficient online phase where each party exchanges only 0.2KB, a roughly 600 times reduction in communication compared to the full protocol, without being susceptible to known ``pre-signature'' attacks. 
> 
> 
> Our findings consolidate the security of the protocol while providing significant efficiency improvements for practical deployment and standardization.
