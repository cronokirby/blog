---
published: "2026-02-19"
link: "https://eprint.iacr.org/2026/328"
authors: ["[[Xuanya Zhu]]", "[[Liqun Chen]]", "[[Yangguang Tian]]", "[[Gaofei Wu]]", "[[Xiatian Zhu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> A Chosen-Plaintext Attack (CPA) is a cryptographic analysis game for encryption, where an adversary queries an encryption oracle with plaintexts and observes the mapping to their ciphertexts. At an arbitrary time, it provides two challenge plaintexts but receives only one ciphertext, and finally guesses which of the two challenge plaintexts has been encrypted. Neural distinguishers, as a powerful representative of Artificial Intelligence (AI) methods, have been recently used in cryptographic analysis methods. However, they cannot directly be applied to perform CPA due to different input requirements and objectives. This work aims to address this gap. We provide the first rigorous and systematic formulation of CPA from a deep learning perspective.
> Specifically, we introduce NeuralCPA, a novel deep neural network-based method designed for the evaluation of block cipher CPA security as an initial effort for AI-based CPA analysis. We empirically validate its effectiveness across a diverse range of block ciphers, including SIMON, SPECK, LEA, HIGHT, XTEA, TEA, PRESENT, AES, and KATAN. We also analyze the stream cipher CHACHA, restricting our study to its internal permutation rather than the complete keystream construction. Our experimental results confirm that NeuralCPA consistently achieves significant distinguishing advantages in round-reduced settings. Notably, our attack success rate ranges from 51% to 76.4%.
