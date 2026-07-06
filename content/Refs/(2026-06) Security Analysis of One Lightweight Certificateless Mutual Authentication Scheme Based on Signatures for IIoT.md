---
published: "2026-06-22"
link: "https://eprint.iacr.org/2026/1304"
authors: ["[[Zhengjun Cao]]", "[[Lihua Liu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We show that the certificateless signature scheme [IEEE ITJ, 26852-26865, 2024] is insecure against public key replacement attack. An adversary can forge signatures for any message by replacing the signer's public key. We find the two components $\delta_A$ and $T_A$ of signature $\sigma_A=(m_A, ID_A, \delta_A, T_A)$ are not tightly bound to the target message $m_A$ and the singer's identity $ID_A$. The inherent flaw results in that the  adversary can find an efficient signing algorithm functionally equivalent to the valid signing algorithm. The findings could be helpful for  researchers  unfamiliar with the designing techniques for certificateless signatures.
