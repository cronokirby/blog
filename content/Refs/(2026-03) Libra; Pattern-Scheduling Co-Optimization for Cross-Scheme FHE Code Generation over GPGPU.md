---
published: "2026-03-05"
link: "https://eprint.iacr.org/2026/456"
authors: ["[[Song Bian]]", "[[Yintai Sun]]", "[[Zian Zhao]]", "[[Haowen Pan]]", "[[Mingzhe Zhang]]", "[[Zhenyu Guan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We propose Libra, a compiler framework that automates efficient code generation for cross-scheme fully homomorphic encryption (FHE) on highly parallel computing architectures. While it is known that leveraging multiple FHE schemes in a single application can improve the overall efficiency, the exact mapping of cross-scheme FHE operators onto high-performance architectures, such as general-purpose graphic processing units (GPGPUs), remains challenging. To address such challenge, Libra integrates both the FHE computational patterns and hardware-aware scheduling strategies to establish an algorithm-hardware co-optimization framework. Specifically, Libra defines a novel cross-scheme representation for FHE that abstracts common program patterns for each of the FHE schemes. Then, we dynamically optimize the output FHE program based on the combined execution costs of FHE primitives derived from multiple scheme switching patterns. Next, to accelerate inter-operator execution on GPUs, Libra introduces a computational scheduling strategy that bridges high-level computation characteristics with low-level execution plans. Through the proposed pattern-scheduling co-optimization process, Libra generates efficient codes for cross-scheme high-precision FHE computations on GPGPUs. Experiment results show that Libra achieves up to 270$\times$ speedup on microbenchmarks and 19$\times$ on the applications compared to state-of-the-art cross-scheme, while improving compute unit and memory bandwidth utilization by $44\%$ and $36.1\%$.
