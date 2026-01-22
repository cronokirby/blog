---
published: "2025-12-18"
link: "https://eprint.iacr.org/2025/2281"
authors: ["[[Jiacheng Gao]]", "[[Moyang Xie]]", "[[Yuan Zhang]]", "[[Sheng Zhong]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In most secure multiparty computation (MPC) scenarios, the data to be processed are much smaller than the underlying field size. The field is typically chosen to be large enough to guarantee security, e.g., a 128-bit prime field for 128-bit security, while the data can be as small as several bits, e.g. $4$ bits for a $16$-category classification task. This size gap can result in significant waste of communication and computation in existing MPC protocols, which often treat data of different ranges indiscriminately.
> 
> We introduce UFO$_\mathrm{s}$, an ultra-fast toolkit for multiparty computation (MPC) on small elements. UFO$_\mathrm{s}$ provides highly optimized protocols for three fundamental tasks: one-hot encoding, comparison and digit decomposition. While these protocols are designed specifically for small elements, as a demonstration of their power, we construct a radix sort protocol that sorts large field elements. Our experiments show significant performance improvements over state-of-the-art MPC implementations. In particular, our sorting protocol achieves up to a $58\times$ speedup in the online phase when sorting $2^{16}$ elements among $5$ parties.
