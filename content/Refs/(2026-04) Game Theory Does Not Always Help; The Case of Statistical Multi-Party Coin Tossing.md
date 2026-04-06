---
published: "2026-04-04"
link: "https://eprint.iacr.org/2026/657"
authors: ["[[Chen-Da Liu-Zhang]]", "[[Elisaweta Masserova]]", "[[Jo\u00e3o Ribeiro]]", "[[Sri AravindaKrishnan Thyagarajan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The study of coin-tossing protocols lies at the intersection of cryptography and game theory, where parties with potentially conflicting interests aim to jointly generate an unbiased random bit. Classical cryptographic results establish that strong fairness is achievable with an honest majority in the statistical setting, but impossible with a dishonest majority. In parallel, game-theoretic approaches [TCC 2018, Eurocrypt 2022 \& CRYPTO 2024] have demonstrated that weaker equilibrium-based fairness guarantees can sometimes circumvent cryptographic lower bounds, raising the question of whether such techniques can overcome impossibility in the statistical regime.
> 
> In this work, we answer this question negatively.
> 
>       - We show that for $n$ parties and $t \geq n/2$ corruptions, there exists no statistically secure, game-theoretic coin-tossing protocol, even assuming broadcast and bounded round complexity—with the sole exception of the case $n=4$ where all but one party share the same preference. This complements known feasibility results for $t < n/2$, thereby completing the statistical feasibility landscape.
> 
>       - We further consider the setting without broadcast. Here we prove that no computationally secure game-theoretic coin-tossing protocol exists for $t \geq n/3$ and polynomial-round complexity, except for the corner case $n=6$ where all but one party share the same preference.
> 
>  To establish these results, we refine existing frameworks for game-theoretic fairness to capture both broadcast and point-to-point communication models.
> 
> Together, our results establish the boundaries of game-theoretic fairness in multi-party coin tossing: while it extends feasibility in the computational setting, it offers no advantage in the statistical setting once an honest majority is lost.
