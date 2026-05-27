---
published: "2026-05-15"
link: "https://eprint.iacr.org/2026/967"
authors: ["[[Enyan Li]]", "[[Gaoli Wang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Poseidon/Poseidon2 and Neptune use sparse S-box activation in internal partial rounds to reduce arithmetization cost. This structure makes linear subspace trails relevant to algebraic attacks. If the initial state is restricted to a suitable linear subspace, then subsequent internal states may remain in prescribed linear subspaces for a number of rounds. The corresponding partial rounds therefore do not increase the degree of the resulting polynomial system. Existing analyses use this property to estimate the complexity of reduced round preimage attacks. It is therefore important to understand how long such linear subspace trails can persist.
> 
> We revisit infinite and finite linear subspace trails in Poseidon-like designs. First, we study the invariant subspace conditions on Poseidon that give rise to infinitely long trails. We relate these conditions to the characteristic polynomials of the Cauchy MDS matrices used in Poseidon, and we discuss qualitatively why they are unlikely over fields of large characteristic. Second, we analyze finite linear trails for internal partial rounds in a state of width $t$, where each round activates $s$ S-box coordinates. Under the rank-growth condition stated in this paper, when no such invariant subspace exists, a finite trail has length at most $\lceil t/s\rceil-1$. For Poseidon, $s=1$, this gives at most $t-1$ consecutive linearized internal partial rounds.
> 
> Considering preimage attacks in sponge mode with rate $r$, capacity $c$, and digest size $d$, the available extra constraint budget is $Ec=r-\min\{c,d\}$. For Poseidon, the finite trail bound and this constraint budget together determine how many internal partial rounds can be linearized in the corresponding attack model. For Poseidon2 and Neptune, although MDS-based finite trail bound is not claimed, in the common $s=1$ setting the realizable trail length is still bounded by $Ec$.
