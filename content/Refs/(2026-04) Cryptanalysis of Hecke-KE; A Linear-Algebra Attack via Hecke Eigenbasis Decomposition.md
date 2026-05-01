---
published: "2026-04-19"
link: "https://eprint.iacr.org/2026/770"
authors: ["[[Xiyao Chen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We give a passive attack on the Hecke-KE key-exchange scheme. The scheme proposes using products of Hecke operators on $S_k(\Gamma_0(N))$ as a one-way function. We show that the Hecke algebra acting on any fixed $S_k(\Gamma_0(N))$ is simultaneously diagonalizable over an explicit number field computable from the public parameters alone, and that this diagonalization reduces shared-key recovery to $d$ scalar divisions over that number field, where $d=\dim S_k(\Gamma_0(N))$. Our main theorem shows that enlarging $d$ does not rescue the scheme. The precomputation is a one-time public computation (eigenbasis of $S_k(\Gamma_0(N))$, costing $\widetilde{O}(B\cdot d^3)$ rational operations, where $B=O(N)$ is the Sturm bound); the per-session attack cost is then $O(d^2)$ field operations, entirely independent of the pool size $r$ and the number of Hecke factors $s$. We verify the attack in SageMath 10.7 against all parameter sets from the paper; in every case the recovered key satisfies $K'=K$. Furthermore, we prove that the attack runs in time polynomial in $d=\dim S_k(\Gamma_0(N))$ for every level $N$ (prime or composite) and every weight $k$, while the honest protocol's public-key size is $\Omega(d)$ rationals. Consequently there is no choice of $(N,k)$ for which Hecke-KE is secure and implementable: the scheme is unfixable within its design framework.
