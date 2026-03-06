---
published: "2026-02-17"
link: "https://eprint.iacr.org/2026/286"
authors: ["[[Chun Guo]]", "[[Jian Guo]]", "[[Xinnian Li]]", "[[Wenjie Nan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We present the first general upper bound on permutation-based pseudorandom functions in the information-theoretic setting. We show that any non-compressing PRF, with input and output domain at least \([N]\), making \(t\) black-box calls to any \(t\) public permutations on \([N]\), can be distinguished from a random function over the output domain with at most \(\widetilde{O}\big(N^{t/(t+1)}\big)\) total queries to the PRF and the permutations. Our results suggest that the designs of Chen et al. (Crypto~2019) are optimal, among all possible constructions, in terms of information-theoretic security.
> 
> In particular, we propose the generalized key alternating construction, which captures permutation-based PRFs. We then prove that, for any such construction, there exists an explicit distinguisher achieving the tradeoff
> $Q_fQ_p^{t}=\widetilde{O}\big((2t^2)^{t+1}N^{t}\big) $
> with constant advantage, where \(Q_f\) counts PRF queries and \(Q_p\) counts queries to each public permutation. We further extend our bound to blockcipher-based PRFs and to an adaptive setting in which each round may adaptively choose a permutation from a public family of permutations \(\mathcal P\). In this case, the general upper bound becomes \(\widetilde{O}\big(|\mathcal P|\,N^{t/(t+1)}\big)\).
