---
published: "2026-06-27"
link: "https://eprint.iacr.org/2026/1328"
authors: ["[[Chongxu Ren]]", "[[Kaiyi Zhang]]", "[[Hongbo Yu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The stateless hash-based digital signature algorithm SLH-DSA is a standardized post-quantum signature scheme based on the SPHINCS$^+$ framework. Although SLH-DSA has well-studied security properties, its signatures are relatively large. This has motivated continued work on reducing the signature size of stateless hash-based signature schemes. Recent work of Abri and Katz introduced forced pruning for reducing the few-time signature component in SPHINCS$^+$-style schemes. However, the concrete cover bound for PORS+FP remains conservative, which prevents smaller parameter choices from meeting the target security level.
> 
> We introduce BPORS+FP, a bucket-thinned variant of PORSFP for the bottom few-time signature layer of SPHINCS$^+$-style schemes. The construction places independent PORS child keys under an outer FORS-like bucketing layer. For each selected child key, the number of previous uses is reduced from the bottom-key use count \(q_0\) to a binomially thinned count \(R\sim\operatorname{Bin}(q_0,2^{-B})\). The SPHINCS$^+$ level cover term is therefore evaluated at a smaller random use count, which creates room for smaller child parameters.  BPORS+FP also combines this bucket-thinning effect with a global forced-pruning size threshold.
> 
> Our evaluation shows that BPORS+FP gives shorter signatures than PORS+FP in five of the six standard SPHINCS$^+$ parameter rows considered, with the only exception being the 128-bit fast row. For NIST's limited-signature-use SLH-DSA parameter sets, replacing the few-time component by BPORS+FP reduces the total signature size by about 22%--26%, compared with about 10%--14% from PORS+FP.
