---
published: "2026-08-15"
link: "https://eprint.iacr.org/2026/1700"
authors: ["[[Max Duparc]]", "[[Antonin Leroux]]", "[[Sina Schae\ufb04er]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The quaternionic ideal-to-isogeny translation is a central building block of SQIsign. While the Qlapoti algorithm by Borin, Invernizzi, Corte-Real Santos, Eriksen, Mula, Schaeffler and Vercauteren significantly simplified and accelerated this step, it does not treat several technical details in sufficient depth, resulting in a flawed analysis of its failure probability. Additionally, several discrepancies between the implementation of Qlapoti and the paper's pseudocode were never analyzed explicitly. We address these shortcomings and add further improvements, resulting in a new norm equation solving algorithm with negligible failure probability. 
> Our C implementations shows 6x to 9x speedups compared to Qlapoti's norm equation solver, and 1.3x-2.1x speedups for a SQIsign NIST2 signature (depending on NIST levels).
