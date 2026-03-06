---
published: "2026-02-17"
link: "https://eprint.iacr.org/2026/285"
authors: ["[[Giacomo Santato]]", "[[Riccardo Zanotto]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this paper, we study the IND-CPA-D security of FHE schemes when combined through scheme switching.
> We introduce a formal framework that captures security in this setting and provide a rigorous analysis of different constructions. Within this framework, we identify sufficient conditions for the switching algorithm under which the combined schemes achieve IND-CPA-D security, assuming the individual schemes are IND-CPA-D-secure.
> 
> We then focus on the specific case of scheme switching from CKKS to TFHE. We analyze how existing switching algorithms designed for vanilla CKKS can be modified to preserve IND-CPA-D security.
> We demonstrate an attack against the IND-CPA-D security of the PEGASUS construction [LHHMQ21] and we implement a proof-of-concept of this attack against the CKKS-to-FHEW switching mechanism in the OpenFHE library.
> Finally, we present a generic transformation that converts a vanilla CKKS-based switch into an IND-CPA-D-secure one.
