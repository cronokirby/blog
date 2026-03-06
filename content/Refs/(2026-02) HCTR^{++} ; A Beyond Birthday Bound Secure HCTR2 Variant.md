---
published: "2026-02-24"
link: "https://eprint.iacr.org/2026/383"
authors: ["[[G\u00fclnihal \u00d6zt\u00fcrk]]", "[[Onur Ko\u00e7ak]]", "[[O\u011fuz Yayla]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Current industry-standard block cipher modes of operation, such as CBC and GCM, are fundamentally limited by the birthday bound $O(2^{n/2})$, a constraint that has evolved from a theoretical concern into a practical security bottleneck in contemporary high-throughput, high-data-volume environments. To address this, the cryptographic community and NIST are prioritizing Beyond Birthday Bound (BBB) security to extend the operational security margin toward the full block size $O(2^n)$. Achieving BBB security requires a departure from traditional constructions, primarily utilizing three methodologies: XOR of Permutations (XORP), Tweakable Block Ciphers (TBCs), and Fresh Rekeying. While none of these innovative BBB modes have been formally standardized, NIST has initiated the Accordion Mode project, defining a new primitive class: the Tweakable Variable-Input-Length Strong Pseudorandom Permutation (VIL-SPRP). This primitive treats the entire message as a single, indivisible block and expects the submission of BBB-secure variants. To contribute to this standardization effort, we propose a simple BBB-secure variant of the HCTR2 algorithm. We first explain the core BBB methodologies, then discuss the operational mechanism of HCTR2, and finally present our proposed BBB-secure construction.
