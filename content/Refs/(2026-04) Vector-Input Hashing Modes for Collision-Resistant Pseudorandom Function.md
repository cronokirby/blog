---
published: "2026-04-20"
link: "https://eprint.iacr.org/2026/771"
authors: ["[[Shoichi Hirose]]", "[[Tetsu Iwata]]", "[[Hidenori Kuwakado]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> This paper presents vector-input keyed hashing modes that construct collision-resistant pseudorandom functions (CR PRFs) using a keyed hash function, where a vector refers to a sequence of variable-length strings. The proposed vector-input keyed hashing modes, VIM1 and VIM2, originate from the intuition that a string-input keyed hashing mode using a compression function results in a vector-input keyed hashing mode by replacing the compression function with a hash function.
> Combined with the recently proposed string-input keyed hashing modes KHC1 or KHC2, VIM1 and VIM2 are shown to yield CR PRFs from a compression function satisfying extended collision resistance and being a secure PRF under related-key attacks. Extended collision resistance means that it is intractable to find a distinct input pair whose output difference falls within a small set. This paper also introduces a keyed hashing mode, PVIM, which allows parallel processing of strings in a vector. However, it requires more calls to the underlying keyed hash function than VIM1 and VIM2 do. To the best of our knowledge, this is the first proposal of dedicated vector-input CR PRFs.
