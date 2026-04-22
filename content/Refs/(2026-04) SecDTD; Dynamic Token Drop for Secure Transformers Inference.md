---
published: "2026-04-14"
link: "https://eprint.iacr.org/2026/731"
authors: ["[[Yifei Cai]]", "[[Zhuoran Li]]", "[[Yizhou Feng]]", "[[Qiao Zhang]]", "[[Hongyi Wu]]", "[[Danella Zhao]]", "[[Chunsheng Xin]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The rapid adoption of Transformer-based AI has been driven by accessible models such as ChatGPT, which provide API-based services for developers and businesses. However, as these online inference services increasingly handle sensitive inputs, privacy concerns have emerged as a significant challenge. To address this, secure inference frameworks have been proposed, but their high computational and communication overhead often limit practical deployment. In plaintext settings, token drop is an effective technique for reducing inference cost; however, our analysis reveals that directly applying such methods to ciphertext scenarios is suboptimal due to distinct cost distributions in secure computation. We propose SecDTD, a dynamic token drop scheme tailored for secure Transformer inference. SecDTD advances token drop by shifting the dropping to earlier inference stages, effectively reducing the cost of key components such as Softmax. To support this, we introduce two core techniques. Max-Centric Normalization (MCN): A novel, Softmax-independent scoring method that enables early token drop with minimal overhead and improved normalization, supporting more aggressive dropping without accuracy loss. OMSel: A faster, oblivious median selection protocol that securely identifies the median of importance scores to support token drop. Compared to existing sorting-based methods, OMSel achieves a 16.9 times speedup while maintaining security, obliviousness and randomness. We evaluate SecDTD through 48 experiments across eight GLUE datasets under various network settings using the BOLT and BumbleBee frameworks. SecDTD achieves 4.47 times end-to-end inference acceleration without degradation in accuracy.
