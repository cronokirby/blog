---
published: "2026-04-30"
link: "https://eprint.iacr.org/2026/848"
authors: ["[[Wen Zhang]]", "[[Bingsheng Zhang]]", "[[Tianpei Lu]]", "[[Kui Ren]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> With the expansion of Machine Learning as a Service (MLaaS), Secure Multi-Party Computation (MPC) is widely used to protect the privacy of both proprietary models and client data during inference.
> To achieve practical performance, these protocols typically rely on fixed-point arithmetic over finite rings. However, this design choice introduces a unique arithmetic vulnerability: silent modular wraparound.
> In this paper, we propose a novel model extraction attack that actively exploits this behavior to accurately recover neural network parameters. 
> Unlike existing methods that heavily rely on the non-differentiable points of piecewise linear activation functions (e.g., ReLU [CRYPTO 20, EUROCRYPT 25]), our attack leverages the discontinuous jumps triggered by modular wraparound. We successfully extract parameters from networks employing smooth activation functions (e.g., Swish, GELU) and effectively handle expansive network architectures where previous differential attacks fail. 
> We present polynomial-time algorithms for recovering neuron signatures, norms, and signs, demonstrating that our approach remains highly robust even in restricted black-box scenarios where only top-1 label and probability are available to the attacker. 
> Rigorous theoretical proofs and signal-to-interference ratio (SIR) analyses confirm that our sign recovery method significantly outperforms existing neuron wiggle techniques [EUROCRYPT24].
