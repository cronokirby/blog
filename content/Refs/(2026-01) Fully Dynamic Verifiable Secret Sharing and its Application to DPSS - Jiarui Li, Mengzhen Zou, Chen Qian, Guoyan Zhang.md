---
published: "2026-01-05"
link: "https://eprint.iacr.org/2026/011"
authors: ["[[Jiarui Li]]", "[[Mengzhen Zou]]", "[[Chen Qian]]", "[[Guoyan Zhang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Secret sharing serves as a critical primitive for distributed systems; however, traditional protocols lack the adaptability required for dynamic environments with unpredictable participant turnover. While Dynamic-Committee Proactive Secret Sharing (DPSS) attempts to address this, existing synchronous solutions suffer from a critical vulnerability: they necessitate a multi-round hand-off phase that effectively imposes a "quiescent window." This requirement forces committee membership to remain static during transitions, directly contradicting the premise of a fully dynamic adversary.
> 
> In this work, we propose a Fully Dynamic-Committee model that eliminates the quiescent window by supporting committee reconfiguration in every round. We present two primary contributions. First, we introduce a suite of three perfectly secure Fully Dynamic Verifiable Secret Sharing (FDVSS) schemes that support per-round committee reconfiguration. Among them, our main construction, FDVSS-1, achieves near-optimal round complexity (four rounds) and polynomial communication ($O(n^4)$). Second, building on FDVSS, we construct a perfectly secure Fully Dynamic-Committee Proactive Secret Sharing (FDPSS) protocol. FDPSS achieves share redistribution in a single communication round, removing "quiescent window" during the hand-off phase. Our protocols require no trusted setup and provide optimal resilience ($t < n/3$) against a Byzantine adversary, offering a robust solution for fault-tolerant distributed systems in highly dynamic networks.
