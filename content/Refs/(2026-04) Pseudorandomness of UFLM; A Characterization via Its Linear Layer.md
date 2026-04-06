---
published: "2026-04-05"
link: "https://eprint.iacr.org/2026/661"
authors: ["[[Tingting Guo]]", "[[Peng Wang]]", "[[Gang Liu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> This paper systematically analyzes the security of the two-branch Unified Feistel Lai Massey (UFLM) structure with independent random round functions under chosen plaintext and chosen ciphertext attacks, focusing on its indistinguishability from a random permutation. UFLM uses an invertible linear layer represented as a $2 \times 2$ block matrix $\varphi$ with blocks $A_{11}, A_{12}, A_{21}, A_{22}$. Previously, Dai et al. proved that when $A_{12}$ is invertible, $4$-round UFLM achieves CCA security and resists up to $\mathcal{O}(2^{n/2})$ queries, where the UFLM input is $2n$ bits. 
> Our work imposes no restriction on $A_{12}$. We determine the minimal number of rounds for UFLM to achieve CPA and CCA security, fully determined by the parameters $T(A_{12}^{\top}, A_{11}^{\top})$ and $T(A_{12}, A_{22})$. For UFLM with enough rounds to be secure, the query bound is primarily  determined by the rank of $A_{12}$. For all UFLM with too few rounds to be secure, we present successful distinguishing attacks that require at most four queries. Our results rigorously show, for the first time, that when $A_{12}$ has full rank, UFLM requires the fewest rounds to achieve CPA and CCA security and attains the highest query bound. Nevertheless, when $A_{12}$ is not full rank, CPA and CCA security can still be achieved by increasing the number of rounds unless $T(A_{12}^{\top}, A_{11}^{\top}) = \infty$ or $T(A_{12}, A_{22}) = \infty$. At last, for involutory $\varphi$, we find UFLM achieves CPA and CCA security if and only if $A_{12}$ has full rank.
