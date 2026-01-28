---
published: "2026-01-21"
link: "https://eprint.iacr.org/2026/101"
authors: ["[[Xinmu Alexis Cao]]", "[[Matthew Green]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Nym is a reputation- and incentive-enhanced anonymous communications network that utilizes staking, performance monitoring, and rewards to encourage high-quality contributions. In this work, we analyze the reputation mechanism used in Nym’s Mixnet and NymVPN service. Using a combination of source code analysis, data collection from Nym mainnet, and network simulations with a custom simulator, we demonstrate active attacks that may allow a moderately resourced adversary to gain control of a fraction of Nym Mixnet’s active set. This condition may enable connection de-anonymization attacks. In particular, we show that the mechanism Nym uses to measure node performance is vulnerable to a form of “framing” attack that allows a small number of low-stake nodes to damage the score of high-reputation active nodes. We then consider and discuss various mitigations. This work highlights the challenge of nodes’ reliability measurement in reputation-enhanced networks, where the entry of low-reputation nodes is required for network survivability but also grants attackers a platform to launch attacks against the network.
