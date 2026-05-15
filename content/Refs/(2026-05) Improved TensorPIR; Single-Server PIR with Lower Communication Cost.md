---
published: "2026-05-09"
link: "https://eprint.iacr.org/2026/912"
authors: ["[[Yingchu Lv,]]", "[[Yanbin Pan]]", "[[Huaxiong Wang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Private Information Retrieval (PIR) is of growing importance in privacy-preserving data access, as it enables users to retrieve information from databases without revealing their query content, thereby aligning with modern data protection and regulatory standards. State-of-the-art schemes, such as HintlessPIR and TensorPIR proposed by Li et al. at CRYPTO 2024, leverage lattice-based cryptography for efficient and privacy-preserving data retrieval. HintlessPIR achieves a communication complexity of $O(N^{1/2})$, which remains suboptimal for large databases. To further reduce communication overhead, the same work introduces TensorPIR, lowering the asymptotic complexity to $O(N^{1/3})$. However, this improvement requires larger parameters and more CRT moduli, leading to a practical communication cost that is not significantly smaller than that of HintlessPIR.
> 
> In this work, we propose a new framework that rethinks the encryption strategy for the index, reducing both communication and computation costs through fewer CRT moduli. In experiments on 16 GB, 32 GB, 64 GB, and 128 GB databases, our total communication cost drops to as low as 45.5% of TensorPIR's. Theoretically, as $N$ grows, our query and answer sizes are reduced to 36.9% and 22.2% of TensorPIR's, respectively. Compared with HintlessPIR, our scheme achieves lower theoretical communication complexity, leading to substantially smaller practical communication for large $N$. Moreover, our total online time is reduced to 28.9% to 56.1% of HintlessPIR's.
