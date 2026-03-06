---
published: "2026-02-18"
link: "https://eprint.iacr.org/2026/310"
authors: ["[[Kobi Gurkan]]", "[[Andrija Novakovic]]", "[[Ron D. Rothblum]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We introduce Bolt, a new Multilinear Polynomial Commitment Scheme (MLPCS) designed for high-performance SNARKs over binary fields. Bolt is geared towards SNARKs for large computations, in which prover speed is paramount but one can afford slightly larger proofs. The construction is based on the code-switching paradigm; our core technical contribution is a new "proof-system friendly" error-correcting code with extremely efficient encoding both asymptotically and concretely. Bolt offers a significantly faster prover than prior works, while maintaining a moderately larger, yet still reasonable, proof size.
> 
> Theoretically, Bolt achieves a commitment time of approximately $(3+\varepsilon) \cdot N$ field additions plus a Merkle Tree hash computation of size $(1+\varepsilon) \cdot N$ field elements, where $N$ is the size of the multilinear polynomial and $\varepsilon>0$ is arbitrarily small. The prior state-of-the-art, Blaze (Brehm et al., Eurocrypt 2025) used more than $8N$ field ops and a $4N$ size Merkle hash.
> 
> Concretely, our implementation demonstrates that these asymptotic gains translate into substantial real-world speedups. Our benchmarks show that for $N=2^{30}$ over a $32$-bit field, Bolt achieves a commitment time roughly $3 \times$ faster than Reed-Solomon based schemes, albeit with a moderately larger proof. Bolt also offers better commitment time and proof size than recent linear-time schemes. For example, its commitment time is about $1.34 \times$ faster than Brakedown (Golovnev et al., Crypto 2023) and with a $2 \times$ shorter proof.
