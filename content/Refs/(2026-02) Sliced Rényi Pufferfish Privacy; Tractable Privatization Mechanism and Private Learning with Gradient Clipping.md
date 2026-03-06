---
published: "2026-02-19"
link: "https://eprint.iacr.org/2026/321"
authors: ["[[Tao Zhang]]", "[[Yevgeniy Vorobeychik]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We study the design of a privatization mechanism and privacy accounting in the Pufferfish Privacy (PP) family. Specifically, motivated by the curse of dimensionality and lack of practical composition tools for iterative learning in the recent Rényi Pufferfish Privacy (RPP) framework, we propose Sliced Rényi Pufferfish Privacy (SRPP). SRPP preserves PP/RPP semantics (customizable secrets with probability-aware secret–dataset relationships) while replacing high-dimensional Rényi divergence with projection-based quantification via two sliced measures, Average SRPP and Joint SRPP. We  develop sliced Wasserstein mechanisms, yielding sound SRPP certificates and closed-form Gaussian noise calibration. For iterative learning systems, we introduce an SRPP-SGD scheme with gradient clipping and new accountants based on History-Uniform Caps (HUC) and a subsampling-aware variant (sa-HUC), enabling decompose-then-compose privatization and additive composition under a common slicing geometry. Experiments on static and iterative privatization show that the proposed framework exhibits favorable privacy–utility trade-offs, as well as practical scalability.
