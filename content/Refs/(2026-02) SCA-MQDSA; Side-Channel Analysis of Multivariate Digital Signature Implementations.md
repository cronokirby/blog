---
published: "2026-02-11"
link: "https://eprint.iacr.org/2026/228"
authors: ["[[N.K. Vishwaajith]]", "[[Anindya Ganguly]]", "[[Debranjan Pal]]", "[[Trevor Yap]]", "[[Puja Mondal]]", "[[Suparna Kundu]]", "[[Sayandeep Saha]]", "[[Shivam Bhasin]]", "[[Ingrid Verbauwhede]]", "[[Angshuman Karmakar]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The rapid progress of Internet-of-Things (IoT) systems and network protocols has strengthened the demand for digital signature schemes with compact signatures and low computational overhead. However, standardized post-quantum signature schemes, such as ML-DSA, SLH-DSA, and Falcon, incur relatively large signature sizes, which limit their practicality on resource-constrained devices (RCD). To address this challenge, NIST recalled the post-quantum digital signature standardization process. It reopened the interest in alternative constructions. Signature schemes based on multivariate quadratic equations have emerged as promising candidates due to their comparatively small signature sizes and efficient verification. At the same time, these schemes are often deployed on platforms with limited physical protections, making side-channel security a critical concern.
> 
> Four multivariate-based signature schemes, such as UOV, MAYO, QR-UOV, and SNOVA, were reached in the second round of the NIST post-quantum signature standardization process for further evaluation. In this work, we analyze implementations of multivariate digital signature algorithms submitted to the NIST process, with a particular focus on the MAYO signature scheme. We present an \textit{inexpensive} side-channel attack targeting nibble-sliced implementations of MAYO. Our attack operates under a minimal threat model: it does not require physical possession of the target device and succeeds using leakage obtained from a single signing execution.
> 
> We perform our attacks on a ChipWhisperer-Lite platform with a 32-bit STM32F3 ARM Cortex-M4 target mounted on a CW308 UFO board, and we add the corresponding reference code along with target traces.
