---
published: "2026-04-23"
link: "https://eprint.iacr.org/2026/799"
authors: ["[[Sayani Sinha]]", "[[Sikhar Patranabis]]", "[[Debdeep Mukhopadhyay]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Distributed symmetric-key encryption (DiSE), introduced in CCS' 18 enables threshold versions of traditional (symmetric-key) authenticated encryption. In DiSE, the long-term master secret key is secret-shared among multiple parties following a threshold access structure, and both encryption and decryption are performed in a distributed manner. An adaptively secure DiSE, introduced in INDOCRYPT' 20 tolerates adaptive corruptions of the key-holding parties for arbitrary thresholds, while simultaneously retaining efficient encryption and decryption. Unfortunately, all existing instances of adaptively secure DiSE are either quantum-broken (due to their inherent-reliance on discrete log-hard groups), or incur exponential (in the number of parties) online overheads for encryption/decryption. 
> 
> In this paper, we present EQuADiSE -- the first practically efficient, adaptively secure, and plausibly post-quantum construction of DiSE based on the Module Learning with Rounding (MLWR) assumption in the Quantum Random Oracle model (QROM). EQuADiSE is the first adaptively secure quantum-safe instance of DiSE that incurs linear (in the number of parties) encryption/decryption overheads. As a core technical tool of independent interest, we introduce an MLWR-based distributed pseudorandom function (DPRF) that enjoys adaptive security in the QROM and practically outperforms all existing adaptively secure DPRF constructions in terms of online evaluation time.
> 
> We present experimental evaluations demonstrating that EQuADiSE achieves higher online throughput than all prior realizations of DiSE, including quantum-broken realizations based on discrete log-hard groups.
