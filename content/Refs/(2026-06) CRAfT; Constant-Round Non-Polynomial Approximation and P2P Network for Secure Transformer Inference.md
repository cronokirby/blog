---
published: "2026-06-19"
link: "https://eprint.iacr.org/2026/1292"
authors: ["[[Jinghao Zhao]]", "[[Hongwei Yang]]", "[[Xiaoyu Song]]", "[[Meng Hao]]", "[[Hui He]]", "[[Weizhe Zhang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Transformer models have recently emerged as a game-changing technology for applications in content generation. However, severe privacy concerns and the scalability bottlenecks of existing secure protocols limit their large-scale deployment. To address these challenges, we present CRAfT, an innovative system designed for high-scalability and low-latency secure Transformer inference. The core contributions of CRAfT are threefold: First, we propose a novel ciphertext packing strategy tailored for multiple mutually distrustful users. This approach completely eliminates the need for ciphertext rotations in linear projections layer and effectively offloads massive communication traffic to the high-speed P2P network. Second, we introduce a novel branch-free iterative fitting strategy based on trigonometric functions, which accurately approximates sigmoid-like functions (e.g., Tanh, Sigmoid, and erf in GELU). In the interval , its approximation accuracy exceeds that of the plaintext Tanh-based GELU, while requiring only 4 communication rounds without relying on polynomial approximations. Finally, for complex operations like Softmax that exhibit partial sigmoid-like characteristics, we transform them into standard sigmoid-like functions, allowing us to directly apply our fitting strategy to minimize cryptographic costs while maintaining model accuracy. Comprehensive evaluations on BERT-base demonstrate that CRAfT increases multi-client inference throughput by up to  and reduces per-client WAN communication volume by 38.4% compared to the highly optimized baseline (BumbleBee).
