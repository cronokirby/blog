---
published: "2026-03-24"
link: "https://eprint.iacr.org/2026/589"
authors: ["[[Joshua Babb]]", "[[Brandon Goodell]]", "[[Rigo Salazar]]", "[[Freeman Slaughter]]", "[[Luke Szramowski]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> FROST is a pragmatic method of thresholdizing Schnorr signatures, permitting a threshold quorum of $t$ signers out of $n$ total individuals to sign for a message. This scheme improved on the state of the art, resulting in an efficient protocol that aborts in the presence of up to $t-1$ malicious users with strong resilience against chosen-message attacks, assuming the hardness of the discrete logarithm problem. In this work, we build upon the foundation introduced in FROST by presenting FROSTLASS, which additionally enjoys novel linkability criteria and anonymity guarantees under the general one-more discrete logarithm problem, utilizing a "Schnorr-shaped hole'' technique to prove desirable security results. This scheme is highly practical, tailor-made for use on-chain in the Monero cryptocurrency; indeed, we also showcase a Rust implementation for this protocol, demonstrating its real-world application to improve the security and usability of Monero.
