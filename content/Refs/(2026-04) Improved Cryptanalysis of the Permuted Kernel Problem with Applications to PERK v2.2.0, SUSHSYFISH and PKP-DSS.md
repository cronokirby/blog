---
published: "2026-04-10"
link: "https://eprint.iacr.org/2026/706"
authors: ["[[Abul Kalam]]", "[[Sudeshna Karmakar]]", "[[Arindam Mukherjee]]", "[[Soumya Sahoo]]", "[[Santanu Sarkar]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The Permuted Kernel Problem (PKP), introduced by Shamir, is a computationally hard problem underlying recent post-quantum signature schemes such as PERK, SUSHSYFISH and PKP-DSS. Among these, PERK is a second-round candidate in NIST's Additional Digital Signature Schemes post-quantum standardization process, SUSHSYFISH appeared at EUROCRYPT~2020, and PKP-DSS was one of the finalists in the CACR competition. The best known attacks on PKP rely on combinatorial meet-in-the-middle techniques, notably the algorithms of Koussa, Macario-Rat, and Patarin (KMP) and Santini, Baldi, and Chiaraluce (SBC), whose complexities remain super-exponential, with memory requirements of the same order as their time complexities.
> 
> In this work, we obtain improved cryptanalytic results for PKP that strictly outperform all previously known attacks. In particular, although no parameter sets of PERK~v2.2.0 fall below the NIST security levels, we provide the first evidence that secret vector recovery for all PERK~v2.2.0 parameter sets can be achieved with complexity below their estimated bit-security levels. We additionally obtain improved bit-complexity estimates for the SUSHSYFISH and PKP-DSS parameter sets. We further introduce a Schroeppel--Shamir style time–memory trade-off in the PKP setting. Although PKP does not admit square-root memory as in the classical subset-sum problem, our adaptation achieves substantial memory reductions while keeping the time complexity close to the best known attacks. Overall, our results provide improved cryptanalytic insight into PKP and refine the current understanding of the concrete security of
> PKP-based signature schemes.
