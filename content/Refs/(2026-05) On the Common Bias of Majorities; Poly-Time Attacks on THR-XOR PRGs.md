---
published: "2026-05-05"
link: "https://eprint.iacr.org/2026/880"
authors: ["[[Antonio Giulio D\u2019Antona]]", "[[Pierrick M\u00e9aux]]", "[[Akin \u00dcnal]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Pseudorandom Generators (PRGs) based on Threshold-XOR predicates with large locality and high stretches have recently gained traction, since they lend themselves as shallow weak Pseudorandom Functions (PRFs) to fast multiparty computation protocols. In this work, we present novel fast attacks on such PRGs that achieve substantial advantages. Concretely, we break the security levels of most parameters collected by Boura, Couteau, Perrin and Rotella (ToSC'25), as well as those proposed by Fu, Li, Lyu and Liu (EC'26). On the asymptotic side, we prove that our attacks achieve an advantage of $n^{-n/a}$ where $n$ denotes the seed length and $a$ the locality of threshold predicates. As a consequence, when $a \in \Theta(n)$, we get poly-time attacks with noticeable advantage. These results close current gaps on the theoretical study of THR-XOR based Goldreich PRGs.
> 
> Additionally, we demonstrate how the attack advantage can be amplified for PRGs with large output lengths (which are common in the context of weak PRFs). Finally, we discuss alternative predicates for Goldreich PRGs that resist all currently known attacks.
