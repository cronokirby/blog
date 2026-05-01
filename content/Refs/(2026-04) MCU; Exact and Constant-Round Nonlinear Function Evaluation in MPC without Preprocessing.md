---
published: "2026-04-16"
link: "https://eprint.iacr.org/2026/750"
authors: ["[[Min Yang]]", "[[Jinxuan Du]]", "[[Zihang Zhou]]", "[[Dongcan Guo]]", "[[Qingshu Meng]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The rapid proliferation of artificial intelligence (AI) applications—from large language models to deep neural networks—has led to an unprecedented demand for massive training data. This, in turn, has intensified privacy concerns, as sensitive information may be exposed during collaborative model training and inference. Privacy-preserving computing, particularly secure multi-party computation (MPC), offers a rigorous technical solution. Since Yao’s garbled circuits, nearly four decades of research have brought significant progress, yet MPC still faces fundamental challenges in efficiency and scalability. A handful of efficient and scalable MPC systems exist, but they almost invariably require heavy offline preprocessing—a burden that becomes prohibitive for modern Transformer‑based architectures with hundreds of billions of parameters. Conversely, the few approaches that eliminate preprocessing cover only a limited set of nonlinear functions, leaving a critical gap for real‑world machine learning.
> 
> In this paper, we propose MCU (Mask‑Compute‑Unmask), a novel MPC architecture that directly supports a broad spectrum of nonlinear functions without any offline preprocessing. MCU introduces a semi‑honest, non‑colluding helper party (HP) that acts as an active computational engine: parties additively mask their inputs, the HP computes the exact target function on the aggregated masked data, and the parties then unmask using locally known masks. This simple yet powerful paradigm enables a suite of constant‑round, scalable protocols, including general multiplication (2 rounds), power functions (2 rounds), exponentials and trigonometric functions (4 rounds), and sigmoid and softmax (6 rounds). All protocols achieve simulation‑based security and rely solely on additive masks and synchronized pseudorandom generators—no preprocessing, no polynomial approximations, and no accuracy loss. MCU effectively overcomes long‑standing efficiency and scalability barriers in privacy‑preserving machine learning, offering a practical solution for deploying large models such as Transformers in privacy‑sensitive environments.
