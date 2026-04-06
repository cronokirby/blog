---
published: "2026-04-05"
link: "https://eprint.iacr.org/2026/664"
authors: ["[[Jaros\u0142aw B\u0142asiok]]", "[[Paul Lou]]", "[[Alon Rosen]]", "[[Madhu Sudan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In the noisy $k$-XOR problem, one is given $y \in \mathbb F_2^M$ and must distinguish between the case where $y$ is uniform and the case where $y = Ax + e$, where $A$ is the adjacency matrix of a $k$-left-regular bipartite graph with $N$ variables and $M$ constraints, $x \in \mathbb F_2^N$ is random, and $e$ is noise with rate $\eta$. Lower bounds in restricted computational models such as Sum-of-Squares and low-degree polynomials are closely tied to the expansion of the underlying constraint graph, leading to conjectures that expansion implies hardness. We show that such conjectures are false by constructing an explicit family of graphs with near-optimal expansion for which noisy $k$-XOR is solvable in polynomial time.
> 
> Our construction combines two powerful directions of work in pseudorandomness and coding theory that have not been previously put together. Specifically, our graphs are based on the lossless expanders  of Guruswami, Umans and Vadhan (JACM 2009). Our key insight is that by an appropriate interpretation of the vertices of their graphs, the noisy XOR problem turns into the problem of decoding Reed-Muller codes from random errors. Then we build on a powerful body of work from the 2010s correcting from large amounts of random errors. Putting these together yields our construction. 
> 
> Concretely, we obtain explicit families for which noisy $k$-XOR is solvable in polynomial time at constant noise rate $\eta = 1/3$, with graphs satisfying $M = 2^{O(\log^2 N)}$, $k = (\log N)^{O(1)}$, and $(N^{1-\alpha}, 1-o(1))$-expansion. Under standard conjectures on Reed--Muller codes over the binary erasure channel, this extends to families with $M = N^{O(1)}$, $k = (\log N)^{O(1)}$, $(N^{1-\alpha}, 1-o(1))$-expansion, and polynomial-time algorithms at noise rate $\eta = N^{-c}$.
