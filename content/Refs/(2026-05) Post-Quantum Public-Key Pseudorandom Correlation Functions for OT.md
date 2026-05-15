---
published: "2026-05-05"
link: "https://eprint.iacr.org/2026/877"
authors: ["[[Shweta Agrawal]]", "[[Kaartik Bhushan]]", "[[Geoffroy Couteau]]", "[[Mahshid Riahinia]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Public-key pseudorandom correlation functions (PK-PCF) are an exciting recent primitive introduced to enable "non-interactive key exchange for secure computation". Despite significant advances in the group-based setting, success in the post-quantum regime has been much more limited. To the best of our knowledge, there does not exist even a single efficient candidate post-quantum PK-PCF for the standard string oblivious transfer (OT) correlation. 
>      
>      In this work, we address this gap by constructing the first efficient lattice-based public-key PCF for the string OT correlation. Our PK-PCF generates a few hundred OTs per second, and requires a large but manageable public key size (a few hundred megabytes). In contrast, the only previous lattice-based non-public-key PCF, proposed in the very recent work of Hasler, Reisert and Küsters (Asiacrypt 2025), can generate up to 9 OT/s and has key sizes of several gigabytes.
>      
>      At the heart of our result lie several technical contributions that might be of independent interest. In particular, we introduce the first efficient lattice-based constrained pseudorandom functions for low-degree polynomials, from a new but natural "secret-power" variant of ring learning with errors. Our assumption is non-interactive and falsifiable, and we carefully analyze it for attacks. Additionally, we introduce a new packing mechanism compatible with local rounding of noisy shares from a "truncated" variant of our previous assumption, which allows further efficiency. 
>      
>      We remark that in the pre-quantum regime, the state of art for PK-PCF only two years ago was 1 OT/s, while they now clock at ~30k OT/s. We are  optimistic that our construction will follow a similar trajectory.
