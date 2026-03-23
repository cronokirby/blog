---
published: "2026-03-19"
link: "https://eprint.iacr.org/2026/547"
authors: ["[[Subhadeep Banik]]", "[[Tatsuya Ishikawa]]", "[[Takanori Isobe]]", "[[Ryoma Ito]]", "[[Kazuhiko Minematsu]]", "[[Kazuma Nakata]]", "[[Mostafizar Rahman]]", "[[Kosei Sakamoto]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this paper, we propose Dialga, a family of low-latency tweakable block ciphers designed to support 128/256-bit tweaks and 256-bit keys. Dialga achieves significantly small latency by leveraging multiple novel strategies. These include the use of multiple linear layers with efficient cell permutations, which enhance security against differential and linear attacks with negligible hardware overhead. We also identify the optimal choice of S-boxes for these permutations using state-of-the-art evaluation methods by SAT, enabling us to further reduce the delay of the round function. Besides, we design a reflection tweakey schedule that ensures strong security in the related-tweak setting and allows for encryption and decryption without delay overhead, reducing the circuit area. 
> We conducted comprehensive hardware benchmarks involving Dialga and other primitives. As a result, Dialga achieves nearly half the delay of QARMAv2, while achieving approximately a 40% reduction in area, with the same claimed security. 
>  We also demonstrate that Dialga enables an efficient low-latency TBC-based authenticated encryption instantiation: Flat-ΘCB based on Dialga compares favorably with AES-256-GCM in hardware, achieves substantially lower delay than AES-256-GCM.
