---
published: "2026-08-10"
link: "https://eprint.iacr.org/2026/1652"
authors: ["[[Daniel Jones]]", "[[Melissa Chase]]", "[[Esha Ghosh]]", "[[Kim Laine]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Video conferencing software, including Zoom, Microsoft Teams, and Cisco Webex, use human-driven key verification ceremonies to protect end-to-end encrypted meetings against a potentially malicious service provider. The client software shows each participant a code that they must compare; if the codes match, the call is considered secure. Prior security analyses assumed authenticated out-of-band channels for the comparison, but this is generally unrealistic. The codes are short-lived, so the ``in-band'' channel being verified is, itself, the most natural one to use. We seek to understand the implications of this common practice, asking whether it can be secure and under what conditions.
> 
> To this end, we formalize the notion of a Human-to-Human Group Key Agreement protocol, modeling an authenticated group key exchange between people, rather than their cryptographic keys. We identify that the security of these protocols relies on the pre-existing capacity of people to consistently recognize one another, avoiding any global identification scheme or trusted external infrastructure.
> 
> We present a construction, prove it secure in our model, derive concrete bounds, and discuss non-examples demonstrating the definition's subtlety. Our results highlight the approach's usability issues and reliance on unforgeability of human-authenticated video streams---an assumption additionally challenged by recent advances in deepfakes.
