---
published: "2026-03-05"
link: "https://eprint.iacr.org/2026/461"
authors: ["[[Chaofeng Guan]]", "[[Lan Luo]]", "[[Haodong Jiang]]", "[[Jianhua Hou]]", "[[Tong Yu]]", "[[Hong Wang]]", "[[Kangquan Li]]", "[[Longjiang Qu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Hamming Quasi-Cyclic (HQC) is a leading code-based key-encapsulation mechanism (KEM), recently selected by NIST for standardization, whose bandwidth and efficiency are balanced with the concrete cost of information-set decoding (ISD) attacks.
> However, the current balance relies on (1) the decryption-failure-rate (DFR) is directly configured to be less than $2^{-\lambda}$ ($\lambda$ is the security parameter), rather than carefully determined by choosing conservative parameters to resist known attacks as the Kyber team did in the design of NIST FIPS 203; (2) the error distribution in the underlying quasi-cyclic syndrome decoding problem is restricted to be balanced.
> 
> In this paper, we show how to quantitatively and conservatively evaluate the impact of removing the aforementioned two restrictions on the complexities of known attacks, and thus find a new balance among bandwidth, efficiency, and security for HQC. 
> In detail, we first formalize the best-known decryption-failure attack against HQC, and derive an upper bound on the probability that an adversary triggers a decryption-failure event under realistic query and time limits, enabling an attack-aware upper bound on the secure DFR.
> Second, we quantify how the weight distribution of $(\mathbf{r}_1, \mathbf{r}_2, \mathbf{e})$ (the random low-weight polynomials used in encryption) affects the concrete cost of ISD attacks and DFR. This yields an \emph{unbalanced} weight strategy that strictly lowers the DFR without sacrificing the targeted bit security, leading to a new variant called \emph{Unbalanced HQC (UHQC)}.
> By combining these analyses, we provide optimized parameters for UHQC. Across all NIST security levels, UHQC reduces bandwidth by 10-12% and improves runtime by 6-8%.
