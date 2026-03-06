---
published: "2026-02-13"
link: "https://eprint.iacr.org/2026/243"
authors: ["[[Pan Xiao]]", "[[Heng Zhang]]", "[[Rending Ouyang]]", "[[Cong Zhang]]", "[[Jian Liu]]", "[[Kui Ren]]", "[[Chun Chen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Doubly-efficient private information retrieval (DEPIR) enables sublinear per-query work (in the database size $N$) for both client and server, while requiring no client state. 
> Despite its theoretical promise, single-server DEPIR exhibits a prohibitive concrete efficiency gap: 
> for $N=2^{23}$, the state-of-the-art construction (Eurocrypt '25) requires a 733TB server state and over $2^{37}$  online RAM/Disk reads, rending it infeasible to execute.
> This paper advances single-server DEPIR towards practicality through a series of algorithmic innovations.
> Compared with the state-of-the-art, we achieve a 4 orders of magnitude reduction in server state and a 6 orders of magnitude reduction in query time.
> In particular, for the same level database ($N=2^{23}$), querying $5461$ elements in a single batch requires only 171GB of server state and $2^{24}$ online RAM/disk reads, yielding a 112s total query time and a 21ms amortized query time.
