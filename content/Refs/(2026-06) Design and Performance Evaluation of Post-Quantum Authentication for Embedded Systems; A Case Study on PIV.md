---
published: "2026-06-17"
link: "https://eprint.iacr.org/2026/1274"
authors: ["[[Emmanuelle Dottax]]", "[[Rina Zeitoun]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> As the transition to post-quantum cryptography accelerates, security protocols must evolve to resist quantum threats while remaining practical, particularly on constrained devices where memory, bandwidth, and performance are limited. We consider the NIST Personal Identity Verification (PIV) system, where smart cards rely on digital signatures for authentication. Since post-quantum signatures introduce substantial computational and memory overhead, whereas post-quantum Key Encapsulation Mechanisms (KEMs) are generally lighter, we investigate KEM-based alternatives for authentication and assess the migration of secure messaging to post-quantum primitives. We propose post-quantum variants of the PIV authentication and secure messaging protocols and implement both signature-based and KEM-based approaches on a real smart card platform. We evaluate their computational and communication costs in a realistic embedded setting and present detailed performance metrics that enable assessing the impact of post-quantum migration across different hardware and communication configurations. Our results show that KEM-based authentication significantly reduces execution time and transmitted data compared to post-quantum signature-based designs, while KEM-based post-quantum secure messaging incurs moderate overhead compared to its classical counterpart. These findings highlight KEM-based authentication as a practical migration strategy for post-quantum secure embedded systems.
