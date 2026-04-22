---
published: "2026-04-14"
link: "https://eprint.iacr.org/2026/726"
authors: ["[[Giyoon Kim]]", "[[Seungjun Baek]]", "[[Yongjin Jeon]]", "[[Vedad Had\u017ei\u0107]]", "[[Jongsung Kim]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this paper, we propose a new widely applicable technique for constructing low-depth S-box circuits, which we call SLICE (Segmented Low‑depth Iterative Circuit Exploration). SLICE reduces circuit depth by partitioning circuits into subcircuits and applying bit-level optimizations. To mitigate the optimization cost of subcircuits with large bit-widths or high AND depth, SLICE temporarily reduces their bit-width during the search, making low-depth circuit construction feasible for various S-box sizes. Furthermore, we refine the eBPD algorithm with the aim of minimizing XOR gate count in terms of area, and apply it to the constructed circuits to achieve an additional reduction.
> 
> Our proposed method is simple yet powerful, especially in practical applications. This work focuses on three practically deployed cases, namely the AES, Ascon S-box circuits and Dillon’s 6-bit APN S-box used in FIDES, and additionally considers the cube $x^3$ S-box. For the AES S-box, we present 14-, 13- and 12-depth circuits, whereas the previous lowest depth was 14. Notably, the 12-depth design sets a new overall depth record for AES S-box circuits, while the 13-depth design records the most hardware-efficient circuit in terms of the area$\times$delay metric (ADP). For the Ascon S-box, we present the first 4-depth circuit. For Dillon's S-box and the cube $x^3$ S-box, we also derive new low-depth circuits that improve upon the best previously known depths. All of our proposed S-box circuits achieve better ADPs than previous designs. We believe that SLICE will be useful for evaluating both existing and novel S-box designs.
