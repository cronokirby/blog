---
published: "2026-05-18"
link: "https://eprint.iacr.org/2026/980"
authors: ["[[Hanbeom Shin]]", "[[Sunyeop Kim]]", "[[Byoungjin Seok]]", "[[Deukjo Hong]]", "[[Jaechul Sung]]", "[[Seokhie Hong]]", "[[Sangjin Lee]]", "[[Dongjae Lee]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> A key-independent secret-key distinguisher identifies structural deviations from an ideal random permutation without discovering any information about the secret key. It is therefore of primary importance for understanding the inherent properties of a block cipher's round function. While numerous key-independent secret-key distinguishers have been proposed for 5- and 6-round AES, none has been proposed for 7-round AES to date. In this paper, we propose the first key-independent secret-key distinguisher for 7-round AES, which exploits solely the structural properties of the round function. We propose the Joint Generalized Zero-Difference Property, where a quartet constructed from related differences satisfies three distinct generalized zero-difference properties simultaneously. By leveraging this joint property, we construct a new 7-round differential characteristic that a right quartet follows with a probability of $2^{-250.4}$, whereas a random permutation satisfies the same conditions with a probability of $2^{-253.4}$. Based on this characteristic, we design a distinguishing attack requiring data, time, and memory complexities of $2^{126.2}$. Our analysis confirms that the proposed distinguisher achieves a success probability of approximately 77.8%. We experimentally verify the joint property using small-scale AES, confirming that the theoretical predictions match the observed results. This work achieves the longest-round key-independent secret-key distinguisher for AES reported to date.
