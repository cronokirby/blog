---
published: "2026-04-14"
link: "https://eprint.iacr.org/2026/724"
authors: ["[[Sonia Bela\u00efd]]", "[[Nicolas Bon]]", "[[Matthieu Rivain]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> TFHE is one of the most promising scheme in the literature for an adoption of Fully Homomorphic Encryption (FHE) in practice. The core reason of its good performances is the powerful Programmable Bootstrapping (PBS) operation, that enables to homomorphically evaluate a Look-Up Table (LUT) on a ciphertext while simultaneously reducing its noise. However, the computational cost of running a PBS degrades severely when the size of the plaintext space increases, making it intractable for precision larger than 8 bits. So, evaluating a LUT larger than 2^8 is not considered possible with the "vanilla'' TFHE scheme.
> In this paper, we propose a technique to accelerate LUT evaluation at high precision, that significantly enhances the state of the art. Our method beats the original PBS for spaces larger than 6 bits, and is competitive with the WoP-PBS (the reference of the state of art) while being conceptually simpler. Moreover, our method relies on the standard PBS of TFHE, and therefore does not require the design of new advanced homomorphic operators, which facilitates its integration into larger homomorphic compilation systems.
