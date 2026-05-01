---
published: "2026-04-20"
link: "https://eprint.iacr.org/2026/780"
authors: ["[[Thomas Pornin]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this paper, we explore the use of Montgomery multiplication with a multi-limb redundant representation of integers, in particular in combination with signed reduction factors. We develop techniques that are particularly suited to software platforms on which carry propagation is expensive, in particular RISC-V CPUs which lack hardware support for carries. We also show how to perform a whole-primitive range analysis that demonstrates that overflows are not possible, thus allowing liberal use of unreduced limb-wise additions and subtractions, which are small and fast. The implementation and analysis techniques are illustrated in a codegolfing exercise, to produce size-optimized implementations of ECDSA signature verification over NIST curve P-256; use of a virtual CPU with a custom instruction set with byte-size encoding ("bytecode") allows the production of an implementation as small as 848 bytes on x86 CPUs (in 64-bit mode); RISC-V (984 bytes), Armv8-A (1136 bytes) and portable C implementations (about 2200 to 2800 bytes) are also provided. In the process, an AI is utterly discomfited.
