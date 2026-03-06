---
published: "2026-02-13"
link: "https://eprint.iacr.org/2026/256"
authors: ["[[Mojtaba Bisheh-Niasar]]", "[[Emre Karabulut]]", "[[Kiran Upadhyayula]]", "[[Michael Norris]]", "[[Bharat Pillilli]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Quantum computing threatens widely deployed public-key cryptosystems, driving the urgent adoption of post-quantum cryptography (PQC) in cloud and hardware-accelerated security infrastructures. This paper presents Adams Bridge, an industry-grade hardware accelerator for lattice-based PQC that integrates ML-KEM and ML-DSA within a unified architecture to maximize hardware reuse and silicon efficiency. The design features a staged, pipelined datapath that exploits multi-level parallelism to accelerate polynomial operations shared by both schemes. An optimized NTT/INTT and point-wise multiplication engine is tightly coupled with a high-throughput Keccak core and efficient hardware sampling, reducing memory overhead and eliminating pipeline stalls.
> 
> Synthesized in 5 nm technology and operating at 600 MHz, Adams Bridge achieves the best reported normalized Area-Time (AT) efficiency among unified designs, offering a 27% AT improvement for ML-DSA compared to state-of-the-art architectures. The three phases of ML-DSA complete in 26, 61, and 31 $\mu$s, respectively, while ML-KEM takes 11, 14, and 20 $\mu$s for its corresponding stages.
> 
> To address physical attack vectors, the accelerator embeds hardware-level side-channel countermeasures, including masking, shuffling, and constant-time control and arithmetic, mitigating information leakage without compromising performance. Empirical TVLA evaluation up to one million traces confirms the elimination of first-order leakage in critical datapaths. Targeted for deployment within the open-source Caliptra Root of Trust (RoT), Adams Bridge represents the first open-source PQC accelerator under the Apache 2.0 license designed for real-world hardware security systems.
