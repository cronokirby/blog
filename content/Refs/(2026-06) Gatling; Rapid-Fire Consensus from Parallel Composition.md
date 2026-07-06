---
published: "2026-06-16"
link: "https://eprint.iacr.org/2026/1269"
authors: ["[[Giulia Scaffino]]", "[[Max Resnick]]", "[[Joachim Neu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Consensus protocols form the core of blockchains and other replicated state machines, ensuring that all correct nodes process the same totally ordered log of input transactions. In fault-free executions, performance is driven by the good-case transaction latency -- the time between a transaction becoming known to all nodes and its confirmation by the consensus protocol -- which depends on both how frequently proposals are made and, once made, how quickly they are confirmed. While prior work has established tight lower bounds on confirmation latency that modern protocols already achieve, it remains open whether the inter-proposal time can be further reduced below the state-of-the-art of one network delay.
> 
> We introduce Gatling, an atomic broadcast protocol that achieves arbitrarily small inter-proposal times under rotating leader schedules; in particular, smaller than the network delay. Gatling runs multiple parallel instances of a black-box atomic broadcast protocol and staggers their proposal schedules to generate proposals in faster succession than state-of-the-art protocols. A deterministic interleaving rule merges the outputs of these instances into a single global log. We analyze the effects of head-of-line blocking caused by crashed leaders, and derive Gatling's optimal number of parallel instances. We further study the impact of Gatling on predictable validity and present two variants that retain this property. Finally, our experiments confirm that Gatling can be used with off-the-shelf component protocols to achieve low latency without fine-tuning the component protocol for minimum latency.
