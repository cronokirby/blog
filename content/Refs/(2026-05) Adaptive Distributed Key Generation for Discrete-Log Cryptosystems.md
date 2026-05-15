---
published: "2026-05-06"
link: "https://eprint.iacr.org/2026/892"
authors: ["[[Ruben Baecker]]", "[[Paul Gerhart]]", "[[Stanislaw Jarecki]]", "[[Phillip Nazarian]]", "[[Daniel Rausch]]", "[[Dominique Schr\u00f6der]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The security of decentralized asset custody and blockchain consensus increasingly relies on threshold signatures to eliminate single points of failure. In these high-stakes environments, static security models are an insufficient theoretical abstraction. Real-world blockchain deployments demand adaptive security to ensure protocols remain secure against adversaries who reactively compromise participants based on observed network traffic and protocol state.
> 
> While the NIST standardization effort and Bitcoin’s Taproot (BIP340) upgrade have accelerated interest in adaptively secure threshold Schnorr signatures, a threshold system is only as secure as its setup phase. In decentralized settings, this necessitates a Distributed Key Generation (DKG) protocol to eliminate reliance on a trusted dealer. However, a critical gap remains: current DKG protocols are incompatible with the specific key structures required by promising schemes (EUROCRYPT'26). Furthermore, a result from CRYPTO'25 demonstrated that unique key commitments necessitate a non-falsifiable assumption for adaptive security. To avoid non-standard assumptions, DKG protocols must be key-share hiding, a property existing DKGs fail to provide.
> 
> We close this gap by proposing two novel DKG protocols that support identifiable abort and tolerate a dishonest majority and prove them secure under new ideal functionalities in the UC framework. Our first protocol achieves optimal round complexity via a single broadcast round at the cost of allowing adversarial bias, while our second protocol eliminates the bias in two rounds. In addition, the protocols provide a proactive key refresh mechanism that allows long-lived decentralized networks to refresh internal key material periodically. This enables the system to recover from transient node compromises without the operational burden of rotating the underlying public key. Our evaluation demonstrates that these constructions are practically efficient, incurring minimal communication and computation overhead for modern high-throughput architectures.
