---
published: "2026-01-20"
link: "https://eprint.iacr.org/2026/087"
authors: ["[[Sietse Ringers]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Anonymous credential schemes such as BBS face a significant deployment barrier: currently available secure hardware such as HSMs required for eIDAS Level of Assurance High does not yet support BBS signatures or pairing-friendly curves. We address this challenge by augmenting BBS credentials with a conventional signature (such as ECDSA), where the issuer additionally signs part of the BBS signature using a conventional signature private key that can be secured in widely available HSMs. While disclosing the extra signature breaks unlinkability, we argue this is acceptable for high-assurance use cases where disclosed attributes already uniquely identify the user. For use cases not requiring this additional security, the conventional signature can be omitted to preserve BBS unlinkability. We prove that augmented BBS credentials are existentially unforgeable under chosen message attacks, with security depending solely on the conventional signature private key rather than the BBS private key. This approach provides a practical migration path to full BBS deployment while (apart from unlinkability) maintaining several key BBS advantages.
