---
published: "2026-01-23"
link: "https://eprint.iacr.org/2026/113"
authors: ["[[Cruz Barnum]]", "[[David Heath]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The celebrated work of Impagliazzo and Rudich (STOC'89) provides an oracle separation between those primitives implied by a random oracle (RO) and those that imply key agreement and public-key cryptography. For the last 36 years, this result seemed to cleanly separate two worlds: Minicrypt, which is often described as what can be achieved from only ROs, and Cryptomania, which is a world where public-key cryptography exists.
>     
> This work presents a natural primitive, called an oblivious interactive hash function (OIHF), and shows the following:
>         (1) OIHFs can be constructed from ROs.
>         (2) OIHFs can be constructed from oblivious transfer (OT), and hence they are implied by various well-studied public-key-style assumptions.
>         (3) The existence of an OIHF implies OT, via a non-blackbox reduction.
> 
> Point (1) places the primitive into Minicrypt, point (2) implies that OIHFs exist as long as OT exists, and point (3) shows that this primitive circumvents the barrier imposed by Impagliazzo and Rudich by implying public-key primitives -- specifically OT -- anyway.
