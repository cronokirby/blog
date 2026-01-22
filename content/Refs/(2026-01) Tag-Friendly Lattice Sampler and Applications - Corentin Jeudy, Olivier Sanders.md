---
published: "2026-01-19"
link: "https://eprint.iacr.org/2026/083"
authors: ["[[Corentin Jeudy]]", "[[Olivier Sanders]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The NIST lattice-based cryptographic standards are set to be widely adopted, offering solutions to the most common cryptographic needs, namely key establishment and authentication (signature). This shifted the attention to more advanced primitives such as threshold cryptography as well as privacy-enhanced technologies, where the transition is expected to be more complex. This is particularly true in the context of post-quantum anonymous authentication where the existing mechanisms may not match the performance requirements of industrial applications. An important avenue for improvement of said performances is the lattice sampler, which is at the center of these mechanisms. Despite recent progress, prior samplers neglected one component: the tag. The latter is not only necessary for security, but it also impacts the efficiency of the subsequent constructions if not handled properly.
> In this paper, we introduce a new sampler with an enhanced tag management that yet retain the main features of current samplers, and can thus be used as a plug-in replacement. It offers a sampling quality independent of the tag, allowing for producing preimages that are both smaller and faster to generate than those from the very recent sampler of Jeudy and Sanders (Asiacrypt'25). Far from being anecdotal, plugging it into several advanced authentication mechanisms results in size improvements of up to 30%, while being 35% faster.
