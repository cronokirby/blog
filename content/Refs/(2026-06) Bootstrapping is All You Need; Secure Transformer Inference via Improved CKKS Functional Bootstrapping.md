---
published: "2026-06-14"
link: "https://eprint.iacr.org/2026/1255"
authors: ["[[Pan Xiao]]", "[[Rending Ouyang]]", "[[Heng Zhang]]", "[[Jiawen Zhang]]", "[[Jian Liu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Fully homomorphic encryption (FHE) enables non-interactive secure transformer inference (NISTI). 
> Due to the high cost of bootstrapping, conventional approaches typically choose parameters that support a large multiplicative depth to reduce bootstrapping frequency. However, larger depth directly increases ciphertext size, resulting in higher communication and computation overheads.
> 
> In this paper, we introduce a novel functional bootstrapping (FBS) scheme that fundamentally reshapes the computation paradigm for NISTI: by fusing as many operations as possible into each bootstrapping operation, our approach significantly reduces the prescribed multiplicative depth.
> 
> Our FBS achieves a trigonometric minimax approximation for the target function, making it well suited for precision-sensitive components such as transformer nonlinear layers. 
> Furthermore, we incorporate linear layers into the slot-to-coefficient (S2C) transformation within FBS, thereby eliminating the need to evaluate them separately.
> Building on these innovations, we present a complete NISTI framework that achieves a 1.9 speedup in runtime (from 662.3s to 349.5s) and a 3 reduction in communication (from 48.3MB to 16.1MB) compared with the state-of-the-art.
