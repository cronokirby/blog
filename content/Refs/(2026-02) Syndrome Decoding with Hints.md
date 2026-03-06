---
published: "2026-02-20"
link: "https://eprint.iacr.org/2026/341"
authors: ["[[Letizia D'Achille]]", "[[Andre Esser]]", "[[Nicolai Kraus]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We study the syndrome decoding problem (SDP) in the presence of side information. The SDP asks, given a binary parity-check matrix $\mathbf{H}$ and a syndrome $\mathbf{s}$, to find a low Hamming weight binary error $\mathbf{e}$ such that $\mathbf{H} \mathbf{e} = \mathbf{s}$ over $\mathbb{F}_2$. Recent work (Cayrel et al., Eurocrypt '21) exploits a fault injection attack to reveal syndrome entries over the integers, referred to as perfect hints. Subsequent works considered side-channel scenarios to reveal similar, but noisy, information (approximate hints).
> 
> Both types of hints have been shown empirically to allow for solving the SDP once enough of them are available. However, fundamental questions about the impact of these hints on the hardness of the SDP, such as thresholds for a collapse into the polynomial-time regime or how to exploit arbitrary amounts of hints, remain open.
> 
> In this work, we show that both types of hints effectively allow one to transform the SDP instance into a soft-decision decoding instance. We then adapt Information Set Decoding (ISD) algorithms, the best known technique to solve generic SDP instances, to this setting. In contrast to previous work, we obtain non-trivial speedups for any amount of available hints, interpolating smoothly between the complexity of standard ISD (no hints) and polynomial time (sufficient hints). Furthermore, our practical simulations show that Hint-ISD achieves the polynomial-time regime generally under fewer hints than previous approaches.
> 
> We then provide an explicit bound on the number of hints required to reach the polynomial-time regime. This bound confirms earlier practical observations that higher error weights, such as those found in the McEliece cryptosystem, exhibit higher resistance against hint exposure than schemes using smaller error weights, such as HQC.
