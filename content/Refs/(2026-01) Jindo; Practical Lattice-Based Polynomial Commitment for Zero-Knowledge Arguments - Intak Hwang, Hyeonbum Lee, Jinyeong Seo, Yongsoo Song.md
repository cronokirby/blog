---
published: "2026-01-12"
link: "https://eprint.iacr.org/2026/044"
authors: ["[[Intak Hwang]]", "[[Hyeonbum Lee]]", "[[Jinyeong Seo]]", "[[Yongsoo Song]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We present $\textsf{Jindo}$, a new lattice-based polynomial commitment scheme (PCS) readily available for compiling polynomial interactive oracle proofs (PIOP) into zero-knowledge arguments of knowledge (ZKAoK).  
> $\textsf{Jindo}$ improves upon the previous lattice-based PCSs $\textsf{CELPC}$ (CRYPTO' 24) and $\textsf{Greyhound}$ (CRYPTO' 24) by seamlessly integrating their strengths.  
> Specifically, we incorporate the coefficient encoding method of $\textsf{CELPC}$ with a new evaluation protocol inspired by $\textsf{Greyhound}$, inheriting only the advantages of both schemes. As a result, $\textsf{Jindo}$ enjoys native support for a large base field, a large challenge set, the evaluation hiding property, and efficient batched evaluation.
> 
> Our implementation shows that $\textsf{Jindo}$ improves $\textsf{CELPC}$ with 1.3x faster proof generation, 3.7x faster verification, and 4.8x smaller proof size when evaluating polynomials of degree $2^{19}$ over a 255-bit prime field.  
> Furthermore, $\textsf{Jindo}$ outperforms $\textsf{CELPC}$ with 3.5x faster proof generation, 9.7x faster verification, and 12.3x smaller proof size when compiling PIOP from $\textsf{Buckler}$ (CCS' 25) to prove the validity of an RLWE sample, demonstrating its practical efficacy in ZKAoK construction from PIOP.
