---
published: "2026-02-13"
link: "https://eprint.iacr.org/2026/247"
authors: ["[[Zhe Jiang]]", "[[Kai Zhang]]", "[[Junqing Gong]]", "[[Haifeng Qian]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Non-interactive Batch arguments (BARGs) for NP relations  enable a prover to generate a single succinct proof for multiple NP instances, significantly amortizing verification costs. While recent pairing-based BARGs achieve impressive results, their practical efficiency remains limited by proof sizes and verifier pairing operations that scale linearly with the size of the Boolean circuit computing the NP relation. In this work, we present a novel pairing-based BARG construction that achieves constant proof size and a constant number of pairing operations, independent of both the number of instances and the circuit size. Our approach leverages a bivariate polynomial commitment to compactly encode all wire values across instances, and introduces a new efficient bi-to-uni variate sumcheck protocol, called BuLosum. BuLosum improves upon prior techniques by reducing proving costs to a single multi-scalar multiplication and verification to only three pairings. Using BuLosum, we further design an optimized matrix multiplication protocol  that minimizes both proof size and verification overhead. By integrating these components, we obtain the first pairing-based BARG achieving constant-size proofs and constant number of pairing operations.
