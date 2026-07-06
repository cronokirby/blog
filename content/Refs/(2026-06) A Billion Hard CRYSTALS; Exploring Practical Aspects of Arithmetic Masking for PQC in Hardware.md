---
published: "2026-06-16"
link: "https://eprint.iacr.org/2026/1265"
authors: ["[[Fabian Buschkowski]]", "[[Niklas H\u00f6her]]", "[[Pascal Sasdrich]]", "[[Tim G\u00fcneysu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Due to the complexity of modern cryptographic algorithms, especially in the area of Post-Quantum Cryptography (PQC), conceptualizing optimal hardware designs in relation to some target performance metric is increasingly time-consuming and error-prone, particularly when combined with the need for secure side-channel protection mechanisms. To solve this, Buschkowski et al. presented the HADES framework at CHES 2025 that efficiently automates the pre-synthesis Design Space Exploration (DSE) process and combines it with automated arbitrary-order masking capabilities. However, as their work focuses only on Boolean masking, PQC schemes that rely heavily on finite field arithmetic incur a significant overhead in latency and area, as demonstrated in their MLKEM (Kyber) case study.
> 
> In order to improve the performance of such primitives in hardware, we present a framework built upon HADES that supports both Boolean and arithmetic masking domains and can seamlessly and automatically convert between both types of secret sharing within the design hierarchy, while retaining the efficient DSE capabilities, extended by additional performance metrics. Even though the theoretical foundations of arithmetic masking are well-studied, some highly relevant implementation aspects, like the generation of non-power-of-2 masking randomness, are left largely unexplored. To help close this gap, we extensively analyze and systematically explore the cost associated with the secure and efficient generation of uniform randomness in hardware.
> 
> As an initial case study to highlight the capabilities of our modified HADES tool, we present a highly configurable and optionally fully-masked ML-KEM hardware design that improves upon state-of-the-art masked implementations by up to two orders of magnitude while also being competitive with unmasked designs from literature. To validate its practical security, we are the first to conduct practical leakage assessment measurements on the complete decapsulation algorithm, showing no signs of side-channel leakage after 500000 traces.
