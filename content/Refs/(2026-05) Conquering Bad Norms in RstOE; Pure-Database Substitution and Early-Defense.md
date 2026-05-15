---
published: "2026-05-03"
link: "https://eprint.iacr.org/2026/863"
authors: ["[[Shuping Mao]]", "[[Zhiyu Zhang]]", "[[Peng Wang]]", "[[Lei Hu]]", "[[Luying Li]]", "[[Ying Chen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The Recording Standard Oracle with Errors (RstOE) technique is an important tool for quantum security proofs in symmetric-key cryptography. However, against adaptive quantum chosen-plaintext adversaries, traditional RstOE-based proofs may suffer from the ``trivialization of norm” problem. This issue arises from three main causes: the delayed evaluation of bad events, the presence of unrecorded external variables, and the unconstrained independence of intermediate variables. To address this obstacle, we propose two refinements of the RstOE methodology, namely Pure-Database Substitution and Early-Defense. Among them, Pure-Database Substitution algebraically eliminates unrecorded external variables and reformulates collision constraints in terms of internal database records. Building on this substitution, Early-Defense moves the collision check to the point at which a new internal variable is sampled. Because the bad event now depends on this freshly generated quantum randomness, only a negligible fraction of the $2^n$ superposition branches will satisfy the collision constraint. This reduces the amplitude of transitions into the bad subspace and avoids the $O(1)$ norm collapse. We demonstrate the method on TNT as a case study and outline extensions to EDMQ, EDMDQ, LRWQ and QPMAC.
