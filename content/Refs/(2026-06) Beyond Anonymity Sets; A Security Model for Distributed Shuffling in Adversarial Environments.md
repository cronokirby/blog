---
published: "2026-06-15"
link: "https://eprint.iacr.org/2026/1258"
authors: ["[[Adrian Cinal]]", "[[Oliwer Sobolewski]]", "[[Gabriel Wechta]]", "[[Filip Zagorski]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Distributed shuffling is a core primitive underlying mix-nets, electronic voting, and, more recently, single secret leader election (SSLE) protocols for proof-of-stake blockchains. In these settings, a collection of resource-constrained parties jointly permutes a list of ciphertexts or commitments in order to conceal the correspondence between inputs and outputs. Existing security analyzes of such protocols typically rely on heuristic anonymity measures or implicitly assume honest behavior; therefore, they fail to capture statistical dependencies that arise when shuffling is partial and some participants are corrupted.
> 
> In this work, we introduce a new security model for distributed shuffling that explicitly accounts for adversarial corruption and information leakage. Our model allows an adversary to corrupt a subset of shufflers and to track selected elements throughout the execution, and defines anonymity in terms of statistical distance from the uniform distribution over permutations. This yields a quantitative, composable notion of security that subsumes commonly used anonymity-set arguments and aligns with standard cryptographic indistinguishability frameworks.
> 
> Using this model, we analyze Whisk, the shuffle-based SSLE mechanism proposed for Ethereum. We show that, under realistic protocol parameters and even in the absence of adaptive attacks, the induced distribution over permutations deviates significantly from the uniform distribution. Consequently, the resulting anonymity guaranties are substantially weaker than what is suggested by heuristic analyzes.  We show how to modify the scheme parameters to meet the security requirements.
