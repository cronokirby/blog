---
published: "2026-03-31"
link: "https://eprint.iacr.org/2026/627"
authors: ["[[Weize Wang]]", "[[Yi-Fu Lai]]", "[[Kaizhan Lin]]", "[[Yunlei Zhao]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Recent work by Houben (Asiacrypt'25) introduced a new formulation for class group actions on supersingular elliptic curves oriented by an imaginary quadratic order for an arbitrarily large discriminant. The algorithm is not only constant-time but also fully deterministic, dummy-free, and branch-free. As a result, it gives the fastest isogeny-based non-interactive key exchange (NIKE) in theory, referred to as OSIDH-LD in this paper. However, the current proof-of-concept SageMath implementation remains substantially slower than mainstream post-quantum key-exchange candidates.
> 
> In this paper, we develop an efficient implementation of OSIDH-LD with several approaches. 
> First, we provide algorithmic-level optimizations: (i) we develop the ``tail pruning'' approach such that key agreement avoids redundant orientation updates. 
> This optimization maintains the fully deterministic and dummy-free feature of OSIDH-LD; (ii) we adapt a faster codomain isomorphism identification adapted from the technique used in the SQIsign implementations; and (iii) we present effective isogeny-computation strategies tailored to the cost profile of OSIDH-LD. Second, we adapt the parallelism technique. We apply the fork-join parallel execution model to optimize the class group action performance, and achieve near-perfect parallelism in key generation, as well as improved performance in key agreement.
> 
> We provide two kinds of implementations to show the impacts of our improvements. The first one is in C with assembly language for field arithmetic, which verifies the correctness of our optimization techniques targeting OSIDH-LD. The experimental results show that our techniques lead to an overall $1.56\times$ and $1.87\times$ acceleration for key generation and key agreement, respectively. 
> On an Intel Core i7 CPU, the resulting costs are 12.8~Gcycs (KeyGen) and 10.57~Gcycs (KeyAgree) at a conjectured CSIDH-4096 security strength. Second, we provide parallel implementations that exploit multi-threading and AVX-512 vector extensions, respectively, by batching independent subroutines in the class group action. 
> In particular, the AVX-512 vectorized implementation is $4.97\times$ faster than the improved C+assembly implementation in key generation, which is close to the theoretical optimum.
