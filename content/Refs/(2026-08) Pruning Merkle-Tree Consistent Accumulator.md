---
published: "2026-08-14"
link: "https://eprint.iacr.org/2026/1685"
authors: ["[[Anna Mendonca]]", "[[Hudson Shi]]", "[[Ivan Pryvalov]]", "[[Amir Herzberg]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Authenticated data structures are widely used to compute compact
> digests of evolving collections of elements and to support efficient verification of element inclusion. However, the authenticated collection often should not grow forever: older elements may expire and no longer require verification. Many implemented append-only approaches, for example used in Certificate Transparency (CT), do not directly support this setting, since previously accumulated elements remain part of the authenticated state indefinitely. In this work, we introduce a pruning accumulator, a stateful accumulator that supports both incremental addition of new elements and pruning of an old prefix of previously accumulated elements. The resulting digest represents the unpruned sequence, while pruned elements are removed from the authenticated state. Unpruned elements continue to support proof-of-inclusion verification, proof
> updates, update verification, and consistency checks. This captures applications that require authenticated, incrementally maintained state over a moving window of elements.
> We present two constructions of Merkle-tree-based pruning accumulators, both with efficient accumulation, prefix pruning, proof generation, proof updating, and verification. The constructions preserve the standard Merkle-tree style of verification for active elements while reducing long-term storage requirements.
> We provide formal definitions, correctness and security analysis, an open-source implementation, and experimental evaluation demonstrating the performance benefits of pruning.
