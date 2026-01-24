---
published: "2025-12-23"
link: "https://eprint.iacr.org/2025/2308"
authors: ["[[Hanjun Li]]", "[[Huijia Lin]]", "[[George Lu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We study the problem of constructing Boolean garbling schemes that are both succinct$-$with garbled circuit size significantly smaller than the original circuit$-$and have low-depth garbling algorithms, where the garbling process runs in parallel time logarithmic in the circuit size. Prior schemes achieve one but not the other, unless relying on indistinguishability obfuscation ($\mathsf{iO}$), which is prohibitively inefficient, relies on a combination of multiple assumptions, and achieves only polynomial garbling depth $\mathsf{poly}(\lambda,\log |C|)$.  
> 
> We resolve this tension by presenting the first garbling schemes that are both succinct and admit garbling algorithms in $\mathsf{NC}^1$, based only on standard group and lattice assumptions. Our main results include:
>     • $\textbf{One-bit-per-gate garbling}$ with logarithmic garbling depth based on DDH or RLWE and the existence of a local PRG.
>     • $\textbf{Succinct privacy-free garbling}$ of size linear in the circuit depth $D$ (and sublinear in the circuit size $|C|$), based on DDH or RLWE.
>     • $\textbf{Reusable, fully succinct garbling}$ with logarithmic garbling depth, based on decomposable LWE.  
> 
> The DDH-based one-bit-per-gate scheme has tunably small inverse polynomial correctness and privacy errors, which can be made negligible at the cost of increasing garbling depth to $\mathsf{poly}(\lambda)$. 
> 
> As further extension, we also obtain the first attribute-based encryption schemes with succinct keys and low-depth key generation. 
> 
> At a conceptual level, our constructions are derived from a unified framework that subsumes all prior approaches to succinct garbling. It identifies the common source of high-depth garbling, and provides a general methodology for reducing garbling depth without sacrificing succinctness, applicable across different techniques and assumptions.
