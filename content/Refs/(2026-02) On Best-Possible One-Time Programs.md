---
published: "2026-02-28"
link: "https://eprint.iacr.org/2026/413"
authors: ["[[Aparna Gupte]]", "[[Jiahui Liu]]", "[[Luowen Qian]]", "[[Justin Raizes]]", "[[Bhaskar Roberts]]", "[[Mark Zhandry]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> One-time programs (OTPs) aim to let a user evaluate a program on a single input while revealing nothing else. Classical OTPs require hardware assumptions, and even with quantum information, deterministic functionalities remain impossible due to gentle-measurement attacks (Broadbent, Gutoski and Stebila, 2013). While recent works achieve positive results for randomized functionalities with high-entropy outputs, the fundamental limits and the strongest achievable security notions remain poorly understood.
> 
> Inspired by analogous successes in the classical obfuscation setting, we ask for a "best-possible" analogue of obfuscation for OTPs: a generic transformation that, for any functionality, achieves the strongest one-time security achievable by any construction. Our first result is negative. We show that a generic best-possible one-time compiler cannot exist even for classical randomized functionalities. We prove this under the assumption that lossy encryption schemes exist (e.g. from either the Learning with Errors or weakly pseudorandom group actions). Our proof identifies computationally indistinguishable families for which any best-possible transformation would be forced to behave incompatibly.
> 
> Given this impossibility, we introduce a natural subclass of one-time compilers called "testable one-time program" compilers, which output quantum states augmented with reflection oracles for themselves. We show that best-possible security for this subclass, i.e. best-possible testable one-time compilers, are most likely achievable. For this, we give two results. (1) We formulate a simplified, generalized Single-Effective-Query (SEQ) simulation security notion for quantum channels and show that SEQ security implies best-possible testable one-time security. (2) We construct SEQ-secure OTPs for all quantum functionalities in the classical oracle model, yielding the first positive results for arbitrary quantum channels beyond classical randomized functionalities. Thus, SEQ security could serve as a testable one-time analogue of virtual black-box (VBB) security in the many-time obfuscation setting.
> Finally, we propose stateful quantum indistinguishability obfuscation (stateful quantum iO) --- quantum state obfuscation for stateful quantum programs. We show that (1) stateful quantum iO implies best-possible testable OTPs and (2) stateful quantum iO is also achievable in the classical oracle model. These results identify stateful quantum iO as a promising approach towards best-possible testable OTPs.
