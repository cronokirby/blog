---
published: "2026-02-16"
link: "https://eprint.iacr.org/2026/273"
authors: ["[[Aarushi Goel]]", "[[Swagata Sasmal]]", "[[Mingyuan Wang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Cryptographic primitives involving multiple participants, such as secure multiparty computation (MPC), threshold signatures, and threshold encryption, are typically designed under the assumption that at least a threshold number of participants remain honest and non-colluding. However, many real-world applications require more expressive access structures beyond simple thresholds. A prominent example is the weighted threshold access structure, where each party is assigned a weight and security holds as long as the total weight of corrupted parties does not exceed a specified threshold.
> 
> Despite the practical relevance of such access structures, our understanding of efficient constructions supporting them remains limited. For instance, existing approaches for weighted MPC and weighted threshold encryption incur costs that scale with the total assigned weights to all parties or rely on non-black-box use of cryptography.
> 
> In this work, we present the first black-box constructions of the following weighted cryptosystems with weight-independent complexity in the trusted setup model: (i) a weighted MPC protocol with guaranteed output delivery, (ii) a semi-honest weighted threshold encryption scheme and (iii) a semi-honest weighted threshold Schnorr signature scheme.  
> 
> At the heart of our constructions is a new succinct computational secret sharing scheme with linear homomorphism for weighted threshold access structures. We provide two concrete instantiations of this primitive, based on the Decisional Composite Residuosity (DCR) assumption and the Learning With Errors (LWE) assumption, respectively. Furthermore, our constructions extend to any general access structure that can be represented efficiently as a monotone Boolean circuit.
