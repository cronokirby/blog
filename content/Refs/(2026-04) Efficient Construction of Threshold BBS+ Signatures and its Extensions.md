---
published: "2026-04-21"
link: "https://eprint.iacr.org/2026/787"
authors: ["[[Yang Heng]]", "[[Mengling Liu]]", "[[Xingye Lu]]", "[[Haiyang Xue]]", "[[Zijian Bao]]", "[[Man Ho Au]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> BBS+ signatures are widely adopted in privacy-preserving systems such as anonymous credentials and Direct Anonymous Attestation (DAA). To strengthen key security and eliminate single points of failure, threshold variants of BBS+ signatures have become increasingly important. However, existing constructions suffer from notable inefficiencies: some entail excessive communication overhead (e.g., DKL+23, S&P 2023), while others impose substantial computational costs and require additional interaction rounds (e.g., WMC24, NDSS 2024).
> 
> In this work, we present a novel and efficient three-round threshold BBS+ signature scheme from the Castagnos–Laguillaumie (CL) cryptosystem. Our construction achieves best communication–computation trade-offs than previous works. Specifically, compared to the four-round WMC24 scheme, our protocol reduces communication by $77.4\%$ and demonstrates faster computation, with benchmarks indicating speedups of $10.6$--$16.6\times$ in single-threading and $3.3$--$5.4\times$ in multi-threading. Against the three-round protocol DKL+23, our scheme exhibits an asymptotic slowdown factor of $4\times$, but enhances communication by two orders of magnitude.
> 
> We further extend our techniques to threshold BBS signatures, Dodis-Yampolskiy verifiable random functions (DY VRFs), and multiplication protocols (DNP25 and LLZ+25, CCS'25). This yields: (1) a three-round threshold protocol for the original BBS scheme; (2) two-round threshold protocols for both DY VRFs (focusing on its oblivious variant) and the AGM-secure BBS variant; and (3) one fewer group element in broadcasts for the multiplication protocol with reduced ZKP costs via simplified relations.
