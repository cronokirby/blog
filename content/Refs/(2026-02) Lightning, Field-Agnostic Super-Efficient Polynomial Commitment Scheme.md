---
published: "2026-02-14"
link: "https://eprint.iacr.org/2026/258"
authors: ["[[Wenjie Qu]]", "[[Yanpei Guo]]", "[[Jiaheng Zhang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Polynomial commitment schemes (PCS) are a fundamental building block of modern zkSNARKs. 
> In this paper, we propose Lightning, a new coding-based PCS that achieves state-of-the-art prover efficiency. 
> Our main technical contribution is a new linear code family, the Lightning code, which can be instantiated from any base code with constant relative distance. 
> Compared to the base code, Lightning code significantly reduces encoding cost by trading off relative distance. 
> We integrate Lightning code into the standard coding-based PCS framework of Ligero and Brakedown. 
> Experimental results show that Lightning PCS reduces prover commitment time by up to $2.7\times$ compared to the fastest prover configuration of Brakedown, at the cost of a $2.4\times$ increase in proof size. 
> Overall, Lightning provides a practical mechanism for trading proof size for prover efficiency in coding-based PCS constructions.
