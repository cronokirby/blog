---
published: "2026-08-11"
link: "https://eprint.iacr.org/2026/1659"
authors: ["[[Elli Androulaki]]", "[[Angelo De Caro]]", "[[Kaoutar Elkhiyaoui]]", "[[Rebekah Mercer]]", "[[Elina van Kempen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Privacy-preserving distributed ledgers enable transaction processing systems in which users can submit transactions without revealing their identities or transaction details. Regulated and institutional settings impose additional requirements: authorized parties must be able to efficiently trace transactions to their originators without compromising overall system privacy. Existing approaches suffer from important limitations, including restricted parallel transaction formation, high computational overhead, and overly broad auditor access to user secrets.
> We present a framework for efficient tracing that eliminates concurrency issues while limiting auditor access. We formalize our security requirements via an ideal functionality and propose a black-box construction based on pseudorandom functions and anonymous credentials, with two concrete instantiations: one using hash-based PRFs and zk-SNARKs, and another using algebraic PRFs and Sigma protocols. Our experimental evaluation demonstrates practicality, incurring only a few milliseconds of overhead for the added tracing capabilities.
