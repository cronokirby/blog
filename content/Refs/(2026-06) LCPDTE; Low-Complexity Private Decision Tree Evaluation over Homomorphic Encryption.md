---
published: "2026-06-16"
link: "https://eprint.iacr.org/2026/1263"
authors: ["[[Dongjin Park]]", "[[Gyeongwon Cha]]", "[[Joon-Woo Lee]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> As machine-learning-as-a-service (MLaaS) becomes ubiquitous, protecting model queries via private inference is increasingly critical. Existing homomorphic encryption (HE)-based protocols for Private Decision Tree Evaluation (PDTE) have server complexity that scales at least as  in the tree depth , so the cost of evaluating each tree grows exponentially with depth; in gradient boosted decision tree (GBDT) ensembles, where predictions aggregate the outputs of many trees, this per-tree cost is directly amplified.
> 
> In this paper, we present a non-interactive HE-based PDTE protocol built on the CKKS scheme with an end-to-end complexity of , where  is the input bit-length. To the best of our knowledge, this is the first HE-based PDTE scheme that asymptotically improves over the  dependence on  while remaining non-interactive. We address two depth-driven sources of  dependence in existing protocols: we use the One-Branch-Only (OBO) paradigm from PROBONITE for comparisons, and we design the Baby-Step Giant-Step based Branch Selection algorithm for traversal. To further exploit the structure of GBDT ensembles, we deploy the batched bootstrapping technique by applying level-major tree evaluation.
> 
> Our experimental results show that, at depth , our protocol reduces communication by  and runtime by  compared to FASTER, which is the fastest prior HE-based non-interactive PDTE baseline in our amortized setting, and the advantage increases as  grows. These results suggest that our design provides a practical path toward depth-scalable HE-based PDTE for large boosted ensembles.
