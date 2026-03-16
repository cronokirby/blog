---
published: "2026-03-13"
link: "https://eprint.iacr.org/2026/513"
authors: ["[[Siyuan Zheng]]", "[[Zhe Han]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Stealth addresses provide receiver privacy but lack mechanisms for regulatory compliance, creating a critical gap in regulated financial blockchains where amounts are transparent yet identities must remain private. We present zkBSA—the first modular framework for auditable stealth addresses that reconciles unlinkability with enforceable KYC/AML compliance. zkBSA combines four orthogonal components: a stealth address scheme, public-key encryption for secure audit data transmission, a vector commitment to a public compliance whitelist, and a zero-knowledge proof system. This enables preventive on-chain verification: transactions to non-whitelisted receivers are cryptographically rejected, while authorized auditors can decrypt receiver identities for oversight. We formalize a dual-adversary security model—capturing unlinkability against public observers and compliance soundness against malicious senders—and prove zkBSA’s security under standard cryptographic assumptions. We implement a practical proof-of-concept using ERC-5564, EC-ElGamal, Merkle trees, and RISC Zero zkVM. Our evaluation demonstrates scalability to 16 million users, with proof generation under 5.3 seconds and fixed on-chain verification cost (~235k gas). zkBSA thus enables real-world deployment of privacy-preserving yet regulator-compliant transactions, bridging privacy-enhancing technologies and regulatory requirements in amount-transparent settings.
