---
published: "2026-03-12"
link: "https://eprint.iacr.org/2026/509"
authors: ["[[Jiarui Li]]", "[[Mengzhen Zou]]", "[[Guidong Li]]", "[[Guoyan Zhang]]", "[[Chen Qian]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Achieving proactive security in perfectly-secure Multi-Party Computation (MPC) with guaranteed output delivery is a significant challenge, primarily because traditional protocols require all participants to be continuously online, rendering them impractical for many applications. The recently proposed layered MPC model~\cite{C:DDGIKK23} addresses this by allowing parties to be offline for extended periods. However, existing protocols for this model incur substantial overhead compared to their counterparts in the standard static setting.
> 
>   This work introduces a unified framework and essential building blocks for constructing protocols in the layered model, instantiable with both Shamir and CNF secret sharing. Using this framework, we develop highly efficient protocols for Verifiable Secret Sharing (VSS) and secure multiplication for proactive security.
> 
>   Applying our framework, we construct layered MPC protocols that drastically reduce the communication complexity and the number of layers required to evaluate an arithmetic circuit of depth $D$. Specifically, our Shamir-based MPC achieves $O(n^6)$ per-gate communication with a total layer depth of $D+13$, representing a significant improvement over the $O(n^9)$ complexity and $10D+8$ depth of~\cite{C:DDGIKK23}.
