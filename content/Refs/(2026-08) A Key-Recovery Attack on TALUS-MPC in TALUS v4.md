---
published: "2026-08-12"
link: "https://eprint.iacr.org/2026/1668"
authors: ["[[Sunghyeon Jo]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We give a two-transcript key-recovery attack on TALUS-MPC in TALUS v4. TALUS was presented in the second round of the NIST Threshold Call Preview Talks. In Algorithm 3 of TALUS v4, the committee's nonce polynomials are evaluated at all $N$ points so that any $T$ parties can sign. An adversary controlling the coordinator and $T-1$ parties can reuse the same pooled nonce with two quorums whose only common members are corrupt. Each participating honest party uses its signing share once, yet the coordinator obtains $\mathbf{z}_0=\mathbf{y}+c_0\mathbf{s}_1$, $\mathbf{z}_1=\mathbf{y}+c_1\mathbf{s}_1$. The nonce cancels on subtraction. Moreover, no invertibility assumption in $R_q$ is needed: the response equations lift to $\mathbb{Z}[X]/(X^{256}+1)$, and every nonzero $c_0-c_1$ is invertible in the cyclotomic field $\mathbb{Q}[X]/(X^{256}+1)$. Thus two distinct challenges recover $\mathbf{s}_1$ exactly; since the TALUS v4 public key includes the full $\mathbf{t}=\mathbf{A}\mathbf{s}_1+\mathbf{s}_2$, the adversary also recovers $\mathbf{s}_2$ and forges signatures.
