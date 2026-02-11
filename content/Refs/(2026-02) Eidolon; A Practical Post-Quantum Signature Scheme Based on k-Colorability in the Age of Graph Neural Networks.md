---
published: "2026-02-02"
link: "https://eprint.iacr.org/2026/173"
authors: ["[[Asmaa Cherkaoui]]", "[[Ram\u00f3n Flores]]", "[[Delaram Kahrobaei]]", "[[Richard C. Wilson]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We propose Eidolon, a practical post-quantum signature scheme grounded in the NP-complete $k$-colorability problem. Our construction generalizes the Goldreich–Micali–Wigderson zero-knowledge protocol to arbitrary $k \geq 3$, applies the Fiat–Shamir transform, and uses Merkle-tree commitments to compress signatures from $O(tn)$ to $O(t \log n)$. Crucially, we generate hard instances via planted “quiet” colorings that preserve the statistical profile of random graphs. We present the first empirical security analysis of such a scheme against both classical solvers (ILP, DSatur) and a custom graph neural network (GNN) attacker. Experiments show that for $n \geq 60$, neither approach recovers the secret coloring, demonstrating that well-engineered $k$-coloring instances can resist modern cryptanalysis, including machine learning. This revives combinatorial hardness as a credible foundation for post-quantum signatures.
