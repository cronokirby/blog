---
published: "2026-04-01"
link: "https://eprint.iacr.org/2026/636"
authors: ["[[Shivarama K. N]]", "[[Susil Kumar Bishoi]]", "[[Vadiraja Bhatta G. R.]]", "[[Vashek Matyas]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Feedback shift registers, such as Linear Feedback Shift Registers (LFSRs), Multi-Recursive Matrix Methods (MRMMs), and Lagged Fibonacci Generators (LFGs), are fundamental components in stream cipher-based cryptographic systems. In this paper, we investigate systems composed of LFSRs under two distinct configurations. First, we study the cascade connection of LFSRs and demonstrate that it represents a special case of the first configuration. Under specific conditions, we derive the exact period of these cascaded systems. Second, we analyze a system comprising two LFSRs in the second configuration, where carry bits are introduced into the feedback computation of the second LFSR. We examine the periodicity of both the carry bits and the overall system. Furthermore, we generalize this construction to word size $m$, and show that an additive LFG can be represented by an equivalent system of LFSRs. This approach enables efficient LFG implementation in resource-constrained environments by using multiple LFSRs and a simple adder, thus eliminating the need for large word sizes.
