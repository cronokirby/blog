---
published: "2026-03-08"
link: "https://eprint.iacr.org/2026/476"
authors: ["[[Nakul Khambhati]]", "[[Anwesh Bhattacharya]]", "[[David Heath]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Garbling schemes are powerful primitives that enable secure computation between a mutually untrusting garbler and evaluator. A projective garbling scheme is one that encodes the evaluator's input in a simple bit-by-bit manner. Projective schemes, such as the seminal scheme of Yao, are versatile, as they are naturally compatible with other simple tools, such as $1$-out-of-$2$ oblivious transfer (OT). There exist garbling schemes that naturally operate over large finite fields, some of which require only efficient information-theoretic (IT) techniques. However, here the evaluator's input is encoded via an affine function over a large field, so these schemes are not naturally projective, reducing their versatility.
> 
> We provide a transformation that efficiently projectivizes such schemes.
> Consider an arithmetic garbling scheme where the evaluator's input consists of elements from a large prime field. Our symmetric-key-based garbling techniques give a mechanism to translate from Yao-style garbled labels to IT-style garbled labels at cost proportional to the input and output labels: crossing the border is duty-free!
> 
> We apply our technique to two problems.
> (1) Recent works show that projective garbling schemes solve a problem central to trust-minimized bridges for the Bitcoin blockchain. BABE (Garg et al., 2026) and Argo MAC (Eagen and Lai, 2026) give two different approaches. Both works implicitly construct an efficient IT garbling scheme, then use naive bit-decomposition to achieve projectivity. We construct drop-in replacements for both; we improve BABE's encoding size by $45\times$, and Argo MAC's by $20\times$.
> (2) Our technique implies a non-interactive reduction from vector oblivious linear evaluations (VOLEs) over $\mathbb{F}_p$ to $1$-out-of-$2$ OTs. To our knowledge, ours is the state-of-the-art Minicrypt (plus base OTs) protocol for large field VOLE secure against a malicious receiver. It costs only $O((\lambda + n) \lg p)$ bits.
