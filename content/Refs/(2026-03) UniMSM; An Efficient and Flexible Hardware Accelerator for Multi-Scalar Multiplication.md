---
published: "2026-03-14"
link: "https://eprint.iacr.org/2026/521"
authors: ["[[Kaixuan Wang]]", "[[Yifan Yanggong]]", "[[Chenti Baixiao]]", "[[Xiaoyu Yang]]", "[[Lei Wang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Multi-scalar multiplication (MSM) is a central kernel in cryptographic systems, which evaluates large linear combinations of elliptic-curve points.
> Practical MSMs couple millions of terms with hundreds-of-bit modular arithmetic, while Pippenger’s bucket flow introduces irregular memory updates that can severely degrade utilization under deep pipelines. 
> 
> In this paper, we present UniMSM, an efficient and flexible hardware accelerator for MSM across practical problem sizes and diverse curve parameters. 
> First, we design a pipelined point adder based on the extended Jacobian coordinate system and employ a time-multiplexed datapath to reduce modular multiplier cost while sustaining high throughput.
> Second, we introduce a conflict-aware scheduling scheme to address bucket-update conflicts and preserve utilization under irregular accesses.
> Third, we develop a hardware-friendly variant of the Pippenger algorithm to reduce intermediate storage overhead and serial dependencies in aggregation.
> Compared with prior FPGA accelerators, UniMSM achieves up to 2.12$\times$ improvement in area-time product. 
> Furthermore, UniMSM in ASIC achieves up to a 3.85$\times$ improvement in ATP compared to the SOTA accelerator.
