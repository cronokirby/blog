---
published: "2026-03-31"
link: "https://eprint.iacr.org/2026/628"
authors: ["[[Tianwei Zhang]]", "[[Xiuquan Ding]]", "[[Giulio Malavolta]]", "[[Nico D\u00f6ttling]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Registration-based Encryption ($\mathsf{RBE}$) is an emerging paradigm to remove the key escrow problem in identity-based encryption (IBE) systems. $\mathsf{RBE}$ represents a promising alternative to a public-key infrastructure, attaining the best of both worlds between IBE and traditional public-key encryption. Despite a lot of recent progress, existing constructions of $\mathsf{RBE}$ are not yet on-par with other approaches in terms of practical efficiency. To make things worse, all known concretely efficient constructions are based on bilinear pairings and are broken by quantum algorithms.
> 
> In this work, we make progress on this problem. We construct a lattice-based, and therefore with plausible post-quantum security, $\mathsf{RBE}$ scheme with compact ciphertexts and fast encryption/decryption algorithms. Compared to the state-of-the-art lattice-based $\mathsf{RBE}$, our scheme reduces ciphertext size to $0.148$\,MB, down from $9$\,MB, for $1000$ users, and improves the encryption/decryption runtime by an order of magnitude. To the best of our knowledge, this is the first lattice-based $\mathsf{RBE}$ construction with ciphertexts well below one megabyte and competitive end-to-end performance, representing a significant step toward the practical adoption of $\mathsf{RBE}$.
