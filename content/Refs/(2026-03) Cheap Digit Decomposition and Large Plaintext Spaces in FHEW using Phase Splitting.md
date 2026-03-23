---
published: "2026-03-17"
link: "https://eprint.iacr.org/2026/537"
authors: ["[[Leonard Schild]]", "[[Aysajan Abidin]]", "[[Bart Preneel]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Fully homomorphic encryption algorithms enable users to perform computation on encrypted data. Since the first candidate scheme was proposed in 2009 by Gentry, schemes have rapidly improved in all metrics, be it computational complexity or memory efficiency. The class of accumulator based schemes which include FHEW and TFHE  are designed to operate on small data, usually ranging between 4 and 5 bits. Yet, schemes can be effectively leveraged in practice and enable lifting of small data to larger plaintext domains through the use of so-called programmable bootstrapping, the ability to evaluate arbitrary functions on an encrypted datum with time independent of the function.
> 
> In this work, we present novel methods for homomorphic digit decomposition, the task of efficiently breaking up a large encrypted datum, vastly exceeding the conventional plaintext domain size, into a radix representation for a chosen basis. Our approach relies on a computationally inexpensive decomposition of a ciphertext into chunks that can be assembled into the original message, without requiring that such chunks correspond to actual digits. Asymptotically, our approach doubles the performance compared to prior work and practically is 90% faster than the state of the art by Liu et al. As a direct consequence of our digit decomposition, we describe how to increase the size of the plaintext domain by a large factor, while only doubling the computational complexity and not causing a super-polynomial slowdown. Although concurrent works on functional bootstrapping reach similar improvements regarding the plaintext domain, our approach shines through its conceptual simplicity and flexibility.
