---
published: "2026-04-10"
link: "https://eprint.iacr.org/2026/704"
authors: ["[[Gustavo Banegas]]", "[[Nicolas Sarkis]]", "[[Benjamin Smith]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We give efficient formulas to evaluate isogenies of ordinary elliptic curves
> over finite fields of characteristic $2$, extending the odd-characteristic techniques of Hisil--Costello and Renes to binary fields. For odd prime degree $\ell = 2s+1$, our affine product evaluation computes the image $x$-coordinate using $5s\mathbf{M}$ field multiplications, or $4s\mathbf{M}$ when the kernel points are normalized. We derive an inversion-free variant that evaluates the $x$-map in projective and twisted Kummer coordinates, allowing carried points to remain projective across successive isogeny steps. Over $\mathbb{F}_{2^{511}}$, microbenchmarks show that the inversion-free projective and twisted variants are faster than Vélu-style $x$-evaluation when outputs are kept in projective/twisted form, while the affine one-inversion variant is about $4.2\times$ faster.
