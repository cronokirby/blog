---
published: "2026-04-15"
link: "https://eprint.iacr.org/2026/735"
authors: ["[[Emanuele Bellini]]", "[[Mohamed Rachidi]]", "[[Sharwan K. Tiwari]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We present CLAASP-MP, a monomial prediction (MP) tool based on the three-subset division property without unknown subset (3SDP-woU), integrated into CLAASP, a library for automated analysis of symmetric key cryptographic primitives. The propagation rules of 3SDP-woU are encoded as a Mixed Integer Linear Programming (MILP) model generated directly from the CLAASP component graph, covering the main building blocks used in modern symmetric designs, including S-boxes, linear layers, Boolean word operations, modular addition and multiplication, and linear and nonlinear feedback shift register updates.
> 
> Using this model for selected output bits, CLAASP-MP computes algebraic normal form (ANF) (for a small number of rounds), derives superpolies for a chosen cube, and computes a tight upper bound on the algebraic degree with respect to plaintext, key, or IV variables. A monomial is absent if its ANF coefficient is zero, if it does not appear in the superpoly, or if the algebraic degree is too small for it to occur; in all such cases, the output is balanced and yields an integral distinguisher.
> 
> We evaluate \name{} on block ciphers, permutations, and stream ciphers implemented in \claasp{}. We introduce an exact bit-level MILP modeling technique for modular multiplication and apply it to provide the first independent algebraic analysis of the MSX block cipher, identifying integral properties that persist up to 7 rounds for MSX-128. Furthermore, we reproduce known distinguishers and identify new cubes for several block ciphers and extend the best-known integral distinguishers of ChaCha and Salsa permutations from 6 and 5 rounds, respectively, to 6.75 rounds. We also discovered new integral distinguishers for Bivium using several 36-dimensional cubes and extended the exact computation of the algebraic degree of Trivium to later initialization clocks while reproducing many published superpolies.
> 
> These results show that CLAASP-MP provides a unified and practical MILP-based framework for monomial prediction and algebraic analysis across a wide range of symmetric primitives.
