---
published: "2026-01-19"
link: "https://eprint.iacr.org/2026/086"
authors: ["[[David Heath]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> General-purpose secure multiparty computation (MPC) remains bottlenecked in large part by a lack of efficient techniques for handling memory access. We demonstrate a remarkably simple and efficient 2PC instantiation of random access memory (RAM), based on distributed point functions (DPFs, Gilboa and Ishai, Eurocrypt'14). Our semi-honest 2PC protocol can be achieved from oblivious transfer (OT) and a black-box pseudorandom generator (PRG).
> 
> For a memory that stores large enough data words, our 2PC RAM incurs constant communication overhead per access. Like prior works that leverage DPFs to achieve memory access, our work incurs linear computation per access, but our per-access communication is lean.
> 
> Our 2PC RAM is built on top of an obliviousness-friendly model of computation called the single access machine model (SAM, Appan et al., CCS'24).  In the SAM model, each memory slot can be read at most once. We present a simple 2PC SAM protocol, where each single-access memory operation incurs at most $2w + O(\lambda \lg n)$ bits of communication, where $w$ is the word size, $n$ is the number of memory words, and $\lambda$ is a security parameter. Of this cost, only $2w + 2\lg n$ bits are incurred in the online phase.
> 
> Our RAM operations are (non-cryptographically) compiled to SAM operations.  At most a logarithmic number of SAM operations are needed per RAM operation; if word size is large, even fewer SAM operations are required.  Alternatively, there are now many oblivious algorithms that compile directly  to SAM more efficiently than via a compilation to RAM, and our 2PC SAM can  instantiate these algorithms.  As one example, we can use our 2PC SAM to implement privacy-preserving  graph traversal (DFS or BFS) over a secret-shared size-$n$ graph while  revealing nothing beyond the runtime of the SAM program.  Our construction achieves online communication $O(n \lg n)$ bits, asymptotically matching the number of  bits touched in a corresponding cleartext graph traversal.
