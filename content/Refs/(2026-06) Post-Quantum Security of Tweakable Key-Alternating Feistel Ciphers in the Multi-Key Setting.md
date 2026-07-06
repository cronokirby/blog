---
published: "2026-06-23"
link: "https://eprint.iacr.org/2026/1312"
authors: ["[[Rentaro Shiba]]", "[[Tetsu Iwata]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this paper, we prove the post-quantum security of the Tweakable Key-Alternating Feistel cipher (TKAF) with a public random function in the Q1 model, under the assumption that the adversary is given quantum access to the internal primitive. Specifically, our target is the TKAF studied in the classical setting by Yan et al. (ACNS 2020), where the tweak is injected into the round-key XOR via a hash function of ϵ-AXU family. Our proof draws on the post-quantum security proof for the (non-tweakable) key-alternating Feistel ciphers by Basak et al. (ASIACRYPT 2025), and adapts it to the tweakable setting and further to the multi-key setting, where an adversary can access multiple classical oracles. As a result, we prove that the 3-round TKAF is post-quantum TPRP-secure and the 4-round TKAF is post-quantum STPRP-secure. Specifically, under the assumption that the adversary is given classical access to ℓ independently specified oracles,  at least Ω(2n/3/ℓ2/3) classical and quantum queries or Ω(ϵ−1/2) classical queries are required to break the post-quantum TPRP security of the 3-round TKAF and to break the post-quantum STPRP security of the 4-round TKAF.
