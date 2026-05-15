---
published: "2026-04-29"
link: "https://eprint.iacr.org/2026/840"
authors: ["[[Dimitrios Schoinianakis]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> A practical acceleration framework for CKKS homomorphic encryption is proposed, in which multiplication-heavy sub-circuits are evaluated by adding encrypted log-magnitudes rather than multiplying ciphertexts. This logarithmic-number-system (LNS) representation consumes no multiplicative levels; a lightweight interactive refresh operation re-enters the linear CKKS domain whenever additive accumulation is required, avoiding bootstrapping entirely. Three execution strategies---an automatic planner, a client-side accumulation variant, and a server-side re-encryption variant---are mechanized in an OpenFHE-based runtime under 128-bit classical security and evaluated on a deep multiplication chain and an attention-like pipeline across three network environments. On the attention pipeline, the linear baseline requires a ring degree of 65,536 and about 2.9 GB of public-context material, whereas LNS operates at a ring degree of 8,192 with about 50 MB---a 58x context reduction yielding 22-36x end-to-end speedup and up to 46x payload reduction. On the multiplication chain the gap widens with depth, from about 10x speedup and 26x payload reduction at L=8 matrices, to 35x and 98x at L=20, because LNS context requirements are decoupled from multiplicative depth while the linear baseline must escalate its ring degree to maintain accuracy and security.
