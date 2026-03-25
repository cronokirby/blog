---
published: "2026-03-23"
link: "https://eprint.iacr.org/2026/578"
authors: ["[[Ivan Homoliak]]", "[[Martin Hruby]]", "[[Martin Peresini]]", "[[Kristian Kostal]]", "[[Daria Smuseva]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Some consensus protocols, including Proof-of-Work (PoW) and Proof-of-Stake (PoS) designs of Ethereum, contain incentive misalignment because the protocol cannot technically verify whether a block producer or validator has executed (or omitted) validation of transaction correctness before producing a block or issuing an attestation. The incentive to omit validation stems from the risk of losing a fraction of the reward due to a late attestation in PoS, or the risk of missing timely block production (and thus its inclusion) in PoW.
> 
> This problem is referred to as the Verifier’s Dilemma (VD), and it has been investigated in prior work in the context of PoW, as well as in hybrid PoW and PoS settings of Ethereum.
> 
> In this work, we focus on Ethereum PoS, and we investigate how rational, minimally compliant validators affect long-term network decentralization due to VD and operational costs. Using evolutionary game theory and the replicator equation, we model competition among three validator phenotypes: the honest strategy, the lazy strategy, and the join pool strategy. While the honest strategy, which performs validation, requires the operational cost of expensive hardware to run a full validator node, which is currently about 20% of rewards earned, the lazy strategy, which omits validation (based on VD), enables operation of a reduced validator node at five times lower expense, which is currently about 4% of rewards earned. Moreover, the join pool strategy enables amortization of operational costs among pool members and can incorporate the lazy strategy to further reduce costs.
> 
> We analyze the profits of these strategies co-occurring under varying late attestation rates and operational cost levels using our slot-level simulator. Our findings demonstrate that the lazy strategy consistently outperforms the honest strategy in earned profits. Our next experiments reveal that the join pool strategy, combined with a variant of the lazy strategy, forms an evolutionarily stable equilibrium that rapidly collapses the validator population into a single shared pool. These results suggest that Ethereum decentralization can erode through rational economic drift even in the absence of late attestations.
