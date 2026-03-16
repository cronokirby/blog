---
published: "2026-03-05"
link: "https://eprint.iacr.org/2026/464"
authors: ["[[Haolin Liu]]", "[[Adrien Siproudhis]]", "[[Christina Boura]]", "[[Thomas Peyrin]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Model extraction attacks aim to recover the internal parameters of neural networks through black-box queries. While significant progress has been achieved for fully connected ReLU networks, far less is known about structured architectures such as Convolutional Neural Networks (CNNs), which are widely used in practice. In particular, convolutional layers introduce locality and weight sharing, while max-pooling operations leak only relative activation information, both of which require rethinking and extending existing extraction techniques. In this work, we study the extraction of CNNs combining ReLU activations and max-pooling layers in the soft-label setting. We first demonstrate that max-pooling can be understood as a natural extension of the ReLU non-linear operation and classify the different types of critical points observed in this setting. We show that max-pooling critical points capture the difference between two convolutional neurons and that the local structure of convolution allows us to determine the shift between them and reconstruct the underlying convolutional kernel. We also introduce optimizations that take advantage of the specific structure of CNNs: by using receptive-field analysis, we design efficient methods to filter noise and localize critical points. These improvements significantly reduce the computational cost compared to a naive reduction to a large sparse fully connected network. Finally, we validate our approach experimentally on a compact VGG-style convolutional neural network trained on CIFAR-10. The results show that our methods permit accurate weight extraction in CNNs in practice, while correctly localizing critical points in convolutional layers.
