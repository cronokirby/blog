---
published: "2025-12-26"
link: "https://eprint.iacr.org/2025/2328"
authors: ["[[Ziyi Guan]]", "[[Eylon Yogev]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We consider constructions of succinct non-interactive arguments (SNARGs) for NP in the standard model. Specifically, we revisit the seminal Micali transformation (applying Fiat-Shamir to Kilian's protocol), which has traditionally only been analyzed in the random oracle model. 
> 
> We show that the Micali framework can be successfully instantiated in the standard model by leveraging a new interaction between two primitives: a PCP satisfying a property we term shadow soundness, and a vector commitment scheme satisfying function statistical binding. 
> 
> We prove a general theorem stating that any language admitting a suitable shadow PCP combined with a compatible vector commitment yields a secure SNARG. We instantiate this paradigm using sub-exponential indistinguishability obfuscation (iO) and sub-exponential learning with error (LWE) to obtain a SNARG for all of NP. 
> 
> Our result serves as the first concrete validation of the Micali blueprint, and in particular of the Fiat-Shamir transformation, in the standard model. As a corollary, we refute "universal" attacks on the Micali framework by demonstrating that there exist concrete instantiations of the underlying components for which the transformation is sound.
