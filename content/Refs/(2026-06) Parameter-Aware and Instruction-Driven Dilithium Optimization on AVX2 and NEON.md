---
published: "2026-06-17"
link: "https://eprint.iacr.org/2026/1272"
authors: ["[[Shi Ya]]", "[[Liu Bingqian]]", "[[Lu Xianhui]]", "[[Qian Wenfei]]", "[[Liu Ying]]", "[[Wang Kunpeng]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We improve the performance of the lattice-based cryptosystem Dilithium on AVX2 and NEON by deeply exploiting its algorithmic properties, such as small coefficient bounds and high sparsity, with the distinct instruction-level profiles of the underlying architectures. On AVX2, we deploy a single-modulus 16-bit NTT for  and a multi-moduli 16-bit NTT coupled with a vectorized CRT reconstruction for . These instruction-level optimizations accelerate the respective computations by -- and -- over official AVX2 baselines, ultimately reducing the overall Dilithium signature generation time by  to . Conversely, On ARMv8-A NEON, we retain the efficient 16-bit NTT for , while proposing a Fast Sparse Polynomial Multiplication (Fast-SPM) method for . By exploiting the extreme sparsity of the challenge polynomial, Fast-SPM entirely bypasses the NTT and converts the computation into highly efficient index-shifted additions. Across the tested NEON platforms (Cortex-A72 and Apple M1 Pro), this hybrid approach achieves a -- speedup for  alongside a -- acceleration for , which translates into a  to  reduction in the overall signature generation time.
