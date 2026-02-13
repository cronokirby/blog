---
published: "2026-02-10"
link: "https://eprint.iacr.org/2026/211"
authors: ["[[Cheng Lyu]]", "[[Mu Yuan]]", "[[Dabin Zheng]]", "[[Siwei Sun]]", "[[Shun Li]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The mapping $\chi_n$ from $\mathbb{F}_{2}^{n}$ to itself defined by $y=\chi_n(x)$ with $y_i=x_i+x_{i+2}(1+x_{i+1})$, where the indices are computed modulo $n$, has been widely studied for its applications in lightweight cryptography. However, $\chi_n $ is bijective on $\mathbb{F}_2^n$ only when $n$ is odd, restricting its use to odd-dimensional vector spaces over $\mathbb{F}_2$. To address this limitation, we introduce and analyze the generalized mapping $\chi_{n, m}$ defined by $y=\chi_{n,m}(x)$ with $y_i=x_i+x_{i+m} (x_{i+m-1}+1)(x_{i+m-2}+1) \cdots (x_{i+1}+1)$, where $m$ is a fixed integer with $m\nmid n$. To investigate such mappings, we further generalize $\chi_{n,m}$ to $\theta_{m, k}$, where $\theta_{m, k}$ is given by $y_i=x_{i+mk} \prod_{\substack{j=1,\,\, m \nmid j}}^{mk-1}  \left(x_{i+j}+1\right), \,\,{\rm for }\,\, i\in \{0,1,\ldots,n-1\}$. We prove that these mappings generate an abelian group isomorphic to the group of units in $\mathbb{F}_2[z]/(z^{\lfloor n/m\rfloor +1})$. This structural insight enables us to construct a broad class of permutations over $\mathbb{F}_2^n$ for any positive integer $n$, along with their inverses. We rigorously analyze algebraic properties of these mappings, including their iterations, fixed points, and cycle structures. Additionally, we provide a comprehensive database of the cryptographic properties for iterates of $\chi_{n,m}$ for small values of $n$ and $m$. Finally, we conduct a comparative security and implementation cost analysis among $\chi_{n,m}$, $\chi_n$,  $\chi\chi_n$ and their variants, and prove Conjecture 1 proposed in [Belkheyar et al.,  2025] as a by-product of our study. Our results lead to generalizations of $\chi_n$, providing alternatives to $\chi_n$ and $\chi\chi_n$.
