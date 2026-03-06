---
published: "2026-02-19"
link: "https://eprint.iacr.org/2026/322"
authors: ["[[Seonhong Min]]", "[[Jeongeun Park]]", "[[Yongsoo Song]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Multi-key fully homomorphic encryption (MKFHE) enables computation over encrypted data under multiple different keys. Constructing MKFHE without any trusted or interactive setup remains an open problem. In the context of MKFHE, a trusted setup is often assumed to mean the use of a common random string (CRS).
> 
> In this paper, we present the first MKFHE scheme in the plain model (i.e., without any trusted or interactive setup) based solely on the RLWE assumption. Our design yields a 2-round multi-party computation (MPC) in the plain model against semi-malicious adversaries. Moreover, it can be applied to transform existing FHE schemes that rely on RGSW in their construction into a multi-key variant. We also provide concrete conversions for widely-used FHE schemes, including BGV, BFV, CKKS, FHEW, TFHE, and Carousel.
> 
> Finally, we implement our scheme and present experimental results for the expansion algorithm from a single-key ciphertext to a multi-key ciphertext and the multi-key homomorphic multiplication algorithm.
