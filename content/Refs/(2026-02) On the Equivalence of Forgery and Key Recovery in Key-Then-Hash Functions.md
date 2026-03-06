---
published: "2026-02-18"
link: "https://eprint.iacr.org/2026/313"
authors: ["[[Jonathan Fuchs]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> For any key-then-hash function, there is no security gap between key recovery and forgery.
> The expected cost of recovering the key given differential-based forgery, in the information-theoretic setting, is logarithmic in the number of solutions to the underlying differential equation.
> The notion of weak-key classes as defined by Handschuh and Preneel in their CRYPTO 2008 paper does not apply to key-then-hash functions.
> Every key is equally vulnerable, and the attack complexity is entirely determined by the universality bound.
> This applies to four out of six keyed hash function families studied in their paper, namely, NH, NMH, WH and Square Hash.
> In this paper, we revisit the analysis done in 2008 to NH through the lens of the key-then-hash framework.
> We are able to prove that the properties attributed to the class of weak keys in NH are actually intrinsic to the whole key space.
> Furthermore, this result can be generalized to any key-then-hash function.
> We demonstrate this generality by applying our framework to key-then-hash constructions instantiated with Xoodoo[3] and Square Hash, and show that an efficient key recovery is possible.
