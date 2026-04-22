---
published: "2026-04-15"
link: "https://eprint.iacr.org/2026/741"
authors: ["[[Damiano Abram]]", "[[Giulio Malavolta]]", "[[Lawrence Roy]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We propose a new method to construct homomorphic authentication codes supporting the evaluation of *non-deterministic* computations, extending the celebrated homomorphic lattice encodings [Boneh et al., Eurocrypt 2014]. Our approach relies on the hardness of the decomposed learning with errors problem (LWE), a recently introduced modification of Regev's LWE assumption.
> 
> We then use this new technical tool to make progress on several open problems in the literature. Specifically, we obtain:
> 1) A constrained pseudorandom function (PRF), where the evaluation of the PRF on the master key does not depend on the complexity of the constraint, except for its circuit depth.
> 2) A way to securely compress and re-expand LWE samples in the plain model.
> 3) An adaptively secure broadcast encryption scheme, with ciphertext and secret keys growing poly-logarithmically with the size of the encrypted set.
> 4) A pseudorandom obfuscation for all puncturable PRFs, additionally assuming the existence of sub-exponentially secure indistinguishability obfuscation (iO).
> 
> None of the above mentioned primitives was known to exist from lattice assumptions.
> As a bonus result, we also obtain a conceptually simple and direct heuristic construction of iO based on lattice techniques, which is not based on the function encryption-to-iO paradigm. We provide evidence that this approach can be used to build provably secure obfuscation for simple functionalities such as sampling lattice preimages using a hidden trapdoor.
