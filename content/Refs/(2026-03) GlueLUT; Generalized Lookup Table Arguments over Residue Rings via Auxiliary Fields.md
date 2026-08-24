---
published: "2026-03-10"
link: "https://eprint.iacr.org/2026/494"
authors: ["[[Yuanju Wei]]", "[[Zhelei Zhou]]", "[[Xinxuan Zhang]]", "[[Songyu Wu]]", "[[Binwu Xiang]]", "[[Cheng Hong]]", "[[Yi Deng]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Lookup Table (LUT) arguments are a central efficiency primitive in modern SNARKs, and existing high-performance constructions are largely tailored to large fields. Meanwhile, an increasingly important class of applications is natively ring-based, with arithmetic carried out over residue rings $\mathbb{Z}_Q:=\mathbb{Z}/Q\mathbb{Z}$. We find that naively extending field-based lookup table techniques to rings faces fundamental obstacles, which can lead to unsoundness, limited applicability, or poor efficiency.
> 
> We introduce $\mathsf{GlueLUT}$, a general framework for constructing LUT arguments over arbitrary residue ring $\mathbb{Z}_Q$ that supports arbitrary tables.  Our main technical tool is a new primitive called Cross-Modulus Consistency (CMC) PIOP, proves that two witnesses defined over coprime moduli share the same underlying integer in the canonical range. Using our CMC PIOP as a glue, we perform the lookups over an auxiliary field $\mathbb{F}_P$ (for a prime $P>Q$) and then certify the consistency between the witness over $\mathbb{Z}_Q$ and the witness over $\mathbb{F}_P$, thereby avoiding the obstacles of constructing LUT arguments directly over rings. We further provide two optimized instantiations, $\mathsf{GlueLUT}$-$\mathsf{v1}$ for $Q=pq$ and $\mathsf{GlueLUT}$-$\mathsf{v2}$ for $Q=p^k$, capturing common modulus families in practice. Finally, we implement $\mathsf{GlueLUT}$-$\mathsf{v1}$ and $\mathsf{GlueLUT}$-$\mathsf{v2}$ as stand-alone PIOPs and report prototype results that corroborate our theoretical efficiency.
