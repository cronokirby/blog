---
published: "2026-06-15"
link: "https://eprint.iacr.org/2026/1259"
authors: ["[[Ya\u011fmur G\u00fcrel]]", "[[U\u011fur \u015een]]", "[[O\u011fuz Yayla]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Rate Limiting Nullifier (RLN) is a privacy-preserving and decentralized spam-prevention mechanism for anonymous broadcast networks: each member can emit at most  signals per epoch, and any violation reveals a secret that enables the member's stake to be slashed. The standard construction binds each membership to a single secret key , so the unit of identity, the unit of authorization, and the unit of slashing all coincide with one party. This rules out settings in which a group should speak with one voice, share one rate budget, and stand behind one collective bond without any single member being able to act unilaterally.
> We introduce Collaborative RLN Signaling (coRLN), a protocol that lets  parties register as a single RLN member and signal only by acting jointly. The group secret  is held as additive shares under SPDZ and never reconstructed; the identity (or rate) commitment, the per-epoch RLN evaluation, and the broadcast proof are produced inside an MPC network using collaborative zk-SNARKs. The group occupies one leaf in the membership Merkle tree, locks one aggregated stake , and is bound by one rate limit. We present the construction in both the rate-limit-1 and the general  settings, and we extend the protocol with a collaborative withdrawal procedure that lets the group exit without ever reconstructing .
> We prove three security properties of coRLN by reduction to the collaborative-SNARK composition and the standard primitives underneath: (i) no PPT adversary corrupting up to  parties recovers  as long as one party is honest; (ii) two signals in the same epoch with the same  yield an efficient extractor that recovers  and triggers forfeiture of ; and (iii) no strict subset of  can produce a verifying signal. The verifier interface and signal shape match classical RLN at the byte level, so coRLN deploys on existing RLN-aware infrastructure with only the verification key updated.
