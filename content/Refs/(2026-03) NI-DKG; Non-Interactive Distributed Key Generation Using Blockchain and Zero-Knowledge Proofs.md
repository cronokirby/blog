---
published: "2026-03-19"
link: "https://eprint.iacr.org/2026/552"
authors: ["[[Alex Kampa]]", "[[Pau Escrich]]", "[[Marta Bell\u00e9s-Mu\u00f1oz]]", "[[Roger Baig]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We present a non-interactive DKG protocol that eliminates complaint procedures through the systematic use of ZK proofs. The protocol requires a timed public bulletin board with adjoined computing capacity as its coordination layer, a capability realized in practice by smart-contract-enabled blockchains. Existing smart-contract DKGs detect invalid contributions only after submission, requiring dispute phases that introduce timing constraints and attack surfaces. In our protocol, each participant submits a single zk-SNARK proving the correctness of their contribution: polynomial commitment consistency, Feldman verification equations, and correct share encryption. The smart contract rejects any invalid proof, simplifying the protocol to non-interactive phases delimited by block numbers. The protocol relies on standard primitives: Shamir's secret sharing, Feldman commitments, hashed ElGamal encryption, and Chaum-Pedersen discrete-log equality proofs, with on-chain verification via zk-SNARKs. We provide an implementation outline for EVM-compatible chains, including circuit specifications for key generation, threshold decryption, and optional secret key disclosure. We also discuss EVM verifier constraints on the number of public inputs and sketch approaches to address them.
