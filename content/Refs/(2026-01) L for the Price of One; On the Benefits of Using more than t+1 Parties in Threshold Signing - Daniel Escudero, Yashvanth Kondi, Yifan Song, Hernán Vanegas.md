---
published: "2026-01-15"
link: "https://eprint.iacr.org/2026/061"
authors: ["[[Daniel Escudero]]", "[[Yashvanth Kondi]]", "[[Yifan Song]]", "[[Hern\u00e1n Vanegas]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In threshold ECDSA a committee of $N$ parties holds---say, Shamir---shares of degree $t$ of a secret key, where typically $N\gg t$ for operational purposes (e.g. redundancy to prevent losing the key). At signing time, $t+1$ parties can execute a protocol to produce a signature on a given message without leaking anything about the secret key. In this work we show that if we use $n=t+2(\ell-1) + 1$ parties for signing instead, we can compute $\ell$ signatures without increasing at all the communication costs per party, essentially getting $\ell\times$ more signatures almost for free in a dishonest majority.
> 
> Our result is achieved by making use of packed secret-sharing to distribute multiple secrets with no communication penalty. This introduces several challenges not present in the non-packed domain, which leads us to introduce two primitives that may be of independent interest: we show how to prove that a sharing contains small elements efficiently, and its use in distributing consistent sharings of the same secret modulo two different integers. We also show how to generate degree-$2$ preprocessing material with constant communication via an adaptation of the virtual parties idea by Bracha from 1987.
> 
> We compare the communication of our protocol to sign $\ell$ messages with respect to the state-of-the-art in $t+1$-party ECDSA signing by (Doerner et al, S&P'24), which needs to be repeated $\ell$ times. Our results show that, for appropriate regimes of $(t,n,\ell)$, our protocol can achieve 5x less communication (and even a larger factor) than theirs while adding only a few extra parties for the computation.
