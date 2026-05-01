---
published: "2026-04-21"
link: "https://eprint.iacr.org/2026/786"
authors: ["[[Simon Gerhalter]]", "[[Maria Eichlseder]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The integral-resistance property provides strong arguments against integral distinguishers. Recently, Zeng and Tian proposed a new method to show this property for AES. In this paper, we provide a generalized framework and tool called intres to extend and apply this method to other ciphers with complex linear layers. We derive properties that a cipher must fulfill in order for the method to be applicable. Furthermore, we introduce a degree propagation model which helps us determine the valid key masks for the integral-resistance matrix. The degree model can also be used to upper-bound the algebraic degree of cipher constructions. This allows us to provide tighter upper bounds for the degree of Rijndael-256. We propose algorithmic improvements to substantially decrease the runtime of the offline phase with the intres framework. As a result, we are able to show the integral-resistance property for 7 rounds of PRINCE and 6 rounds of Beanie. Finally, we develop a heuristic MILP-based approach to search for lower-latency alternatives to the MixColumns matrices of PRINCE while maintaining integral resistance. After showing that using this new matrix we still achieve 7-round integral resistance, we validate our method with SAT-based trail counting. While using a MixColumns matrix only optimized for integral resistance might affect security against other types of attacks, we believe these lower-latency matrices have their place in constructions similar to ZIP-ciphers, where integral resistance is particularly critical.
