---
published: "2026-04-23"
link: "https://eprint.iacr.org/2026/807"
authors: ["[[Flavio Bergamaschi]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In modern computing workloads, performance is increasingly constrained not by computation, but by the cost of moving data. This shift reflects both the scale and structure of contemporary applications, in which large data sets are subjected to repeated transformations across memory hierarchies, interconnects and distributed systems. A similar pattern appears across domains including fully homomorphic encryption, post-quantum cryptography and artificial intelligence: intermediate representations are repeatedly transformed and exchanged, and their movement rather than the arithmetic itself is what governs system efficiency.
> 
> This paper examines Compute-in-Transit as an architectural model in which computation is applied during data movement, embedding transformations along the data path rather than at discrete processing nodes. Rather than treating communication and computation as separate processes, this model aligns computation with dataflow, reducing the need for intermediate storage and repeated transfers. While the underlying idea has been explored in prior work, its practical realisation has been constrained by electronic architectures. Photonics provides a distinct approach, enabling transformations to be performed directly on signals in transit and offering a path toward systems in which computation is applied as data moves rather than after it is transported.
