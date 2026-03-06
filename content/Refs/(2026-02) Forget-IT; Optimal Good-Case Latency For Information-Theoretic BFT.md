---
published: "2026-02-22"
link: "https://eprint.iacr.org/2026/355"
authors: ["[[Ittai Abraham]]", "[[Sourav Das]]", "[[Yuval Efron]]", "[[Jovan Komatovic]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The good-case latency of a consensus protocol measures the latency from block proposal by a consensus leader to decision, in the case in which the leader is correct. It is arguably the efficiency metric most pertinent for discussing the practical latency performance of consensus protocols. Well understood in the context of the authenticated setting, with PBFT [Castro 99], Tendermint [Buchman 16] & Simplex [Chan, Pass 23] achieving the optimal good-case latency of 3 rounds, significant gaps remain in the unauthenticated setting. We present Forget-IT, an unauthenticated consensus protocol with optimal good-case latency of 3 rounds. Furthermore, our protocol only requires constant persistent storage, and has $O(n^2)$ message complexity per view.
