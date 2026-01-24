---
published: "2026-01-17"
link: "https://eprint.iacr.org/2026/078"
authors: ["[[Ryad Benadjila ]]", "[[Thibauld Feneuil]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Signature schemes based on the MPC-in-the-Head (MPCitH) paradigm play an important role in enabling cryptosystems founded on a wide diversity of hardness assumptions. While the design of such schemes is currently stabilizing, providing efficient implementations on embedded devices remains a critical challenge, as MPCitH frameworks are known to manipulate large data structures and to rely heavily on symmetric primitives.
> 
> In this work, we present a highly optimized implementation of the NIST candidate MQOM (version 2) targeting embedded microcontrollers. Our implementation significantly outperforms existing MPCitH implementations on such platforms, both in terms of memory footprint and execution time. In particular, for the L1 parameter set, we can achieve an SRAM usage below 10 KB, including the key and signature buffers, while preserving practical signing and verification performance.
> 
> We also provide the first memory-friendly implementation of the one-tree technique, which is used to reduce signature sizes in several MPCitH-based schemes. This enables a comparative analysis of the implementation costs of correlated trees versus the one-tree technique. We then demonstrate how streaming and precomputation techniques can further mitigate the impact of the running time and the signature size.
