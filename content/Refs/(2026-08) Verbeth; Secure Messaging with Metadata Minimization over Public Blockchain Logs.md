---
published: "2026-08-04"
link: "https://eprint.iacr.org/2026/1606"
authors: ["[[Marco Esposito]]", "[[Andrea Rizzini]]", "[[Francesco Bruschi]]", "[[Donatella Sciuto]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> This work presents a private instant messaging protocol that leverages the public log layer of blockchains as the message transport layer, while the cryptographic state is kept only by client applications. Thanks to the properties of public ledgers, this approach achieves strong censorship resistance, while also revealing the economic and cryptographic limits of on-chain messaging. Notably, given the transparency of public ledgers, and since reading and writing operations are in most cases outsourced to third-party providers that may be curious, a well-known concern is direct metadata leakage. We address this both at first contact and during the conversation: for first contact, we propose two alternative discovery mechanisms, one based on long-term key encapsulation with trial decryption, the other on a private signaling service backed by trusted hardware. For the ongoing conversation, we show that topic rotation, driven by the off-chain cryptographic state, suffices to prevent topic and conversation linkability. As our main contribution, we provide an in-depth analysis of Verbeth's metadata leakage under different adversarial assumptions for both phases.
