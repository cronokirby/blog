---
published: "2026-02-16"
link: "https://eprint.iacr.org/2026/271"
authors: ["[[Ashwin Jha]]", "[[Mustafa Khairallah]]", "[[Jannis Leuther]]", "[[Stefan Lucks]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The classical EUF-CMA notion for the security of message authentication codes (MACs) is based on "freshness": messages chosen by the adversary are authenticated, and then the adversary has to authenticate a fresh message on its own. In a quantum setting, where classical messages are authenticated but adversaries can make queries in superposition, "freshness" is undefinable. Instead of requiring the adversary to be unable to forge a fresh message, one can require "stability" (the adversary cannot authenticate more messages than queried before), or "exclusiveness" (the adversary cannot authenticate a message from a subset of messages it did not query before). The "plus-one" security definition, proposed by Boneh and Zhandry at Eurocrypt 2013, maintains stability, but fails at exclusiveness. The "blind unforgeability" notion from Alagic et al. (Eurocrypt 2020) maintains exclusiveness, but it is unknown if it maintains stability.
> 
>   This paper proposes a new security definition: "splitting unforgeability" (SU). A MAC is SU-secure, if it maintains both stability and exclusiveness. Against classical adversaries, SU is equivalent to EUF-CMA. Against quantum adversaries, SU implies both plus-one security and blind unforgeability. With respect to $q$-query adversaries, $(2q-1)$-wise independent functions do not suffice for SU, but $(3q+1)$-wise independent functions do, as does a qPRF. Boneh and Zhandry's "Quantum Carter-Wegman MAC" (BZq-MAC), which combines a qPRF and an $\epsilon$-AXU hash function, is SU-secure up to the quantum birthday bound.
> 
> We additionally analyse the security of different instantiations of the Hash-then-MAC composition of a SU-secure MAC $F$ and a hash function $H$ which is either collapsing or Bernoulli-preserving.
