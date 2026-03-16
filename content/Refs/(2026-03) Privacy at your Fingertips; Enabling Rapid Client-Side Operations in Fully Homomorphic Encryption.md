---
published: "2026-03-13"
link: "https://eprint.iacr.org/2026/515"
authors: ["[[Aikata Aikata]]", "[[Florian Krieger]]", "[[Sujoy Sinha Roy]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Fully Homomorphic Encryption (FHE) allows users to offload large computations to servers without revealing the underlying data. Due to this unique feature, it is applicable to a variety of domains, including privacy-preserving Machine Learning.  However, all FHE schemes have two problems- slow encryption/decryption and substantial ciphertext expansion.  Thus, despite its significant potential, the practical implementation of FHE faces considerable challenges due to massive computation and communication overhead. In this work we address this gap, and propose a novel \tonetwo approach to optimize client-side homomorphic encryption, leveraging bootstrapping. 
> 
> This technique minimizes ciphertext expansion and reduces the communication overhead on the server as well as the client. We also eliminate the need for encoding and decoding by the client, thereby omitting the floating-point arithmetic requirement for FHE over approximate numbers. The elegance of this technique lies in its ability to utilize the built-in FHE routines and inherently maintain security and precision guarantees.  The proposed technique reduces the enc/decryption computation and communication requirements by up to $97\%$.  We employ the proposed techniques to develop a framework for FHE client operations that is compatible with both software and hardware platforms. We conduct a comprehensive design analysis and FPGA prototyping, present ASIC synthesis results, and provide microcontroller performance evaluations. The efficient architecture design methodology demonstrates up to $76\times$ speedup compared to prior works on the same platform.
