---
published: "2026-02-05"
link: "https://eprint.iacr.org/2026/192"
authors: ["[[Nadim Kobeissi]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Formal verification of cryptographic implementations is frequently presented as providing "the highest level of assurance" against implementation defects. We examine this claim through a case study of Cryspen's libcrux and hpke-rs, two cryptographic libraries that are marketed as formally verified and high-assurance.
> 
> We examine five vulnerabilities across these libraries. The first, a platform-dependent cryptographic output failure in SHA-3 intrinsics discovered by an independent researcher in November 2025, set the stage for our own audit, which identified four additional defects: a missing mandatory validation for X25519 Diffie-Hellman outputs, a nonce reuse vulnerability via integer overflow, ECDSA signature malleability due to absent low-S normalization, and an Ed25519 key generation defect that reduces seed entropy.
> 
> We analyze why each defect fell outside the scope of the formal verification methodology employed, identify a structural pattern we term the verification boundary problem, and argue that the gap between marketing claims of verification completeness and the engineering reality of partial verification constitutes a systemic risk for adopters of formally verified cryptographic software. Our findings suggest that formal verification, while valuable for the specific properties it targets, must be complemented by traditional engineering practices and communicated with precision about its actual scope, lest it become a form of security theater.
