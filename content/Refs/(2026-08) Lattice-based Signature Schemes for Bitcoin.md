---
published: "2026-08-06"
link: "https://eprint.iacr.org/2026/1628"
authors: ["[[Dmytro Zakharov]]", "[[Mikhail Kudinov]]", "[[Viktoria Balatska]]", "[[Yaroslava Chopa]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Lattice-based cryptography offers a promising direction for transitioning Bitcoin toward post-quantum security, serving as a secure replacement for currently deployed discrete logarithm signatures. The primary advantages of lattice-based signature schemes include the compact combined size of signatures and public keys (e.g., in some cases below 1.6 KB), the robustness of underlying security assumptions, and an algebraic structure that, while not yet yielding practical constructions, holds potential for advanced functionality such as threshold and multi-signatures, compared to hash-based constructions. In this paper, we present a self-contained review of three lattice-based signature schemes, with Bitcoin's post-quantum transition as the motivating application: Dilithium, Falcon, and Hawk. The latter was recently withdrawn from NIST standardization following a key-recovery attack; we retain it because its design paradigm remains of independent interest. For each protocol, we detail the high-level intuition, the necessary technical preliminaries, low-level mechanics, performance, and security analysis. We then assess the deployment aspects relevant to Bitcoin: the on-chain footprint, determined by the combined public-key and signature size and compared against hash-based alternatives; the target security level for outputs that may remain unspent for decades; implementation constraints, such as Falcon's floating-point signing; and wallet key derivation.
> 
> No prior exposure to lattice-based cryptography is assumed: all the required background is developed within the document.
