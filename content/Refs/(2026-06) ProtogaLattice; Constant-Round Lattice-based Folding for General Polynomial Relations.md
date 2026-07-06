---
published: "2026-06-25"
link: "https://eprint.iacr.org/2026/1317"
authors: ["[[David Balb\u00e1s]]", "[[Anca Nitulescu]]", "[[Maxime Plan\u00e7on]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Folding schemes are gaining traction recently as they unlock practical instantiations of incrementally verifiable computation (IVC) and proof-carrying data (PCD). In particular, there has been a growing interest in folding schemes for high-degree relations, as these can efficiently arithmetize complex computations. While the landscape is vast, all lattice-based constructions such as Latticefold+, (Super)Neo, and Cyclo heavily rely on the sumcheck protocol. Sumcheck gives efficient proving times, but the verifier circuits become very large, partially because of the many random oracle invocations required. These hinder the efficiency of IVC and PCD instantiations, as the prover must prove the execution of the verifier circuit at every iteration.
> 
> We present ProtogaLattice, a new lattice-based folding scheme for general high-degree polynomial relations that drastically reduces the size of the verifier's circuits. We deviate from the sumcheck approach and instead take inspiration from Protostar [Bünz & Chen, Asiacrypt '23] and Protogalaxy [Eagen & Gabizon, '23], which fold witnesses using algebraic techniques in a constant number of rounds. Our contribution is threefold: 
> (1) a novel technique to achieve PCD through Protogalaxy, which we find of interest also in the classical (i.e. pairing-based) setting, 
> (2) a folding scheme that combines multiple instances of polynomial relations into accumulators, and 
> (3) a bootstrapping protocol to reduce the norm of the witnesses underlying these accumulators. A full iteration of ProtogaLattice requires only four random oracle calls (not counting the overhead induced by the extra range proof used as a black-box). 
> Our techniques open new directions towards building lattice-based proofs that support more expressive relations and that present smaller recursion overheads.
