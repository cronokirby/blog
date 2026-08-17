---
published: "2026-08-07"
link: "https://eprint.iacr.org/2026/1632"
authors: ["[[Moritz Peters]]", "[[Jens Alich]]", "[[Ashwin Jha]]", "[[Gregor Leander]]", "[[Yuval Yarom]]", "[[Tim G\u00fcneysu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Recent works have highlighted the risk of deterministic memory encryption, as used for example in AMD SEV. In the so-called ciphertext side-channel attack, an adversary leaks sensitive information, such as cryptographic keys, from an encrypted VM by observing changes in the encrypted contents of the memory. To date, countermeasures have been quite restricted in scope and have not addressed the root cause. Alternatively, some studies suggest adding freshness to memory encryption. However, this approach is considered impractical due to the performance overhead introduced by fetching such freshness values for every single memory access.
> 
> In this work, we propose an efficient approach for eliminating most of the overhead of fetching the aforementioned freshness. Our core idea is to repurpose the ECC memory area to efficiently store random nonces or counters. We propose a range of implementations with varying trade-offs between security guarantees and performance overhead, and demonstrate that we can achieve a solid baseline security even with small random nonces. By leaving a portion of ECC memory unused, we show that it is possible to efficiently integrate protection mechanisms such as memory integrity and memory tagging, while limiting the overall performance overhead to approximately 2%.
