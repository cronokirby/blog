---
published: "2026-02-22"
link: "https://eprint.iacr.org/2026/358"
authors: ["[[Kai Hu]]", "[[Zhongfeng Niu]]", "[[Meiqin Wang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> This paper presents a new method for approximating the correlations of differential-linear distinguishers. 
> From the perspective of Beyne's geometric approach, the differential-linear correlation is a corresponding coordinate of the \textit{correlation vector} associated with the ciphertext multiset, which can be obtained by using the correlation matrix of the \textit{2-wise form} of the cipher.
> The composite nature of the correlation matrix leads to a round-based approach to approximate the correlation vector.
> This simple approximation is  remarkably precise, yielding the most accurate estimation for differential-linear correlations in \ascon thus far and the first DL distinguishers for 6-round \ascon-128a initialization.
> For \present, we present 17-round DL distinguishers, 4 rounds longer than the current record.
> To apply the round-based approach to ciphers with the large Chi ($\chi$) function as nonlinear functions, we derive theorems to handle the  correlation propagation for $\chi$ and its 2-wise form.
> Strong DL distinguishers for up to 6 rounds of \subterranean and \koala-$p$ are provided, 2 rounds longer than the previous differential and linear distinguishers.
> Furthermore, the round-based approximation idea is also extended to the higher-order differential-linear distinguishers.
> We give the first second-order DL distinguisher for 6-round \ascon-128 initialization and the first second-order DL distinguishers for up to 7 rounds of \subterranean and \koala-$p$.
