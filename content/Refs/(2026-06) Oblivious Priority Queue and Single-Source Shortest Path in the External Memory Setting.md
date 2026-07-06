---
published: "2026-06-18"
link: "https://eprint.iacr.org/2026/1285"
authors: ["[[Arya Maheshwari]]", "[[Elaine Shi]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The study of oblivious algorithms is concerned with designing privacy-preserving algorithms whose memory access patterns reveal nothing about the secret inputs. Such algorithms have been deployed at scale in production systems, most notably in Signal's private contact discovery service. So far, all practical implementations of oblivious algorithms (e.g., those by Signal and Meta) rely on trusted hardware and operate within the external-memory model of computation. While it is known how to generically compile an arbitrary program to execute obliviously on an external-memory target machine, such generic oblivious simulations trade asymptotical efficiency for generality and therefore are rarely used in practice. Instead, customized oblivious algorithms tailored for the computational tasks of interest are almost always favored. 
> 
> In this paper, we explore the single-source shortest path (SSSP) problem, a fundamental algorithmic building block with broad applications in scheduling, routing, graph mining, resource allocation and flow optimization. We present an external-memory oblivious SSSP algorithm for undirected graphs that achieves I/O efficiency  and total work  assuming , where  denotes the number of vertices,  denotes the number of edges, and  and  represent the target machine's cache size and block size, respectively. Our algorithm almost matches the best known non-private external-memory algorithm for SSSP, up to a  factor in the second term of the I/O bound. The remaining  gap is conjectured to be an inherent barrier, since making the underlying priority queue oblivious requires an  blowup in I/O cost, which is known to be inherent. 
> 
> As a by-product, we develop an improved external-memory oblivious priority queue that supports DecrKey operations. Specifically, while the construction of Jafargholi et al. attains optimal I/O efficiency, it is suboptimal in total work under a strong notion of obliviousness—where the adversary can observe both block-level and word-level accesses. This stronger security guarantee is the current industry norm and explicitly required by companies such as Signal. We present a new oblivious priority queue that achieves optimality in both dimensions. Specifically, we achieve an I/O cost of  and total work  per query where  is the capacity of the priority queue.
