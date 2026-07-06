---
published: "2026-06-13"
link: "https://eprint.iacr.org/2026/1250"
authors: ["[[Tao Lu]]", "[[Jipeng Zhang]]", "[[Yanpei Guo]]", "[[Xuanming Liu]]", "[[Wenjie Qu]]", "[[Zonghui Wang]]", "[[Wenzhi Chen]]", "[[Jiaheng Zhang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> GPU Tensor Cores, specialized hardware units designed to accelerate matrix multiplication, have served as the primary engine behind the AI revolution. Given the exponential performance gains they have delivered, aligning cryptographic implementations with this hardware evolution is critical. This is particularly acute for zero-knowledge proofs (ZKPs), a cryptographic primitive that currently grapples with high proof generation costs. Existing GPU implementations for ZKPs rely exclusively on general-purpose SIMT cores, leaving the massive computational power of Tensor Cores untapped.
> 
> In this paper, we introduce TensorZKP, the first GPU framework to harness Tensor Cores for ZKP acceleration. Since Tensor Cores are designed for low-precision matrix multiplication, mapping ZKP's arithmetic to this hardware is non-trivial. To bridge this gap, we develop Tensor-Core-compatible finite field arithmetic and reformulate ZKP modules, specifically sum-check protocols and Spielman code, into matrix multiplication tasks. Furthermore, we design an asynchronous warp-specialized framework that pipelines memory access, Tensor Core matrix operations, and SIMT-based modular reductions. We instantiate these optimizations with HyperPlonk as the Polynomial Interactive Oracle Proof (PIOP) and Brakedown as the Polynomial Commitment Scheme (PCS) to enable end-to-end proof generation.
> 
> The evaluation results show that TensorZKP exhibits remarkable efficiency. At a  scale, the underlying building blocks complete in  ms for inner product,  ms for scalar-vector multiplication,  ms for degree-2 sum-check, and  ms for the encoder. For a circuit with  multiplication gates, TensorZKP achieves a proof generation time of only  milliseconds, representing a  speedup over the CPU baseline and a  improvement over state-of-the-art SIMT-based GPU implementations.
