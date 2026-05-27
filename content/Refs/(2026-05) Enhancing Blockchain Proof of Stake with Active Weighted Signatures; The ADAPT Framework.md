---
published: "2026-05-14"
link: "https://eprint.iacr.org/2026/958"
authors: ["[[Jae Hyun Choi]]", "[[Hobin Jang]]", "[[Ik Rae Jeong]]", "[[Changmin Lee]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Proof of Stake (PoS) blockchain systems require weighted threshold signatures where participants’ voting powers reflect their stakes. As stakes change dynamically through deposits and withdrawals, efficient weight and threshold adjustments are essential for maintaining system security and availability without downtime. However, existing approaches face critical limitations: (1) virtualization-based schemes require $O(w)$ operations (signatures) per participant with weight w; (2) dynamic threshold / paricipants schemes do not support weighted participants; (3) schemes with both properties require trusted dealers or $O(n^2)$ re-setup, causing temporary unavailability.
>  This paper introduces Active Weighted Signature (AWS), enabling dynamic adjustments without trusted dealers or re-setup. We propose Generalized Lagrange Interpolation (GLI), encoding weights as polynomial derivatives rather than virtualized participants, and instantiate AWS through ADAPT by applying GLI to the Schnorr-based threshold signature FROST. Our implementation shows that ADAPT achieves comparable efficiency to FROST for key generation, while weight and threshold adjustments complete in 4.1-22.3% of re-setup time. For uneven weight distributions, ADAPT achieves sub-linear scaling: 49× weight difference requires only 3.29× computation versus 49× in virtualization.
