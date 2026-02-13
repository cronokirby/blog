---
published: "2026-02-08"
link: "https://eprint.iacr.org/2026/201"
authors: ["[[Juraj Belohorec]]", "[[Pavel Hub\u00e1\u010dek]]", "[[Dominik Stejskal]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Idealized models such as the Random Oracle Model and the Generic Group Model underpin much of modern provable security. The Algebraic Group Model (AGM) of Fuchsbauer, Kiltz, and Loss (CRYPTO 2018) attempts to bridge the gap to the standard model by forcing adversaries to justify every new group element via a linear representation in its inputs, and it was leveraged in many follow-up works. Lipmaa, Parisella, and Siim (TCC 2023) strengthened this framework to the AGM with Oblivious Sampling (AGMOS), which additionally lets attackers obtain random group elements without the knowledge of their discrete logarithms, reflecting the practical availability of hashing to the group via admissible encodings. Although several works already rely on AGMOS, the security arguments are still ad hoc, and it is unclear whether an AGM proof automatically extends to this richer setting. We initiate a systematic study of this question. Our main result is a generic lifting theorem: For any assumption whose verification predicate satisfies a simple structural lifting condition, every AGM reduction remains sound in AGMOS under the Find Polynomial Representation (FPR) and Tensor Oracle Find Representation (TOFR) assumptions.
> 
> The lifting condition is met by a broad class of algebraic protocols. As illustrations, we lift from the AGM to the AGMOS (i) the knowledge soundness of KZG-like polynomial commitments and (ii) the security of the multivariate Adaptive Rational Strong Diffie–Hellman (ARSDH). Our results clarify the precise relationship between AGM and AGMOS and provide a black-box recipe for future work: once a proof is obtained in the AGM, one can often inherit AGMOS security with negligible additional effort. This both streamlines the use of AGMOS in forthcoming work and reinforces the confidence that schemes proven secure in the AGM remain robust when oblivious sampling is available.
