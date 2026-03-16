---
published: "2026-03-06"
link: "https://eprint.iacr.org/2026/470"
authors: ["[[Christoph Lenzen]]", "[[Julian Loss]]", "[[Kecheng Shi]]", "[[Benedikt Wagner]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Byzantine Agreement and Broadcast are traditionally studied in one of two extremes: the authenticated setting, where a public key infrastructure (PKI) enables universally verifiable signatures and yields higher fault tolerance, and the unauthenticated setting, where no PKI is available and resilience necessarily drops.
> Motivated by Proof-of-Stake blockchains, where only a stable subset of participants (e.g., validators) have registered long-term keys while others do not, we initiate a systematic study of consensus in the \emph{partially authenticated} setting, where a subset of parties are \emph{registered} in a PKI and the remaining parties are \emph{unregistered}.
> 
> We provide a nearly complete feasibility characterization of the resilience as a function of the number $s$ of registered parties among $n$ total parties.
> First, we show that Byzantine Agreement or Byzantine Broadcast with an \emph{unregistered} sender is possible if and only if $t \le \max\{\lceil s/2\rceil,\lceil n/3\rceil\}-1$, matching a simple protocol and an impossibility bound.
> Second, for Byzantine Broadcast with a \emph{registered} sender, we give a deterministic synchronous broadcast protocol tolerating up to $t \le s + \lceil (n-s)/3\rceil - 1$ Byzantine faults (equivalently, $3t<n+2s$); while we present the binary case in the main body for clarity, our techniques extend to an efficient multivalued protocol.
> We complement this with a matching lower bound in a strengthened leakage model in which the adversary learns each party's private state at the end of every round, ruling out both deterministic protocols and randomized protocols that rely only on short-lived secrets and the basic signing/verification interface.
