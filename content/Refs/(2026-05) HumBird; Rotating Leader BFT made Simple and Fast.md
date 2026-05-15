---
published: "2026-05-07"
link: "https://eprint.iacr.org/2026/894"
authors: ["[[Chenxu Wang]]", "[[Sisi Duan]]", "[[Minghui Xu]]", "[[Huizhong Li]]", "[[Shichen Wu]]", "[[Xiuzhen Cheng]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Rotating leader Byzantine fault-tolerant (BFT) protocols, also known as protocols in the leader-speaks-once (LSO) model, have become a topic of interest with the rise of blockchains. Many recent efforts have been made to lower the latency and simplify the design. However, existing works often sacrifice expected latency (latency when failures might occur) to enjoy higher good-case latency. 
> 
> In this work, we present a generic approach to building rotating leader BFT protocols that are both simple and fast. We present two variants: HumBird-1, a synchronous BFT under the $f<n/2$ assumption; HumBird-2, a partially synchronous BFT under the $f<n/3$ assumption, where $n$ is the number of replicas in the system and $f$ is the number of Byzantine failures. We show that by relaxing LSO to the leader-speaks-twice (LST) model and introducing a special uncle block field, we can significantly reduce both good-case latency and expected latency. Our experimental results show that compared to the state-of-the-art rotating leader BFT, HumBird-1 and HumBird-2 achieve up to 32% lower latency and 70% higher throughput, and 95% lower latency and 140% higher throughput, respectively.
