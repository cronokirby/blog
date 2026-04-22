---
published: "2026-04-13"
link: "https://eprint.iacr.org/2026/716"
authors: ["[[Hao Cheng]]", "[[Linus Mainka]]", "[[Daniel Page]]", "[[Kostas Papagiannopoulos]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Careful management of shares stored in the architectural, general-purpose register file is an important aspect of software-based implementations of masking, because it can impact the associated side-channel leakage. The erasure of residual shares, i.e., shares whose useful lifetime has expired, is one component of such management: erasing them can, for example, prevent subsequent, unintended share recombination. To support effective share erasure, this work makes two contributions.  First, we present an analysis of the underlying problem, systematising associated concepts and terminology, and offering a concrete, motivating example. Second, we present the design, implementation, and evaluation of two components which can support solutions of said problem. These are 1) a policy, namely an extended ABI which provides clear semantics regarding the responsibility of caller and/or callee functions to erase shares, and 2) a mechanism for realising said policy, namely an extended ISA (or ISE) which allows more efficient erasure of shares than via the ISA alone. Although generic in nature, we present both components using the RISC-V base ISA; an associated prototype ISE implementation uses Ibex as a base core. Our evaluation results confirm that combined use of the components can eliminate leakage related to residual shares both effectively and efficiently.
