---
published: "2026-06-25"
link: "https://eprint.iacr.org/2026/1318"
authors: ["[[Ben Nelson]]", "[[Joshua Limbrey]]", "[[Cong Ling]]", "[[Andrew Mendelsohn]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> HAWK is a signature scheme that was introduced in 2022, and uses the lattice isomorphism problem (LIP) as a basis for post-quantum cryptography. In this work, we describe a classical algorithm that recovers the HAWK secret key in probabilistic polynomial time, assuming four number-theoretic heuristics. The reduction from the rank-2 module-LIP instances underlying HAWK to nrdPIP (Eurocrypt '25) is central to our algorithm. At a high level, we first conjugate the HAWK public Gram matrix  by a random lower-triangular unimodular matrix  with `short' entries, forming a new Gram matrix , and then test whether the -nrdPIP instance attached to  is unusually easy. In particular, for a non-negligible proportion of such instances , one can use the Lenstra-Silverberg algorithm to solve the corresponding -nrdPIP instance using a subfield approach. By resampling  until such an instance is uncovered and solved, which can be seen as `re-randomising' the -nrdPIP instance whilst fixing the corresponding module-LIP instance, we are then able to recover a valid HAWK private key. At the time of writing, we do not claim that HAWK is broken, as we have not yet verified these heuristics experimentally. On the other hand, these heuristics seem to be very plausible, and we hope to be able to verify this in the future with an implementation of our algorithm.
