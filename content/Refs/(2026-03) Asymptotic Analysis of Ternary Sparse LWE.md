---
published: "2026-03-31"
link: "https://eprint.iacr.org/2026/630"
authors: ["[[Byoungchan Chi]]", "[[Nathan Cho]]", "[[Jiseung Kim]]", "[[Changmin Lee]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We present an asymptotic analysis of the ternary variant of Sparse Learning with Errors (spLWE), a structured LWE variant proposed by Jain--Lin--Saha (CRYPTO'24) in which each equation involves only $k \ll n$ of the $n$ secret coordinates, enabling significantly more efficient computation than dense LWE.
> Unlike standard LWE, the small-secret regime of spLWE is not automatically reducible to its large-secret counterpart, leaving asymptotic hardness unclear, particularly when $k$ is very small.
> 
> We develop a two-pronged attack framework that depends explicitly on the sparsity parameter $k$. In the geometric regime $q > 3^k$, each sparse row reduces to a short-vector problem in a $k$-dimensional lattice, yielding complexity $2^{0.292k}$ via a sieving algorithm.
> In the statistical regime $q \leq 3^k$, we propose a greedy coordinate-recovery attack with running time $O(m \cdot k \cdot 3^k)$, where $m$ is the number of samples.
> 
> Heuristically, under mild assumptions, full recovery holds with high probability once the sample size is large enough; the resulting complexity is exponential only in $k$ and otherwise mild (up to polylogarithmic factors), i.e., polynomial in $n$, which makes very small $k$ vulnerable even at large dimensions.
> 
> 
> Experiments on toy instances confirm the predicted sharp transition. Complexity comparisons with prior works indicate lower complexity on a few of their parameter sets, while identifying regimes where our method is not applicable.
