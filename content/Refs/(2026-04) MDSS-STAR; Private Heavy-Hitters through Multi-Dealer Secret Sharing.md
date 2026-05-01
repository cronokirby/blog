---
published: "2026-04-15"
link: "https://eprint.iacr.org/2026/747"
authors: ["[[Harry Eldridge]]", "[[Aditya Hegde]]", "[[Brennon Brimhall]]", "[[Gabrielle Beck]]", "[[Matthew Green]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We propose a new private telemetry system for computing t-heavy hitters in the STAR (Davidson et al., CCS 2022) and POPSTAR (Li et al., USENIX 2024) model. In this setting, each client generates a report with the assistance of a lightweight Randomness Server and submits it to a central Aggregation Server, which can then locally compute only the heavy hitters. As compared to STAR and POPSTAR---which reveal either the full (pseudonymized) frequency histogram or a complex function of it---our protocol reduces leakage: the Aggregation Server learns non-heavy-hitter values only if their frequency exceeds a well-defined threshold. Additionally, while STAR and POPSTAR are insecure in the face of an Aggregation Server that colludes with clients, our protocol provides optimal security against such a colluding server. To achieve these privacy guarantees, our protocol efficiently adapts multi-dealer secret sharing (Eldridge et al., USENIX 2024) to the STAR/POPSTAR model and introduces a novel oblivious secret-share sampling protocol to ensure security against a colluding Aggregation Server. We implement and benchmark the performance of our protocol and find that it is practical for a number of use cases. Moreover, we show that it supports a tunable three-way tradeoff between correctness, efficiency and privacy.
