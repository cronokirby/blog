---
published: "2026-06-19"
link: "https://eprint.iacr.org/2026/1288"
authors: ["[[Ying-Teng Chen]]", "[[Tsz Hon Yuen]]", "[[Dongkun Hou]]", "[[Jie Xu]]", "[[Joseph K. Liu]]", "[[Wayne Yang]]", "[[Jiangshan Yu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Confidential transaction (CT) protocols are widely used to protect the privacy of blockchain-based cryptocurrency transactions. However, existing CT schemes primarily focus on ordinary users' anonymity and amount confidentiality, while overlooking miner privacy as a native objective. In particular, the privacy of miners' coinbase-receiving addresses has not been systematically considered in security models. In this paper, we identify two novel attacks against miner privacy in existing CT protocols, called miner privacy attacks and anonymity reduction attacks. These attacks arise from the transparency of the mining coinbase amounts and transaction fees in the underlying blockchain systems. When miners' accounts are included in a CT, our general solutions compatible with all schemes can prevent adversaries from identifying miners as the real spenders or excluding miners from the possible spender sets.
> 
> We propose SuccinCT, the first CT protocol based on the DualRing structure to address the aforementioned attacks. Compared with existing schemes, SuccinCT achieves the smallest overall transaction size while protecting miner privacy. Specifically, the proof size of SuccinCT is about 20% smaller than the latest BulletCT (USENIX SEC'25). We implement SuccinCT and evaluate its performance for ring sizes from 128 to 1024. The results show that signature generation takes about 2-3 ms and verification takes about 1-2 ms. These results demonstrate that SuccinCT provides stronger privacy guarantees, novel construction, and practical efficiency for real-world deployment.
