---
published: "2026-05-16"
link: "https://eprint.iacr.org/2026/973"
authors: ["[[Won Kim]]", "[[Changmin Lee]]", "[[JeongHwan Lee]]", "[[Alain Passel\u00e8gue]]", "[[Damien Stehl\u00e9]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We study $t$-out-of-$n$ threshold fully homomorphic encryption (ThFHE) based on Shamir secret sharing (SSS) in the asynchronous setting. A central bottleneck for SSS-based ThFHE is that Lagrange reconstruction during distributed decryption can amplify noise, forcing a substantially larger ciphertext modulus to maintain correctness. 
> 
> In this work, we revisit SSS-based ThFHE and give a rigorous analysis of the correctness and simulation-security constraints that govern parameter choices. We then compare families of Lagrange interpolation points through the lens of these constraints.
> 
> Our main contributions are analytic bounds that closely track empirical behavior and significantly reduce the modulus overhead required for distributed decryption. For example, for $n = 512$, our analysis reduces this modulus overhead (in bits) by 30% for $t = n/2$ and by up to 90% for $t$ close to $n$, compared to prior parameterizations.
