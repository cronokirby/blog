---
published: "2026-05-01"
link: "https://eprint.iacr.org/2026/860"
authors: ["[[Sen Yang]]", "[[Aviv Yaish]]", "[[Arthur Gervais]]", "[[Fan Zhang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Permissionless Proof-of-Stake (PoS) economic security is predicated on the high cost of violating consensus safety or liveness.
> We show that liquid staking introduces additional risks that are not captured by standard PoS economic security arguments.
> Through an empirical study of Ethereum data, we find that the operational performance of liquid staking pools is positively associated with subsequent normalized liquid staking token (LST) returns.
> Motivated by this, we present a cross-layer attack: a low-stake adversary can manipulate the consensus protocol to degrade a target pool's performance and take application-layer positions that profit if the market reprices the corresponding LST in-line with the historically observed association.
> 
> To make the consensus layer manipulation concrete, we develop a deep reinforcement learning (DRL) framework to automatically discover attack strategies.
> Our evaluation shows that the learned strategies can recover near-optimal theoretical attacks and uncover new manipulation behaviors that significantly degrade target pool performance.
> We further characterize feasible application-layer monetization channels and analyze leveraged shorting in detail using Monte Carlo simulations, showing that such attacks can be profitable with over one-half probability for LSTs of major staking pools.
> Our findings reveal a previously overlooked attack surface in PoS systems with liquid staking and expose a gap between consensus and economic security.
