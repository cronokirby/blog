---
published: "2026-03-20"
link: "https://eprint.iacr.org/2026/561"
authors: ["[[Arpita Patra]]", "[[Joachim Schmidt]]", "[[Thomas Schneider]]", "[[Ajith Suresh]]", "[[Hossein Yalame]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Secure Multi-Party Computation (MPC) enables secure computation on private data. Many of today's efficient MPC protocols need a representation of the evaluated function as circuit composed of Boolean or Lookup Tables (LUTs). To improve the practicality of MPC, we present SynCirc, a hardware synthesis framework optimized for MPC applications. Built on Verilog and the open-source tool Yosys-ABC, SynCirc introduces custom libraries and constraints for multi-input AND gates, achieving up to $3\times$ reduction in multiplicative depth and online rounds compared to TinyGMW (Demmler et al., CCS'15).
> 
> SynCirc also offers an expanded library of efficient building blocks like comparison, multiplexers, equality checks and incorporates Boolean and LUT circuits. For these building blocks, we achieve improvements in multiplicative depth/online rounds between $22.3\%$ and $66.7\%$ over ShallowCC (Büscher et al., ESORICS'16).  Our evaluation using the FLUTE framework (Brüggemann et al., IEEE S&P’23) shows that SynCirc has $116\times$ less online communication than the multi-input AND gate protocol of Trifecta (Faraji and Kerschbaum, PETS'23). 
> 
> SynCirc introduces novel capabilities, including enhanced support for High-Level Synthesis (HLS) with the XLS tool, enabling developers to create secure functions in C/C++ without the need for expertise in hardware definition languages like Verilog. SynCirc is an open-source toolchain that democratizes secure computation, simplifies circuit synthesis and makes advanced privacy-preserving technologies more accessible.
