---
published: "2026-04-07"
link: "https://eprint.iacr.org/2026/679"
authors: ["[[Yuhao Zheng]]", "[[Jianming Lin]]", "[[Yutong Liang]]", "[[Yanzhen Ren]]", "[[Huixin Zhang]]", "[[Chang-An Zhao]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> CSIDH (Commutative Supersingular Isogeny Diffie--Hellman) is a class-group-based key-exchange protocol operated on supersingular elliptic curves, which, at the time of its proposal, exhibited several attractive selling points such as non-interactivity. Unfortunately, CSIDH is vulnerable to the sub-exponentiation attack--Kuperberg's algorithm, thereby requiring large parameters to ensure security. A recent work based on oriented elliptic curves with large discriminants, proposed by Houben, allows for a significantly small base field (around 255 bits). We name this protocol CSIDH-LDO. However, the practicality of CSIDH-LDO is currently hindered by the necessity of performing multiple group actions and  its huge public-key size.
> 
> In this paper, we address these bottlenecks by presenting highly optimized constant-time implementations alongside an effective public-key compression framework for CSIDH-LDO. We combine algorithmic improvements, specifically scalar multiplication by differential addition chains and isogeny computation on the twisted Edwards model, with \textit{limb-slicing} to exploit parallelism via Intel's AVX-512 instructions. To resolve the architectural mismatch when mapping $r \in \{7, 13\}$ group actions to 8-lane SIMD registers, we evaluate two parallel scheduling strategies. While a dummy-based approach allows us to leverage efficient $\mathbb{F}_{p^2}$-arithmetic, our dummy-free strategy systematically exploits internal parallelism to fully saturate the 512-bit vectors without redundant computations. Benchmarks on an Intel Tiger Lake processor demonstrate our parallel implementations achieve speedups of up to 3.40$\times$ (AVX-512F) and 7.30$\times$ (AVX-512IFMA) over an optimized x64 assembly baseline.
> Furthermore, we establish a formal framework for public-key compression tailored for CSIDH-LDO. Specifically, we propose two efficient techniques that achieve a compact public key representation of approximately $(r+2)\log_2(p)$ bits, thereby significantly reducing communication bandwidth. To the best of our knowledge, this work is the first to demonstrate the efficacy of SIMD parallelization combined with optimized compression for isogeny-based protocols derived from orientations of large discriminants.
