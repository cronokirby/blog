---
published: "2026-01-17"
link: "https://eprint.iacr.org/2026/079"
authors: ["[[Artemii Ovchinnikov]]", "[[Aein Rezaei Shahmirzadi]]", "[[Siemen Dhooghe]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In the field of hardware masking, threshold implementations are a well-known technique that provides glitch-resistant power analysis security. While they guarantee probing security, finding a uniform sharing without additional randomness is difficult, making it challenging to apply to certain functions and, consequently, making it impossible to develop a tool that can straightforwardly generate the masked circuit. Additionally, this approach forces designers to use at least three shares in the underlying masking, which can make the design more costly. Other schemes, like DOM, which can work with two shares, often require fresh randomness. To address these issues, Shahmirzadi and Moradi introduced the NullFresh masking technique at CHES 2021. This method allows for uniform sharing with no additional randomness, using the minimal number of shares. However, similar to original threshold implementations, it is not always straightforward to find a NullFresh masking for arbitrary functions. 
> 
> In this work, we introduce an automated technique to provide masking for arbitrary functions, ensuring first-order security. This technique is applicable to functions where the number of output bits does not exceed the number of input bits. While this technique introduces additional register stages (resulting in higher latency and area) compared to existing methods, it addresses the automation challenges of threshold implementations, which have remained an open problem since their inception. We present the masking technique, along with proofs of glitch-extended probing security, and demonstrate its application to several ciphers, including PRINCE, MIDORI, SKINNY, KECCAK, and AES. The masked designs were verified using SILVER and PROLEAD, and tested on an FPGA through TVLA.
