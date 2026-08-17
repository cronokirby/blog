---
published: "2026-08-08"
link: "https://eprint.iacr.org/2026/1641"
authors: ["[[Rahul Kumar]]", "[[Vikas Srivastava]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Quantum public-key encryption (QPKE) is an important direction for secure communication in the presence of quantum adversaries. In this paper, we analyze the four-state QPKE scheme of Liu et al. and show that its ciphertext structure leaks information about computational-basis plaintexts. We present a ciphertext-leakage attack in which an adversary, without knowing the private key, measures the quantum ciphertext component and combines the result with the exposed classical correction bit to recover the plaintext. To overcome this limitation, we propose $\mathsf{sQPKE}$, a simple quantum public-key encryption scheme. The  $\mathsf{sQPKE}$scheme uses only elementary operations such as XOR, parity computation, CNOT, Hadamard, Pauli-$Y$ gates, and computational-basis measurements. We prove correctness, analyze security against ciphertext-leakage, eavesdropping, and distinguishing attacks, and validate the attack and proposed construction through Qiskit implementation and resource estimation.
