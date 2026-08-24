---
published: "2026-03-13"
link: "https://eprint.iacr.org/2026/518"
authors: ["[[Anna Lysyanskaya]]", "[[Eileen Nolan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In high-volume online services—such as privacy-preserving CAPTCHA bypass or metered paywalls—service providers must filter malicious traffic without compromising user privacy. Anonymous tokens with private metadata (ATPM) address this by embedding a hidden bit into a user’s token; for example, indicating whether the user is suspected to be a bot. However, existing ATPM constructions are limited by high communication complexity, requiring a fresh interaction with the issuer for every single token. Furthermore, they lack support for fine-grained policy requirements, preventing service providers from verifying user attributes (such as age or subscription status) without stripping away anonymity.
> 
> In this work, we bridge this gap by introducing ${{\mathsf{SMA}^2\mathsf{RT}}}$ (Secret Metadata Attribute-based Anonymous Rate-limited Tokens). For the first time in the hidden-metadata context, our construction supports selective attribute disclosure, thereby bridging the gap between the anonymous credentials and anonymous tokens literatures. Our construction leverages signatures on equivalence classes (SEQ) to achieve an “issue once, spend N times” capability. This allows a user to interact with the issuer only once to obtain a master credential and subsequently derive up to N unlinkable, valid tokens locally, without further online communication. This significantly reduces server load and network latency, making the scheme highly practical for real-time web applications. Each derived token preserves the issuer’s hidden metadata bit and supports selective disclosure of the user’s attributes
