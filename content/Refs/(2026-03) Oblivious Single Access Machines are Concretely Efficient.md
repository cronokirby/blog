---
published: "2026-03-04"
link: "https://eprint.iacr.org/2026/451"
authors: ["[[Sage Pia]]", "[[Ananya Appan]]", "[[Maryam Rezapour]]", "[[Amey Shukla]]", "[[Nikhil Date]]", "[[Benjamin Fuller]]", "[[Ling Ren]]", "[[David Heath]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Oblivious algorithms allow a space-constrained client program to securely outsource storage to an untrusted server. Any program can be compiled to an oblivious form via Oblivious RAM (ORAM), but this is asymptotically and concretely expensive. Recent work (Appan et al., CCS’24) proposed a weakening of ORAM called the Oblivious Single Access Machine (OSAM) model, which offers asymptotically-improved
> oblivious compilation for many programs, including those that manipulate graph data structures. While of theoretical interest, OSAM graph algorithms were worse than generic ORAM, even for large graphs (tested on graphs of size up to $2^{24}$).
> 
> This work improves the concrete costs of OSAM-based oblivious algorithms. In short, the original work on OSAM proposed algorithms for manipulating objects with pointers to other objects. Pointers and objects can be naturally used to instantiate arbitrary graphs, but the OSAM’s underlying management of pointers involves non-trivial and concretely-expensive algorithms. Our work greatly simplifies and improves the efficiency of OSAM-based pointer handling by co-designing (1) pointer-friendly modifications to the underlying Path ORAM algorithm (Stefanov et al., CCS’13) and (2) new algorithms for managing pointers.
> 
> We implemented the original OSAM algorithms and our approach. Naturally-written graph algorithms can now be automatically compiled to an oblivious form while enjoying up to a $4$× improvement in performance as compared to when using generic Path ORAM (and at least $8$× as compared to the original OSAM). In sum, our work provides generic and easy-to-use oblivious tools while concretely improving over prior generic state-of-the-art tools.
