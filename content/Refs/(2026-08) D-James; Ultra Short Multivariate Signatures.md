---
published: "2026-08-10"
link: "https://eprint.iacr.org/2026/1650"
authors: ["[[Jacques Patarin]]", "[[Alexandre Roullet]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Multivariate signature schemes are among the few post-quantum candidates capable of providing very short signatures, but designing secure constructions has proven challenging. HFE-based schemes such as G$e$MSS were compromised by algebraic MinRank attacks. This motivates the HFE$_\text{IP}^-$ framework, which combines IP and minus modifiers to address these attacks. We introduce James and D-James, the latter achieving signatures of only 156 bits at the 128-bit classical security level and 348 bits at the 256-bit classical security level, among the shortest signatures reported for practical post-quantum public-key signature schemes, with estimated signing and verification costs comparable to those of G$e$MSS. The main technical contribution is the introduction of Dragon terms, which decouple the number of public equations from the hash output length, allowing the signature size to be reduced independently of the security parameter. We characterize the algebraic structure introduced by Dragon terms and show that it does not enable known MinRank attacks when combined with the HFE$_\text{IP}^-$ countermeasures. We also show that the known differential attack does not appear to extend to the minus variant. We further present parameter sets over both binary and small non-binary finite fields. For small values of $q>2$, the public-key size decreases by up to a factor of 10, while signature size and computational cost remain close to the binary case.
