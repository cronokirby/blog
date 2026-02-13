---
published: "2026-02-05"
link: "https://eprint.iacr.org/2026/189"
authors: ["[[Paco Azevedo-Oliveira]]", "[[Jordan Beraud]]", "[[Pierre Varjabedian]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Threshold signatures allow multiple parties to sign a common message by collaborating. More specifically, in a $(t,n)$-threshold signature scheme, at least $t$ out of $n$ parties must collaborate to sign a message.
> 
> Although pre-quantum threshold signature algorithms have been extensively studied, the state of the art in the creation of post-quantum threshold algorithms remains sparse. Most studies focus on signature algorithms based on structured lattice problems. In particular, few papers have studied the creation of a threshold algorithm based on UOV, despite the simplicity of the scheme.
> 
> This paper proposes various algorithms for a set of parties to solve a shared linear system $Ax= y$ in finite fields of low characteristic.
> 
> The first two algorithms securely calculate the determinant of a shared matrix. The first uses recent theoretical results on Newton's polynomials while the second adapts an algorithm by Samuelson and Berkowitz. From these algorithms, we can deduce two algorithms to solve the corresponding linear system. The last algorithm revisits an existing state-of-the-art algorithm by adding noise to the revealed matrix rank. We show that the resulting leakage will be hard to exploit.
> 
> These two algorithms enable new threshold instantiations of UOV and UOV-based schemes, in particular MAYO.
