---
published: "2026-06-16"
link: "https://eprint.iacr.org/2026/1264"
authors: ["[[Zhihao Li]]", "[[Xuan Shen]]", "[[Cheng Hong]]", "[[Ruida Wang]]", "[[Xianhui Lu]]", "[[Tao Wei]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The CKKS fully homomorphic encryption scheme has traditionally been viewed as suitable only for approximate arithmetic. However, recent work (Alexandru et al., Crypto 2025) has introduced functional bootstrapping techniques that enable accurate lookup tables (LUTs) evaluation in CKKS. Nevertheless, to deal with the high precision problem, the state-of-the-art scheme (Dumezy et al., TCHES 2026) requires reshaping the LUTs into a matrix, which incurs  multiplications for a size- table and dominates runtime.
> 
> We first observe that LUT matrices for many practical functions are often highly structured, with exact or numerical rank much smaller than matrix dimension. We then develop a spectral framework for the LUT evaluation problem, which characterizes the relationship between function classes and the singular value decomposition. This framework yields exact rank bounds for structured function classes such as separable functions, and establishes exponential decay of singular values (implying low numerical rank) for smooth analytic functions. Building on this framework, we propose Low Rank Multiplexer Tree Functional Bootstrapping (LRMT-FBT), which evaluates the LUT via the singular values and singular vectors instead of direct matrix multiplication. This reduces the homomorphic multiplication cost from  to , where  denotes the rank of matrix, while also supporting extensions to multi-value and multi-input settings.
> 
> We implement LRMT-FBT in OpenFHE and evaluate it across different spectral classes. We also introduce implementation optimizations to improve the bootstrapping efficiency. At high precision, LRMT-FBT provides substantial performance improvements for common low rank functions compared with Dumezy et al. Typically, for , our method accelerates the LUT evaluation step by  for Step () and  for ReLU (), yielding functional bootstrapping speedups of  and , respectively.
