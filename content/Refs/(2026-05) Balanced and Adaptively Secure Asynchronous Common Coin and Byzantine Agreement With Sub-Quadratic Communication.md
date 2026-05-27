---
published: "2026-05-19"
link: "https://eprint.iacr.org/2026/998"
authors: ["[[Hanwen Feng]]", "[[Tiancheng Mai]]", "[[Qiang Tang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Distributed common randomness generation (i.e., the common coin problem) is a cornerstone of randomized distributed computing. While a long line of research has sought scalable solutions, the asynchronous setting remains a challenge. Specifically, while Blum et al. (TCC'21) achieved sub-quadratic communication complexity, their approach lacks ``balance'': certain nodes must still send $\Omega(n)$ messages, creating a scalability bottleneck. Furthermore, their solution only tolerates a $1/3 - \epsilon$ fraction of corrupted nodes, whereas the classic construction by Cachin et al. (PODC'00) tolerates up to $1/2$ under the same setup assumptions.
> 
> In this work, we close these gaps by presenting the first balanced asynchronous common coin protocol with sub-quadratic communication complexity. In our construction, the communication cost of every honest node is bounded by $\widetilde{O}(\sqrt{n})$. Our protocol supports an adaptive adversary corrupting up to $1/2 - \epsilon$ nodes. Beyond these asymptotic improvements, our solution avoids the heavy cryptographic machinery (such as fully homomorphic encryption) required by Blum et al. and terminates in just two deterministic rounds, compared to the dozens of expected rounds in prior work.
> 
> At the heart of our construction are explicit and efficient sampler constructions. These samplers partition a population with a $1/2 + \epsilon$ honest majority into $O(\sqrt{n})$ communities, ensuring that a majority of these communities maintain a ``forever-honest'' majority. By leveraging how communities are allocated, we design mechanisms that allow each community to collectively emulate a single ``virtual node'' in Cachin et al.'s protocol. Reducing the number of participants from $n$ physical nodes to $O(\sqrt{n})$ virtual nodes drives the total communication complexity to a sub-quadratic level.
> 
> Finally, we extend our methodology to Asynchronous Binary Byzantine Agreement (ABA), yielding the first balanced ABA protocol with sub-quadratic communication complexity that tolerates up to $1/3 - \epsilon$ adaptive corruptions.
