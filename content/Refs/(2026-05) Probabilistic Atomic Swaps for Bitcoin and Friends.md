---
published: "2026-05-06"
link: "https://eprint.iacr.org/2026/887"
authors: ["[[Paul Gerhart]]", "[[Jay Taylor]]", "[[Sri Aravinda Krishnan Thyagarajan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Atomic swaps are a fundamental primitive for the trustless exchange of digital assets across blockchains: they guarantee that either both parties receive the agreed assets or neither party transfers. While this all-or-nothing guarantee is powerful, it also imposes an inherent determinism that rules out exchanges whose intended outcome is probabilistic. As a result, existing atomic swaps cannot realize trustless exchanges in which one party pays for a fixed chance of receiving a larger asset or reward, as in lotteries, randomized allocation mechanisms, and probabilistic cross-chain trades.
> 
> We introduce probabilistic swaps, a new cryptographic primitive that extends atomic swaps to the probabilistic setting. 
> In a probabilistic swap, one party's transfer is executed with a fixed, publicly specified probability embedded in the protocol and cannot be biased by either party. 
> This yields a trustless mechanism for randomized exchange with verifiable odds and no trusted intermediary.
> 
> Our construction combines adaptor signatures with oblivious pseudorandom functions (OPRFs) to realize the desired probabilistic outcome while ensuring that neither party can predict or bias it in advance. Along the way, we introduce a new mechanism for the atomic exchange of OPRF evaluations for payments, which may be of independent interest.
> A key feature of our approach is that it preserves the minimal on-chain footprint of modern atomic-swap protocols. The protocol relies only on standard Bitcoin scripts, such as digital signatures and timelocks, and is deployable on any blockchain that already supports atomic swaps. Consequently, probabilistic swaps are indistinguishable from ordinary on-chain transactions, which helps preserve privacy and fungibility. 
> We provide formal security foundations and demonstrate practicality through a probabilistic swap between the Bitcoin and Litecoin testnets, as well as in the Lightning Network.
