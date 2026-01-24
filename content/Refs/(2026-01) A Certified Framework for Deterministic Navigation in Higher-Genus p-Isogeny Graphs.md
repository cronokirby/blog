---
published: "2026-01-03"
link: "https://eprint.iacr.org/2026/007"
authors: ["[[Hung T. Dang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We present a deterministic framework for navigating $p$-isogeny graphs of genus $g \ge 2$, addressing the lack of canonical and auditable primitives in higher dimensions. The framework integrates two components: the Certified $p$-Isogeny Step (PICS) and a Non-Decomposition Certificate (ND). PICS constructs the unique Frobenius-compatible inseparable isogeny by extracting kernel directions from Hasse--Witt invariants and differential subresultant profiles, thereby eliminating randomized kernel selection. Complementarily, ND serves as an algebraic filter that rejects Jacobians compatible with product decompositions by enforcing cyclicity in the associated differential operator module. We prove that the rejection density scales asymptotically as $O(p^{-1})$. Experimental validation using a C-based backend over 256-bit prime fields demonstrates that the certification logic incurs a relative overhead of less than $0.2\%$ compared to the mandatory Hasse--Witt computation. By enforcing strict determinism and structural safety, the resulting transition unit provides a verifiable primitive for auditable parameter generation and isogeny-based time-lock puzzles.
