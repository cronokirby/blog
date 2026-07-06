---
published: "2026-06-17"
link: "https://eprint.iacr.org/2026/1276"
authors: ["[[Gabriel Kaptchuk]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Modern, deployed key transparency systems rely on auditors to ensure that updates to the set of keys are well-structured, allowing clients to efficiently monitor their own keys.   In practice, the server's consistency proofs are very large, requiring computationally powerful auditors; as a result, real-world deployments have very few auditors.
> 
> We propose a new key transparency system based on a new data structure called Forget-me-not trees, which is a careful composition of Merkle trees and Bloom filters.  The resulting system reduces the size of audit proofs by , from 15MB-30MB down to only 30KB-60KB.  Our construction is the first mass-scale auditable key transparency system that relies only on hash functions.
