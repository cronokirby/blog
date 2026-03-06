---
published: "2026-02-18"
link: "https://eprint.iacr.org/2026/316"
authors: ["[[J\u00e9r\u00f4me Nguyen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We build a leveled fully homomorphic encryption (FHE) scheme that achieves IND-CCA1 security under the  learning with errors (LWE) assumption in the standard model. It is the first scheme of this kind that does not rely on succinct non-interactive arguments of knowledge (SNARK) to obtain security against active adversaries. Instead, we use the gadget lattice trapdoors introduced by Micciancio and Peikert [Eurocrypt 2012] in combination with a dual version of the GSW FHE scheme [Gentry, Sahai, Waters, Crypto 2013]. Instead of proving the integrity of a ciphertext with a SNARK, we use the gadget trapdoor to recover the LWE noise of a ciphertext. This ensures IND-CCA1 security because it allows us to determine whether a ciphertext queried to the decryption oracle will reveal information about the secret key to an adversary.
> 
> Our scheme is fully compact, multi-hop and requires very few changes to the original GSW scheme beyond the key generation and decryption algorithm. In particular, the homomorphic operations remain unchanged. We also follow ideas from Bourse et al. [Crypto 2016] to obtain IND-CPA-D security almost for free, without requiring correctness.
