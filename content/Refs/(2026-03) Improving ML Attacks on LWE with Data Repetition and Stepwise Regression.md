---
published: "2026-03-27"
link: "https://eprint.iacr.org/2026/612"
authors: ["[[Alberto Alfarano]]", "[[Eshika Saxena]]", "[[Emily Wenger]]", "[[Fran\u00e7ois Charton]]", "[[Kristin Lauter]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The Learning with Errors (LWE) problem is a hard math problem in lattice-based cryptography. In the simplest case of binary secrets, it is the subset sum problem, with error. Effective ML attacks on LWE were demonstrated in the case of binary, ternary, and small secrets, succeeding on fairly sparse secrets. The ML attacks recover secrets with up to 3 active bits in the "cruel region" (Nolte et al. 2024) on samples pre-processed with BKZ. We show that using larger training sets and repeated examples enables recovery of denser secrets. Empirically, we observe a power-law relationship between model-based attempts to recover the secrets, dataset size, and repeated examples. We introduce a stepwise regression technique to recover the "cool bits" of the secret.
