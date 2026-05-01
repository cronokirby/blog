---
published: "2026-04-18"
link: "https://eprint.iacr.org/2026/763"
authors: ["[[Yazheng Tu]]", "[[Jiafeng Xie]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The advent of quantum computing poses a significant threat to modern cryptography. To address this challenge, the National Institute of Standards and Technology (NIST) has initiated the Post-Quantum Cryptography (PQC) standardization process, with several algorithms being selected for standardization, including the recent code-based scheme HQC (Hamming Quasi-Cyclic). Meanwhile, a good number of research works in the field have switched to efficient hardware acceleration for PQC schemes. Following this trend, in this paper, we present a novel PQC hardware acceleration work, i.e., a Lightweight and Efficient hardware Accelerator for HQC (LEAH). Our design consists of three innovative hardware architectures for Key Generation, Encapsulation, and Decapsulation of HQC, respectively, while supporting all security levels. In total, we have proposed three layers of contributions, including: (i) dedicated design processes to obtain highly optimized major components for HQC, i.e., sparse polynomial multiplier, sampler, encoder, and decoder; (ii) novel data flow arrangement to design three operational phases of HQC that supports all parameter sets; (iii) a detailed comparison based on Field-Programmable Gate Array (FPGA) implementation to showcase the significant efficiency of the proposed design over the competing ones, e.g., Decapsulation architecture has at least 13.66\% (at most 49.87\%) less Equivalent Area-Delay Product (EADP) than the existing ones. We hope this outcome can facilitate the
> deployment of HQC in various applications and impact the ongoing NIST PQC standardization.
