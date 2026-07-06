---
published: "2026-06-21"
link: "https://eprint.iacr.org/2026/1297"
authors: ["[[Junru Li]]", "[[Yifan Song]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this paper, we study garbled circuits in the random oracle model against a computationally unbounded adversary with  queries to a (programmable) random oracle. From Yao's garbled circuits (SFCS 1986) to Three-Halves (CRYPTO 2021), the garbled circuit size has been reduced from  bits to  bits for achieving a statistical error of , where  is the circuit size and  is the statistical security parameter. However, no known result achieves  bits of garbled circuit size by now, and it is widely believed that a garbled circuit must have  bits in the random oracle model.
>     
>     In this work, we present the first garbling scheme that achieves  bits of garbled circuit size in the random oracle model. In particular, for a circuit  of size  and depth , the achieved garbled circuit size is  bits. This breaks the long-standing  barrier on the garbled circuit size.
> 
>     We extend our garbling scheme to a maliciously secure two-party computation protocol with communication of  bits against any -query adversary assuming parallel oblivious transfers and a (programmable) random oracle. The protocol only requires 1 OT round and 3 one-way communication rounds. If only requiring one of the two parties to have output, a similar communication complexity can be achieved for constructing a non-interactive secure computation (NISC) protocol, which only relies on the preprocessing of bit-OT correlations and a random oracle. Compared to a concurrent work on NISC by Ishai et al. (EUROCRYPT 2026) in the same setting, we achieve a better amortized communication cost per gate at the cost of an additional term related to the circuit depth. The NISC protocol with a similar communication cost can also be constructed from a (slightly stronger version of) semi-malicious 2-round OT protocol.
