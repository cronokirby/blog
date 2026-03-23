---
published: "2026-03-21"
link: "https://eprint.iacr.org/2026/566"
authors: ["[[Xiangfu Song]]", "[[Xiaojian Liang]]", "[[Ye Dong]]", "[[Jianli Bai]]", "[[Pu Duan]]", "[[Changyu Dong]]", "[[Tianwei Zhang]]", "[[Ee-Chien Chang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Shuffle is a basic primitive for secure computation. Secret-shared shuffle refers to oblivious permutation over secret-shared data, which has broad applications in secret-sharing-based secure computation. Since shuffle is typically used in highly sensitive applications, malicious security is often necessary to provide realistic security guarantees. This paper proposes a new family of two-party maliciously secure secret-shared shuffle protocols with linear communication/computation cost and constant-round communication. Achieving this goal has been proven non-trivial by several recent attempts. We answer this question by proposing a new and simple shuffle paradigm based on authenticated correlations. We start by proposing a simple and efficient protocol template based on authenticated correlations with linear cost and constant-round communication. The protocol can be enhanced to be fully authenticated against a malicious sender, which avoids selective-failure attacks that incur the main overhead in existing solutions. However, our roadmap introduces a consistency issue from a malicious receiver, and the challenge is how to resolve the issue while preserving the expected efficiency property. To this end, we propose new efficiency-preserving consistency checks, enabled by a set of new techniques, optimizations, and analyses. Combining the consistency checks with our framework based on authenticated correlations, we propose two maliciously secure secret-shared shuffle protocols with linear cost and constant-round communication. We have implemented our protocols. Performance evaluation shows that our protocols are faster with lower communication than the state-of-the-art.
