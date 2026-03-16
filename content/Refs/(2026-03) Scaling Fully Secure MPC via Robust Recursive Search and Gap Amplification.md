---
published: "2026-03-07"
link: "https://eprint.iacr.org/2026/475"
authors: ["[[Matan Hamilis]]", "[[Ariel Nof]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We present a new framework for secure computation of arithmetic circuits with two-thirds honest majority that lifts semi-honest protocols to full malicious security. Our framework works with any linear secret sharing over any finite ring and maintains the type of security of the underlying semi-honest protocol (i.e., computational or information-theoretic). The framework has the following overhead complexity with respect to size \(|C|\) of the computed circuit \(C\): it incurs only logarithmic communication overhead in \(|C|\) over the cost of the semi-honest protocol, the number of additional rounds is independent of the circuit's size, and the computational work per party is \(O(|C|)\) arithmetic operations.
>   
> Even when limiting the scope to static adversaries, previous works could only achieve two of these three measures: Either the communication is logarithmic and the computational overhead per party is \(O(|C|)\), but the number of additional rounds grows with the circuit's size, or communication is logarithmic and the number of rounds is \(O(n)\), but the computational overhead is \(O(n\cdot |C|)\). To the best of our knowledge, we are the first to achieve the desired complexity in all three fronts, making the cost of achieving full security in MPC lower than ever.
> 
>   Our result is achieved via a new verification technique based on a robust recursive search that finds and removes cheaters from the computation.
> 
>   We further improve our result by reducing costs associated with the number of parties~\(n\). While the initial result incurs cubic communication overhead with respect to \(n\) and \(O(n)\) additional rounds in the worst case, we show how to reduce it to \(\sqrt{n^5}\) communication overhead and \(O(\sqrt{n\log\log n})\) additional rounds, without sacrificing the computational overhead, which remains \(O(|C|)\). This is achieved via a novel technique we call gap amplification that accelerates the player elimination process, enabling us to reduce the number of calls to the verification subprotocol. This technique is of independent interest as it is general and can be directly applied to any protocol that relies on player elimination.
