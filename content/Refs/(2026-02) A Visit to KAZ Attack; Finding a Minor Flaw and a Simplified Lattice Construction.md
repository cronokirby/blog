---
published: "2026-02-05"
link: "https://eprint.iacr.org/2026/188"
authors: ["[[Yongbo Hu]]", "[[Chen Zhang]]", "[[Guomiao Zhou]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Inspired by a recent paper from Shanghai Jiao Tong University and China Telecom Quantum Information Technology Group [1]—which demonstrated a full break of the KAZ algorithm family submitted to Malaysia’s MySEAL 2.0 standardization—we focus specifically on its signature component. Within the same core theoretical framework, we have observed a subtle inaccuracy in the formula given in the original work. While this does not prevent the final private-key recovery via lattice reduction, it leads to incorrect derivation of the intermediate sensitive signature data e₁ and e₂. Building on this observation, we propose a refined lattice construction that successfully reproduces the original attack while eliminating the need for an additional step: computing the greatest common divisor (GCD) between the signature component S₂ and the modulus ϕ(N). This new construction is equally capable of recovering the private key using two signatures.
