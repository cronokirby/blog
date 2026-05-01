---
published: "2026-04-23"
link: "https://eprint.iacr.org/2026/801"
authors: ["[[Ferran Alborch]]", "[[Tangi De Kerdrel]]", "[[Antonio Faonio]]", "[[Melek \u00d6nen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> This paper studies privacy-preserving data analytics in settings where multiple parties hold sensitive datasets and want to compute global statistics without revealing their data. We focus on computing the total number of common elements (cardinality of intersections) across multiple pairs of datasets, while ensuring that only the final aggregated result is disclosed and no intermediate information (such as individual intersections) is leaked. To address this problem, we introduce a new cryptographic primitive called outsourced cardinality private set intersection with secret-shared outputs (CaOPSI-SS). Our solution is extremely simple and uses pseudorandom functions and two non-colluding servers to offload computation, making it suitable for environments with heterogeneous resources. Building on this primitive, we design a protocol for aggregated pairwise analytics that computes the sum of intersection cardinalities across many parties. We apply our framework to a real-world use case: privacy-preserving mail analytics in large organizations with multiple subsidiaries. The system allows useful fine-grained queries over email logs while protecting sensitive HR data. We also extend the solution with differential privacy mechanisms to further protect individual records. Finally, we implement and evaluate the protocol, showing its scalability and practicality for large datasets. Our solution enables parties to obliviously offload their datasets to two non-colluding servers using pseudorandom functions and further execute a circuit-PSI among these two servers to obtain secret shares of the output.
