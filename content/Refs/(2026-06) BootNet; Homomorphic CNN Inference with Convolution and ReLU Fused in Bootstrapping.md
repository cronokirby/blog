---
published: "2026-06-18"
link: "https://eprint.iacr.org/2026/1279"
authors: ["[[Zhaomin Yang]]", "[[Chao Niu]]", "[[Cheng Hong]]", "[[Tao Wei]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Fully homomorphic encryption (FHE) enables privacy-preserving neural network inference but suffers from high overhead from homomorphic convolutions, polynomial activation approximations, and CKKS bootstrapping. This paper presents BootNet, a unified framework that fuses all three operations into a single bootstrapping invocation per CNN layer, achieving convolution, ReLU, and noise refresh simultaneously.
> 
> Prior works are able to fuse convolution into bootstrapping using CinS encoding (NeuJeans, CCS 2024) or ReLU into functional bootstrapping (RBOOT, USENIX Security 2026), but combining both for end-to-end ImageNet inference introduces numerous undocumented challenges. BootNet resolves these through a suite of co‑design techniques and optimizations, including four representative solutions: (1) a split‑and‑merge bootstrapping schedule that halves bootstrapping calls for ResNet shortcuts; (2) an improved RBOOT configuration paired with a model quantization method that complete the activation function with fewer multiplication depth; (3) a fusion of NeuJeans' masking layer with RBOOT's arcsin step that yields additional depth reduction; (4) tailoring EvalRound+ (IEEE Access 2025) to fit slim bootstrapping and RBOOT for further depth reduction.
> 
> We evaluate BootNet on multiple ResNet models on the ImageNet dataset. Compared to the state-of-the-art Orion (ASPLOS 2025), BootNet reduces end-to-end latency by 67-73% and storage by 76-90% while preserving plaintext accuracy. We also introduce BootNet-mini, enabling full ImageNet inference at ring degree  (with over -bit security via sparse-secret encapsulation) for the first time, while all previous works have to use  or larger. BootNet-mini performs similarly in latency but reduces 30-55% storage requirement than BootNet,  making it potentially more friendly for hardware acceleration.
