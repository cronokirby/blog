---
published: "2026-02-08"
link: "https://eprint.iacr.org/2026/202"
authors: ["[[Nikolas Melissaris]]", "[[Jiayi Xu]]", "[[Antigoni Polychroniadou]]", "[[Akira Takahashi]]", "[[Chenkai Weng]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Gradient boosted decision trees, particularly XGBoost, are among the most effective methods for tabular data. As deployment in sensitive settings increases, cryptographic guarantees of model integrity become essential. We present ZKBoost, the first zero-knowledge proof of training (zkPoT) protocol for XGBoost, enabling model owners to prove correct training on a committed dataset without revealing data or parameters.
> We make three key contributions: (1) a fixed-point XGBoost implementation compatible with arithmetic circuits, enabling instantiation of efficient zkPoT, (2) a generic template of zkPoT for XGBoost, which can be instantiated with any general-purpose ZKP backend, and (3) vector oblivious linear evaluation (VOLE)-based instantiation resolving challenges in proving nonlinear fixed-point operations. Our fixed-point implementation matches standard XGBoost accuracy within 1% while enabling practical zkPoT on real-world datasets.
