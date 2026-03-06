---
published: "2026-02-19"
link: "https://eprint.iacr.org/2026/320"
authors: ["[[Xiaoyu Ji]]", "[[Yifan Song]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Secure multiparty computation (MPC) allows distrusted parties to jointly evaluate a common function while keeping their inputs private. In this work, we focus on improving the communication complexity of information-theoretic asynchronous MPC with optimal resilience ($t < n/3$). The current state-of-the-art work in this setting by Goyal, Liu-Zhang, and Song [Crypto’24] achieves amortized linear communication per gate with $\Omega(n^{14})$ additive overhead. In comparison, the best-known result in the synchronous setting by Goyal, Song, and Zhu [Crypto’20] achieves the amortized linear communication per gate with only $\mathcal{O}(n^{6})$ additive overhead, revealing a significant gap that we aim to close.
> 
> This work closes this gap and goes further. We present the first statistically secure asynchronous MPC protocol achieving amortized linear communication per gate with only $\mathcal{O}(n^{5})$ additive overhead assuming a functionality for Agreement on Common Set (ACS). With the best-known instantiation for ACS, we obtain an asynchronous MPC protocol in the plain model with additive overhead $\mathcal{O}((\kappa+n)n^4\log\kappa)$ in expectation, where $\kappa$ is the security parameter. In the setting of statistical security with optimal resilience, this even surpasses the best synchronous result when $n\geq\sqrt{\kappa\log\kappa}$.
>     
> Technically, our contributions include (i) a new protocol for generating Beaver triples with linear communication per triple and $\mathcal{O}(n^3)$ additive overhead assuming functionalities for generating random degree-$t$ Shamir sharings and ACS, and (ii) a new protocol for generating random degree-$t$ Shamir sharings with linear communication per sharing and $\mathcal{O}(n^{5})$ additive overhead assuming a functionality for ACS.
