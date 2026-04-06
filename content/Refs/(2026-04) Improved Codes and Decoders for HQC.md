---
published: "2026-04-04"
link: "https://eprint.iacr.org/2026/656"
authors: ["[[Sebastian Bitzer]]", "[[Bharath Purtipli]]", "[[Antonia Wachter-Zeh]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The Hamming Quasi-Cyclic (HQC) cryptosystem, recently selected by NIST for standardization, uses a concatenation of Reed-Muller (RM) and Reed-Solomon (RS) codes to ensure correct decryption.
> This work optimizes the underlying code and decoder with the goal of reducing ciphertext and public-key sizes. First, we propose a two-level generalized concatenated code (GCC), exploiting the observation that the inner RM code contains a repetition subcode. The repetition layer incurs a smaller inner failure probability and, therefore, admits a higher code rate than the RS code. Second, we develop a reliability-based decoding framework for the outer code. The inner decoder provides a reliability measure whose distribution, jointly with the decoding outcome, is bounded analytically. These bounds allow deriving conservative DFR guarantees for two erasure-assignment strategies (threshold-based and partition-based).
> Combining both contributions, we observe that public-key and ciphertext sizes can be reduced by up to 4.34%.
