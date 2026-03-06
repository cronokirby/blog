---
published: "2026-02-23"
link: "https://eprint.iacr.org/2026/366"
authors: ["[[Jianhua Hou]]", "[[Haodong Jiang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In order to reduce size and improve efficiency, many lattice-based cryptographic schemes adopt structured variants of the Learning With Errors (LWE) problem, such as the Module-LWE and Ring-LWE. Nevertheless, when analyzing the concrete security of lattice-based schemes, these algebraic structures are usually not considered, given the absence of techniques to exploit them for accelerating known attacks.
> 
> For the widely-used polynomial ring $\mathbb{Z}_q[X]/(x^N+1)$, we first propose an enhanced hybrid decoding attack against Module/Ring-LWE by leveraging the ring structure to accelerate its guessing and decoding steps. Then, we theoretically show that compared to the prior hybrid decoding attack, our new attack can lead to a complexity improvement by a factor of $O(N)$ in sparse secret setting. Moreover, we implement our new enhanced hybrid decoding attack on the benchmark instances established by [WSM+25, S{\&}P], and achieve several new records. In particular, compared with state-of-the-art methods given by [KKN+26, EC], our approach is 17$\times$ to 114$\times$ faster on the known broken instances. Finally, we show how to estimate the concrete bit security with our new hybrid attack under the same model as in the lattice estimator, and perform the analyses of  the latest sparse Ring-LWE parameter sets used in Fully Homomorphic Encryption (FHE) schemes including [JM22, EC], [CCKS23, CCS], [BCKS24, EC], [CHKS25, EC] and [AKP25, C]. The numerical results show that compared to the best-known attack, our enhanced attack can improve the attack complexity by 7-13 bits for all the considered parameter sets. In particular,  under our new enhanced hybrid decoding attack, 10 out of the 16 parameter sets fall below the targeted 128-bit security level.
