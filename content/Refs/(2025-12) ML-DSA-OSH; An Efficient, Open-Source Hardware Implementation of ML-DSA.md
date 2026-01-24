---
published: "2025-12-30"
link: "https://eprint.iacr.org/2025/2337"
authors: ["[[Quinten Norga]]", "[[Suparna Kundu]]", "[[Ingrid Verbauwhede]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> ML-DSA is a post-quantum lattice-based digital signature algorithm (DSA) that the National Institute of Standards and Technology (NIST) recently standardized as FIPS 204. Remarkably, there are only a handful of published hardware designs and no open-source hardware implementations of complete ML-DSA.
> In this work, we present an efficient open-source hardware (OSH) design of ML-DSA, based on a Dilithium implementation by Beckwith et al. (FPT 2021). We discuss the required modifications for migrating existing CRYSTALS-Dilithium implementations to match FIPS 204. In addition, we evaluate and compare the performance of our design with the prior art.  Through optimized instruction scheduling in the ML-DSA rejection loop, which enables the pre-computation of critical variables, the average signing latency is improved by $16-36$ %.  Finally, we extensively discuss potential applications and directions of research, further enabled through ML-DSA-OSH.
