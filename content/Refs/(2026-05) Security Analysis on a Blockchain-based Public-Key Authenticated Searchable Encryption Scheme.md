---
published: "2026-05-16"
link: "https://eprint.iacr.org/2026/970"
authors: ["[[Hinata Nishino]]", "[[Keita Emura]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Du et al. (Security and Communication Networks, 2022) proposed a public-key authenticated searchable encryption scheme that employs Bloom filters and blockchain. In their scheme, Bloom filters are used to search encrypted keywords, while blockchain is used to ensure the integrity of search results that guarantees the search result is correct. 
> In this paper, we demonstrate that Du et al.'s scheme leaks keyword information from ciphertexts. Our analysis focuses on the fact that the Bloom filter is uniquely determined by the keyword to be encrypted and is directly embedded in each ciphertext. We show that the proposed attack succeeds with the probability that no false positives occur in the Bloom filter, and we evaluate the false-positive probability to confirm that the attack achieves a sufficiently high success rate. Furthermore, we examine Du et al.'s security model and their assumed usage scenarios, and we discuss the validity of our attack under those conditions. We also consider a simple modification intended to prevent our attack and demonstrate that our attack, with a slight adaptation, remains effective against the modified scheme. In addition, we show that even when the search results differ, previously generated ciphertexts can still pass verification, indicating that the integrity verification mechanism based on blockchain is insufficient.
