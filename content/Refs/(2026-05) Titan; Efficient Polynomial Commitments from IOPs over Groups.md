---
published: "2026-05-08"
link: "https://eprint.iacr.org/2026/908"
authors: ["[[Chethan Kamath]]", "[[Ravi Prakash]]", "[[Samipa Samanta]]", "[[Sruthi Sekar]]", "[[Nitin Singh]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this paper, we propose Titan, an efficient polynomial commitment scheme (PCS) with transparent setup. It achieves commitment time of $O(n)$, evaluation time of $O(\sqrt{n})$ while the proof size and verification scales as $O(\sqrt[4]{n})$. Titan features an order of magnitude smaller proof sizes than hash based PCS, while featuring a significantly more efficient prover and verifier compared to state of the art group based schemes like Dory and Hyrax. To achieve this balance, Titan borrows two-tiered commitments from Dory, and realizes outer commitment using interactive protocols of proximity (IOPP) over groups, specifically WHIR, instead of expensive bilinear pairings. This allows Titan to be instantiated over general curves with discrete-log hardness such as Pasta Curves, instead of requiring pairing friendly curves.
> 
>     We compile a variant of Spartan protocol for R1CS with Titan PCS to realize a new SNARK, which we call TitanSnark. Our construction TitanSnark preserves the prover efficiency of the existing Spartan protocol, while improving proof size and verification quadratically from $O(\sqrt{n})$ to $O(\sqrt[4]{n})$. Concretely, for circuits of size $\geq 2^{22}$ this results in around $3\times$ more efficient proof size and verification.
> 
>     Our blueprint of combining IOPPs over groups with Pedersen style inner commitments is of independent interest, as are several optimizations towards efficiently realizing WHIR IOPP over prime-order groups.
