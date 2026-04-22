---
published: "2026-04-08"
link: "https://eprint.iacr.org/2026/695"
authors: ["[[Majid Khabbazian]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Multi-scalar multiplication (MSM), $MSM(\vec{P},\vec{x})=\sum_{i=1}^n x_i P_i$, is a dominant computational kernel in discrete-logarithm–based cryptography and often becomes a bottleneck for verifiers and other resource-constrained clients. We present 2G2T, a simple protocol for verifiably outsourcing MSM to an untrusted server. 2G2T is efficient for both parties: the server performs only two MSM computations and returns only two group elements to the client, namely the claimed result $A=MSM(\vec{P},\vec{x})$ and an auxiliary group element $B$. Client-side verification consists of a single length-$n$ field inner product and only three group operations (two scalar multiplications and one group addition). In our Ristretto255 implementation, verification is up to $\sim 300\times$ faster than computing the MSM locally using a highly optimized MSM routine (for $n$ up to $2^{18}$). Moreover, 2G2T enables latency-hiding verification: nearly all verifier work can be performed while waiting for the server's response, so once $(A,B)$ arrives the verifier completes the check with only one scalar multiplication and one group addition (both independent of $n$). Finally, despite its simplicity and efficiency, we prove that 2G2T achieves statistical soundness: for any (even unbounded) adversarial server, the probability of accepting an incorrect result is at most $1/q$ per query, and at most $e/q$ over $e$ adaptive executions, in a prime-order group of size $q$.
