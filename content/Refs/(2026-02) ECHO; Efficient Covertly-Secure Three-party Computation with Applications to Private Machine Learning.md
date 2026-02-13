---
published: "2026-02-10"
link: "https://eprint.iacr.org/2026/216"
authors: ["[[Yufei Duan]]", "[[Yun Li]]", "[[Zhicong Huang]]", "[[Cheng Hong]]", "[[Tao Wei]]", "[[Chao Zhang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Secure three-party computation with an honest majority is one of the most efficient settings in secure computation, and has been widely adopted in practical applications. However, achieving malicious security in this setting incurs significant concrete efficiency penalties, which could be an order of magnitude worse than that of their semi-honest counterparts. Covert security offers a potential security-efficiency trade-off by detecting malicious behavior with a certain probability (such as $50\%$), deterring rational adversaries through the risk of detection and loss of credibility. Yet, existing covert security research primarily focuses on two-party or general $n$-party protocols in the dishonest-majority setting, with limited progress toward efficient three-party solutions. 
> 
> 
> This work presents the first comprehensive framework, $\mathsf{ECHO}$, for covertly secure, honest-majority three-party computation with applications to privacy-preserving machine learning. We systematically explore the design space of cheating detection and cheater identification techniques, and propose a suite of novel protocols for both arithmetic and Boolean circuits. Each protocol is engineered for a distinct performance goal: minimal online latency, high end-to-end efficiency, or low communication. Notably, for arithmetic circuits over rings, we introduce a protocol leveraging asymmetric message authentication codes, achieving an online phase that is only $1.26\times$ slower than the semi-honest baseline, over three times faster than its maliciously secure counterpart. For Boolean circuits, our novel cut-and-choose-based method outperforms the best previous maliciously secure protocol by a factor of five. In practical PPML benchmarks, our framework achieves near semi-honest performance while delivering up to $8\times$ speedup over maliciously secure protocols on real-world tasks.
