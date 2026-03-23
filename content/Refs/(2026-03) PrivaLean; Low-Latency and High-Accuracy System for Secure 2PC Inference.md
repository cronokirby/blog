---
published: "2026-03-20"
link: "https://eprint.iacr.org/2026/554"
authors: ["[[Jinghao Zhao]]", "[[Hongwei Yang]]", "[[Bobo Wang]]", "[[Lichunxi Yang]]", "[[Juncheng Li]]", "[[Xiangrui Zeng]]", "[[Meng Hao]]", "[[Desheng Wang]]", "[[Hui He]]", "[[Weizhe Zhang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Secure multi-party computation offers a powerful paradigm for protecting private information. However, its significant computational overhead and high communication latency limit its further application. To address these challenges, we present PrivaLean, an innovative framework designed for low-round and high-accuracy secure two-party inference under the semi-honest model. The core design of PrivaLean focuses on two main dimensions. First, for linear layer evaluation, we propose two distinct optimizations: a local random ciphertext generation mechanism that avoids massive offline interactions to drastically reduce communication rounds, and an intermediate encoding method that significantly minimizes memory overhead for low-memory devices. Second, to conquer non-linear evaluation bottlenecks, we design a co-optimized scheme featuring a novel trigonometric activation protocol and a data-distribution-aware training strategy. The activation requires only a single communication round and avoids expensive online truncation, while the training strategy can adapt to the precise data distribution and mitigate overfitting through knowledge distillation. The final accuracy is even higher than that of the ReLU-based baseline. Comprehensive evaluations on large-scale networks (e.g., MiniONN, ResNet-32/-50) demonstrate that in a Wide Area Network setting, PrivaLean completes a single ResNet-50 inference in 125.02 seconds. Compared to the state-of-the-art system Cheetah, PrivaLean achieves significantly fewer communication rounds and a 50.5% reduction in inference latency.
