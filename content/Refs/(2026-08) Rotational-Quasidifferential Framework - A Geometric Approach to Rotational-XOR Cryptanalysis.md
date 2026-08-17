---
published: "2026-08-07"
link: "https://eprint.iacr.org/2026/1633"
authors: ["[[Myungkyu Lee]]", "[[Byoungjin Seok]]", "[[Dongjae Lee]]", "[[Deukjo Hong]]", "[[Jaechul Sung]]", "[[Seokhie Hong]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Rotational-XOR (RX) cryptanalysis extends rotational cryptanalysis by combining rotational relations with XOR translations, enabling the analysis of symmetric-key primitives even in the presence of symmetry-breaking constants. Existing analyses of RX characteristics, however, typically rely on independence assumptions when estimating characteristic probabilities, which may lead to inaccurate probability evaluations and even incompatible characteristics.
> 
> In this paper, we introduce the first application of the geometric approach to RX cryptanalysis. Inspired by the quasidifferential framework of Beyne and Rijmen, we develop an algebraic representation of RX characteristics and establish exact formulas expressing fixed-key RX characteristic probabilities in terms of rotational-quasidifferential trails. As a result, RX characteristics can be analyzed without relying on round-independence assumptions. By incorporating the key schedule into the state space, we further derive an exact expression for the Expected Rotational-XOR Probability (ERXP), the RX analogue of the Expected Differential Probability (EDP).
> 
> We apply the framework to the AND-RX ciphers SIMON and SIMECK. In particular, we experimentally validate the theoretical predictions of the framework through the fixed-key analysis of a previously known RX characteristic for SIMECK32/64. We also revisit incompatible RX characteristics of SIMECK48/96 and SIMECK64/128, identifying additional constraints that lead to incompatibility. Finally, we reanalyze rotational-XOR differential rectangle attacks on SIMECK48/96 and obtain corrected estimates of the corresponding weak-key classes. These results demonstrate that the proposed framework provides an effective tool for the exact analysis of RX cryptanalysis and establishes a foundation for the study of rotational cryptanalytic techniques within the geometric approach.
