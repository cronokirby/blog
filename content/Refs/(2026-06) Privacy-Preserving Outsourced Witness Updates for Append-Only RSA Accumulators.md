---
published: "2026-06-18"
link: "https://eprint.iacr.org/2026/1283"
authors: ["[[Hongzi He]]", "[[Qianhong Wu]]", "[[Bo Qin]]", "[[Hao Gao]]", "[[Willy Susilo]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Append-only accumulators are a natural way to realize compact public-state registries, but under high-frequency updates, witness maintenance becomes a severe challenge because each insertion typically invalidates most existing witnesses. This challenge is particularly acute for intermittently online users in anonymous credential systems, who cannot continuously synchronize update information, while directly outsourcing witness updates may make repeated requests linkable. In this paper, we present a privacy-preserving outsourced witness-update protocol for append-only RSA accumulators. The protocol combines witness updates with Linear Integer Secret Sharing (LISS), enabling on-demand, client-stateless witness updates while preserving witness privacy and unlinkability against coalitions of update servers below the threshold, and providing accountability for malicious or malformed server responses. We formalize the system and threat models and analyze the security of the protocol. We further develop server-side optimizations for long catch-up windows and implement the full end-to-end protocol in Rust. Evaluation under multiple threshold settings and offline windows shows that the protocol supports practical one-shot witness updates after long offline periods, with client-side cost remaining independent of the number of missed updates and server-side cost being mainly determined by the catch-up span and the LISS distribution matrix.
