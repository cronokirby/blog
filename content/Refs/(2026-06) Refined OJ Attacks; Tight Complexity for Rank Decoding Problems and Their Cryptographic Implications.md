---
published: "2026-06-19"
link: "https://eprint.iacr.org/2026/1291"
authors: ["[[Yongcheng Song]]", "[[Rongmao Chen]]", "[[Xinyi Huang]]", "[[Jiang Zhang]]", "[[Chao Lin]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The Rank Decoding (RD) problem lies at the core of rank-based cryptography. To enable efficient constructions, several variants have been introduced, notably the Non-Homogeneous RD (NHRD) problem and the Blockwise RD (BRD) problem. The \emph{quantum} security of these systems is currently considered to be determined by the complexity of combinatorial attacks such as AGHT, PRR, and Ourivski--Johansson (OJ) attacks. However, for the OJ attack, the modeling, soundness, and relative complexities remain poorly understood, particularly for the NHRD and BRD variants, thereby limiting confidence in security claims and hindering the design of compact schemes.
> 
> In this work, we refine the modelings for the OJ attack (PIT, 2002) and the Improved OJ (IOJ, IEEE TIT 2025) attack, and obtain general and tight complexities on the RD, NHRD, and BRD problems. We show that the IOJ attack rests on optimistic assumptions that do not hold in practical random decoding scenarios, and thus its advantage over OJ should be disregarded in security assessments. For the RD problem, the OJ attack remains a strong candidate for the most powerful combinatorial attack in certain parameter regions, particularly when the code dimension  is small and the extension
> degree  is large. For the NHRD problem, we show that the OJ attack is the most powerful combinatorial attack for the parameters of NH-Multi-UR-AG, yielding up to a 100-bit improvement over the adapted AGHT attack (IEEE TIT 2024), while still preserving the claimed security level. For the BRD problem, we derive complexity formulas for general block structures, resolving questions posed in prior works (Asiacrypt 2023, IEEE TIT 2025, PQC 2024). Our analysis also reveals that the OJ attack is previously underestimated by about  bits, where  denotes the minimum block weight.  We further show that the OJ attack outperforms AGHT and PRR attacks in certain parameter regions, achieving up to a 136-bit advantage over PRR (IEEE TIT 2025). Our work advances the understanding of decoding problems in the rank metrics and reinforces the security of related cryptosystems.
