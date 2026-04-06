---
published: "2026-04-06"
link: "https://eprint.iacr.org/2026/674"
authors: ["[[Dan Boneh]]", "[[Rohit Nema]]", "[[Arnab Roy]]", "[[Ertem Nusret Tas]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Batch encryption enables a holder of the secret key to publish a succinct pre-decryption key for a set of ciphertexts, such that exactly that set can be decrypted while other ciphertexts remain secret. Existing constructions either rely on epochs or, when epochless, suffer from large public parameters (quadratic in the batch size) and are vulnerable to censorship. In this work, we present an epochless, censorship-resistant batch encryption scheme with linear-sized public parameters, constant-sized pre-decryption keys and ciphertexts, and efficient batch decryption. Our construction extends the partial fraction techniques of Jutla, Nema, and Roy's threshold encryption scheme: we exploit partial fraction decomposition such that publishing a single group element as the pre-decryption key lets the decryptor decrypt all ciphertexts in the batch. We prove CCA security of our scheme, and show how to thresholdize it. Our results directly benefit applications such as encrypted mempools for MEV mitigation and time-lock encrypted storage.
