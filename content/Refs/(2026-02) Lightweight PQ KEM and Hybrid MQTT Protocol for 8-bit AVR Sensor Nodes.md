---
published: "2026-02-13"
link: "https://eprint.iacr.org/2026/248"
authors: ["[[Yifan Dong]]", "[[YoungBeom Kim]]", "[[Jieyu Zheng]]", "[[Zhichuang Liang]]", "[[Boyue Fang]]", "[[Seog Chung Seo]]", "[[Maire O'Neill]]", "[[Yunlei Zhao]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Most PQC schemes remain too resource-intensive for ultra-constrained 8-bit AVR wireless sensor nodes. In this work, we present a comprehensive approach to practical lightweight PQC for such devices, covering scheme design, implementation optimization, and protocol integration. Our contributions are threefold: (i) We propose CTRU-Light, a lattice-based KEM specifically tailored for IoT sensor nodes. It combines small moduli, low-degree polynomials, and NTT-friendly arithmetic for high efficiency, with ASCON used for lightweight symmetric operations. (ii) We explore NTT-friendly moduli for the first time to accelerate modular multiplication on 8-bit AVR platforms and design optimized variants of Montgomery and Barrett multiplication. We show that K-RED2X multiplication exhibits approximate equivalence to Montgomery multiplication under small NTT-friendly moduli. We apply these optimizations to the latest implementations of Kyber (ASIACCS 2025) and Saber (CHES 2025), achieving significant improvements in both speed and code size. Furthermore, we present a highly optimized AVR assembly implementation of CTRU-Light that delivers high efficiency and low stack usage. (iii) We design a Hybrid KEM–MQTT protocol that integrates classical ECDH with post-quantum KEMs. We present the first implementation of this protocol and provide a detailed empirical analysis of its performance. Experiments show that CTRU-Light is the only scheme capable of supporting both pure PQ and hybrid KEM–MQTT on 8-bit WSNs, achieving lower handshake latency than Kyber-512 and LightSaber.
