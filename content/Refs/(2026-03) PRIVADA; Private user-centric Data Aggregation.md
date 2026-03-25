---
published: "2026-03-23"
link: "https://eprint.iacr.org/2026/579"
authors: ["[[Betul Askin Ozdemir]]", "[[Beyza Bozdemir]]", "[[Ionut Groza]]", "[[Melek \u00d6nen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Privacy-preserving data aggregation has become a fundamental tool for large-scale analytics in AI-driven and cloud-based systems. While existing solutions provide the default privacy guarantee, i.e., input confidentiality, most assure a semi-honest adversary model and fail to simultaneously ensure user anonymity, selective disclosure, and result privacy in the multiple data customers environment. In this work, we introduce PRIVADA, a maliciously secure data aggregation solution that uses MPC in the SPDZ framework. Unlike prior data aggregation schemes using MPC with/without SPDZ, PRIVADA supports multiple data customers while preventing inference of user participation and resisting collusions in real-world data aggregation applications. Moreover, our work guarantees user privacy and result privacy, in addition to input privacy. PRIVADA outperforms the state-of-the-art solutions by providing security against participating parties, including malicious data owners, aggregators, and data customers. Our proof-of-concept implementation also supports the new privacy-preserving data aggregation by combining malicious security, being available for multiple data customers, and ensuring strong privacy guarantees in large-scale deployments. The aggregation operation on the aggregator side becomes simpler with PRIVADA, and experimental results show a 12–15 times speedup compared to the state-of-the-art. This confirms that malicious security and strong privacy guarantees can be achievable without sacrificing practicality.
