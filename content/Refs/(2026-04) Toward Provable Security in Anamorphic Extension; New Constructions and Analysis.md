---
published: "2026-04-02"
link: "https://eprint.iacr.org/2026/645"
authors: ["[[Nabanita Chakraborty]]", "[[Ratna Dutta]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In a dictatorial setting where the receiver’s secret key may be exposed to an adversary, anamorphic encryption enables secure communication. Since its introduction in 2022, anamorphic cryptography has attracted considerable attention in the cryptographic literature. Anamorphic extension (AE) strengthens this paradigm by providing deniability: although the receiver can participate in covert communication, it can plausibly deny the existence of such communication to the dictator. The security of an AE of a public key encryption (PKE) is captured by the indistinguishability between its normal and anamorphic modes of operation, formalized by the IND-NA notion. In this paper, we have introduced two concrete constructions of AE from the number-theoretic assumptions-based indistinguishability against chosen plaintext attack (IND-CPA)-secure Goldwasser-Micali PKE and Benaloh PKE. We have proved the IND-NA security of our proposed AEs assuming the existence of secure pseudo-random function (PRF). To the best of our knowledge, our proposed Goldwasser-Micali based construction is the first AE that achieves natural robustness, attains bandwidth rate 1 and has small key-sizes where bandwidth rate is determined by the ratio of the covert and normal plaintext. The bandwidth rate of the Benaloh PKE-based construction is >> 1. Our proposed AEs are efficient due to small key size, low computation costs mostly involving computations of PRF and modular operations, high bandwidth rate, low anamorphic ciphertext expansion rate (ratio of the ciphertext size and the covert plaintext size) and deniability.
