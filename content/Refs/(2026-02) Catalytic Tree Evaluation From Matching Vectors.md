---
published: "2026-02-15"
link: "https://eprint.iacr.org/2026/265"
authors: ["[[Alexandra Henzinger]]", "[[Edward Pyne]]", "[[Seyoon Ragavan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We give new algorithms for tree evaluation (S. Cook et al. TOCT 2012) in the catalytic-computing model (Buhrman et al. STOC 2014). Two existing approaches aim to solve tree evaluation (TreeEval) in low space: on the one hand, J. Cook and Mertz (STOC 2024) give an algorithm for TreeEval running in super-logarithmic space $O(\log n\log\log n)$ and super-polynomial time $n^{O(\log\log n)}$. On the other hand, a simple reduction from TreeEval to circuit evaluation, combined with the result of Buhrman et al. (STOC 2014), gives a catalytic algorithm for TreeEval running in logarithmic $O(\log n)$ free space and polynomial time, but with polynomial catalytic space.
> 
> We show that the latter result can be improved. We give a catalytic algorithm for TreeEval with logarithmic $O(\log n)$ free space, polynomial runtime, and subpolynomial $2^{\log^\epsilon n}$ catalytic space (for any $\epsilon > 0$). Our result gives the first natural problem known to be solvable with logarithmic free space and even $n^{1-\epsilon}$ catalytic space, that is not known to be in standard logspace even under assumptions. Our result immediately implies an improved simulation of time by catalytic space, by the reduction of Williams (STOC 2025).
>     
> Our catalytic TreeEval algorithm is inspired by a connection to matching vector families and private information retrieval, and improved constructions of (uniform) matching vector families would imply improvements to our algorithm.
