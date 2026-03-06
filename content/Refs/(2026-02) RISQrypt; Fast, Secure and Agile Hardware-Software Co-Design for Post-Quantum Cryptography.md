---
published: "2026-02-18"
link: "https://eprint.iacr.org/2026/312"
authors: ["[[Tolun Tosun]]", "[[At\u0131l Utku Ay]]", "[[Quinten Norga]]", "[[Suparna Kundu]]", "[[Melik Yaz\u0131c\u0131]]", "[[Erkay Sava\u015f]]", "[[Ingrid Verbauwhede]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this paper, we present RISQrypt, the first unified architecture in the literature that implements Kyber (ML-KEM) and Dilithium (ML-DSA), standardized lattice-based Post-Quantum Cryptography (PQC) algorithms, with masking. RISQrypt is a hardware–software co-design framework that integrates dedicated cryptographic accelerators to speed up polynomial arithmetic, hashing, and mask-conversion operations, the latter being one of the primary bottlenecks in masked implementations of lattice-based PQC. Our design achieves low latency while providing both theoretical and practical side-channel security, as validated through experimental evaluation. Specifically, the masked decapsulation of Kyber768 requires 109K clock cycles, while masked signing of Dilithium3 requires 1230K clock cycles on average. These results demonstrate 11.3x time-performance improvement over existing masked implementations. Our performance results for unprotected functions also outperform the existing work by up to an order of magnitude. In addition, prior designs are more limited in scope,  generally supporting only a single scheme and lacking the unified, crypto-agile framework that enables support for both Kyber and Dilithium as in our architecture. Leveraging the HW/SW co-design approach, our proposed architecture can  be readily extended to other PQC standards such as Falcon and SPHINCS+, as well as to algorithms sharing similar computational building blocks, through firmware reprogramming.
