---
published: "2026-04-17"
link: "https://eprint.iacr.org/2026/761"
authors: ["[[Can Liu]]", "[[Lenny Liu]]", "[[Ning Luo]]", "[[David Heath]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Consider the problem of merging inside a garbled circuit (GC) two arrays of $w$-bit elements, yielding a single length-$n$ array. This garbled merge problem is core to garbled random access memory (GRAM), a technique that enables efficient garbling of general-purpose programs. We present a novel symmetric-key-based garbled merge that achieves a garbling size of $(w + 1) \cdot n \cdot \lambda$ bits, providing both asymptotic and concrete improvements over the state of the art. By applying our garbled merge, we obtain a symmetric-key GRAM of size $O(n \lg^3 n \cdot \lambda) \cdot \omega(1)$ for a word RAM program that manipulates words of size $\Theta(\lg n)$ bits and halts within $n$ steps, improving over the previous best result (Heath et al., CRYPTO'23) by an $O(\lg \lg n)$ factor. This communication cost was previously only achieved under the public-key-style DDH assumption (Gu et al., CRYPTO'25). We implement our construction, and our evaluation shows that our garbled merge reduces the communication cost over the DDH-based merge by about $3\times$.
