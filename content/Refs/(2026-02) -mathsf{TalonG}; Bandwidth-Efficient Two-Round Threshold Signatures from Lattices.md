---
published: "2026-02-18"
link: "https://eprint.iacr.org/2026/303"
authors: ["[[Liming Gao]]", "[[Guofeng Tang]]", "[[Dingding Jia]]", "[[Yijian Liu]]", "[[Bingqian Liu]]", "[[Xianhui Lu]]", "[[Kunpeng Wang]]", "[[Yongjian Yin]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Threshold signatures split the secret key among $n$ parties, where any subset of at least $t$ parties can collaboratively produce a valid signature. They have been widely deployed in applications such as blockchain systems. Lattice-based threshold signatures have also attracted considerable attention due to their post-quantum security guarantees. However, existing lattice-based constructions still face significant efficiency challenges, particularly when the number of parties becomes large. Recent lattice-based threshold signatures such as TRaccoon (Eurocrypt’24) and Ringtail (S\&P’25) support large thresholds, but they either require three interaction rounds or incur heavy communication costs in the two-round setting, limiting their practicality.
> 
> In this paper, we present $\mathsf{TalonG}$, a novel two-round lattice-based threshold signature that overcomes these limitations via a new trapdoor semi-commitment technique. This variant of commitment relaxes the standard binding requirement to a weaker form, allowing an efficient instantiation from the NTRU assumption and enabling a compact two-round signing protocol with low communication. 
> 
> For $t=1024$ and 128-bit security, $\mathsf{TalonG}$ achieves significant improvements among existing lattice-based threshold signatures: its total communication per party and public key size are both minimal, at 26.9 KB and 2.0 KB, respectively. While the resulting signature size is larger (17.7 KB), it remains practical and highly competitive. $\mathsf{TalonG}$ is thus well-suited for real-world large-scale deployments where both round efficiency and communication load are critical.
