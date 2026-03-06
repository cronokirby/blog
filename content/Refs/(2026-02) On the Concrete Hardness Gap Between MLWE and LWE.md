---
published: "2026-02-16"
link: "https://eprint.iacr.org/2026/279"
authors: ["[[Tabitha Ogilvie]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Concrete security estimates for Module-LWE (MLWE) over an appropriate ring are often obtained by translating to an "equivalent" unstructured LWE instance, which implicitly treats algebraic structure as a pure efficiency gain with no impact on security. We show that this heuristic fails for realistic parameters. In common MLWE/RLWE instantiations, an attacker can exploit symmetries to obtain hybrid attacks that are strictly stronger than the best corresponding attack on LWE, translating to a concrete hardness gap between MLWE and LWE.
> 
> Our starting point is the observation that many cryptographically relevant rings admit coefficient isometries: ring elements whose multiplication acts as a signed permutation on coefficient vectors and preserves the secret and error distributions of interest. Multiplying an MLWE instance by such an isometry creates many derived instances that share the same public matrix and are therefore compatible with the same expensive offline preprocessing in hybrid attacks. We formalise this mechanism and incorporate it into both primal and dual hybrid frameworks.
> 
> We instantiate coefficient isometries for power-of-two cyclotomic rings, and quantify the resulting advantage in two regimes. For sparse-secret RLWE (popular in homomorphic encryption), isometry-enabled hybrids yield gaps of up to 15 bits over LWE-based estimates. For the standardised Kyber/ML-KEM parameters, we obtain a consistent 2--3 bit gap under standard cost models. Our results demonstrate that the widely assumed equivalence between LWE and MLWE in power-of-two cyclotomics does not hold, with real world consequences for deployed schemes.
