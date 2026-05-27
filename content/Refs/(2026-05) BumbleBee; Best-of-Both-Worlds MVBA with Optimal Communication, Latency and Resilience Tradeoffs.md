---
published: "2026-05-19"
link: "https://eprint.iacr.org/2026/989"
authors: ["[[Fatima Elsheimy]]", "[[Simon Holmgaard Kamp]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Consensus among $n$ parties tolerating up to $t$ Byzantine faults requires $n > 2t$ in synchronous networks and $n > 3t$ in asynchronous networks. The higher resilience achievable in synchrony relies on a known message delay bound $\Delta$, whereas asynchronous protocols make no timing assumptions but must tolerate fewer faults. Prior work addressed this gap only partially. Some protocols achieve responsiveness under synchrony, meaning that their running time adapts to the \emph{actual} network delay, but offer no guarantees under asynchrony, while others guarantee correctness under both network conditions but sacrifice responsiveness. Only recently, Elsheimy, Kamp, Loss, and Nielsen (IACR~2026) showed for binary validated Byzantine agreement (VBA) that if $t_s$, $t_a$, and $t_r$ denote the synchronous, asynchronous, and responsiveness thresholds, respectively, then the conditions $n > 2t_s + t_a$ and $n > t_s + 2t_r$ are necessary and sufficient to simultaneously achieve asynchronous security, synchronous security, and responsiveness. While binary BA (or VBA) can be extended to multi-valued Byzantine agreement (MVBA) via standard reductions, such transformations generally incur blow-up in the communication. Whether these tight resilience conditions can be achieved for MVBA \emph{with optimal communication complexity} remained open.
> 
> 
> In this work, we resolve this question. For the aforementioned optimal thresholds, we construct an MVBA protocol that is asynchronously secure when $f \le t_a$, synchronously secure when $f \le t_s$, and responsive when $f \le t_r$, where $f$ is the actual number of corruptions. Our construction builds on Dumbo-MVBA~(Lu et al., PODC 2020) and preserves asymptotically optimal efficiency. 
> When $n - 2t_s = \Theta(n)$, our first construction achieves $O(n^2\kappa + n\ell)$ communication for $\ell$-bit inputs and computational security parameter $\kappa$, matching the best known bounds in asynchrony of Lu et al. (PODC 2020) and the best known synchronous bounds of Shrestha et al. (FC 2025).
> When $n - 2t_s$ is small, we provide an alternative construction with communication $O(n^2\kappa + n\ell)$ in synchrony and $O(\lambda (n^2\kappa + n\ell))$ in asynchrony, where $\lambda$ is a statistical security parameter. Whenever $f \le t_r$, both protocols terminate in expected $O(\delta)$ time, where $\delta$ is the actual network delay; otherwise, the expected running time is $O(\Delta)$.
