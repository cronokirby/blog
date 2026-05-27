---
published: "2026-05-19"
link: "https://eprint.iacr.org/2026/990"
authors: ["[[S\u00fcleyman Emir Ak\u0131n]]", "[[Abdullah Talayhan]]", "[[\u00d6zcan \u00d6zt\u00fcrk]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> This paper presents a side-channel attack on the Linear Equivalence Signature Scheme (LESS) v2.0. LESS derives its security from the Linear Equivalence Problem and was evaluated as a candidate during Round 2 of the NIST post-quantum cryptography standardization process. LESS secret keys are used to generate monomial matrices, which are stored efficiently in two one-dimensional lists: the permutation list and the coefficient list. Recovering the secret monomial matrices is sufficient to forge signatures, as they are the values actually used during signing. We propose a profiled, single-trace horizontal attack that recovers the full secret monomial matrices. First, monomial coefficients that are multiplied by the dense part of the public generator matrix are recovered via power analysis of the matrix multiplication function. Next, we attack the reduced row echelon form function to recover the permutation list. Finally, we exploit an algebraic relation between the recovered values and the public key to obtain the rest of the coefficient list. We validated our attack on an ARM Cortex-M4 microcontroller. Our results demonstrate that we can exactly recover the secret monomial matrices from a single power trace with a 96\% success rate on the NIST Category 1 parameter set. We also analyze potential countermeasures and show that independently shuffling the row processing order within each column reduces the success rate of our attack to negligible levels, providing protection against the specific attack vector demonstrated in this paper.
