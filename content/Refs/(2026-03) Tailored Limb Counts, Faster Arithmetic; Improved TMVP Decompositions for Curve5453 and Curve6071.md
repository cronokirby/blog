---
published: "2026-03-24"
link: "https://eprint.iacr.org/2026/588"
authors: ["[[Murat Cenk]]", "[[N. Gamze Orhon K\u0131l\u0131\u00e7]]", "[[Halil Kemal Ta\u015fk\u0131n]]", "[[O\u011fuz Yayla]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Curve5453 and Curve6071 are Montgomery curves over the primes $2^{545}-3$ and $2^{607}-1$, providing 271- and 302-bit classical security, respectively.
> Their TMVP-based field multiplication in 10-limb representation costs 77 multiplications.
> We reduce this to 60 for Curve5453 ($22\%$ fewer) using a 9-limb radix-$2^{61}$ representation, and to 54 for Curve6071 ($30\%$ fewer) using a 12-limb radix-$2^{51}$ representation with hierarchical block-level TMVP.
> Choosing the limb count to produce $3 \times 3$ Toeplitz blocks aligns the structure with the size-3 TMVP formula, computing each block product in 6 multiplications rather than 9.
> Portable C implementations benchmarked on ARM64 and x86-64 confirm speedups of up to $16\%$ in field multiplication and $13\%$ in scalar multiplication.
> On ARM64, Curve5453 reaches $90.6\%$ of OpenSSL's assembly-optimized NIST P-521 ECDH throughput with 12 additional bits of classical security, and Curve6071 delivers 302-bit classical security at $80.8\%$ of P-521's throughput.
