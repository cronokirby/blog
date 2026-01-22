---
published: "2025-12-26"
link: "https://eprint.iacr.org/2025/2327"
authors: ["[[Zesheng Li]]", "[[Xinxuan Zhang]]", "[[Yi Deng]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Succinct Non-interactive Arguments of Knowledge (SNARKs) allow a prover to convince a verifier of the validity of a statement using a compact proof and sublinear verification time. However, a major obstacle to the broad application of SNARKs is the high memory and computational cost required for proof generation. Distributed proof systems offer a promising solution by distributing the proving workload across multiple machines. While recent pairing-based distributed SNARKs achieve sublinear costs, they suffer from a lack of post-quantum security and transparency. Conversely, recent hash-based schemes offer these features but have been limited to quasi-linear prover time.
> 
>  In this paper, we present the first fully distributed, transparent, post-quantum SNARK with a linear-time prover while maintaining polylogarithmic verification time and proof size. Our main contributions are two-fold. First, we present a distributed multivariate Polynomial IOP (PIOP) for Rank-1 Constraint Systems (R1CS) based on the Spartan framework. This is achieved by introducing a novel distributed version of the SPARK compiler, which efficiently handles the polynomial commitment scheme for sparse polynomials. Second, we propose the first transparent and post-quantum distributed polynomial commitment scheme with a linear-time prover, building upon the Brakedown framework with proof composition. By compiling our distributed polynomial commitment with both existing and newly proposed distributed PIOPs, we obtain fully distributed SNARKs for Plonkish and R1CS. Both resulting systems are transparent, post-quantum secure, and achieve linear prover time with polylogarithmic verification costs, overcoming the limitations of prior works and enhancing the scalability of zero-knowledge proof systems.
