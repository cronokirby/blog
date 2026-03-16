---
published: "2026-03-13"
link: "https://eprint.iacr.org/2026/517"
authors: ["[[Alexander May]]", "[[Gabriel S\u00e1 Diogo]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The security of most prominent code-based key encapsulation mechanisms (KEMs) relies on the hardness of the syndrome decoding problem. It is well-known that in the presence of $n$ syndromes, one gets a speed-up of roughly $\sqrt n$ for decoding a single syndrome by a technique called Decoding One Out of Many (DOOM), due to Sendrier.
> 
> Modern code-based schemes like HQC and BIKE work over a polynomial ring $\mathbb{F}_2[X]/(X^n-1)$ that naturally leads to $n$ syndromes. As a consequence, DOOM-type speed-ups of $\sqrt n$ have been taking into account for the HQC and BIKE parameter selection in the single-instance setting. 
> 
> However, we analyse a naturally appearing multi-instance setting, where the same public key is used to derive $M$ session keys $K^{(1)}, \ldots, K^{(M)}$. Our attack goal is to reconstruct a single session key $K^{(i)}$.     
>     
> We show that in an HQC and BIKE multi-instance setting an attacker can construct a DOOM instance with $nM$ syndromes. In a Classic McEliece multi-instance setting, an attacker obtains $M$ syndromes. Our results show that multi-instance security of code-based KEMs degrades as a function of $M$. For KEMs designed for NIST security level 1 we drop below the desired $143$ bits for a number of session keys $M \geq 2^{69}$ ($\texttt{HQC-1}$), $M \geq 2^{8}$ ($\texttt{BIKE-1}$), respectively $M \geq 2^{15}$ ($\texttt{mcecliece3488-64}$).
> 
> For HQC, we also analyse a Common Code setting, where all users share the same public quasi-cyclic code. We propose a DOOM-type attack that recovers a secret key given $M$ public keys. Our attack works within less than $143$ bit time complexity using $M \geq 2^{9}$ users. As a consequence, HQC should not be used in a Common Code setting.
