---
published: "2026-04-02"
link: "https://eprint.iacr.org/2026/643"
authors: ["[[Yin Zhu]]", "[[Junqing Gong]]", "[[Kai Zhang]]", "[[Shay Gueron]]", "[[Haifeng Qian]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In federated learning (FL), secure aggregation (SA) allows a server to compute aggregate model updates (gradients) without accessing individual client gradients. SA is intended to protect clients’ local dataset from being inferred through individual gradients. However, recent NDSS 2025 work shows that even state-of-the-art SA protocols can be vulnerable, as a malicious server may reconstruct clients’ datasets from aggregated gradients. This demonstrates that protecting dataset privacy requires not only gradient confidentiality but also aggregation hiding. Moreover, a malicious server may deviate from the protocol and return manipulated results, making authenticity an additional critical security goal. Supporting one-shot clients, which send a single message per iteration to reduce synchronization overhead, further increases design complexity.
> 
> 
> To address these challenges, we propose FOVA, a fast one-shot verifiable aggregation protocol that simultaneously achieves aggregation hiding and authenticity against an actively malicious server. Notably, authenticity, defined under full participation, must be relaxed for dropout robustness due to the indistinguishability between adversarial omissions and legitimate dropout. FOVA is built upon the verifiable linearly homomorphic encryption scheme, for which we give a new construction based solely on the Paillier cryptosystem. This design enables high efficiency and allows FOVA to be integrated into existing Paillier-based FL frameworks with minimal modifications. We implement FOVA on top of an industrial FL framework. Experimental results show that, compared to the most relevant prior protocols, FOVA achieves up to three orders-of-magnitude speedup while providing stronger security guarantees.
