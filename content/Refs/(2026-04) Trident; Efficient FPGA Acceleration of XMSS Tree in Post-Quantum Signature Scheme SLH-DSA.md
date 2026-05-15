---
published: "2026-04-28"
link: "https://eprint.iacr.org/2026/837"
authors: ["[[Tianyou Bao]]", "[[Joshua Ennis]]", "[[Kirill Morozov]]", "[[Jiafeng Xie]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The emergence of quantum computing poses significant threats to conventional cryptographic systems, necessitating the efficient hardware acceleration of Post-Quantum Cryptography (PQC), especially on the Field-Programmable Gate Array (FPGA) platforms. SPHINCS$^+$, recently standardized by NIST (National Institute of Standards and Technology) as SLH-DSA (Stateless Hash-Based Digital Signature Algorithm), represents the only hash-based digital signature scheme. Its practical deployment, however, is restricted by computationally intense operations, particularly in the eXtended Merkle Signature Scheme (XMSS) tree, where WOTS+ (Winternitz One-Time Signature Plus) public key generation consumes the majority of signature generation cycles. With this background, this paper presents Trident, an innovative FPGA-based hardware accelerator that addresses critical performance and resource challenges in XMSS of SLH-DSA. First, we propose a triangle hash unit architecture that enables parallel execution of up to three hash operations simultaneously, directly addressing the computational bottleneck in XMSS tree construction and WOTS+ chain operations. Second, we develop an optimized memory caching scheme that reduces on-chip memory requirements via intermediate value management. Third, we implement the Trident on
> FPGAs and comprehensively evaluate it across all parameter sets at multiple security levels, i.e., up to 8.6$\times$ improvement in signature generation and up to 5.4$\times$ speed-up in verification operations. Extended Hypertree evaluation shows a 34.6$\times$ area-delay product (ADP) improvement on UltraScale+ FPGA for SLH-DSA-128s. This Trident represents a significant advancement toward practical SLH-DSA deployment in FPGA environments.
