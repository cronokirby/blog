---
published: "2026-02-22"
link: "https://eprint.iacr.org/2026/353"
authors: ["[[Jian Guo]]", "[[Haoran Li]]", "[[Meicheng Liu]]", "[[Shichang Wang]]", "[[Tianyu Zhang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this paper, we introduce a novel framework for meet-in-the-middle (MITM) attacks on ARX designs, termed \textit{dual-syncopation} MITM attack, which formalizes a compact, rule-based language for tracking deterministic and non-deterministic information for two independent propagations through ARX operations. The language provides an uniform abstraction for previous techniques, e.g., initial structure, partial matching, partial-fixing, and naturally supports automation. With the language, we additionally encode new technical insights that is not covered in literature and build an efficient automatic search tool for MITM attacks on ARX designs that can be fully optimized within hours.
> 
> As a result, we obtain the first preimage attacks on 46- and 47-step SHA-256, extending the previous record of 45 steps by two steps. For SHA-512, we present the first preimage attack on 51 steps, extending the prior record of 50 steps by one step. In addition, we provide a collection of improved preimage attacks on 43-, 44-, and 45-step SHA-256; 46-, 47-, 48-, 49-, and 50-step SHA-512; as well as full-step MD5. The proposed attacks can be converted to free-start collision attacks with the technique proposed by Li, Isobe, and Shibutani at FSE 2012. Our results mark the first improvements on theoretical attacks on SHA-2 in a decade and push the boundary of cryptanalysis of ARX designs.
