---
published: "2026-04-08"
link: "https://eprint.iacr.org/2026/693"
authors: ["[[Haiyue Dong]]", "[[Qian Guo]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Hamming Quasi-Cyclic (HQC) has been selected by NIST for standardization in the post-quantum landscape. As deployment approaches, implementation security becomes as critical as mathematical hardness. In this work, we demonstrate that source-level constant-time coding is not a standalone guarantee: the compiled binary must inherently preserve this behavior.
> 
> We identify a severe compiler-induced vulnerability within the official AVX2-optimized implementation of HQC, despite its claims of being constant-time. Although the C source code relies on secure, mask-based conditional selection, certain compiler optimizations rewrite this logic systematically. This transformation silently introduces secret-dependent control flow into the inner Reed-Muller decoding process, resulting in secret-dependent cache access patterns.
> 
> Exploiting this vulnerability, we mount, to the best of our knowledge, the first cache-timing Full-Decryption-style oracle attack against a post-quantum cryptosystem. Using Flush+Reload on shared libraries, an unprivileged co-located adversary can extract fine-grained predicates of the decoder's internal state. To achieve full key recovery, we develop a novel, reliability-aware Soft Information Set Decoding (Soft-ISD) post-processing framework. Leveraging a GPU-accelerated meet-in-the-middle strategy optimized for heterogeneous platforms (including Apple Silicon), we demonstrate end-to-end secret key recovery for hqc-1 with less than 10 seconds of online trace collection.
