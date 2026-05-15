---
published: "2026-05-04"
link: "https://eprint.iacr.org/2026/868"
authors: ["[[Jasmin Zalonis]]", "[[Frederik Armknecht]]", "[[Linda Scheu-Hachtel]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We address the question of realizing privacy preserving analysis of user data. The abstract scenario considered is that an analyst aims to evaluate a function $f$ on some user data $X$. To achieve comprehensive privacy, it is necessary to protect the input $X$ directly. However, it is known that $f(X)$ may leak too much information about $X$ as well. A common approach to mitigate such risks is to make the computation differentially private. In practice, this is often accomplished by replacing $f$ by a noisy variant $f^*$.
> 
> We investigate the use of multi-input functional encryption (MIFE) for achieving input and output privacy in one cryptographic mechanism. In an MIFE scheme, a setup authority can generate restricted decryption keys which enable to learn specific functions of encrypted messages, without revealing any additional information. To achieve differential privacy in this process, we introduce as a new cryptographic primitive: noisy multi-input functional encryption (NMIFE). It extends the concept of MIFE such that the decryption key may also encode a noisy function where the noise value is secret.
> 
> While the change from MIFE to NMIFE is rather straightforward, the challenge is to come up with precise and workable definitions of correctness and security that we propose and explain in this work.  Here, the security definition is tailored to the use case of differential privacy. As it is a special case of the established notion of full-hiding security, we present a generic transformation that enables turning any full-hiding MIFE scheme into a secure NMIFE scheme that has practically the same performance as the initial MIFE scheme.
> 
> Moreover, we make use of the fact that the proposed security definition is less restrictive and present a new concrete NMIFE scheme for evaluating the inner product. It is dubbed DiffPIPE (short for DIFFerentially Private Inner Product Evaluation).  DiffPIPE is not the result from the transformation and outperforms all from existing full-hiding MIFE schemes constructed NMIFE schemes.  In experiments, we demonstrate its applicability for realizing privacy preserving counting queries on data sets.
