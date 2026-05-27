---
published: "2026-05-18"
link: "https://eprint.iacr.org/2026/984"
authors: ["[[Cl\u00e9mence Chevignard]]", "[[Andr\u00e9 Schrottenloher]]", "[[Yixin Shen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Discrete Gaussian Sampling on lattices is a fundamental problem in lattice-based cryptography. It appears both in basic cryptographic primitives such as digital signatures and as an important cryptanalysis building block for solving hard lattice problems. In this paper, we show a quantum algorithm based on the quantum rejection sampling technique whose complexity is asymptotically quadratically faster than its classical counterpart in [Wang \& Ling, IEEE Trans. Inf. Theory 2019]. Our sampler outputs a quantum state which can either be measured to get the desired distribution or be used directly as such in other quantum algorithms. By doing so, we derive two versions of quantum dual attacks that improve upon the previous ones in [Pouly \& Shen, EUROCRYPT 2024]. The two versions are incomparable, each having distinct advantages (speed vs memory requirement). The second version is particularly interesting as it requires only polynomial classical and quantum memory, excluding the classical memory used in the preprocessing step of the Discrete Gaussian sampler. Our quantum Discrete Gaussian sampler can also be used to speed up the algorithm for solving the Short Integer Solution problem, in any norm, of [Bollauf, Pouly \& Shen, ePrint 2026/225].
