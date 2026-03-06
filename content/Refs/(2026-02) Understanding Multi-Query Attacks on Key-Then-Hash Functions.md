---
published: "2026-02-18"
link: "https://eprint.iacr.org/2026/314"
authors: ["[[Jonathan Fuchs]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We present multi-query attacks on key-then-hash (KTH) functions in the blinded keyed hash model that achieve an advantage growing quadratically in the number of queries up to a small constant factor from the information-theoretic upper bound.
> We introduce three families of attacks.
> Catch attacks exploit the group structure of the digest space and achieve deterministic success with $2\sqrt{\varepsilon^{-1}}$ queries.
> Group attacks embed high-probability differentials into subgroups of the message space of quadratic advantage.
> Translation attacks exploit offset-invariance to linearly scale any existing attack.
> Our attacks apply in two concrete settings: with $\Delta$ fixed to $0$, they target the compression phase of farfalle-based primitives such as Xoofff, and with $\Delta$ as a free parameter, they target deck-based wide block cipher constructions such as the double-decker.
> We connect optimal query set construction to results in additive combinatorics and generalize our results to concatenated KTH functions.
> Experiments on NH and Xoodoo[3] show our attacks reach an advantage within a factor $2^{4}$ of the theoretical bound.
> Our analysis reveals that for bit-sliced permutations with degree-2 round functions, solution set overlap is inherent, limiting but not preventing the attacker from approaching the bound. Our experiments highlight that trail cores with a large number of active columns in the last round are particularly dangerous for KTH functions, introducing a new criterion for the design of permutations used in such constructions.
