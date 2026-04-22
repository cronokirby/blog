---
published: "2026-04-14"
link: "https://eprint.iacr.org/2026/725"
authors: ["[[Shancheng Zhang]]", "[[Zongyang Zhang]]", "[[Bernardo Magri]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Secure multi-party computation (MPC) enables mutually distrustful parties to jointly evaluate a function on their private inputs. Classic MPC protocols, however, assume a static set of participants in which every party must remain online throughout the entire computation. Recent advances have introduced MPC models with dynamic participation, such as Fluid MPC, in which computation steps are delegated to a sequence of committees that change across epochs. This approach improves robustness, enabling parties to go offline once their roles are complete. Yet, this flexibility comes at a cost: the most efficient dynamic-participation MPC protocols still incur communication overheads exceeding traditional MPC by more than an order of magnitude.
> 
> In this work, we formalize the communication complexity of $(d,n)$-threshold secret-sharing-based Fluid MPC. We prove a tight trade-off between communication cost and the adversary's corruption threshold, showing that linear communication complexity $O(n)$ is impossible when the corruption threshold $t$ exceeds a proportion of $d$. Matching this bound, we construct a protocol with a communication cost of $9.3n$ elements per multiplication gate against a semi-honest adversary and $37.3n$ elements against a malicious adversary. A C++ implementation confirms that our approach brings the cost of fluidity within practical limits.
