---
published: "2026-08-13"
link: "https://eprint.iacr.org/2026/1679"
authors: ["[[Masayuki Abe]]", "[[David Balb\u00e1s]]", "[[Dung Bui]]", "[[Miyako Ohkubo]]", "[[Zehua Shang]]", "[[Akira Takahashi]]", "[[Mehdi Tibouchi]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this work, we revisit multi-round public-coin proof systems by enabling the use of their simulators and extractors within other cryptographic protocols. Although research on multi-round public-coin proofs has rapidly progressed, their simulators and extractors typically differ from the 3-move (e.g., Sigma protocols) setting in interface and behavior, and are rarely studied from this viewpoint.
> 
> Prior work [Abe et al., Eurocrypt ’26] introduced the notion of critical-round zero-knowledge, showing that, for some classes of protocols, multi-round ZK simulators can be as useful in protocol constructions as the 3-move ones. In this paper, we focus on soundness and introduce critical-round special soundness, a property that enables multi-round witness extractors to be used in protocol design in a manner analogous to 3-move special soundness. We show that several existing multi-round public-coin proof systems satisfy this property and present three applications:
> - A witness sharing scheme that verifiably secret-shares an NP witness without interaction among recipients. It can be realized in a hash-based way by combining MPC-in-the-Head with secret sharing.
> - An offline trapdoor-extractable trapdoor commitment scheme where a trapdoor is extracted immediately upon a double opening. Offline trapdoor extractability was previously known from 3-move public-coin proofs, but no general construction from multi-round proofs was known; our approach closes this gap.
> - A parameter improvement for the multi-round Fischlin transform [Rotem–Tessaro, Crypto’25]. The improved parameter extends the design space of the multi-round Fischlin transform and reduces the prover’s complexity in practice.
> 
> Overall, our results clarify how multi-round public-coin proofs can support protocol design beyond their traditional role as stand-alone proof systems.
