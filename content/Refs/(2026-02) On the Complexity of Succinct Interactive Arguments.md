---
published: "2026-02-16"
link: "https://eprint.iacr.org/2026/272"
authors: ["[[Idan Baril]]", "[[Iftach Haitner]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We study the minimal hardness assumptions required for constructing succinct interactive
> arguments for NP—the total number of bits sent by the prover is smaller than the witness
> size. Known constructions of such arguments rely on collision-resistant hash functions (Kilian,
> STOC 92), indistinguishability obfuscation (Sahai and Waters, STOC 14), discrete logarithm
> (Bootle et al., Eurocrypt 16), and lattice-based assumptions (Baum et al., Crypto 18). This
> may suggest that succinct interactive arguments require (at least) the existence of one-way
> functions (OWFs).
> Somewhat surprisingly, we prove that the existence of a fully black-box reduction from OWFs
> to interactive arguments, succinct or not, is unlikely; the existence of such a reduction implies
> (unconditionally) the existence of OWFs. More generally, we consider fully black-box reductions
> from OWFs to interactive arguments combined with an additional hardness assumption G (e.g.,
> NP ̸⊆P/poly). Such reductions would demonstrate that any algorithm breaking the candidate
> one-way function can be transformed into an algorithm that either breaks the soundness of
> the interactive argument or violates the assumption G. We prove that the existence of such a
> reduction implies a black-box reduction from OWFs to G alone. Moreover, this remains true
> even if the reduction only needs to work when the interactive argument oracle is perfect zero
> knowledge (the reduction, however, does not get oracle access to the zero-knowledge simulator).
> In conclusion, we show that the existence of succinct interactive arguments has no black-box
> implications on the existence of OWFs, and this holds also when combined with an additional
> hardness assumption.
