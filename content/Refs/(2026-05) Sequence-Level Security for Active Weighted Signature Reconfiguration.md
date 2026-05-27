---
published: "2026-05-20"
link: "https://eprint.iacr.org/2026/1013"
authors: ["[[Sunghyeon Jo]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Active weighted threshold signatures support dynamic changes to signer weights, thresholds, and committee membership. We show that local validity of weighted update operations is not a compositional security abstraction: a sequence of individually valid updates can move an initially
> sub-threshold coalition into an authorized reachable state. We introduce rank-exposure guards, a compiler that enforces a reconstruction-safety invariant over live, stale, derivative, public, and transient signing material. The compiler wraps ledger-sound one-step update engines with atomic activation and old-epoch digest-bound transition certificates, lifting fixed-state weighted unforgeability and update soundness to sequence-level active unforgeability. We instantiate the compiler as REG-ADAPT, a guarded GLI reconfiguration scheme built around ADAPT-style local updates, and implement it on top of the public ADAPT Go artifact. Our evaluation shows that the artifact detects and rejects unsafe update sequences, while adding only microsecond-scale metadata and rank-audit overhead.
