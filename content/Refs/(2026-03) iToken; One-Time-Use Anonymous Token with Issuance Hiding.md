---
published: "2026-03-22"
link: "https://eprint.iacr.org/2026/570"
authors: ["[[Zengpeng Li]]", "[[Xiangyu Su]]", "[[Dongfang Wei]]", "[[Guangyu Liao]]", "[[Mei Wang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Privacy-Enhancing Know Your Customer (KYC) integrates one-time-use anonymous tokens (OTATs) into self-sovereign identity frameworks, such as the EU Digital Identity (EUDI) Wallet, Apple’s Private Access Tokens, and W3C’s Privacy-Preserving Advertising proposals (e.g., Private State Tokens), to enable regulatory compliance while preserving user anonymity. To mitigate targeted denial-of-service (DoS) attacks and prevent token misuse (e.g., farming and replay), this paper designs a new OTAT, iToken, that first achieves issuer hiding not only at verification but also throughout issuance, thereby strengthening both OTAT’s resilience and user privacy. We introduce a new primitive, a canonical blind ring signature (BRS), that adopts a blind-and-ring pattern, ensuring the ring structure is present from the outset and is initiated by the signer within the interactive blind signing protocol. We also provide two generic constructions, one from a linear function (LF) and homomorphic encryption, and another from an LF and a commit-and-prove sum argument. We finally prototype BRS and iToken, achieving efficient signing bandwidth and competitive computational performance.
