---
published: "2026-02-24"
link: "https://eprint.iacr.org/2026/381"
authors: ["[[Lichun Li]]", "[[Hongqing Liu]]", "[[Jiawei Ni]]", "[[Chaoping Xing]]", "[[Chen Yuan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this work, we consider dishonest majority MPC protocols with $(1-\epsilon)n$ corrupted parties for some constant $\epsilon\in (0,1/2)$. In this setting, there exist MPC protocols with unanimous abort that achieve constant communication in both online and offline phases via a packed secret sharing scheme. Departing from their approaches, we revisit the ``committee-based'' approach to design an efficient MPC protocol with constant online and offline communication complexity.
> To balance the communication load of each party, our protocol adopts multiple committees, each of constant size. The computation of circuit $C$ is then divided into layers, each assigned to one committee. To securely transmit messages between committees, we introduce the handoff gates, incurring only a slight communication overhead. Furthermore, we leverage circuit-dependent preprocessing and incremental checking to improve the online efficiency. Compared to other MPC protocols in the same corruption setting, our protocol achieves the smallest concrete total communication complexity.     
> Building upon our multi-committee unanimous-abort protocol, we upgrade it to identifiable abort by adapting a technique from (Rivinius, EUROCRYPT 2025). To integrate this technique into our setting, we adjust the verification timing and introduce a king party to reduce the communication complexity of openings. This yields the first identifiable-abort MPC protocol with constant communication complexity in the sub-optimal dishonest majority setting.
