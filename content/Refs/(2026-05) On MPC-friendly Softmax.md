---
published: "2026-05-13"
link: "https://eprint.iacr.org/2026/944"
authors: ["[[Marcel Keller]]", "[[Ke Sun]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Softmax is widely used in deep learning to map some representation to a probability distribution.  As it is based on the exponential function, which is relatively expensive in multi-party computation, Mohassel and Zhang (S&P, 2017) proposed a simpler replacement based on ReLU (the maximum of the input and zero) to be used in secure computation.  Later works (e.g., Wagh et al., PETS 2019 and 2021) used the softmax replacement not for computing the output probability distribution but for approximating the gradient in backpropagation. In this work, we analyze the two uses of the replacement and compare them to softmax, both in terms of accuracy and cost in multi-party computation. We found that the replacement only provides a significant speed-up for a one-layer network, while it always reduces accuracy, sometimes significantly.  Thus, we conclude that its usefulness is limited, and one should use the original softmax function instead.  We also present a novel protocol for secure exponentiation that reduces communication up to fourfold while preserving accuracy when used for softmax.
