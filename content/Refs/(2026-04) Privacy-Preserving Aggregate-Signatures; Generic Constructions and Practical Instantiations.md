---
published: "2026-04-28"
link: "https://eprint.iacr.org/2026/836"
authors: ["[[Xiaoyang Wei]]", "[[Shuai Han]]", "[[Shengli Liu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Aggregate signatures allow a set of signers to compress individual signatures on distinct messages into a short signature, offering significant savings in storage and verification time. However, existing aggregate signatures neither support key aggregation nor achieve strong privacy guarantees for signers. In a very recent work, Nick, Ruffing and Seurin (EUROCRYPT’26) proposed DahLIAS, a pairing-free aggregate signature scheme with constant size signatures. Unfortunately, DahLIAS fails to provide aggregated verification and privacy properties. As a side contribution, they also constructed a generic transformation from multi-signatures to aggregate-signatures. However, the transformed schemes cannot satisfy unrestrictedness and privacy.
> 
> In this paper, we formally introduce the notion of aggregate signatures with verifiable key aggregation (ASvKA), along with new unforgeability and privacy definitions. We then present a generic transformation that turns any multi-signature (MS) scheme into aggregate signature scheme with verifiable key aggregation and privacy properties, which also lifts weaker unforgeability of the underlying MS to stronger unforgeability of ASvKA. Finally, we instantiate our transformation with two concrete multi-signature schemes. For pairing-free schemes, we propose PP-SpeedyASvKA, a two-round privacy-preserving aggregate signature derived from the multi-signature SpeedyMuSig, achieving the strongest unforgeability and privacy while preserving the efficiency. For pairing-based schemes, we construct PP-BAS-0 and PP-BAS-1 from a BLS multi-signature, offering different trade-offs between unforgeability and privacy.
