---
published: "2026-03-11"
link: "https://eprint.iacr.org/2026/505"
authors: ["[[Micah Brody]]", "[[Antonia Januszewicz]]", "[[Jiachen Zhao]]", "[[Nirajan Koirala]]", "[[Taeho Jung]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Privacy-Preserving Federated Learning (PPFL) emphasizes the security and privacy of contributors' data in scenarios such as healthcare, smart grids, and the Internet of Things. However, ensuring the security and privacy throughout PPFL can be challenging, given the complexities of maintaining relationships with many users across multiple epochs. Additionally, under a threat model in which the aggregating server and corrupted users are colluding adversaries, honest users' inputs and output data must be protected at all stages. Two common tools for enforcing privacy in federated learning are Private Stream Aggregation (PSA) and Trusted Execution Environments (TEE). However, PSA-only approaches still expose the raw aggregate to the server (and thus to colluding parties). TEE-only aggregation typically incurs non-negligible per-client per-epoch overhead at scale because the TEE must handle per-client communication and maintain per-client state/key material. This paper presents SCALE-FL, a novel solution for PPFL that maintains security while achieving near-plaintext performance using a state-of-the-art PSA protocol to collect user information and a TEE to hide information about the raw aggregate. By using a PSA protocol for aggregation, we can maintain the privacy of information on the untrusted server without requiring per-user key storage or use by the TEE. Then, the aggregate is securely processed by the TEE in plaintext, without the heavy encryption required on an untrusted server. Finally, we ensure the security of user inputs in the federated learning output by using Differential Privacy (DP). The additional overhead introduced by SCALE-FL is 1% of the overhead of the plain FL executions.
