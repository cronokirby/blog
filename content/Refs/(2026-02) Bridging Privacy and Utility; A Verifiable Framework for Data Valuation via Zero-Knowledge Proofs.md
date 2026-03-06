---
published: "2026-02-25"
link: "https://eprint.iacr.org/2026/385"
authors: ["[[Ruibang Liu]]", "[[Minyu Chen]]", "[[Dengji Ma]]", "[[Guoqiang Li]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Deep learning's hunger for high-quality data has catalyzed a burgeoning economy of decentralized data marketplaces. However, a fundamental trust deficit stifles this ecosystem: buyers fear data poisoning, while sellers fear data leakage. Although the Shapley value offers a rigorous economic framework for fair compensation, its calculation traditionally requires a Trusted Third Party (TTP) to access raw data, creating a single point of failure for privacy. Verifying data valuation without compromising confidentiality remains an open challenge.
> 
> In this paper, we present ZK-DV, the first Zero-Knowledge Proof (ZKP) system designed for verifiable, privacy-preserving data valuation. ZK-DV enables a seller to prove that a claimed valuation score (based on Gradient Shapley) is mathematically consistent with the underlying private data and the buyer's model, without revealing either. Our key technical insight is the architectural coupling of model training and valuation: we construct a specialized arithmetic circuit that combines the valuation logic into the backpropagation, extracting marginal utility scores from intermediate gradients. This design, implemented via the GKR protocol with a hybrid commitment strategy, amortizes the heavy cryptographic overhead through batched processing. Extensive experiments on the MNIST dataset demonstrate that ZK-DV is practical: by optimizing batch sizes, we achieve a $2.7\times$ speedup in proof generation, while maintaining a quantization fidelity of $\rho=1.0$ and a low verification cost ($< 0.2$s). ZK-DV thus bridges the gap between cryptographic integrity and economic fairness, paving the way for trustless data exchange
