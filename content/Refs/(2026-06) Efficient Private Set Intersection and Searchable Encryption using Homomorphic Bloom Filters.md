---
published: "2026-06-16"
link: "https://eprint.iacr.org/2026/1267"
authors: ["[[Anil Kumar Pradhan]]", "[[Killari Nandini]]", "[[Harsh Kasyap]]", "[[Sayantan Mukherjee]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Existing encrypted search and private set intersection (PSI) protocols struggle to reconcile post-quantum security with practical efficiency, often leaking search and access patterns or requiring prohibitively deep fully homomorphic encryption (FHE) circuits. We address these limitations by introducing a new Homomorphic Bloom Filters (HBF) framework, a quantum-resilient framework that embeds length- Bloom filters directly into the plaintext space of an RLWE-based FHE scheme, enabling shallow homomorphic evaluation and matching without structural leakage. 
> Building on HBF, we construct a searchable encryption (SE) scheme and a private set intersection (PSI) protocol, both based on a depth-1 homomorphic missing-bit circuit. The SE scheme requires no rotations or bootstrapping at server side and incurs no additional computational cost as the number of query keywords increases. 
> The PSI protocol reduces each packed Bloom-filter comparison to a single ciphertext--plaintext multiplication, with cost depending on the Bloom-filter length rather than direct element-wise comparisons with the responder's set.
> This framework confines leakage to benign dataset dimensions, tunable false-positive rates, and other public metadata, thereby eliminating explicit pattern leakage.
