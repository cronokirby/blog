---
published: "2026-02-24"
link: "https://eprint.iacr.org/2026/376"
authors: ["[[Lucas Piske]]", "[[Ni Trieu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Private Set Union (PSU) enables two parties to compute the union of their private sets without revealing anything beyond the union itself. Existing PSU protocols remain much slower than private set intersection (PSI), often by a factor of around $30\times$.
> 
> In this work, we present the first PSU protocol based on Invertible Bloom Lookup Tables (IBLTs), introducing a fundamentally new framework that departs from traditional, inefficient approaches. Our protocol exploits structural invariants between each party’s IBLTs and their union to compute the union efficiently without explicitly constructing a combined IBLT. Central to our approach is the notion of union peelability, which allows union elements to be recovered directly from the original IBLTs. We securely implement this functionality using only Oblivious Transfer (OT) and Oblivious Pseudorandom Function (OPRF) for equality checks, ensuring no information beyond the union is leaked. 
> 
> As a result, for set sizes ranging from $2^{14}$ to $2^{20}$, our protocol achieves a runtime of $0.08$ to $2.95$ seconds in the LAN setting, which is comparable to state-of-the-art PSI. We also show substantial speedups over prior PSU work—up to $10\times$ faster in LAN settings and consistently faster in WAN scenarios—while maintaining linear computation and communication complexity with small constants.
