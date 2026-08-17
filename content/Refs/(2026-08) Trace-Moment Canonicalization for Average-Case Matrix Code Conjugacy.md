---
published: "2026-08-12"
link: "https://eprint.iacr.org/2026/1664"
authors: ["[[Jingchuan Ma]]", "[[Yanhua Liu]]", "[[Qiaoyun Huang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Matrix Code Conjugacy asks whether two matrix subspaces are related by one simultaneous change of basis. A recent average-case algorithm reaches a $\Theta(1/q)$ fraction when the code dimension equals the matrix size, but a general code basis carries an additional unknown coefficient-space action. We bypass that action rather than recover it. A nonzero generator $A$ of a one-dimensional trace hull defines the homogeneous functionals $X\mapsto\operatorname{Tr}(A^rX)$. A transverse moment selects a nondegenerate complement of the hull, and trace duality turns the moments into basis-independent homogeneous matrices inside the code. The pair $(A,M_2)$ transforms only by ambient conjugation and a known scalar weight.
> 
> For every odd prime power $q$, odd $n\ge 5$, and $2\le m\le n^2-2$, we obtain a deterministic partial search-and-decision algorithm that is correct for at least a $1/(35q)$ fraction of uniformly random $m$-dimensional first codes, against every second input. Its bit complexity is $\operatorname{poly}(n,m,\log q)$; the certified fraction is $\Theta(1/q)$. The proof counts the actual correlated projection law of $M_2$, including its endpoint atoms, and never models it as an independent random matrix. A direct corollary gives the same $\Theta(1/q)$ scale in the independent-uniform ordered-tuple model. The result excludes characteristic two and even $n$, and it does not by itself yield a general Matrix Code Equivalence algorithm.
