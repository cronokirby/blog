---
published: "2026-03-27"
link: "https://eprint.iacr.org/2026/609"
authors: ["[[Manuel B. Santos]]", "[[Danno Ferrin]]", "[[Ron Kahat]]", "[[Michael Lodder]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Blockchains intend to provide long-term integrity guarantees through cryptographic primitives that may become vulnerable over time due to algorithmic advances or paradigm shifts such as quantum computation. While cryptographic agility, the ability to transition between algorithms without disrupting operation, is recognized as essential, existing blockchain systems lack comprehensive support for such transitions. We address this gap by designing an Ethereum virtual machine (EVM) compatible blockchain that introduces support for cryptographic agility from genesis.
>     
> We first propose a flexibility framework that characterizes how algorithm choice can be distributed across blockchain components.  We then present two technical contributions aligned with this framework: (1) cryptographically agile transactions (CATX), a new transaction format that decouples body and signature to enable user-selected signature schemes; and (2) a consensus-layer key registration mechanism that allows validators to migrate between signature schemes as operational upgrades without hard forks. We exemplify the agility of our design with ECDSA, Falcon-512, and ML-DSA signatures by conducting experimental evaluations over 30,000 blocks and 11 million transactions, showing that the CATX format introduces no measurable overhead.
