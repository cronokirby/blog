---
published: "2026-04-08"
link: "https://eprint.iacr.org/2026/690"
authors: ["[[Ayush Meshram]]", "[[Ayush Banerjee]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Adaptor signatures extend digital signatures with conditional disclosure capabilities, enabling atomic swaps, payment channels, and other advanced blockchain protocols. Although post-quantum adaptor signatures have been explored under lattice, isogeny, and coding-theoretic assumptions, no constructions have yet been realised from the multivariate quadratic (MQ) family of signatures. Classical algebraic adaptor techniques rely on embedding the witness into signing randomness, which is natural for discrete-log-based schemes but does not apply to MQ signatures such as UOV and MAYO: to the best of our knowledge, MQ signing randomness lacks the algebraic structure needed for witness embedding, and no such algebraic adaptor construction is currently known. This motivates a different approach. We propose MWAS, the first commitment-based adaptor-style construction for MQ signatures, specifically UOV and MAYO from the NIST PQC process, implemented via the Open Quantum Safe library. Our construction uses a lightweight HMAC-SHA256 commitment and a concatenation-based adaptation, supporting a hash-preimage witness relation. We prove correctness, witness hiding, and witness extractability in the ROM under MQ-hardness and PRF assumptions. A prototype implementation on a Raspberry Pi~5 shows pre-signature generation under 0.4~ms for UOV and 0.5--3.3~ms for MAYO across 128--256-bit security levels, with throughput up to 710~ops/s and public key sizes of 1.4~KB (MAYO) to 1.2~MB (UOV). These results indicate that commitment-based MQ adaptor signatures are a viable post-quantum option for settings where hash-preimage witness relations are appropriate.
