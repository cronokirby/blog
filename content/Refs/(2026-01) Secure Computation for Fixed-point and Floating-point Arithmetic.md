---
published: "2026-01-22"
link: "https://eprint.iacr.org/2026/102"
authors: ["[[Tianpei Lu]]", "[[Bingsheng Zhang]]", "[[Yuyang Feng]]", "[[Kui Ren]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Secure Multi-Party Computation (MPC) protocols naturally operate over rings/fields, and they are less efficient for real-number arithmetics, which are commonly needed in AI-powered applications. State-of-the-art solutions are hindered by the high cost of fixed-point and floating-point operations.
> This work addresses these bottlenecks by proposing a series of novel MPC protocols.  Compared to SOTA, our fixed-point multiplication protocol reduces the online communication cost by about $75\%$. For scenarios where higher precision is required, we present the first constant-round floating-point arithmetic protocol for addition and multiplication in the three-party computation (3PC) setting, reducing the communication overhead of SOTA by approximately $95\%$. The experimental results demonstrate that our fixed-point multiplication protocol is more than $3\times$ faster than all mainstream solutions (such as ABY3, Falcon, Orca, etc.). Our floating-point addition and multiplication protocols are over $3\times$ and $5\times$, respectively, faster than  SOTA,  SecFloat [S&P 23].
