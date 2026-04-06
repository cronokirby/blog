---
published: "2026-04-01"
link: "https://eprint.iacr.org/2026/633"
authors: ["[[Tong Yu]]", "[[Haodong Jiang]]", "[[Hong Wang]]", "[[Rongmao Chen]]", "[[Qingfeng Cheng]]", "[[Xinyi Huang]]", "[[Yuefei Zhu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Information set decoding (ISD) algorithm is the main tool to estimate the concrete bit security of code-based cryptographic schemes including Classic McEliece, HQC and BIKE. Inspired by sieving methods in lattice-based cryptoanalysis, a new type of ISD algorithm (called sieving-ISD) based on locality sensitive filter (LSF) was recently proposed by Guo, Johansson, and Nguyen [GJN24, TIT], which has been shown to achieve comparable complexity with the BJMM/MMT algorithm when attacking Classic McEliece. At EUROCRYPT 2024, Ducas, Esser, Etinski and Kirshanova extended [GJN24, TIT]'s deterministic LSF to probabilistic LSFs and provided an asymptotic worst-case complexity analysis for sieving-ISD with different LSFs in the full-distance setting, which indicates that the sieving-ISD with probabilistic LSFs can achieve better time complexity than the ones with [GJN24, TIT]'s deterministic LSF.
> 
> In this paper, we first propose a generalized sieving-ISD framework (called progressive sieving-ISD), which allows for more freedom in parameter configuration. In particular, we present a concrete complexity analysis for both our progressive sieving-ISD and its ``decoding one out of many'' (DOOM) variant under a binary sieve heuristic, whose validity can be verified via experiments.
> Then, by searching the optimal parameter configuration, we show that our progressive sieving-ISD can achieve attack time complexity improvements over the previous non-progressive version by 5-12 bits. In particular, for all the three categories of HQC to be standardized by NIST, we show that the state-of-the-art complexity results can be reduced by 7-9 bits using our progressive sieving-ISD, making their security levels 5.1/2.1/5.7 bits below the NIST requirements (143/207/272 bits). Interestingly, our results show that when considering the concrete security of Classic McEliece/HQC/BIKE, the progressive sieving-ISD with [GJN24, TIT]'s deterministic LSF can achieve a better performance than the ones with probabilistic LSFs in [DEEK24, EC]. Finally, we show the connection between progressive sieving-ISD and BJMM, and hence explain why progressive sieving-ISD can achieve a better time complexity than BJMM.
