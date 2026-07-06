---
published: "2026-06-17"
link: "https://eprint.iacr.org/2026/1273"
authors: ["[[Chang Shi]]", "[[Bo Peng]]", "[[Zhechen Li]]", "[[Cheng Hong]]", "[[Mingxun Zhou]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Client-specific preprocessing PIR supports sublinear online private queries after a linear-time offline phase that prepares client-specific hints. The relevant lower bound is tight: any scheme with S bits of client storage and online cost T must satisfy S⋅T=Ω(n). Most practical random-set schemes fall short by a κ factor in client storage, while the known constant-factor-optimal schemes, WR-PIR (Eurocrypt 2025) and Balanced PIR (S&P 2026), rely on complex hint-management machinery and incur high concrete costs.
> 
> We present Multi-level PIR, a preprocessing PIR scheme that matches this tight space-time tradeoff using only simple random-set components. The main idea is a multi-level composition: early levels are allowed to fail with noticeable probability, and later levels are invoked only when these query-independent failures occur. This 'waterfall' structure drives the overall failure probability down to negligible while keeping expected online cost and client storage at O(n).
> 
> Our implementation shows that this simpler structure gives competitive concrete performance. Compared with Piano and S3PIR, two prior state-of-the-art practical schemes, \name achieves a 9-20× client space reduction; compared with Balanced PIR, it reduces preprocessing time by about 8-45× and online communication by about 5-67× in our evaluated settings, while remaining competitive in other online metrics.
> 
> As an additional theoretical result, we give a more involved variant with O(n1/4) online communication, the first constant-factor-optimal preprocessing PIR scheme with sub-n online communication.
