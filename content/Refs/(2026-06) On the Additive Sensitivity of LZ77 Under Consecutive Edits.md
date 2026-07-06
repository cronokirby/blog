---
published: "2026-06-10"
link: "https://eprint.iacr.org/2026/1238"
authors: ["[[Jeremiah Blocki]]", "[[Seunghoon Lee]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We revisit the problem of mitigating information leakage in the widely used but insecure compress-then-encrypt paradigm. While encryption hides message contents, the ciphertext length is directly related to the length of the compressed message, which may, in turn, leak information about the {\em content} of the message itself. Recent work of Blocki et al. (TCC 2025) proposed an -differentially private approach that adds randomized padding calibrated to the global sensitivity of the compression algorithm, and showed that the global sensitivity of LZ77 is , where  is the input length and  is the sliding
> window size. 
> 
> However, prior analysis focused only on sensitivity with respect to single-character edits, which leads to limited privacy guarantees when protecting longer substrings such as passwords, passphrases, cookies, or confidential user records.  A natural attempt to handle longer secrets is to appeal to group privacy, but for approximate differential privacy, this leads to very poor parameter degradation: in particular, the effective value of  can grow exponentially with the group size .  In this work, we introduce and study the sensitivity of compression schemes under block edits. Specifically, we define two strings to be -neighbors if they differ only within a contiguous interval of length . 
> 
> Our main technical contribution is a nearly tight characterization of the -consecutive sensitivity of LZ77. We show that the -consecutive sensitivity of both LZ77 variants (with and without self-referencing) is at most . In particular, when , the bound simplifies to , matching the known bound for single-character edits. Thus, calibrating noise to the single-character sensitivity of LZ77 already suffices to protect much longer contiguous substrings. We provide matching lower bounds to demonstrate that our upper bound is tight, e.g., when , the -consecutive sensitivity of LZ77 is at least , matching the  term from our upper bound up to a logarithmic factor.
