---
published: "2026-02-05"
link: "https://eprint.iacr.org/2026/190"
authors: ["[[Bowen Jiang]]", "[[Guofeng Tang]]", "[[Haiyang Xue]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Threshold ECDSA has become a crucial security component in blockchain and decentralized systems, as it mitigates the risk of a single point of failure. Following the multiplicative-to-additive approach, the state-of-the-art threshold ECDSA (Doerner et al. in S&P24) requires only three rounds but has \( O(n) \) outgoing communication complexity. Based on threshold CL encryption, Wong et al. (in NDSS24) proposed the first scheme with constant outgoing communication; however, their scheme requires at least four rounds.  
> 
> We bridge this gap by introducing a three-round threshold ECDSA scheme with constant outgoing communication based on threshold CL encryption. Additionally, we enhance our basic scheme with robustness while maintaining the number of communication rounds, albeit at the cost of non-constant outgoing communication. Our implementation demonstrates that the basic scheme achieves optimal runtime and communication costs, while the robust variant reduces the communication rounds required by Wong et al.'s scheme, incurring only a small additional cost in small-scale settings.
