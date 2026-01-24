---
published: "2026-01-13"
link: "https://eprint.iacr.org/2026/052"
authors: ["[[Suman Ghosh]]", "[[Ratna Dutta]]", "[[Sourav Mukhopadhyay]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Randomness that is unbiased, unpredictable and publicly
> verifiable is a crucial requirement for many blockchain-based Web3 ap-
> plications. Verifiable Random Functions (VRFs) inherently provide these
> properties. A practical VRF scheme requires fast key generation time as
> well as features like many evaluations also for different rounds in the
> blockchain. In this work, we propose a post-quantum secure key updat-
> able VRF construction namely XM-VRF that relies on symmetric cryp-
> tographic building blocks such as hash functions and PseudoRandom
> Generators (PRGs). At the heart of our construction lies a quantum
> safe Extended Merkle Signature Scheme(XMSS) organized across multi-
> ple layers. We reformulate the XMSS signature scheme in a structured
> manner to align with our XM-VRF construction. The principal benefit
> of proposed XM-VRF compared to existing solution is it’s enhanced key
> generation efficiency as well as the property of many evaluations from
> each secret-verification key pair. The proposed scheme is proven to sat-
> isfy forward security, while also being resilient against forgery attacks,
> as established through a rigorous security analysis. We emphasize that
> our XM-VRF autonomously updates its secret key during the evaluation
> process, performing this update concurrently with the VRF output gen-
> eration to maintain uninterrupted state progression. Finally, we design a
> protocol for random committee selection within the Algorand blockchain
> framework,leveraging XM-VRF to ensure unbiased, verifiable, and stake-
> proportional participant selection.
