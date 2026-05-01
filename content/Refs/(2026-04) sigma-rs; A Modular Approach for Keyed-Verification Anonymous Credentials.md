---
published: "2026-04-22"
link: "https://eprint.iacr.org/2026/794"
authors: ["[[Michele Orru]]", "[[Lindsey Tulloch]]", "[[Victor Snyder-Graf]]", "[[Ian Goldberg]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We introduce a new software stack in Rust aimed at simplifying
> constructions and deployments of protocols based on
> modern anonymous credential systems.
> 
> The stack, called sigma-rs, through its layered design,
> abstracts cryptographic complexity while remaining flexible enough to
> support a range of credential schemes, proofs, and access policies.
> It emphasizes misuse resistance via type safety, domain separation, and
> prover-state discipline, and supports side-channel-aware constant-time
> strategies.
> 
> We evaluate practicality through re-implementations of Tor’s Lox bridge
> distribution protocols and of user authentication in the Open
> Observatory for Network Interference.
