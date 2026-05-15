---
published: "2026-04-23"
link: "https://eprint.iacr.org/2026/805"
authors: ["[[Yuxi Xue]]", "[[Xingye Lu]]", "[[Man Ho Au]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> A verifiable shuffle proves that a list of output ciphertexts is a rerandomized permutation of a list of input ciphertexts, without revealing either the permutation or the rerandomization factors. Verifiable shuffles are a core primitive in mix-nets and are deployed in national electronic voting systems and blockchain-based anonymization protocols.  Existing deployed verifiable shuffles typically have proof size $O(N)$ or $O(\sqrt{N})$ in the number of ciphertexts $N$, making shuffle proofs a primary bandwidth cost. The only prior construction with $O(\log N)$ proof size (Hoffmann et al., CCS 2019) requires roughly $30N$ prover and $10N$ verifier group exponentiations, with a proof consisting of $6\log N + 8$ group elements and 4 field elements.
> 
> In this paper, we present a new verifiable shuffle for ElGamal ciphertexts whose proof consists of $2\log N + 8$ group elements and 8 field elements, reducing the prover and verifier costs of Hoffmann et al. to $15N$ and $6N$ group exponentiations, respectively.
> Our protocol is public-coin, non-interactive via the Fiat-Shamir transform, and relies on an updatable structured reference string generated once in a powers-of-tau ceremony and reusable across applications.
> 
> We implement the protocol and, to the best of our knowledge, provide the first benchmarks for a verifiable shuffle with logarithmic proof size. 
> At \(N = 2^{20}\) (about one million ciphertexts), the proof is only \(2.5\,\mathrm{KB}\), compared with hundreds of kilobytes for the best \(O(\sqrt{N})\)-size scheme and hundreds of megabytes for representative  \(O(N)\)-size schemes.
