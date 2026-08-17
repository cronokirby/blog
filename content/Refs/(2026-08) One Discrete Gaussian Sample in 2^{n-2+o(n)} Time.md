---
published: "2026-08-04"
link: "https://eprint.iacr.org/2026/1599"
authors: ["[[Jiseung Kim]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Aggarwal, Dadush, Regev, and Stephens-Davidowitz (ADRS; STOC 2015) sample $2^{n/2}$ discrete Gaussians at an arbitrary parameter in $2^{n+o(n)}$ time, and above smoothing in $2^{n/2+o(n)}$ time. They ask whether the latter bound suffices for one sample at an arbitrary parameter. We answer this question affirmatively: for every rank-$n$ lattice $L\subseteq\R^n$ specified by a rational basis and every rational $s^2>0$, we produce one sample from $D_{L,s}$ within statistical distance $\exp(-\Omega(n^3))$ in expected $2^{n/2+o(n)}$ time and $2^{n/2+o(n)}$ space on every execution.  The algorithm samples from random superlattices that are smooth at the required scale with constant probability and outputs the first point in $L$; a Gaussian-mass comparison shows that the $2^{n/2}$ samples produced by one ADRS call contain a point of $L$ with inverse-polynomial probability.  The factor $2^{n/2}$ is tight in this Gaussian-mass comparison. For every fixed rational $\alpha<1.4697$, the same comparison gives a sub-$2^n$
> algorithm for exact CVP on targets satisfying $\dist(y,L)\le\alpha\lambda_1(L)$, without a uniqueness assumption, and an exact-SVP algorithm in $2^{0.7315n+o(n)}$ time.
