---
published: "2026-04-05"
link: "https://eprint.iacr.org/2026/663"
authors: ["[[Irem Keskinkurt Paksoy]]", "[[Muhammad ElSheikh]]", "[[Murat Cenk]]", "[[M. Anwar Hasan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> ECDSA is a widely deployed digital signature scheme used in securing communications and distributed systems but its structure prevents efficient batch verification. This limitation is impactful in high-throughput applications such as blockchain transaction validation. In this paper, we consider two modified versions of standard ECDSA, namely ECDSA_rec and ECDSA_ast, which embed additional bits in the signature, that enable efficient batch verification. We contribute the first publicly available C implementations of ECDSA_ast on secp256k1 and of both ECDSA_ast and ECDSA_rec on secp256r1, built on top of Bitcoin and OpenSSL codebases, respectively. We evaluate both variants on the two curves and demonstrate batch verification using the two established randomization techniques, NMVR-rand and HSS-rand. The results of our software implementation indicate that batch verification of modified ECDSA signatures usingHSS-rand generally outperforms individual verification of standard ECDSA. Furthermore, the HSS-rand technique provides more efficient batch verification than NMVR-rand in the majority of cases. For a batch of 32 ECDSA_ast (ECDSA_rec resp.) signatures on secp256k1, HSS-rand batch verification improves individual verification by approximately 30.9% (17.2% for ECDSA_rec) and outperforms NMVR_rand batch verification, which achieves improvements of 10.6% (9.8% for ECDSA_rec). The improvements achieved by HSS-rand on secp256r1 are even more pronounced, reaching  53.9% for ECDSA_ast and 40.5% for ECDSA_rec over individual verification of standard ECDSA signatures. In comparison, HSS-rand yields improvements of 27.6% for ECDSA_ast and 22.9% for ECDSA_rec over NMVR-rand, respectively.
