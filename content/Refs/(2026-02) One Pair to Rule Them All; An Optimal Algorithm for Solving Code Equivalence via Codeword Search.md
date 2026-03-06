---
published: "2026-02-16"
link: "https://eprint.iacr.org/2026/268"
authors: ["[[Alessandro Budroni]]", "[[Andre Esser]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Two linear codes $\mathcal{C},\mathcal{C}’$ over $\mathbb{F}_q$ are linearly equivalent if one can be mapped to the other via a monomial transformation. Recovering this monomial from $\mathcal{C}$ and $\mathcal{C}’$ is known as the Linear Code Equivalence (LCE) problem.
> 
> The most efficient algorithms to solve the LCE problem follow a common framework based on finding low-weight codewords. This framework admits a natural lower bound obtained by assuming that among the found low-weight codewords, a single equivalent codeword pair can be identified and used to reconstruct the monomial without overhead. 
> Whether this lower bound can be achieved by a constructive instantiation has remained an open problem. Existing algorithms all require multiple equivalent pairs for monomial reconstruction, resulting in both concrete and asymptotic gaps to the lower bound.
> 
> In this work, we answer the question of whether there exists such an optimal framework instantiation in the affirmative. We introduce a canonical labeling technique, as a generalization of canonical forms, that allows for monomial reconstruction from a single pair of equivalent codewords. Crucially, this labeling procedure, even if not necessarily polynomial-time, can be embedded into the codeword-search framework to identify equivalent codewords and perform final monomial recovery without overhead. This gives rise to the first framework instantiation that meets its lower bound both asymptotically and concretely up to negligible tolerance.
> 
> For the parameter sets proposed for the LESS signature scheme, an active second-round contender in the NIST PQC standardization process, our analysis reduces the estimated bit security by up to 15 bits.
