---
published: "2026-02-10"
link: "https://eprint.iacr.org/2026/221"
authors: ["[[Asmaa Cherkaoui]]", "[[Faraz Heravi]]", "[[Delaram Kahrobaei]]", "[[Siamak F. Shahandashti]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The advent of quantum computation compels the cryptographic community to design digital signature schemes whose security extends beyond the classical hardness assumptions. In this work, we introduce Spinel, a post-quantum digital signature scheme that combines the proven security of SPHINCS+ (CCS 2019) with a new family of algebraic hash functions (Adv. Math. Commun. 2025) derived from the Tillich-Zémor paradigm (Eurocrypt 2008) with security rooted in the hardness of navigating expander graphs over $\mathrm{SL}_n(\mathbb{F}_p)$, a problem believed to be hard even for quantum adversaries. We first provide empirical evidence of the security of this hash function, complementing the original theoretical analysis. We then show how the hash function can be integrated within the SPHINCS+ framework to give a secure signature scheme. We then model and analyze the security degradation of the proposed scheme, which informs the parameter selection we discuss next. Finally, we provide an implementation of the hash function and the proposed signature scheme Spinel as well as detailed empirical results for the performance of Spinel showing its feasibility in practice. Our approach lays the foundations for the design of algebraic hash-based signature schemes, expanding the toolkit of post-quantum cryptography.
