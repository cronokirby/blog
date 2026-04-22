---
published: "2026-04-11"
link: "https://eprint.iacr.org/2026/710"
authors: ["[[Diego F. Aranha]]", "[[Giacomo Borin]]", "[[Sofia Celi]]", "[[Guilhem Niot]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Threshold signatures distribute trust across multiple parties, eliminating
> single points of failure and reducing insider and key-exfiltration risks—properties that are increasingly important for high-assurance deployments and recently emphasized by NIST’s Multi-Party Threshold Cryptography (MPTC) initiative. We present a practical t-out-of-n threshold variant and emulation of MAYO, a post-quantum signature candidate to NIST’s call for additional signatures. Our proposal builds
> upon the threshold MAYO design of Celi, Escudero and Niot (PQCrypto2025), which we significantly refine to achieve practical performance. To this end, we introduce two algorithmic modifications to MAYO tailored for the distributed setting: (1) Explicit-Salt MAYO, which allows for pre-determined salts to enable a single-round online phase; and (2) Depth-Reduced MAYO, which restructures the signing algorithm to minimize the depth of secret-dependent operations. We then propose a unified protocol framework that integrate these techniques, plus other MPC specific optimizations, with the goal of minimizing online latency. Finally, we provide a concrete instantiation and local emulation in the dishonest majority setting, secure against active adversaries. Our emulation shows that threshold signing is practical at typical threshold sizes and amenable to deployment. By releasing an open-source implementation and reporting end-to-end performance, this work offers a concrete reference for the thresholdization of post-quantum signatures. Clearly the aforementioned framework is not limited to MAYO, and can be applied to the UOV family of signatures more generally.
