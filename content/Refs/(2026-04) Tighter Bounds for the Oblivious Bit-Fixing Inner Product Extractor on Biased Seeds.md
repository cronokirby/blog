---
published: "2026-04-03"
link: "https://eprint.iacr.org/2026/654"
authors: ["[[Jack Doerner]]", "[[Lawrence Roy]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The Inner Product Extractor (IPE) of Impagliazzo, Levin, and Luby (STOC'89) takes a seed $h\in\mathbb{F}^\gamma$ and a source $x\in\{0,1\}^\gamma$ for some $\gamma\in\mathbb{N}$ and produces $\langle h,x\rangle$ with error $\varepsilon=\mathsf{SD}((\langle\mathcal{H},\mathcal{X}\rangle,\mathcal{H}),(\mathcal{Y},\mathcal{H}))$ such that $$
> \varepsilon\le\frac{1}{2}\sqrt{|\mathbb{F}|^{\gamma}/2^{H_\infty(\mathcal{H})}}\,\,\sqrt{|\mathbb{F}|/2^{H_\infty(\mathcal{X})}}
> $$ where $\mathcal{Y}$ is the uniform distribution over $\mathbb{F}$, and $\mathcal{H}$ and $\mathcal{X}$ are the independent but possibly non-uniform distributions from which $h$ and $x$ are drawn, respectively. In other words, the IPE's error grows with the square root of seed bias, at most. This square root arises because prior works bound the squared error using the 2-universality of the IPE. The analysis requires an even power of the error, and the IPE is not $4$-universal.
> 
> Motivated by applications to multiparty computation, we revisit the problem of the IPE with biased seeds and prove far tighter bounds on the influence of seed bias by bypassing universal hashing. We first prove an Elevated General Leftover Hash Lemma, which yields an $n^{\text{th}}$ root bound for functions that are almost $n$-universal. Bounding number of inputs on which the IPE is not 4-universal yields $\varepsilon=\mathsf{SD}((\langle\mathcal{H},\mathcal{W}\rangle,\mathcal{H}),(\mathcal{Y},\mathcal{H}))$ where $$
>     \varepsilon\lesssim\frac{2.1}{2}\left(|\mathcal{F}|^\gamma/2^{H_\infty(\mathcal{H})}\right)^{\frac14} \sqrt{|\mathbb{F}|/2^{H_\infty(\mathcal{W})}}
> $$ for any oblivious bit-fixing source $\mathcal{W}$ with $2^{0.585 H_\infty(\mathcal{W})} \le |\mathbb{F}| \le 2^{H_\infty(\mathcal{W})}$. Next, we use matroid theory to directly analyze the $n$-way multicollision probability of the IPE, yielding an asymptotic bound for any even $n$. For $n\ge4$, $0 < \epsilon \le 0.83/(n - 2)$, and $|\mathbb{F}| \le 2^{(1 - \epsilon)\cdot H_\infty(\mathcal{W})}$, as $|\mathbb{F}|\to\infty$, $$
>     \varepsilon
>     \le\frac{(n - 1)}{2}\left({|\mathcal{F}|}^\gamma/2^{H_\infty(\mathcal{H})}\right)^{\frac1n} \sqrt{\vphantom{/}2^{-\epsilon\cdot H_\infty(\mathcal{W})}}\,\, (1 + o(1)).
> $$ Computing a \emph{concrete} version of this bound requires time exponential in $n$. We compute concrete $\{4,6,8\}^{\text{th}}$-root bounds and demonstrate that no one choice of $n$ is optimal. Finally, we introduce a new class of seed-adaptive oblivious bit-fixing sources, extend our results to such sources, and use this extension to improve recent constructions of actively-secure oblivious linear evaluation in the oblivious-transfer hybrid model.
