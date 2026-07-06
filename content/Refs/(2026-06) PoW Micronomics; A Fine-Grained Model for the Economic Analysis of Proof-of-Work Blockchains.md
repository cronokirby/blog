---
published: "2026-06-11"
link: "https://eprint.iacr.org/2026/1241"
authors: ["[[Juan Garay]]", "[[Yun Lu]]", "[[Julien Prat]]", "[[Brady Testa]]", "[[Vassilis Zikas]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Following the cryptographic security analyses of proof-of-work (PoW) blockchain protocols, a line of research has focused on their economic robustness. The two core questions asked are: How resilient is the system to rational attacks, and how profitable it is for miners to execute it. However, to our knowledge, no work to date has attempted to address them considering the full complexity of the blockchain protocol, including difficulty readjustment, which is needed to handle dynamic participation, price fluctuations, and the impact of risk.
> 
> In this work, we provide a fine-grained game-theoretic analysis for Nakamoto-style PoW blockchains, which takes into account both incentives of parties to deviate and complications introduced by difficulty readjustment. Our results employ the Rational Protocol Design framework of Garay et al. [FOCS’13] and extend recent works on the economic robustness of the Bitcoin backbone protocol to the variable difficulty setting.
> 
> Notably, our fine-grained specification of miners’ utility incorporates variable difficulty adjustment alongside factors like the average cost of mining and the depreciation factor, which, despite being common in economics, are typically either abstracted as exogenous parameters or ignored in the blockchain literature. We showcase the expressivity and usefulness of our formulation of utilities by using it to provide estimates and trends for such factors across several real-world cryptocurrencies.
