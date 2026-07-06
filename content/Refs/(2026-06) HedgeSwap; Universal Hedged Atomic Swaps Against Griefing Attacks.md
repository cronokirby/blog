---
published: "2026-06-14"
link: "https://eprint.iacr.org/2026/1252"
authors: ["[[Dongkun Hou]]", "[[Ying-Teng Chen]]", "[[Shujie Cui]]", "[[Tsz Hon Yuen]]", "[[Joseph K. Liu]]", "[[Jiangshan Yu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Universal atomic swaps [Oakland'22] replace hashed timelock contracts with adaptor signatures and verifiable timed dlogs, enabling secure cross-chain cryptocurrency exchanges that only require basic signature verification from the underlying blockchains. However, existing universal swap protocols remain vulnerable to griefing attacks, where a deviating party aborts the swap to lock a compliant party's assets for a long period. A natural approach is to lift existing contract-based solutions to the universal setting, but we identify that this straightforward solution faces two key challenges: (i) timeout race attacks, first identified in PipeSwap [Oakland'25], which arises from the absence of an upper bound on the transaction validity; (ii) a timeout overlap dilemma, which results from multiple overlapping refund periods. 
> 
> In this paper, we propose HedgeSwap, a universal hedged atomic swap protocol against griefing attacks, which compensates a compliant party with a premium if its asset is locked but not redeemed. To mitigate the timeout race attacks and timeout overlap dilemma, HedgeSwap eliminates the premium timeout and instead relies on a hard relation to refund the premium. For high-value asset swaps where the parties acceptable premium ranges do not overlap, we further propose a round-based HedgeSwap that utilizes a premium migration mechanism to solve these two timeout challenges, where parties iteratively increase the premium until the lock-up risk premium  acceptable to both. Our experimental results show that our HedgeSwap can complete in under 0.5 seconds, and round-based HedgeSwap completes in under 1.3 seconds for a five-round setting, while HedgeSwap reduces gas cost by 2.69X compared to existing contract-based solutions.
