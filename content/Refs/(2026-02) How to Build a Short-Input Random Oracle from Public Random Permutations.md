---
published: "2026-02-20"
link: "https://eprint.iacr.org/2026/336"
authors: ["[[Ritam Bhaumik]]", "[[Nilanjan Datta]]", "[[Avijit Dutta]]", "[[Ashwin Jha]]", "[[Sougata Mandal]]", "[[Bart Mennink]]", "[[Hrithik Nandi]]", "[[Yaobin Shen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> A vast body of work studies how to build a pseudorandom function (PRF) from a pseudorandom permutation (PRP) with beyond-the-birthday-bound (BBB) security. Often, such constructions are also expected to offer some security in keyless settings, for example in the context of committing security or to substitute a parallelizable short-input random oracle (RO) if used in counter mode. This has spurred several works on keyless variants of PRP-to-PRF constructions. However, recent works (Gunsing et al., CRYPTO 2022, 2023) reveal flaws in almost all existing proofs, painting a grim picture. This paper clarifies the situation with an in-depth analysis of RP-based short-input RF constructions.
> 
> First, we categorize all two-call short-input/output RP-to-RF constructions and evaluate their indifferentiability level. We introduce the "chaining attack'', a powerful, widely applicable differentiability attack. When applied to the sum of a permutation and its inverse, it invalidates an earlier result (Dodis et al., EUROCRYPT 2008). On the positive side, we show that only the Sum Of Permutations and Encrypted Davies-Meyer Dual, when instantiated with independent permutations, achieve BBB security and could potentially yield a parallelizable short-input RO.
> 
> Second, we study the indifferentiability of expanding RP-to-RF constructions and show that $\mathtt{XORP}_w$, the core PRF underlying $\textsf{CENC}$, achieves BBB security. As side effects, we obtain a simplified proof of indifferentiability for Sum of Permutations, and the committing security of $\textsf{CENC}$.
