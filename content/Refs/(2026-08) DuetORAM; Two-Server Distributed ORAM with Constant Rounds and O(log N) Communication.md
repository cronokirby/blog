---
published: "2026-08-05"
link: "https://eprint.iacr.org/2026/1613"
authors: ["[[Feng Li]]", "[[Xiangfu Song]]", "[[Yingying Li]]", "[[Lisha Yao]]", "[[Guomin Yang]]", "[[Tianwei Zhang]]", "[[Robert H. Deng]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Distributed Oblivious RAM (DORAM) is a promising building block for privacy-preserving cloud databases and outsourced storage systems. However, existing two-server designs often rely on slow linear scans or heavy cryptographic primitives, making them struggle to balance efficiency and bandwidth, and thus hindering their practical deployment. 
> 
> We present DuetORAM, a two-server DORAM that achieves constant-round access with $O(\log N)$ communication while avoiding these computational bottlenecks. Our key idea is a replicated-to-shared block encoding that allows servers to keep identical ciphertexts for efficient PIR-based retrieval, while locally interpreting them as secret shares to enable oblivious eviction via a lightweight shuffle. We further design a secret-shared shuffle with an offline-online decomposition that shifts most bandwidth-intensive work to a preprocessing phase, significantly reducing online communication. We implement a prototype of DuetORAM and evaluate it under diverse network conditions. Our results show that DuetORAM outperforms both the state-of-the-art two-server scheme DUORAM (reducing retrieval latency by up to 170$\times$ in LAN settings), and three-server design S$^3$ORAM (reducing retrieval latency by 1.7$\times$ in LAN and accelerating eviction by 7$\times$ in LAN and 5$\times$ in WAN, respectively).
