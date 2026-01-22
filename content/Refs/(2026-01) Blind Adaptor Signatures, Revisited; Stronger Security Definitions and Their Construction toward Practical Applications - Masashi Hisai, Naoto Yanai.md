---
published: "2026-01-15"
link: "https://eprint.iacr.org/2026/060"
authors: ["[[Masashi Hisai]]", "[[Naoto Yanai]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Although both blind signatures and adaptor signatures have individually attracted attention, there is little research on combining these primitives so far.  To the best of our knowledge, although the only existing scheme is the scheme by Qin et al. (S\&P 2023), it does not consider practical security notions, namely full extractability, unlinkability, and pre-verify soundness, especially against adversaries with rich attack interfaces.
> In this paper, we propose the first blind adaptor signature scheme that satisfies the above security definitions.  We first formalize the security of a blind adaptor signature scheme and prove a relationship between our security definitions and the existing security definitions, as well as showing several gaps in the existing schemes as a technical problem. Our main idea to overcome this problem is to leverage relations that support random self-reducibility instead of additional random numbers for blind signatures. Such a construction can embed relations into the signature components by re-randomizing them with the relations, and hence satisfies all the above security definitions. We then introduce new proof techniques to prove the full extractability by leveraging the unlinkability.  We also discuss applications of the proposed scheme.
