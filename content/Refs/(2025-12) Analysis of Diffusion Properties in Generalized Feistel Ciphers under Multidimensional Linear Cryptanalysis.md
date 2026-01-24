---
published: "2025-12-29"
link: "https://eprint.iacr.org/2025/2333"
authors: ["[[Bet\u00fcl Askin \u00d6zdemir]]", "[[Vincent Rijmen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> This paper presents a unified framework for generic attacks on Generalized Feistel Ciphers, with a primary focus on Type 1, Type 2, and unbalanced contracting (U-Type 1) Feistel constructions with non-invertible round functions. In recent work, authors reveal a class of vulnerabilities exploitable via key independent multidimensional linear trails for Feistel Ciphers, yielding efficient generic distinguishing and key-recovery attacks. We extend the extended work by formalizing the application of generic multidimensional linear cryptanalysis to Generalized Feistel Ciphers. In this way, we improve upon existing results by extending the maximum number of rounds for the generic distinguishing attack to $t^2 + 2t - 1$ for Type 1 and U-Type 1, and to $2t + 3$ for Type 2. Moreover, we have the maximum number of rounds for generic key recovery attacks on (U)-Type 1 as $t^2+3t-2$ and Type 2 as $4t$. To the best of our knowledge, these findings yield the best results for the maximum number of rounds in key recovery attacks on the corresponding GFC. We further demonstrate the branch-permutation-independence of these attacks, proving that changing internal permutations does not affect the attack applicability, complexities or the maximum number of rounds for generic attacks. 
> The effectiveness of our attacks is validated through experiments on the first-round AES candidate CAST-256 and the MPC-friendly block cipher GMiMC. Both theoretical and experimental results confirm that our proposed branch-permutation-independent generic attacks enhance the maximum number of rounds for generic attacks for GFC and reduce complexity across various interesting cases.
