---
published: "2026-04-15"
link: "https://eprint.iacr.org/2026/740"
authors: ["[[Shaolong TANG]]", "[[Peng Jiang]]", "[[Fuchun Guo]]", "[[Willy Susilo]]", "[[Liehuang Zhu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Threshold blind signatures (TBS) allow any set of issuers whose size exceeds a predefined threshold to jointly generate a signature without learning the message. Adaptively secure TBS schemes allow the adversary to corrupt issuers at any point during protocol execution, capturing realistic threat models. Adaptive security methods rely on the algebraic group model (AGM) in security proofs to extract the discrete logarithm of the blinded protocol message. However, as a strong idealized assumption, AGM requires the adversary, upon outputting any group element, to also provide an explicit linear representation in terms of previously seen group elements. Constructing an adaptively secure TBS scheme without AGM remains challenging.
> 
> In this paper, we propose $\mathsf{Rainblind}$, the first TBS scheme achieving adaptive security without AGM. The core idea is to apply OR compilation between a discrete logarithm equality (DLEQ) statement and a decisional Diffie-Hellman (DDH) tuple statement such that the security proof does not need the AGM to extract the discrete logarithm of the blinded protocol message and instead only needs to extract the group element. Concretely, the DLEQ statement concerns the secret key, while the DDH-tuple statement is derived from a hash function. In real execution, it fails to satisfy the DDH-tuple statement by the uniform hash randomness, forcing the DLEQ branch. In security proof, by programming OR compilation into the DDH-tuple branch, we can leverage random elements to replace the DLEQ elements during the signing queries. To extract the group element, we design a non-interactive proof system $\mathsf{NIPS_{ped}}$. $\mathsf{Rainblind}$ is built from the tagged linear function ($\mathsf{TLF}$), so that the proof can answer adaptive corruption queries via the inversion oracle in the $t$-algebraic translation resistance assumption of $\mathsf{TLF}$, which implies DDH assumption. We also provide a plain signature $\mathsf{Sig_m}$ and a blind signature $\mathsf{BS_m}$ for transitioning to $\mathsf{Rainblind}$.
