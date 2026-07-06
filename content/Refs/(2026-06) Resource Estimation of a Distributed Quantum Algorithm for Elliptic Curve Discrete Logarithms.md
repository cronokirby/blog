---
published: "2026-06-11"
link: "https://eprint.iacr.org/2026/1244"
authors: ["[[MohamadAli Khajeian]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Evaluating the quantum security of elliptic-curve cryptosystems requires precise resource estimations for solving the Elliptic Curve Discrete Logarithm Problem (ECDLP) on fault-tolerant quantum hardware. In monolithic implementations of Shor's algorithm, the required number of logical qubits remains a formidable constraint, primarily dictated by the modular inversion subroutine during point addition. To overcome this architectural limitation, we investigate a recently proposed distributed quantum discrete logarithm framework, apply it to the elliptic curve setting, and conduct a comprehensive resource estimation. The algorithm decomposes the global scalar search space into compact candidate subsets, verifying whether the secret scalar is contained within a given window via a classical dichotomy-driven coordinator. This distributed approach requires no quantum communication between nodes and operates entirely with minimal classical communication overhead, while significantly reducing the necessary control register width. By synthesizing this framework with the state-of-the-art, space-efficient reversible modular inversion circuits of Luo et al. (2026), we model a dual compression of the quantum memory footprint. Our analytical and concrete resource benchmarks demonstrate that the single-node logical qubit requirement for breaking a cryptographically relevant 256-bit curve drops to between 1080 and 1140 qubits. This represents a substantial reduction below existing monolithic baselines and establishes the lowest logical qubit threshold per processing node for distributed quantum cryptanalysis reported to date.
