---
published: "2026-03-13"
link: "https://eprint.iacr.org/2026/514"
authors: ["[[Seungwoo Han]]", "[[Jooyoung Lee]]", "[[Seungmin Park]]", "[[Mincheol Son]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Multi-party matrix invertibility testing over finite fields of small order or characteristic is a pivotal operation for thresholdizing Multivariate Quadratic (MQ) signature schemes. However, achieving perfect privacy in a constant number of rounds remains a challenge: existing solutions are not perfectly secure with leakage of certain information or inefficient in terms of computational and communication complexity, in particular, when $p\leq n$, where $p$ and $n$ denote the characteristic of the underlying field and the matrix size, respectively. 
> 
> To address these limitations, we propose two protocols for perfectly secure multi-party testing of matrix invertibility. The first protocol extends the Cramer-Damg{\aa}rd protocol to fields of small order by employing the field lifting technique. The second protocol is based on a multiparty computation of the Samuelson-Berkowitz algorithm, specifically designed for fields with a small characteristic where $p \leq n$. Both constructions are formalized in the Arithmetic Black-Box (ABB) model with the Shamir's secret sharing scheme. 
> 
> We show that both protocols achieve perfect privacy with the tradeoff between online and offline rounds. Specifically, the first protocol runs in $7$ offline rounds with complexity $O(N \cdot n^4+n^5)$ and in $3$ online rounds with complexity $O(n^3)$, and the second protocol runs in $3$ offline rounds with complexity $O(n^3)$ and in $9$ online rounds with complexity $O(n^4)$, where $n$ is the matrix size and $N$ is the number of parties.
