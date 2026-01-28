---
published: "2026-01-21"
link: "https://eprint.iacr.org/2026/097"
authors: ["[[Alberto Marcos]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We present a fault injection attack against MAYO that, from a single faulty execution, enables the recovery of structural information about the secret. We consider a simple fault model: a controlled perturbation in a single oil coordinate of a signature block, which induces an error $e \in \mathcal{O}$ (the secret subspace) with a known oil part. We show that the observable mismatch in verification, $\Delta t = P^*(s') - t$, can be expressed exactly as the image of $e$ under a publicly derivable linear operator $\mathcal{L}$, obtained by expanding $P^*$ and using (i) the bilinearity of the differential $P'$ in characteristic $2$ and (ii) the key property $P(u)=0$ for all $u \in \mathcal{O}$. This linearization makes it possible to separate vinegar and oil coordinates and to reduce the recovery of the unknown component $e_V$ to solving a linear system over $\mathbb{F}_q$, under generic full-rank conditions for typical parameters. Once $e$ is recovered, the faulty signature can be corrected and, more importantly, a nonzero vector of the secret subspace is obtained, which serves as a starting point to scale to key recovery via known oil-space reconstruction techniques. We further discuss the practical feasibility when the exact position and value of the fault are unknown, showing that a bounded search over $k \cdot o$ positions and $q-1$ values keeps the cost low for the official parameter sets, and that the attack is also applicable to the randomized variant of MAYO.
