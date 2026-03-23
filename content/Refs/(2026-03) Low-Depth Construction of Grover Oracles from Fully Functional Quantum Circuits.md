---
published: "2026-03-21"
link: "https://eprint.iacr.org/2026/568"
authors: ["[[Behzad Abdolmaleki]]", "[[Jiaqi Gu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The Grover oracle is the core component of the Grover search algorithm. Instead of constructing a Grover oracle from scratch, we consider the common practice of constructing a Grover oracle from an existing fully functional quantum circuit (FFQC). An FFQC typically performs computations for a primary target and includes ancilla restoration for qubits used as intermediate storage. Although such circuits can be directly integrated into an oracle, we find that this inevitably introduces circuit redundancy. To address this, we propose a low-depth transformation method that converts an existing FFQC into a low-depth Grover oracle. Additionally, our method can further reduce the width while retaining the previously achieved low depth. We analyse an implementation of the AES quantum circuit and further reduce the circuit width from 7280 to 7104.
