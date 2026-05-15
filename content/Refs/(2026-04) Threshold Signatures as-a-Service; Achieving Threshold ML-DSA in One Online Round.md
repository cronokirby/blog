---
published: "2026-04-25"
link: "https://eprint.iacr.org/2026/814"
authors: ["[[Matthieu Rambaud]]", "[[Sascha Roth]]", "[[Antoine Urban]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We formally define Threshold Signatures as-a-Service (TSaaS), in which the honest parties performing the threshold signature respond only to the signing requests of a designated client. This model captures the mainstream industrial use case of threshold signatures which is to implement Wallets as-a-Service.
> 
> This new model allows for optimizations of existing threshold signature schemes, in particular in the lattice setting. As a particularly relevant case study, we describe a TSaaS variant of the Threshold ML-DSA scheme from [Celi et al., USENIX'26], called ML-DSaaS, which combines the first two rounds into a single message-independent round that can be pre-processed before the message is known.
>  We first describe a simple version of ML-DSaaS in a model where the client is semi honest. We then upgrade the construction to withstand a possibly corrupt client, by leveraging existence of a coordinating machine which is present in all real-life deployments of TSaaS. This machine, dubbed the Relayer, filters the requests of the client to the parties and centralizes the communications between them.
>     We provide an implementation of our scheme together with experimental benchmarks. The online phase of our scheme is two to three times faster than the one of [Celi et al., USENIX'26]. 
>     
>     Our modification carries over unchanged to many similar threshold signature schemes, provided they are used in the TSaaS setting.
