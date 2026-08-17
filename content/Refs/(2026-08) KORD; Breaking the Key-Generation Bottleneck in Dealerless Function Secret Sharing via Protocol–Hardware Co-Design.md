---
published: "2026-08-05"
link: "https://eprint.iacr.org/2026/1615"
authors: ["[[Yijing Peng]]", "[[Lin Liu]]", "[[Yujie Xue]]", "[[Shaojing Fu]]", "[[Shaoqing Li]]", "[[Yaohua Wang]]", "[[Rongmao Chen]]", "[[Yang Guo]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Function secret sharing (FSS) has become a core primitive in privacy‑preserving computation. However, each FSS invocation requires a fresh pair of function keys, typically produced by a trusted dealer—a dependency that expands the system's trust boundary and hinders practical deployment. Existing dealerless protocols eliminate this dependency, but incur substantial communication and a number of interaction rounds that grows linearly with the input bit‑width, making key generation a major bottleneck.
> 
> This paper presents KORD, a protocol–hardware co‑design that dramatically reduces the cost of dealerless FSS key generation. At its core is a pair of chips that establish a common root of trust through mutual attestation and, within it, reconstruct FSS keys—eliminating the need for a dealer. This root of trust further forms a security boundary within which KORD restructures the generation protocol, collapsing the interaction of prior dealerless protocols into a single round, independent of GGM depth. A cross‑key scheduling scheme then interleaves independent GGM‑tree traversals, sustaining high computational throughput. KORD reduces key‑generation communication per operation by $7{,}633$–$70{,}274\times$ over the state‑of‑the‑art distributed FSS protocol. On a ZCU102 FPGA, cross‑key interleaving lifts AES lane utilization from $8.3\%$ to a board‑measured $99.0\%$, for $11.60$ million $32$-bit DPF keys per second at $187.5\,\text{MHz}$ on a $21.5\,\text{K}$ LUT engine ($12.38\,\text{M}$ at the separately validated $200\,\text{MHz}$ operating point). On private ResNet‑18 inference, key generation's share of end‑to‑end time falls to $10.1\%$, from $82.6\%$ under a trusted dealer and over $96\%$ under the dealerless baseline.
