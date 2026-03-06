---
published: "2026-02-23"
link: "https://eprint.iacr.org/2026/363"
authors: ["[[Omar Ahmed]]", "[[Nektarios Georgios Tsoutsos]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Fully Homomorphic Encryption (FHE) is a modern cryptographic technique that allows performing computations directly over encrypted data. This makes FHE an indispensable method for privacy-preserving applications, where users' data are encrypted and processed by a potentially untrusted third party. Nevertheless, FHE computations are computationally expensive, often rendering them less practical for realistic scenarios. Notably, a major performance bottleneck for FHE is an operation called bootstrapping that allows refreshing the inherent noise of an FHE ciphertext so it could support more computations. In this work, we introduce LazyArc, a versatile lightweight dynamic Out-of-Order (OoO) engine that supports higher-throughput FHE computations expressed as a sequence of instructions. Notably, LazyArc encapsulates a hybrid engine capable of evaluating both arithmetic and Boolean instructions in the same program. Moreover, our proposed OoO paradigm improves the runtime performance by masking the latency of bootstrapping by executing of independent instructions in an FHE application. To enable LazyArc, we introduce a novel data structure, dubbed RegisterMap, which performs static analysis on FHE arithmetic circuits and tracks the noise of each ciphertext to allow proactive bootstrapping scheduling. Our approach is evaluated using linear algebra benchmarks and can achieve about 10% performance improvement over baselines.
