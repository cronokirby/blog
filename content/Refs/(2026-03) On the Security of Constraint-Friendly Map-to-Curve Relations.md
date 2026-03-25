---
published: "2026-03-24"
link: "https://eprint.iacr.org/2026/590"
authors: ["[[Youssef El Housni]]", "[[Benedikt B\u00fcnz]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Groth, Malvai, Miller and Zhang (Asiacrypt 2025) introduced constraint-friendly map-to-elliptic-curve-group relations that bypass the inner cryptographic hash when hashing to elliptic curve groups inside constraint systems, achieving substantial reductions in circuit size. Their security proof works in the Elliptic Curve Generic Group Model (EC-GGM).
> We identify three gaps. First, the security bound is not explicitly analyzed, and the bounds stated for the concrete instantiations are loose. Second, the EC-GGM does not capture the algebraic structure of most deployed curves; we exhibit a concrete signature forgery using the parameters claimed secure. Third, the construction requires a congruence condition on the field that is not satisfied by all deployed curves; we extend it to any field.
> As a countermeasure we propose a y-increment variant that neutralises the algebraic attack, removes the field restriction, and preserves a comparable constraint count. We implement and benchmark both constructions in the open-source gnark (Go) library; the attack is additionally demonstrated via a self-contained SageMath simulation and confirmed at the circuit level against the authors’ own Noir (Rust) implementation.
