---
published: "2026-02-20"
link: "https://eprint.iacr.org/2026/345"
authors: ["[[Tianyao Gu]]", "[[Ashrujit Ghoshal]]", "[[Elaine Shi]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Garbled RAM is a promising technique for scaling secure two-party computation to large datasets. It features an efficient two-round protocol and supports each memory access with polylogarithmic overhead, thereby avoiding the prohibitive cost of RAM-to-circuit conversion. While earlier works on Garbled RAM primarily focused on establishing theoretical feasibility, recent research has increasingly emphasized concrete efficiency, culminating in constructions that achieve approximately $O(\lambda T W \log N)$ bandwidth cost (up to super-constant factors) for garbling a RAM with running time $T$, memory size $N$, and word size $W$.
> 
> We ask whether it is possible to further improve the bandwidth cost of Garbled RAM. In contrast, the Garbled Circuit literature has developed a rich set of techniques that remove the bandwidth's dependence on the security parameter $\lambda$, leading to constant-rate or even sub-constant-rate garbling schemes. However, no comparable methods are currently known for Garbled RAM.
> 
> We propose a new garbling scheme for arithmetic RAM, called Zebra (short for ``Zero Exposure B-bounded Random Accesses'').  Specifically, we show that when the word size $W$ is suitably large, we can eliminate the $\lambda$-factor dependence and achieve a bandwidth cost of $O(T W \log N)$. In this sense, our scheme can also be viewed as the RAM analogue of ``constant-rate garbling for arithmetic circuits''.  Further, we show how to extend our techniques to support the garbling of boolean RAMs, achieving a bandwidth cost of $O(T W (\log N + \lambda))$ when the word size is suitably large. We implemented Zebra and released our code through open source. Our evaluation shows a $10.1\times$ concrete improvement in bandwidth and a $3.5\times$ improvement in end-to-end time relative to the state-of-the-art Garbled RAM schemes on a 256MB database with 4kB entries.
