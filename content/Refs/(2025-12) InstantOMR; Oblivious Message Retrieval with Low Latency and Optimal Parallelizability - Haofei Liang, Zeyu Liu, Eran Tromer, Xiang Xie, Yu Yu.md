---
published: "2025-12-23"
link: "https://eprint.iacr.org/2025/2317"
authors: ["[[Haofei Liang]]", "[[Zeyu Liu]]", "[[Eran Tromer]]", "[[Xiang Xie]]", "[[Yu Yu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Anonymous messaging systems, such as privacy-preserving blockchains and private messaging applications, need to protect recipient privacy: ensuring no linkage between the recipient and the message. This raises the question: how can untrusted servers assist in delivering the pertinent messages to each recipient, without requiring the recipient to linearly scan all messages or revealing the intended recipient of each message? Oblivious message retrieval (OMR), a recently proposed primitive, addresses this issue by using homomorphic encryption in the single-server setting.
> 
> This work introduces $\mathsf{InstantOMR}$, a novel OMR scheme that combines TFHE functional bootstrapping with standard RLWE operations in a hybrid design, achieving significant improvements in both latency and parallelizability compared to prior BFV-based schemes. We propose a two-layer bootstrapping architecture and hybrid use of TFHE and regular RLWE homomorphic operations for $\mathsf{InstantOMR}$. Our implementation, using the $\mathsf{Primus}$-$\mathsf{fhe}$ library (and estimates based on $\mathsf{TFHE}$-$\mathsf{rs}$), demonstrates that $\mathsf{InstantOMR}$ offers the following key advantages:
> 
>     - Low latency: $\mathsf{InstantOMR}$ achieves ${\sim} 860\times$ lower latency than $\mathsf{SophOMR}$, the state-of-the-art single-server OMR construction. This translates directly into reduced recipient waiting time (by the same factor) in the streaming setting, where the detector processes incoming messages on-the-fly and returns a digest immediately upon the recipient becoming online.
> 
>     - Optimal parallelizability: $\mathsf{InstantOMR}$ scales near-optimally with available CPU cores (by processing messages independently), so for high core counts, it is faster than SophOMR (whose parallelism is constrained by its reliance on BFV).
