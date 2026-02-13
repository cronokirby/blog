---
published: "2026-02-06"
link: "https://eprint.iacr.org/2026/194"
authors: ["[[Yechu Zhang]]", "[[Yuxuan Chu]]", "[[Yaodong Wei]]", "[[Yueqin Dai]]", "[[Qiu Shen]]", "[[Jing Tian]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Hash-based signature (HBS) schemes, including LMS, XMSS, and SPHINCS+, have become crucial components of post-quantum cryptography. LMS and XMSS are stateful schemes, while SPHINCS+ is stateless, which can be applied in different scenarios. A variety of hash operations in these schemes lead to complex input/output patterns for the hash cores.
> In this paper, we present an efficient and configurable hardware architecture that supports key generation and signing for all three schemes.
> Their complex procedural flows are abstracted into 11 shared and parameterized tasks under a unified control module, avoiding controller state blow-up. Driven by hierarchical counters, this approach maximizes resource reuse and preserves scalability, occupying only 17\% of the total LUTs. 
> Moreover, the design employs two hash cores with unroll-2 scheduling, which are experimentally validated to strike a favorable balance between area and time. 
> We further introduce an asymmetric dual-path hash input logic (HIL) for each of them: a dedicated parallel lane for the high-frequency One-Time Signature (OTS) task and a flexible padding-shifter for all other tasks. This eliminates wide multiplexers and achieves a superior area-time balance.
> On Artix-7 FPGA, our unified design occupies 24.2k LUTs/13.7k FFs/16.5 BRAMs. Compared to state-of-the-art single-scheme designs, our architecture achieves up to $4.12\times/10.92\times$ lower Area-Time Product (ATP) for LMS/XMSS signing and $2.47\times/6.61\times$ lower ATP for key generation. More importantly, we provide a flexible, efficient, and scalable hardware foundation for the diverse practical deployments of HBS.
