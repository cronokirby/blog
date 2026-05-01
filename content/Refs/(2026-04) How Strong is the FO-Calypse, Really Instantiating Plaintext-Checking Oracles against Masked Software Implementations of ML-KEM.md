---
published: "2026-04-20"
link: "https://eprint.iacr.org/2026/777"
authors: ["[[Brieuc Balon]]", "[[Ga\u00ebtan Cassiers]]", "[[Thibaud Schoenauen]]", "[[Fran\u00e7ois-Xavier Standaert]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Side-channel attacks exploiting Plaintext-Checking Oracles (PCOs) instantiated thanks to the leakage of the re-encryption step taking place during decapsulation are a well-known weakness of ML-KEM. An already wide literature investigated how to efficiently exploit such oracles, leading to easy (full) key recoveries. Somewhat surprisingly, the investigation of how to best instantiate PCOs against ML-KEM's most leaking operations is less investigated, in particular when it comes to quantitative evaluations against concrete masked implementations. In this paper, we first remedy this lack by systematically instantiating PCOs against three open source masked software implementations of the Keccak function used in ML-KEM, based on different masking techniques and programming styles. We evaluate the accuracy of PCOs for increasing number of shares using state-of-the-art profiled attacks against ARM Cortex-M4 implementations, and succeed obtaining high accuracy for up to 7 shares by leveraging the leakage of approximately 50 ML-KEM executions only. Doing so, we confirm the ``computing more implies leaking more'' adage and conclude that enforcing high security levels on such platforms will not be affordable. Next, we consolidate recent solutions for exploiting PCOs. 
> For this purpose, we start by introducing a simple, concrete and re-usable model for PCOs targeting
> masked implementations of Keccak. We follow by clarifying that approaches based on hard decisions are suboptimal compared to soft (probabilistic) ones. We finally open a study of how to best exploit the adversary's computational power in a security evaluation.
> We show that (even naive) lattice based attacks are a promising approach for this purpose,
> leaving the design of a generic estimator that could efficiently leverage physical (side-channel) information as an interesting research direction.
