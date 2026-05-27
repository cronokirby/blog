---
published: "2026-05-19"
link: "https://eprint.iacr.org/2026/991"
authors: ["[[Tom Gouville]]", "[[Lucca Hirschi]]", "[[Steve Kremer]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Symbolic formal verification of cryptographic protocols based on the Dolev-Yao (DY) attacker model---an active attacker with full network control and perfect cryptography---is well-established for finding design-level logical flaws in cryptographic protocols. Building on this, DY fuzzing enriches fuzzing with this attacker model to uncover logical bugs at the implementation level. In contrast to bit-level fuzzers (e.g., AFL), DY fuzzing leverages a formal model of messages and cryptography to generate structured, adversarial executions, such as replaying and re-signing a modified payload.
> 
> However, a significant limitation of DY fuzzing is the requirement to precisely model properties to check at runtime (e.g., session parameter agreement). Defining these properties is labor-intensive and inherently non-exhaustive, often necessitating complex instrumentation of the Programs Under Test (PUTs). Consequently, typically only a subset of logical attacks is detected.
> 
> We address this limitation by introducing Differential DY Fuzzing (DDYF), which uses a differential oracle to compare executions across different protocol implementations. By interpreting discrepancies through the DY model, it identifies semantic differences indicative of bugs or vulnerabilities, effectively minimizing false positives.
> 
> We propose a generic design for DDYF, implement it within the puffin DY fuzzer, and evaluate it on two major TLS implementations. Our results demonstrate that DDYF can detect vulnerabilities that evade state-of-the-art fuzzers, specifically those requiring DY attacker capabilities (missed by bit-level differential fuzzers) or complex objective oracles (missed by DY fuzzing). DDYF also uncovered 8 new RFC violations in Openssl and Wolfssl, which are by-design hardly detectable with non-differential oracle. Furthermore, we show that DDYF exposes fine-grained behavioral discrepancies, enabling more precise fingerprinting of protocol implementations.
