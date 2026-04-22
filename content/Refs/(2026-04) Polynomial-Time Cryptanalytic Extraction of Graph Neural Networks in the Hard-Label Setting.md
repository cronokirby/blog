---
published: "2026-04-13"
link: "https://eprint.iacr.org/2026/719"
authors: ["[[Chun li]]", "[[Liping Zhuang]]", "[[Di Li]]", "[[Yufeng Tang]]", "[[Zheng Gong]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Graph neural network parameters are valuable intellectual property, and high-fidelity extraction enables model stealing, evasion, and downstream abuse. Prior cryptanalytic extraction can recover exact parameters in hard-label settings, yet existing methods focus on feedforward models and do not extend to message-passing graph neural networks. The obstacles include coupled queried nodes, hidden aggregation operators, and sign and scale ambiguities created by message passing. To our knowledge, this is the first cryptanalytic extraction framework for message-passing ReLU graph neural networks in hard-label settings where the oracle returns only the predicted class. We locate dual-point constraints on class-pair decision boundaries and activation hyperplanes, then recover hidden signatures with SVD-based extraction under a fixed ordered two-node query interface. We use ON/OFF distance comparisons to resolve hidden signs, then prove that diagonal scale factors propagate through the recovered prefix and cancel at the output layer. This four-stage recovery chain avoids explicit scale fitting while using only hard-label local queries. On ogbn-arxiv targets with up to 10,660 parameters, the attack achieves 100% prediction fidelity on 8,171 evaluated nodes with 48.68M node queries.
