---
published: "2026-05-13"
link: "https://eprint.iacr.org/2026/947"
authors: ["[[Ganqin Liu]]", "[[Hao Cheng]]", "[[Georgios Fotiadis]]", "[[Jipeng Zhang]]", "[[Johann Gro\u00dfsch\u00e4dl]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The BLS digital signature scheme, in particular its instantiation with the BLS12-381 curve, has become a cornerstone of modern blockchain protocols such as Ethereum Proof-of-Stake, due to its unique and attractive characteristics (e.g., support for non-interactive signature aggregation). Recently, Cheng et al. (CHES 2025) demonstrated that the enormous Single-Instruction-Multiple-Data (SIMD) computing power of the Intel AVX-512 extensions, when combined with carefully-designed vectorization strategies, can be effectively leveraged to speed up the computation of the optimal ate pairing on BLS12-381, a major component of BLS. This naturally raises the question of whether such SIMD-parallel processing can be exploited more extensively to benefit the entire BLS signature scheme. The present paper answers this question positively by presenting a highly SIMD-optimized BLS implementation using Intel AVX-512, especially the AVX-512IFMA instructions. In order to harness AVX-512 more efficiently for the performance-critical operations of BLS, we explored a wide range of optimization options, including various formulas and vectorization granularities for elliptic curve arithmetic operations, scalar multiplication, and hash-to-curve, as well as the fine-tuning and flexible use of different implementations of the finite-field arithmetic. Benchmarking results collected on an Intel Core i3-1005G1 ("Ice Lake") CPU show that our vectorized BLS software using AVX-512 is at least 1.57 times faster than an x64 assembly implementation of the widely-used blst library.
