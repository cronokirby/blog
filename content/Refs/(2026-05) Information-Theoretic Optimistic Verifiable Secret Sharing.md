---
published: "2026-05-20"
link: "https://eprint.iacr.org/2026/1000"
authors: ["[[Martin Hirt]]", "[[Chen-Da Liu-Zhang]]", "[[Emanuele Marsicano]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Verifiable secret sharing (VSS) is a fundamental primitive for secure computation and its round complexity has been well studied. The works of Gennaro et al. [STOC'01] and Fitzi et al. [TCC'06] settled the landscape in the perfect-security setting, showing that for the optimal corruption threshold $t<n/3$, the exact round complexity is three, and for the sub-optimal corruption threshold $t<n/4$ it is two rounds. Similarly, Patra et al. [CRYPTO'09] and Kumaresan et al. [ASIACRYPT'10] settled the landscape in the statistical setting, showing that for $t<n/2$ (resp. $t<n/3$), the exact round complexity is three (resp. two). 
> 
> Current protocols with optimal resilience incur three rounds even when the actual number of corruptions $f$ is sub-optimal. Fix corruption threshold parameters $0\le k \le t$. We ask whether it is possible to obtain a VSS protocol that incurs two rounds when $f\le k$, and three rounds when $k<f\le t$. We show matching feasibility and impossibility results demonstrating that this is possible if and only if $3t+k < n$ for perfect security, and $2t+k < n$ for statistical security.
