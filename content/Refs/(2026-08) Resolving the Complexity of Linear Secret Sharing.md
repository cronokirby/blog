---
published: "2026-08-12"
link: "https://eprint.iacr.org/2026/1667"
authors: ["[[Oded Nir]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> A secret-sharing scheme allows a dealer to distribute a secret $s$ among $n$ parties such that only predefined “authorized” sets of parties can reconstruct the secret, and all other “unauthorized” sets learn nothing about $s$. Families of authorized sets are called access structures, and a scheme is called linear if its sharing map is linear in the secret and the dealer’s randomness. We show that every $n$-party access structure can be realized by a linear secret-sharing scheme for one-bit secrets with maximal share size of $2^{\lceil n/2\rceil-1}+1$ bits. 
> A counting lower bound for monotone span programs shows that almost all access structures require linear share size $2^{n/2-o(n)}$, which makes our upper bound tight. Our scheme is considerably simpler than previous schemes that obtained share size $2^{cn+o(n)}$ with $1/2\leq c<1$. 
> 
> We also present a variant of this linear construction that is tailored for monotone k-DNFs access structures (also known as $k$-upslices). Then, by combining it with a non-linear scheme of Applebaum et al. (STOC 2020), we derive a scheme for all access structures with share size $2^{0.496n+o(n)}$.
> This improves the previous upper bound of $2^{0.585n+o(n)}$ by Applebaum and Nir (CRYPTO 2021), and establishes a separation between the worst-case non-linear and linear exponents. Plugging the quadratic construction of Beimel, Othman, and Peter (CRYPTO 2021) into this framework yields quadratic schemes of share size $2^{0.4995n+o(n)}$, separating the quadratic and linear exponents.
> 
> The linear scheme for upslices and its proof were discovered in conversations prompted by the author with GPT-5.6 Sol and Claude Fable 5.
