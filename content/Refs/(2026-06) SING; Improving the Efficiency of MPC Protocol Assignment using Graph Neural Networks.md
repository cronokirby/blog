---
published: "2026-06-10"
link: "https://eprint.iacr.org/2026/1237"
authors: ["[[Jannis Bl\u00fcml]]", "[[Moritz Huppert]]", "[[Nora Khayata]]", "[[Joachim Schmidt]]", "[[Thomas Schneider]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Secure Multi-Party Computation (MPC) enables private computation, but has significantly higher overhead than plaintext execution. Hybrid MPC compilers improve concrete efficiency by mapping distinct computation parts to contextually optimal MPC protocols. However, state-of-the-art systems like Silph (Chen et al., S&P’23) depend on deployment-specific cost models that are cumbersome to retune, and compute mappings via brittle heuristics or costly Integer Linear Programming (ILP), limiting scalability and portability across protocols and deployment settings.
> 
> We present SING, the first machine-learning-based framework for hybrid MPC share assignment. SING leverages Graph Neural Networks (GNNs) for: (1) imitation of Silph’s assignments, accelerating share assignment by up to  with comparable quality; and (2) cost-driven learning, where we train a GNN cost predictor on synthetic or empirical costs (e.g., runtime or communication), freeze it, and train the share-assigning GNN to minimize predicted costs. The latter supports expressive non-linear cost models, avoiding ILP's linearity constraints, and enables retargeting to new protocol suites and deployment settings by re-fitting the predictor. Finally, we release our synthetic benchmark resources, including a dataset of 704 MPC circuits with wide-ranging hybrid assignments.
