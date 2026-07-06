---
published: "2026-06-22"
link: "https://eprint.iacr.org/2026/1300"
authors: ["[[Radhika Garg]]", "[[Daniel Escudero]]", "[[Antigoni Polychroniadou]]", "[[Akira Takahashi]]", "[[Xiao Wang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Threshold signatures allow a quorum of parties to jointly produce a
> signature while preventing any smaller subset from doing so.
> Following NIST's post-quantum standardization, designing threshold
> schemes compatible with the newly selected primitives is a pressing
> task. In particular, no prior threshold signature scheme produces
> signatures verifiable under the unmodified FALCON verification
> algorithm - the NIST-selected post-quantum scheme with the smallest
> signatures and keys.
> 
> In this work, we present the first such threshold FALCON signing
> protocol, establishing its feasibility. Our technical contributions
> are threefold. First, we adapt the MPC-based discrete Gaussian
> sampling protocol of Wei et al. [CCS:WYFCW23] to support
> private centers and standard deviations, as required by
> FALCON's signing process. Second, we carry out a
> Rényi divergence analysis of the Klein sampler under fixed-point
> arithmetic, showing that  bits of precision suffice to achieve
> the same security as the FALCON specification. Third, we design an
> efficient MPC protocol for the Klein sampler that exploits the fixed
> trapdoor basis to construct a pseudorandom correlation generator for
> authenticated VOLE using only two-party DPFs, reducing per-signature
> communication significantly over standard authenticated triple
> generation. We implement and benchmark our protocol in two settings:
> -party signing with all-but-one corruption, and 3-party signing
> with honest majority, demonstrating that threshold FALCON signing is
> feasible for applications where compatibility with the FALCON standard
> is required.
