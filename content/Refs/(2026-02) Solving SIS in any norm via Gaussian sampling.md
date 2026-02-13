---
published: "2026-02-11"
link: "https://eprint.iacr.org/2026/225"
authors: ["[[Amaury Pouly]]", "[[Yixin Shen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The short integer solution (SIS) problem is an important problem in lattice-based cryptography. In this paper, we construct a natural and simple algorithm that allows us to solve the problem for any norm in the case where the norm bound $\ell$ is smaller than half the modulus $q$.
> The algorithm consists in using a discrete gaussian sampler on the SIS $q$-ary lattice to sample lattice vectors, and requires to estimate the probabily that the sampled vector is non-zero and falls into a ball of radius $\ell$ in the given norm. For the latter,  we improve upon previous analysis of random $q$-ary lattice by obtaining tight bounds on the expected value and variance of the Gaussian mass of the entire lattice and of an $\ell_p$-norm ball, for any $p\in(0,\infty]$. These bounds require new technical results on the discrete Gaussian, but also rely on a conjecture which we have extensively verified.
> Aside from the conjecture, the remaining part of the algorithm is provably correct. When instantiated with a Markov chain Monte Carlo (MCMC)-based discrete Gaussian sampler, the complexity of the algorithm can be estimated precisely.
> Although our algorithm does not break Dilithium, it is at least 50 bits faster than the recent algorithm of Ducas, Engelberts and Loyer in Crypto 2025 for all security levels.
