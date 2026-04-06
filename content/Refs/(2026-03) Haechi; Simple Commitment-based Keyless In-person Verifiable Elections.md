---
published: "2026-03-27"
link: "https://eprint.iacr.org/2026/613"
authors: ["[[Jiwon Kim]]", "[[Michael Naehrig]]", "[[Olivier Pereira]]", "[[Josh Benaloh]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> For decades, verifiable election systems have typically relied on encrypting ballots to maintain voter privacy. Encryption requires keys, and the management of these keys is usually one of the most cumbersome and error-prone components of the system. But in-person elections—where one or more devices are used to each collect many votes—can use cryptographic commitments rather than encryption and completely obviate the need for cryptographic keys, leading to solutions that are much simpler and more robust than the encryption-based approaches.
> 
> Currently deployed E2E-verifiable voting systems also produce large election records, which can sometimes become an obstacle to election verification, by increasing the cost of hosting, distributing, and verifying election data. Using modern techniques for compact ZK proofs, Haechi improves on past commitment-based and encryption-based solutions by drastically reducing the size of the election records, leading to improvements of over an order of magnitude compared to several real-world deployments.
