---
published: "2026-01-08"
link: "https://eprint.iacr.org/2026/030"
authors: ["[[Pengfei Lu]]", "[[Guangwu Xu]]", "[[Zengpeng Li]]", "[[Mei Wang]]", "[[Haoyu Cui]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Incremental preprocessing in private information retrieval (PIR) schemes refers to handle insertions, modifications, and deletions to the database without requiring complete preprocessing after each update. This broadens the applicability of PIR in practical scenarios. However, two major issues remain: the concept of incremental preprocessing for the single-server PIR is still not established, and the row-level update strategy (iSimplePIR (Row-level)) introduces excessive unnecessary overhead. This paper aims to efficiently extend incremental preprocessing to the single-server setting. To our knowledge, we are the first to propose the formal definition of single-server incremental PIR. Besides, we construct an entry-level incremental scheme (iSimplePIR (Entry-level)) based on SimplePIR (USENIX ’23). iSimplePIR (Entry-level) supports real-time updates of individual entries, as well as optimization of communication for scenarios with certain update cycles by incorporating a row aggregation mechanism. For a 1\% column-major update in a 1GB database, iSimplePIR (Entry-level) achieves a 224$\times$ reduction in preprocessing computation overhead and a 4.2$\times$ reduction in both communication and monetary costs compared to iSimplePIR (Row-level). When applied to password breach detection with completely random entry updates, iSimplePIR (Entry-level) reduces preprocessing time by 86$\times$. Our technique can be applied to reduce the preprocessing cost of any protocol in the SimplePIR family, such as DoublePIR, authenticated PIR (based on the LWE assumption), VeriSimplePIR, and YPIR.
