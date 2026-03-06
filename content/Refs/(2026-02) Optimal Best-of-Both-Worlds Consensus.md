---
published: "2026-02-12"
link: "https://eprint.iacr.org/2026/239"
authors: ["[[Fatima Elsheimy]]", "[[Simon Holmgaard Kamp]]", "[[Julian Loss]]", "[[Jesper Buus Nielsen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Consensus protocols face a fundamental trade-off: synchrony enables higher fault tolerance, whereas asynchrony provides responsiveness (latency proportional to actual network delays) and security under arbitrary delays.
> In particular, synchronous consensus achieves optimal resilience up to $t<n/2$ corruptions but relies on worst-case delay bounds that affect both latency and security, whereas asynchronous consensus tolerates only $t<n/3$ corruptions.
> 
> Two approaches have sought orthogonal compromises between the two.
> Optimistically responsive protocols [Pass and Shi, EC'18] achieve resilience beyond the feasibility limits of asynchronous security, and provide responsiveness under optimistic conditions.
> Network-agnostic protocols [Blum–Katz–Loss, TCC'19] are secure in both synchronous and asynchronous networks but are non-responsive due to relying on conservative worst-case waiting and, to date, do not achieve constant time in asynchrony.
> 
> We reconcile these approaches by constructing the first Byzantine agreement (BA) and validated Byzantine agreement (VBA) protocols that achieve network-agnostic security and optimistic responsiveness with optimal resilience tradeoffs.
> Concretely, for thresholds $t_s > t_r > t_a$ satisfying $n > 2t_s + t_a$ and $n > t_s + 2t_r$, our protocols satisfy:
> (1) Both protocols are synchronously secure for up to $t_s$ corruptions and asynchronously secure for up to $t_a$ corruptions.
> (2) Our VBA protocol is responsive when the number of corruptions is at most $t_r$, while our BA protocol is responsive if additionally at least $t_s+1$ honest parties begin with the same input.
> (3) Both protocols run in expected constant time with quadratic communication complexity, regardless of network conditions.
> 
> 
> We prove matching impossibility results showing that the resilience tradeoffs are optimal, and our protocols additionally achieve optimal expected time and communication complexity.
