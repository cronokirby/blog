---
published: "2026-03-03"
link: "https://eprint.iacr.org/2026/432"
authors: ["[[Masaaki Shirase]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The processing of ML-KEM (formerly CRYSTALS-Kyber), a key encapsulation mechanism with post-quantum security, is performed by multiplication, addition, and subtraction of polynomials whose coefficients lie in the finite field ${\mathbb F}_{3329}$. To reduce the number of such operations, it is common to use the Number Theoretic Transform (NTT). This paper focuses on arithmetic over ${\mathbb F}_{3329}$ and proposes the use of a logarithmic representation with respect to a primitive element $\alpha$ of ${\mathbb F}_{3329}^*$ for implementing multiplication, addition, and subtraction over ${\mathbb F}_{3329}$. In this representation, multiplication in ${\mathbb F}_{3329}^*$ can be reduced to addition in $\mathbb{Z}_{3328}$. Furthermore, addition and subtraction in ${\mathbb F}_{3329}^*$ can be computed in the logarithmic domain by using Zech's logarithm. However, special treatment is required when $0 \in {\mathbb F}_{3329}$ is involved in the operations. This paper proposes a new implementation method of the logarithmic representation for arithmetic over ${\mathbb F}_{3329}$, including the handling of such exceptional cases.
