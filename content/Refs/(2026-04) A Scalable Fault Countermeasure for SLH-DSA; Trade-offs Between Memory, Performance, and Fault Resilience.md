---
published: "2026-04-17"
link: "https://eprint.iacr.org/2026/759"
authors: ["[[Melissa Azouaoui]]", "[[Tobias Schneider]]", "[[Denise Verbakel]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We introduce compressed caching, a scalable and parameterizable countermeasure
> against grafting tree fault attacks on SLH-DSA. Unlike standard caching,
> which entails fully caching the WOTS+ signatures and public keys, compressed
> caching achieves significant memory savings while maintaining strong fault detection
> capabilities. It can be tuned to achieve a trade-off between caching memory size, fault
> resilience, and performance, making it well-suited for deployment across devices with
> varying resource and security constraints. We provide a security and performance
> analysis of compressed caching and show that it can be configured to achieve high fault
> detection probability and outperform standard caching, mainly in terms of memory
> but also in terms of performance. Additionally, we explore granular variants of both
> standard and compressed caching and study on a finer scale the memory-performance
> trade-off of both standard and compressed caching. Our results demonstrate that
> compressed caching is especially advantageous for constrained devices, outperforming
> standard caching when less than approximately 256 kB of caching memory is available.
