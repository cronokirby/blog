---
published: "2026-02-23"
link: "https://eprint.iacr.org/2026/361"
authors: ["[[Rostin Shokri]]", "[[Nektarios Georgios Tsoutsos]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Fully Homomorphic Encryption (FHE) offers strong cryptographic guarantees for secure outsourced computation, yet the performance of modern schemes like TFHE remains a barrier for complex applications. Existing TFHE approaches relying on programmable bootstrapping (PBS) are inefficient for large circuits, as they are limited to evaluating small (3-4 bit) lookup tables (LUTs). 
> 
> Our work introduces a novel compiler framework that overcomes this limitation by integrating circuit bootstrapping (CBS) and vertical packing (VP) to enable the evaluation of circuits composed of LUTs up to 12 bits. Our framework, built upon MLIR, introduces new dialects for CBS and VP and leverages Yosys for circuit synthesis, automating the translation from high-level programs to optimized TFHE circuits. Furthermore, we propose bespoke optimization passes that combine shared LUTs to minimize the overall cryptographic operations required. Experimental results demonstrate that our CBS-based design achieves execution times several times faster than the baseline PBS-only approach, highlighting the practical benefits of combining CBS and VP with compiler-driven circuit-level optimizations.
