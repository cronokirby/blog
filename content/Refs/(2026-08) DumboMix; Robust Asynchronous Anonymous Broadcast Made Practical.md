---
published: "2026-08-15"
link: "https://eprint.iacr.org/2026/1699"
authors: ["[[Wei Tang]]", "[[Hanwen Feng]]", "[[Jiliang Li]]", "[[Yuan Lu]]", "[[Qiang Tang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We present a practical framework $\mathsf{DumboMix}$ for asynchronous anonymous broadcasts with guaranteed output delivery (G.O.D., a.k.a. robustness), enabling a set of $n$ servers to privately solicit $N$ messages from distinct clients, such that these messages remain secret until they are simultaneously revealed in a uniformly random order. Here, asynchronous G.O.D. ensures that all solicited messages will eventually be randomly mixed despite (i) arbitrary malicious behaviors by up to $n/3$ Byzantine servers and (ii) unpredictable network delays and jitters.  
> 
> At the core of $\mathsf{DumboMix}$, we first propose a couple of practical arithmetic circuits $\mathsf{DumboMix1}$ and $\mathsf{DumboMix2}$ for mixing in Shamir-secret-shared multi-party computation (MPC) over $\mathbb{Z}_p$, along with their server-optimized variants. When randomly mixing $N$ messages, their online phases require only $\mathcal{O}(1)$ multiplicative depth, expected $\mathcal{O}(N^2)$ scalar multiplications (between public and shared values), and up to $\mathcal{O}(N)$ MPC multiplications (between shared values). Moreover, assuming a robust underlying MPC framework, they guarantee that all revealed inputs are uniformly shuffled. In contrast, existing techniques fail to achieve all these performance and functionality features: The DC-net variant $\mathsf{Blinder}$ (CCS’20) may reveal a non-negligible fraction of inputs without shuffling them; Butterfly switching networks in secret-shared MPC (CCS’19) incur $\mathcal{O}(\log^2 N)$ multiplicative depth; RabbitMix (Security’24) requires $\mathcal{O}(N^2)$ MPC multiplications; and PowerMix (CCS’19) incurs $N^{3}/2$ scalar multiplications.
> 
> We also implement our mixing methods within $\mathsf{DumboMPC\text{++}}$, our computation-optimized implementation of the state-of-the-art robust AMPC framework $\mathsf{DumboMPC}$ (Security’25), which provides more concretely efficient offline preprocessing while preserving asynchronous G.O.D. and optimal resilience. We then conduct extensive evaluations with $n=4$ to $31$ servers under varying network settings, revealing that our new mixing circuits achieve 44.8--65.9× (resp. 37.1--52.7×), 4.8--7.1× (resp. 3.9--5.5×), and 2.7--4.0× (resp. 5.1--7.2×)  speedups over RabbitMix, PowerMix, and the butterfly switching network, respectively, when shuffling 1024 messages in LAN (resp. WAN).
