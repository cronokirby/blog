---
published: "2026-01-17"
link: "https://eprint.iacr.org/2026/075"
authors: ["[[Syh-Yuan Tan]]", "[[Will Wang]]", "[[Ryan Chow]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Threshold signature schemes play a vital role in securing digital assets within blockchain and distributed systems. $\textsf{FROST2}$ stands out as a practical threshold Schnorr signature scheme, noted for its efficiency and compatibility with standard verification processes. However, under the one-more discrete logarithm assumption, with static corruption and centralized key generation settings, $\textsf{FROST2}$ has been shown by Bellare et al. (in CRYPTO 2022) to achieve only $\textsf{TS-SUF-2}$ security, which is a consequence of its vulnerability to $\textsf{TS-UF-3}$ attacks.
> 
> In this paper, we address this security limitation by presenting two enhanced variants of $\textsf{FROST2}$: $\textsf{FROST2}\texttt{+}$ and $\textsf{FROST2}\texttt{#}$, both achieving the $\textsf{TS-SUF-4}$ security level under the same computational assumptions as the original $\textsf{FROST2}$. 
> The first variant, $\textsf{FROST2}\texttt{+}$, strengthens $\textsf{FROST2}$ by integrating additional pre-processing token verifications that help mitigate $\textsf{TS-UF-3}$ and $\textsf{TS-UF-4}$ vulnerabilities while maintaining practical efficiency. 
> We show that $\textsf{FROST2}\texttt{+}$ can achieve $\textsf{TS-SUF-4}$ security not only under the same conditions as the original $\textsf{FROST2}$ analysis, but also when initialized with a distributed key generation protocol such as $\textsf{PedPoP}$. 
> Building on these improvements, we identify optimization opportunities that lead to our second variant, $\textsf{FROST2}\texttt{#}$, which achieves $\textsf{TS-SUF-4}$ security with enhanced computational efficiency by eliminating redundant calculations.
> Our benchmark shows that the performance of $\textsf{FROST2}\texttt{+}$ is comparable to $\textsf{FROST2}$ while $\textsf{FROST2}\texttt{#}$ is at least 3 times faster than $\textsf{FROST2}$.
