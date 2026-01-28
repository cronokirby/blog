---
published: "2026-01-22"
link: "https://eprint.iacr.org/2026/104"
authors: ["[[Davide Cerutti]]", "[[Stelvio Cimato]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We analyzed in depth the Homomorphic Secret Sharing construction applied for Pseudorandom Correlation Function, and we obtained interesting results for various applications.
> 
> In this paper, we discuss how the PCF can be achieved using the Damgard-Jurik HSS schema by solving the distance function over a ciphertext parametric space of \(\mathbb{Z}^{*}_{n^{\zeta + 1}}\),
> performing the distributed multiplication protocol as the base building block for our PCF.
> 
> We created a weak PCF for Vector-OLE via 1-depth HSS circuit, furthermore, via what we called pre-computation with RO-less, we achieved a strong PCF for V-OLE between two parties correct against anhonest-but-curious adversary \(\mathcal{A}_{\mathsf{hbc}}\) and fail-safe secure against an active adversary \(\mathcal{A}_{\mathsf{poly}}\).
> 
> We also extended our main construction by describing a silent approach in two different ways described as semi-silent by a pre-sampling assumption between the parties and a true-silent protocol execution exploiting the generation of seeds by a PRF. 
> As a last step, we discussed how to build a \(n \times\)OLE generator via our pre-computation session to craft an arbitrary amount of OLE correlation.
> 
> Our entire paper is further verified by the implementation of a complete and exhaustive library covering all HSS operations, publicly accessible and usable via \(\textit{pip install obliviouspy-HSS}\) and importing \(\textit{import oblivious}\).
