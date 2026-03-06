---
published: "2026-02-19"
link: "https://eprint.iacr.org/2026/329"
authors: ["[[Pascal Giorgi]]", "[[Bruno Grenet]]", "[[Mark Simkin]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Oblivious ciphertext compression and decompression transform encrypted dense vectors of length $n$ with at most $t$ non-zero entries into compact encrypted sparse representations, and vice versa. 
> These primitives appear in the context of efficient protocols for encrypted search, PIR, and oblivious message retrieval.
> Existing schemes suffer from large ciphertext sizes or high computational cost. 
> We present new deterministic and perfectly correct constructions based on linear codes, yielding encrypted sparse representations of optimal size with near-linear compression and decompression times. 
> Our results improve both communication and computation over prior work.
> A central ingredient of our work is to show that, for carefully chosen generalized Reed–Solomon codes, variants of classical decoding algorithms combined with efficient algebraic techniques enable to recover the error vector directly from the syndrome in quasi-linear time in the syndrome length, rather than in the full block length of the code.
