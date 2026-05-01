---
published: "2026-04-19"
link: "https://eprint.iacr.org/2026/769"
authors: ["[[Yi-Lin Hung]]", "[[Jiun-Peng Chen]]", "[[Ho-Lin Chen]]", "[[Bo-Yin Yang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> This paper presents the first high-order fully-shared masking construction for MQOM v2.1, a candidate in NIST's additional digital signature standardization process. We provide a baseline high-order masked signing design for MQOM v2.1, prove its security in the standard probing leakage model, and validate the implementation through a comprehensive TVLA campaign. To mitigate the online-time bottleneck in masked signing, we further introduce an optional Rijndael LUT-based acceleration mode that decouples offline precomputation from online signing. Although this accelerated mode incurs higher offline time and memory costs, it can run during idle periods and significantly reduce online signing latency. We implement and benchmark all 36 MQOM v2.1 signing variants over GF(2), GF(16), and GF(256), and report comprehensive performance and leakage-evaluation results for both the baseline and accelerated designs.
