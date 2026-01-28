---
published: "2026-01-19"
link: "https://eprint.iacr.org/2026/082"
authors: ["[[Andre Esser]]", "[[Javier Verbel]]", "[[Ricardo Villanueva-Polanco]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The Rank Syndrome Decoding (RSD) problem forms the foundation of many post-quantum cryptographic schemes. Its inherent hardness, with best known algorithms for common parameter regimes running in time exponential in $n^2$ (for $n$ being the code length), enables compact parameter choices and efficient constructions. Several RSD-based submissions to the first NIST PQC process in 2017 were, however, invalidated by algebraic attacks, raising fundamental concerns about the security of RSD-based designs. 
> 
> In this work, we revisit the parameters of prominent rank-based constructions and analyze the rationales that guided their selection, as well as their security against modern attacks. We provide a unified complexity analysis of all major RSD algorithms, including combinatorial, algebraic, and hybrid approaches, under a common cost model. All estimates are made publicly available through a dedicated open source module.
> 
> Furthermore, we present the first asymptotic analysis of these algorithms, yielding deep insights into the relations between different procedures. We show that all studied algorithms converge to one of three distinct asymptotic runtime exponents. 
> We then provide an asymptotic baseline in terms of the worst-case decoding exponent. In particular, we find that for an extension degree equal to the code length, the best known algorithms achieve a complexity of $2^{0.1481n^2 + o(n^2)}$, attained simultaneously by algebraic and combinatorial approaches. Overall, our results reinforce confidence in the RSD assumption and the design rationales of modern RSD-based schemes such as RYDE.
