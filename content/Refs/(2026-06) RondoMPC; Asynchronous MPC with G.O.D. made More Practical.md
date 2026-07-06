---
published: "2026-06-15"
link: "https://eprint.iacr.org/2026/1261"
authors: ["[[Xuanji Meng]]", "[[Zhaoyang Xie]]", "[[Zhaoxin Yang]]", "[[Sisi Duan]]", "[[Aggelos Kiayias]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Asynchronous multi-party computation (AMPC) en-
> ables a set of mutually distrustful parties to securely compute
> any joint function on their private inputs under arbitrary
> network delays. The guaranteed output delivery (i.e., G.O.D.)
> property is essential for availability, but can be very challenging
> to achieve in practice. HoneyBadgerMPC (CCS 2019), the
> first practical AMPC protocol, follows Beaver’s paradigm that
> generates Beaver triples offline to simplify online computation.
> One of the underlying building blocks, the random double
> sharing protocol that generates random double shares, how-
> ever, implicitly assumes a synchronous network. DumboMPC
> (Usenix Sec 2025) overcomes the issue by adopting a two-phase
> workflow where the underlying consensus protocol has to be
> executed twice, and thus incurs high latency. Velox (CCS 2025)
> achieves lower latency and weaker cryptographic assumptions
> at the cost of sacrificing G.O.D. It remains an open question
> whether there exists a more practical AMPC protocol with the
> G.O.D. property.
> In this paper, we present RondoMPC, a practical AMPC
> protocol with G.O.D. with only one phase of consensus. To
> achieve this goal, we build a practical asynchronous and
> complete random double sharing (ACRDS) protocol. Our
> ACRDS protocol supports batching, so a batch of random
> double shares can be generated simultaneously. Furthermore,
> ACRDS supports efficient verification of aggregated secret
> shares, allowing the random double shares to be used for
> Beaver triple generation using only one phase of consensus.
> Our experimentation results show that RondoMPC is highly
> practical, achieving both higher throughput and lower latency
> for Beaver triple generation compared to existing protocols.
