---
published: "2026-08-10"
link: "https://eprint.iacr.org/2026/1645"
authors: ["[[Ignacio Amores-Sesar]]", "[[Christian Cachin]]", "[[Rohit Chatterjee]]", "[[Luiza Soezima]]", "[[Fran\u00e7ois-Xavier Wicht]]", "[[Michelle Yeo]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Privacy-preserving payment systems are well understood, yet their adoption in regulated settings, such as central bank digital currencies (CBDCs), institutional stablecoins, and other compliant payment infrastructures, has been limited by concerns over their potential misuse for illicit activities. Regulators counter financial crime with a toolbox of complementary measures to identify, trace, and stop criminal actors. Tracing is one key tool: acting on outside evidence that a user is implicated in a crime such as money laundering, law enforcement follows the suspect's funds through the ledger to uncover laundering routes and accomplices. The tracing schemes proposed in the literature, however, grant authorities unbounded capabilities: once initiated, tracing propagates through the transaction graph or persists across all future transactions of a user, and may eventually deanonymize the entire ledger. Only the goodwill of the authority, or the honesty of a committee, keeps surveillance targeted and temporary.
> 
> We introduce ephemeral coin tracing (ECT), a primitive whose tracing capacity is bounded by construction, both in the number of simultaneously traced users and in the number of hops each trace survives. The authority issues tracing tags that degrade at each hop; after a protocol-defined number of hops, a tag collapses into a value indistinguishable from that of an untagged coin. Within a tracing period the bound is absolute: no authority, however motivated, can follow a tag past its budget. We formalize ECT, define its security and privacy guarantees, and give two constructions, one over exponential ElGamal and one over Damgård-Jurik encryption.
