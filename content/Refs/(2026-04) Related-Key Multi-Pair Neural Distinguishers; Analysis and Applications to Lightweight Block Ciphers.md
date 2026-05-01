---
published: "2026-04-16"
link: "https://eprint.iacr.org/2026/748"
authors: ["[[Thanh-Phong Nguyen]]", "[[Nguyen Tan Cam]]", "[[Thanh-Hien Vu]]", "[[Van-Than Huynh]]", "[[Hieu-Minh Nguyen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Neural differential cryptanalysis has recently been extended to related-key and multi-pair settings, enabling neural distinguishers to aggregate weak statistical biases across multiple ciphertext pairs. However, the statistical origin of the exploited signal remains insufficiently understood. In this work, we present a signal-centric analysis of related-key, multi-pair neural distinguishers across four block ciphers: PRESENT-80, SIMECK-32/64, LEA-128, and HIGHT.
> 
> We characterize ciphertext distributions using model-independent geometric metrics derived from Principal Component Analysis (PCA) embeddings and silhouette scores, and relate these data-level measurements to neural distinguishing performance under varying levels of aggregation. Across all evaluated ciphers, multi-pair aggregation amplifies weak ciphertext-level statistical biases through variance reduction, thereby extending distinguishability beyond the single-pair setting.
> 
> However, this effect is inherently limited by the progressive decay of ciphertext-level signal as the number of rounds increases, leading to well-defined difficulty boundaries where both geometric separability and neural performance collapse. In low-signal regimes, aggregation enables measurable, albeit limited, accuracy, indicating the presence of residual statistical structure. Generalization experiments further show that neural distinguishers fail to maintain predictive capability beyond the empirical boundary, with performance rapidly converging to the random baseline.
> 
> These findings suggest that neural distinguishing performance is fundamentally constrained by the underlying ciphertext-level signal rather than model capacity. Overall, this study provides a unified interpretation of the capabilities and limitations of multi-pair neural cryptanalysis.
