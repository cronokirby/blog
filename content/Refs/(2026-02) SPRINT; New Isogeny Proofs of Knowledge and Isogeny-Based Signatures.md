---
published: "2026-02-23"
link: "https://eprint.iacr.org/2026/364"
authors: ["[[Thomas den Hollander]]", "[[Shai Levin]]", "[[Marzio Mula]]", "[[Robi Pedersen]]", "[[Daniel Slamanig]]", "[[Sebastian A. Spindler]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Zero-knowledge proofs of knowledge are a fundamental building block in many isogeny-based cryptographic protocols, such as signature schemes based on identification-to-signature transformations, or multi-party ceremonies that avoid a trusted setup, in particular for generating supersingular elliptic curves with unknown endomorphism rings.
> 
> In this paper, we construct SPRINT, an efficient polynomial IOP-based proof system that encodes the radical $2$-isogeny formulas into a system of multivariate polynomials. When combined with the recent polynomial commitment scheme (PCS) DeepFold, our construction yields substantial improvements over state-of-the-art isogeny proofs of knowledge. For the SQIsign prime $p=5 \cdot 2^{248}-1$ (giving NIST security level I), our implementation takes only a few milliseconds for proving and verification, with proof sizes around 80 kB. Compared to previous works, we achieve a $1.1$-$8\times$ speedup for the prover, a $4.4$-$24\times$ speedup for verification, and proof sizes that are $1.2$-$2.3\times$ smaller across different parameter sets.
> 
> Moreover, we study the weak simulation extractability of our proof system, which we can use as a starting point for a modular construction of signatures. We show that any Fiat–Shamir compiled interactive proof with a so-called canonical simulator is weakly simulation-extractable. We expect this general result to be widely applicable to other post-quantum proof systems and thus of independent interest.
> 
> Building on SPRINT and our wSE result, we introduce a new family of signature schemes whose security solely relies on the $\ell$-isogeny path problem, a foundational problem in isogeny-based cryptography. As a concrete instantiation, we construct a signature scheme using DeepFold as the PCS. Across the different NIST security levels, a prototype implementation of our scheme achieves performance on par with the highly optimized NIST specification for SQIsign. Even though our signatures are relatively large, our scheme relies on weaker assumptions and our framework offers flexibility for tradeoffs and optimizations – both within a given PCS and by switching to alternative PCS constructions. In particular, it will naturally inherit efficiency gains from future advances in plausibly post-quantum secure PCS constructions.
