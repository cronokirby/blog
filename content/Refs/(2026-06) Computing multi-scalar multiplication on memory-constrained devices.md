---
published: "2026-06-25"
link: "https://eprint.iacr.org/2026/1316"
authors: ["[[L\u00e9o No\u00ebl]]", "[[Thomas Plantard]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Multi-Scalar Multiplication is a critical operation in most pairing-based zero knowledge proofs. In a lot of studies, memory limitations have often been reported to be the primary bottleneck preventing the calculation of larger MSMs. In this paper, we are particularly interested in the acceleration of this operation on devices with limited memory. 
> Pippenger’s algorithm (also known as bucket method) is the most efficient and, consequently, the most widely used method to calculate Multi-Scalar Multiplications. We propose an optimization of Pippenger’s algorithm which is at least as efficient as the original, and significantly more effective when operating under limited memory. The main idea is to use an adapted number of buckets depending on the available memory instead of . We conducted tests on the curve BLS12-381 with Multi-Scalar Multiplications ranging from  to  points. The results obtained demonstrate that we have a very significant gain (up to ) for very limited memories. This gain gradually decreases as more memory becomes available, until we achieve performance comparable to Pippenger’s once memory is no longer limited. For example, in a Multi-Scalar Multiplication with  points, we observe a gain of  with only  KB of memory,  with  KB,  with  KB, and so on, down to  once memory is no longer a constraint.
