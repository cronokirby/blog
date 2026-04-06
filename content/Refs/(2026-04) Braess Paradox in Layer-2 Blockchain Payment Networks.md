---
published: "2026-04-06"
link: "https://eprint.iacr.org/2026/669"
authors: ["[[Arad Kotzer]]", "[[Ori Rottenstreich]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Payment channel networks (PCNs) are a leading method to deal with the scalability limitations of blockchain networks. PCNs allow users to execute transactions without committing them to the blockchain by relying on predefined payment channels. Transactions between pairs of users without a connecting channel are also supported through a path of multiple channels. Serving such transactions involves fees paid to intermediate users. In this paper, we uncover the potential existence of the Braess paradox in payment networks: Sometimes, establishing a new payment channel can increase the fees paid for serving some fixed transactions. We study conditions for the paradox to appear under two different models of fees: Liquidity-based fees as a function of the transaction value jointly with the channel liquidity values and proportional fees which are based only on the transaction value. We also provide indications for the appearance of the paradox based on real data from Lightning, a popular payment channel network of Bitcoin. Last, we discuss methods to mitigate the paradox upon establishing a new payment channel.
