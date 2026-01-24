---
published: "2026-01-07"
link: "https://eprint.iacr.org/2026/025"
authors: ["[[Weizhan Jing]]", "[[Xiaojun Chen]]", "[[Xudong Chen]]", "[[Ye Dong]]", "[[Qiang Liu]]", "[[Tingyu Fan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In many unbalanced private set intersection (uPSI) applications of the client-server setting, the server needs to perform uPSI with multiple clients. Cong \textit{et al.} (ACM CCS'21) proposed a state-of-the-art (SOTA) uPSI protocol based on fully homomorphic encryption (FHE), achieving malicious security by employing an oblivious pseudorandom function (OPRF) in the pre-processing phase.
> However, re-executing existing uPSI protocols with each client imposes significant computational overhead for the server.
> In this paper, we present JAGUAR, a maliciously secure and efficient uPSI protocol designed for this setting. JAGUAR reduces online computation through a Divide-and-Combine optimization, requiring only $\mathcal{O}(\sqrt{|X|})$ homomorphic multiplications. Furthermore, it employs a novel fixed VOLE-based OPRF that enables reusable and lightweight pre-processing across multiple clients.
> Experimental results demonstrate that JAGUAR achieves up to $2.7\times$ improvement in online runtime compared to the SOTA protocol in LAN. In multi-client scenarios, JAGUAR further outperforms existing protocols by a wide margin in terms of scalability and overall performance.
