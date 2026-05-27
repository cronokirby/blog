---
published: "2026-05-16"
link: "https://eprint.iacr.org/2026/971"
authors: ["[[Sakura Oku]]", "[[Momonari Kudo]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Polynomial multiplication is fundamental in lattice-based cryptography. 
> While the Number Theoretic Transform (NTT) enables fast multiplication, it imposes constraints on the modulus of the coefficient field.
> Hafiz et al.\ (2025) addressed this limitation by analyzing the incomplete NTT, which combines a truncated NTT with conventional multiplication methods.
> 
> In this work, we revisit Toom-4 multiplication in the context of incomplete NTT. 
> Although Toom-4 is asymptotically faster than Karatsuba, its precise cost has not been expressed in a form compatible with the incomplete NTT framework.
> 
> We present a concrete Toom-4 implementation and derive explicit operation counts that separate additions/subtractions and multiplications over the coefficient field. 
> Our analysis based on addition chains yields a simple cost model for incomplete NTT.
> 
> Using this model, we analyze hybrid strategies combining Toom-4, Karatsuba, and incomplete NTT.
> We identify parameter ranges where Toom-4 is advantageous and validate the predicted behavior experimentally.
