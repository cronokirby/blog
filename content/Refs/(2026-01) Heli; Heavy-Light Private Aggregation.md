---
published: "2026-01-15"
link: "https://eprint.iacr.org/2026/059"
authors: ["[[Ryan Lehmkuhl]]", "[[Henry Corrigan-Gibbs]]", "[[Emma Dauterman]]", "[[David J. Wu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> This paper presents Heli, a system that lets a pair of servers collect aggregate statistics about private client-held data without learning anything more about any individual client's data. Like prior systems, Heli protects client privacy against a malicious server, protects correctness against misbehaving clients, and supports common statistical functions: average, variance, and more. Heli's innovation is that only one of the servers (the "heavy server") needs to do per-run work proportional to the number of clients; the other server (the "light server") does work sublinear in the number of clients, after a one-time setup phase. As a result, a computationally limited party, such as a low-budget non-profit, could potentially serve as the second server for a Heli deployment with millions of clients.
> 
> Heli relies on a new cryptographic primitive, aggregation-only encryption, that allows computing certain restricted functions on many clients' encrypted data. In a deployment with ten million clients, in which the servers privately compute the sum of 32 client-held 1-bit integers, Heli's heavy server does 240,000 core-s of work and the light server does 7 core-ms of work. Compared with prior work, the heavy server does 38$\times$ more computation, but the light server does 120,000$\times$ less.
