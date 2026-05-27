---
published: "2026-05-13"
link: "https://eprint.iacr.org/2026/951"
authors: ["[[Erica Blum]]", "[[Christoph Lenzen]]", "[[Julian Loss]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Protocols for Byzantine agreement are known to be constrained by relatively strong lower bounds on their optimal resilience, round complexity, and communication complexity. Crucially, though, these lower bounds do not immediately rule out the possibility of protocols that are faster and use less communication when the actual number of faults $f$ is less than the maximum number of faults $t$ that can be sustained. Early-stopping protocols terminate in a number of rounds proportional to $f$ (rather than $t$); likewise, protocols with adaptive communication incur asymptotically less communication when $f$ is less than $t$. We present a randomized, early-stopping Byzantine agreement protocol with adaptive communication complexity that terminates in $O(f+1)$ rounds with bit complexity $O((f+1)n\kappa)$ for a failure probability of $2^{-\kappa}$ in a synchronous network with $t<n/2$ faults, assuming a Public Key Infrastructure (PKI). This is achieved against a strongly adaptive adversary, i.e., the attacker can observe all messages in round $r$, then choose which parties to corrupt in round $r$, and then remove or alter the round-$r$ messages of corrupted parties.
