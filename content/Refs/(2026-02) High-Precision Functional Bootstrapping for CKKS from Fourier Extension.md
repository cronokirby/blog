---
published: "2026-02-23"
link: "https://eprint.iacr.org/2026/367"
authors: ["[[Song Bian]]", "[[Yunhao Fu]]", "[[Ruiyu Shen]]", "[[Haowen Pan]]", "[[Anyu Wang]]", "[[Zhenyu Guan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We introduce a new (amortized) functional bootstrapping framework  over the CKKS homomorphic encryption (HE) scheme based on Fourier extension. While approximating the modular reduction function in CKKS bootstrapping through Fourier series is a well-known technique, how such method can be efficiently generalized to functional bootstrapping is less understood. In this work, we show that, by constructing proper Fourier extensions, any function with a bounded domain in the smoothness class $C^{\kappa}$ can be approximated by a degree-$n$ Fourier series with errors of order $O(n^{-\kappa-2})$ (except at the singularities), improving on previous results on a global error bound of $O(n^{-1})$ [AKP2025]. To achieve such bound, we propose a new way of constructing Fourier extensions, such that the extended functions appear as smooth as possible in the sense of a Fourier approximation. By implementing our functional bootstrapping over OpenFHE, we demonstrate that we can improve the data precision by $10$-$27$ bits and reduce the amortized FBS latency by $1.1$-$2\times$ over a variety of benchmarking functions.
