---
published: "2026-01-11"
link: "https://eprint.iacr.org/2026/042"
authors: ["[[Karim Baghery]]", "[[Hossein Moghaddas]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In EUROCRYPT 1999, Gennaro, Jarecki, Krawczyk, and Rabin (GJKR) showed that in the well-known Pedersen robust Distributed Key Generation (DKG) protocol for the Discrete Logarithm (DL), an adversary can bias the distribution of the resulting public key. To address this issue, they proposed a fully secure, statistically unbiased variant of the Pedersen DKG protocol. The GJKR protocol achieves robustness and guarantees that the final public key remains uniformly random, even in the presence of computationally unbounded corrupted parties, though at the cost of $O(n^2)$ computational complexity, where $n$ denotes the number of parties. 
> In this paper, we revisit fully secure robust DKG protocols for the DL setting and propose three more efficient alternatives, each achieving $O(n)$ computational complexity while offering different trade-offs in security, efficiency, and round complexity. Our first protocol, like the GJKR scheme, guarantees that the distribution of the final public key remains uniformly random, even against computationally unbounded adversaries. The second protocol is concretely more efficient and ensures that the public key distribution is computationally indistinguishable from uniform. In our third construction, we focus on minimizing the number of rounds in the second protocol and present a 3-round variant of it. Our third scheme can be viewed as a fully secure and round-reduced variant of the biased construction by Atapoor et al. (ASIACRYPT 2023). In comparison with the most recent low-round fully secure DKG protocols by Katz (CRYPTO 2024), Cascudo-David (EUROCRYPT 2024), Kate et al. (CCS 2024), and Boneh et al. (EUROCRYPT 2025)--all of which achieve three rounds via two online rounds and one preprocessing round (or vice versa)--our three-round DKG protocol requires only $O(n)$ exponentiations, as opposed to at least $O(n^2)$.
