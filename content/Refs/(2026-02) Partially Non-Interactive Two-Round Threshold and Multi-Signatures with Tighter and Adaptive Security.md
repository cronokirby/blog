---
published: "2026-02-24"
link: "https://eprint.iacr.org/2026/373"
authors: ["[[Yanbo Chen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Threshold and multi-signature schemes enable a group of signers to jointly sign messages. In the pairing-free discrete-logarithm setting, there have been extensive research efforts on two-round threshold and multi-signature schemes. A prominent category is partially non-interactive schemes, where the first round is message-independent and can be preprocessed offline. However, there exist gaps in security properties between partially non-interactive schemes and fully online schemes. While there are fully online schemes that achieve rewinding-free or fully adaptive security based on standard assumptions, existing partially non-interactive schemes require the adversary to act algebraically or rely on non-standard assumptions for these properties.
> 
> We bridge this gap by proposing a family of new constructions of partially non-interactive threshold and multi-signature schemes. Central to our constructions is a technique that renders HBMS (Bellare and Dai, Asiacrypt 2021) and its variants partially non-interactive. Specifically, we present the following instances:
> - The first partially non-interactive two-round multi-signature scheme with a rewinding-free reduction under standard assumptions. This scheme provides a tighter security guarantee against non-algebraic adversaries than all prior partially non-interactive schemes.
> - The first partially non-interactive two-round threshold signature scheme achieving fully adaptive security against non-algebraic adversaries  under standard assumptions.
