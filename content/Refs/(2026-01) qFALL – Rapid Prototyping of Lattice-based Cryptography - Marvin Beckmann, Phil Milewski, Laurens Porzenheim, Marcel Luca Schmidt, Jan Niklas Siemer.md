---
published: "2026-01-16"
link: "https://eprint.iacr.org/2026/069"
authors: ["[[Marvin Beckmann]]", "[[Phil Milewski]]", "[[Laurens Porzenheim]]", "[[Marcel Luca Schmidt]]", "[[Jan Niklas Siemer]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We introduce qFALL, an open-source library for rapid prototyping of lattice-based cryptography written in Rust. qFALL is designed to bridge the gap between theory and practice by offering a modular architecture that provides a theory-affine, flexible, high-level interface for mathematics and common algorithms in lattice-based constructions with representative runtime performance. This enables researchers to rapidly assemble minimal working prototypes that are easily auditable, modifiable, and allow users to assess algorithmic trade-offs as well as the viability of their constructions early in the development cycle. Furthermore, the library supports an incremental optimization workflow, allowing users to replace bottlenecks with optimized modules to evolve the codebase toward a fully optimized implementation. We demonstrate that qFALL allows for efficient assembly of auditable cryptographic constructions that approximate the performance of optimized implementations and serve as a reusable resource to the scientific community.
