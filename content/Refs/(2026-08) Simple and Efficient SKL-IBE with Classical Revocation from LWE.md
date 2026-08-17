---
published: "2026-08-13"
link: "https://eprint.iacr.org/2026/1676"
authors: ["[[Ho Nguyen Pham]]", "[[Duong Hieu Phan]]", "[[Quoc-Huy Vu]]", "[[Weiqiang Wen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Secure key leasing (SKL) is a quantum cryptographic primitive that enables the leasing of decryption keys to delegated users with the
> guarantee that, once revoked, the lessees irreversibly lose decryption capability. A key feature that makes SKL practically relevant is classical revocation: the ability to revoke keys at any time and from anywhere, without relying on a quantum channel.
> 
> In this work, we revisit SKL schemes for public-key encryption (PKE) and identity-based encryption (IBE), and present a new approach for concrete efficiency under the standard Learning With Errors (LWE) assumption. First, we refine the security analysis of the Dual-Regev SKL-PKE scheme with classical revocation from [Ananth, Poremba, and Vaikuntanathan, TCC 2023; Ananth, Hu, and Huang, TCC 2024], establishing security under the polynomial hardness of LWE with polynomial modulus. Together with the resource efficiency of the Dual-Regev-based construction, our analysis shows that this approach yields the most quantum-efficient known SKL-PKE scheme. Second, we present a simple and efficient construction of selectively secure SKL-IBE with classical revocation from standard LWE. Our approach directly extends the Dual-Regev SKL-PKE within the IBE framework of [Agrawal, Boneh, and Boyen, Eurocrypt 2010], avoiding garbled circuits and obfuscation-based assumptions and achieving improved concrete efficiency over prior generic approaches.
