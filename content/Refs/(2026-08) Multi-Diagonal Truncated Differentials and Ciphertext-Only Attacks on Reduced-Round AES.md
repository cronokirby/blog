---
published: "2026-08-08"
link: "https://eprint.iacr.org/2026/1637"
authors: ["[[Orhun Kara]]", "[[Can Bal\u0131k\u00e7\u0131]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We present the first ciphertext-only distinguishing attack on 5-round AES and a key-recovery attack on 6-round AES for all key sizes under ASCII-encoded English-language plaintext distributions, as well as additional ciphertext-only results under uniform ASCII distributions.
> 
> Our attacks are enabled by a new analytical framework for estimating truncated differential probabilities in 5-round AES, a problem that remains largely unresolved beyond restricted configurations. Existing approaches, relying on statistical sampling, integral cryptanalysis, or differential distribution tables of super S-boxes, are primarily limited to settings with a single active diagonal in the plaintext and a single passive inverse diagonal in the ciphertext. Our method extends this line of work by providing analytical estimates over a substantially broader range of configurations.
> 
> We construct this framework by combining precise computations of MDS-level transition probabilities with a systematic enumeration of truncated differential characteristic classes. By organizing characteristics into equivalence classes defined by diagonal propagation patterns, we enable structured aggregation of probability contributions. This approach captures configurations with a single active diagonal in the plaintext and arbitrary passive inverse diagonals in the ciphertext, as well as the complementary setting involving multiple active diagonals in the plaintext and a single passive inverse diagonal in the ciphertext.
> 
> Our results are validated through independent derivations, consistency checks against prior work, and computer-aided enumeration. More broadly, the framework offers a systematic approach to truncated differential analysis of AES and potentially other AES-like SPN ciphers.
