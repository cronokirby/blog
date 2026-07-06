---
published: "2026-06-25"
link: "https://eprint.iacr.org/2026/1315"
authors: ["[[Bilel Zaghdoudi]]", "[[Maria Potop Butucaru]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Ensuring the integrity and traceability of data transformations in
> distributed systems presents significant challenges, particularly in
> environments where data privacy and decentralization are paramount.
> This paper introduces a novel secure lineage verification
> system based on Directed Acyclic Graphs (DAGs) and homomorphic
> hash functions, VERDICT. Our approach represents data artifacts
> and their transformations as two interconnected DAGs: a Data DAG
> tracking data dependencies and an Event DAG capturing causality
> between transformation events. We propose a level-based DAG
> compression technique that decomposes these graphs based on
> distance from genesis nodes, enabling efficient verification through
> skip DAG structures. The system incorporates bucket indexing and
> Merkle tree verification to provide cryptographic guarantees of
> data and event existence. We present formal algorithms for DAG
> construction, level-based hashing, skip DAG traversal, and verification
> processes. Security analysis demonstrates the system’s resistance
> to tampering and modification attacks while maintaining
> privacy. Replay attacks are prevented through an application-layer
> challenge-response mechanism. Our approach has significant applications
> in federated learning environments and decentralized
> architectures, where it can serve as a notary component for tracing
> events without compromising data confidentiality. Theoretical analysis
> shows that our method achieves verification in 𝑂(log𝑛) time
> in the number of DAG levels, independent of the number of nodes
> per level, making it suitable for large-scale distributed systems.
