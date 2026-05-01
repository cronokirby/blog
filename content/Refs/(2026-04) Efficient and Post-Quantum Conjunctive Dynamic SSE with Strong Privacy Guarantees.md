---
published: "2026-04-15"
link: "https://eprint.iacr.org/2026/742"
authors: ["[[Bibhas Chandra Das]]", "[[Nilanjan Datta]]", "[[Avijit Dutta]]", "[[Avishek Majumder]]", "[[Debdeep Mukhopadhyay]]", "[[Sikhar Patranabis]]", "[[Subhabrata  Samajder]]", "[[Laltu Sardar]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Designing dynamic searchable symmetric encryption (DSSE) supporting conjunctive keyword queries over encrypted document collections is an important research area. Unfortunately, state-of-the-art conjunctive DSSE schemes such as ODXT (Patranabis et al., NDSS '21), and SDSSE-CQ and its variants (Zuo et al., PoPETS '25) either fail to achieve the desired levels of security (in particular, forward and/or backward privacy), or incur prohibitively large communication requirements and client-side computational overheads, which is undesirable for practical applications. In addition, all known conjunctive DSSE schemes that are both forward and backward private are quantum-broken due to their inherent reliance on discrete log-hard, prime-order cyclic groups. 
> 
> In this paper, we address the open question of designing practically efficient, low-leakage, forward and backward private conjunctive DSSE with small communication requirements and small client-side overheads. Towards this goal, we introduce the first systematic and rigorously formal notions of backward privacy for conjunctive queries that naturally extend the corresponding notions of backward privacy for single-keyword DSSE. Next, as our main contribution, we propose a new framework for conjunctive DSSE called fp-GA-ODXT that improves upon both ODXT and SDSSE-CQ-variants by achieving full-fledged forward privacy and strong backward privacy guarantees, while incurring small client-side computation and low communication overheads. We then demonstrate two instantiations of our fp-GA-ODXT framework: 
>     1) A concretely efficient, classically secure instance based on discrete log-hard groups and an RSA-based trapdoor permutation, which we implement and benchmark. Our experiments demonstrate that we achieve smaller communication overheads and client-side computation for both updates and conjunctive searches as compared to both ODXT and SDSSE-CQ-variants. These come at the cost of a mild increase in server computation (which we view as an acceptable tradeoff in practice). 
>     2) A post-quantum instantiation based on lattices and isogenies of supersingular elliptic curves, thus solving the longstanding open question of designing asymptotically efficient, forward and backward private conjunctive DSSE schemes with post-quantum security.
