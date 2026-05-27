---
published: "2026-05-15"
link: "https://eprint.iacr.org/2026/962"
authors: ["[[Huizhong Li]]", "[[Shichen Wu]]", "[[Mingfei Zhang]]", "[[Yue Huang]]", "[[Linpeng Jia]]", "[[Sisi Duan]]", "[[Yi Sun]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Byzantine fault-tolerant (BFT) protocol from delegated committee is an approach in improving the performance and scalability of blockchains. Notable industrial examples include Delegated Proof-of-Stake (DPoS) by Tron, Polkadot, and Solana, and Proof-of-Staked-Authority (PoSA) by Binance. In these protocols, a subset of nodes is first selected to form a committee, then the committee members reach an agreement and disseminate the results to all nodes. Although these approaches allow the committee members to be rotated periodically, the security of the system is built upon a strong assumption that no committee can have more than certain fraction of faulty nodes (e.g., one-third in a partially synchronous network).
> 
> In this paper, we provide a revamped two-stage design to model BFT from delegated committee without making the strong assumption. Namely, the only assumption is that in a partially synchronous network, the entire system does not have more than one-third faulty nodes. We propose rBFT, a practical BFT protocol that has a fast path where only committee members participate and a slow path where all nodes in the system are involved. We show that, not surprisingly, the fast path is extremely fast, and under reasonable assumptions such as alive-but-corrupt nodes and rational nodes, only fast path can be triggered. Meanwhile, even under conventional Byzantine failures where the slow path is triggered, our protocol is still practical enough.
