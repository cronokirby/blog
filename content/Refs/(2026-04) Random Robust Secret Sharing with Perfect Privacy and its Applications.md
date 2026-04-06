---
published: "2026-04-03"
link: "https://eprint.iacr.org/2026/653"
authors: ["[[Mohammad Hassan Ameri]]", "[[Jeremiah Blocki]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Secret Sharing schemes allows a dealer to distribute $n$ shares $s_1,\ldots, s_n$ of a secret $s$ so that any $t$ shares suffice to reconstruct the secret, while any $t-1$ shares reveal no information about $s$. In fact, schemes such as Shamir Secret Sharing satisfy a stronger guarantee called  $(t\!-\!1)$-perfect privacy, meaning that for any subset $S \subseteq [n]$ with $|S| \le t-1$, the joint distribution $(s_i)_{i \in S}$ is uniformly distributed over its domain. This strong guarantee is essential for applications such as fuzzy password-authenticated key exchange (fPAKE) and conditional encryption --- a recent cryptographic primitive introduced to  enable secure personalized password typo correction. Unfortunately, Shamir secret sharing is not robust: corrupted shares can prevent correct reconstruction or cause reconstruction of an incorrect secret. Existing robust secret sharing schemes address this issue but necessarily sacrifice perfect privacy. We introduce and construct \emph{Random Robust Secret Sharing with Perfect Privacy} (RRSS), a new notion that preserves $(t\!-\!1)$-perfect privacy while providing robustness against random share corruptions. In our schemes, the secret is recovered with high probability even if an arbitrary subset of up to $n-t$ shares is independently corrupted at random. We demonstrate the utility of RRSS through two applications. First, we present the first practically efficient fPAKE construction that tolerates Hamming errors. Second, we obtain the first efficient conditional encryption scheme for arbitrary Hamming distances, improving upon prior work that achieved efficiency only for constant distances. We implement both constructions and empirically demonstrate their practicality.
