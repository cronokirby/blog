---
published: "2025-12-26"
link: "https://eprint.iacr.org/2025/2326"
authors: ["[[Sriram Sridhar]]", "[[Shravan Srinivasan]]", "[[Dimitrios Papadopoulos]]", "[[Charalampos Papamanthou]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Despite phenomenal advancements in the design and implementation of Zero-knowledge proofs (ZKPs) that have made them the preeminent tool for cryptographically ensuring the correctness of a wide range of computations, existing ZK protocols still incur high prover overhead in applications that entail accurately evaluating non-polynomial functions over floating-point numbers such as machine learning, decentralized finance, orbital mechanics, and geolocation. Current state-of-the-art approaches typically emulate floating-point numbers using fixed-point representations (via quantization), and handle non-polynomial functions using lookup tables, piece-wise or low-degree polynomial approximations, which lead to sub-optimal performance and/or loss in accuracy or generality, thus limiting their potential for adoption in practice.
> 
> In this work, we present a general framework for approximating a large class of non-polynomial functions using Gauss-Legendre quadrature which also supports efficient ZKPs of correct computation. We show that increasing the desired precision up to the limits imposed by quantization only increases does not increase the multiplicative circuit depth, which stays a small constant ($\leq4$) -- which is the main factor in the error growth of an approximation. We implement and evaluate our approach in Noir/Barretenberg, and we obtain absolute errors $2-256\times$ lower than comparable baselines for most non-polynomial functions with low prover overhead. We also demonstrate an efficient prover and low errors for high-precision applications in DeFi and astronomy that require non-polynomial functions, again obtaining errors $4-64\times$ lower than the baseline approximations.
