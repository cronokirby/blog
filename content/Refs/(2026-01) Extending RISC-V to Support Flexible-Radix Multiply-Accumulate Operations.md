---
published: "2026-01-23"
link: "https://eprint.iacr.org/2026/108"
authors: ["[[Isaar Ahmad]]", "[[Hao Cheng]]", "[[Johann Gro\u00dfsch\u00e4dl]]", "[[Daniel Page]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Specified as part of the (standard, optional) M extension, the mul and mulhu instructions reflect support for unsigned integer multiplication in RISC-V base Instruction Set Architectures (ISAs) such as RV32I and RV64I: given w-bit integers x and y for a word size w, they respectively produce the less- and more-significant w bits of the (2 · w)-bit product r = x × y. This typically minimal, and hence RISC-like form contrasts sharply with many alternative ISAs. For example, ARMv7-M includes a rich set of multiply and multiply-accumulate instructions; these cater for a wide variety of important use-cases in cryptography, where multi-precision integer arithmetic is often a central requirement. In this paper, we explore the extension of RV32I and RV64I, i.e., an Instruction Set Extension (ISE), with richer support for unsigned integer multiplication. Our design has three central features: 1) it includes dedicated carry propagation and multiply-accumulate instructions, 2) those instructions allow flexible selection of the radix (thus catering for reduced- and full-radix representations), and 3) the design can be considered for any w, and so uniformly across both RV32I and RV64I. A headline outcome of our evaluation is that, for X25519-based scalar multiplication, use of the ISE affords 1.5× and 1.6× improvement for full- and reduced-radix cases, respectively, on RV32I, and 1.3× and 1.7× improvement for full- and reduced-radix cases, respectively, on RV64I.
