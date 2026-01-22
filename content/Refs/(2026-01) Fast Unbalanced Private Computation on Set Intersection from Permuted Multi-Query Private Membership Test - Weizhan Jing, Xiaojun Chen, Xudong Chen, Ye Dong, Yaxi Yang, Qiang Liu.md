---
published: "2026-01-08"
link: "https://eprint.iacr.org/2026/029"
authors: ["[[Weizhan Jing]]", "[[Xiaojun Chen]]", "[[Xudong Chen]]", "[[Ye Dong]]", "[[Yaxi Yang]]", "[[Qiang Liu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Unbalanced private computation on set intersection (uPCSI) enables two parties to securely compute fine-grained functions over $X\cap Y$, where $|Y|\ll |X|$. 
> Existing works proposed a uPCSI framework based on fully homomorphic encryption (FHE)-based private set intersection (PSI) protocols. 
> However, their solutions face efficiency limitations, as they introduce an additional comparison procedure with a complexity of $\mathcal{O}(|Y|\log|X|)$.
> 
> In this paper, we present a lightweight uPCSI framework with semi-honest security. First, we propose a permuted multi-query private membership test (pmqPMT) protocol and its labeled variant from the FHE-based PSI, thereby avoiding the costly comparison procedure. Upon our pmqPMT, we propose an optimized uPCSI framework for computing arbitrary functions over the intersection, along with several specific optimizations for better efficiency. Besides, our framework can be extended to support more comprehensive labeled uPCSI requirements, covering both single-labeled and double-labeled cases. Compared to the state-of-the-art uPCSI protocols, we achieve over a $4.7\times$ online speedup and reduce communication costs by 15% on average.
