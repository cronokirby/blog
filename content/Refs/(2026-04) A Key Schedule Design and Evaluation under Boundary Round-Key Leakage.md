---
published: "2026-04-08"
link: "https://eprint.iacr.org/2026/696"
authors: ["[[Yu Morishima]]", "[[Hideki Yoshikawa]]", "[[Masahiro Kaminaga]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We study key-schedule design under boundary round-key leakage, namely leakage of the first round key, the last round key, or both end round keys. We propose the nonlinear key-schedule $\mathrm{RK}_i = K \oplus F\bigl(K \oplus T(i)\bigr)$, where $K$ is the master key, $T(i)$ is a public domain separation value, and $F$ is a public SPN-based permutation parameterized by its round count $N_F$.
> 
> Under the boundary-leakage model considered in this paper, leakage of one end round key yields an instance of the equation $Z=U\oplus F(U)$, whereas leakage of both end round keys yields a differential constraint of the form $F(U)\oplus F(U\oplus\Delta)=\Gamma$, where $\Delta$ is determined by the two end indices and $\Gamma$ is derived from the two leaked round-key values. These reductions clarify the nonlinear systems induced by boundary leakage and the absence of a linear elimination route to the master key.
> 
> We also evaluate reduced variants of the resulting systems through Gr\"obner basis experiments, and further examine them by SAT-based key-recovery experiments and right-censored runtime analysis via a Weibull AFT model. Within the tested range, we do not observe degree collapse or unusually strong linear bias. These results provide heuristic support for the view that, under the boundary-leakage model considered here, the tested instantiations of the proposed key-schedule family do not admit an obvious efficient inversion route.
