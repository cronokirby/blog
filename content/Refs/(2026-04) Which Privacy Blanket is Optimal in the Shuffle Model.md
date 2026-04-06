---
published: "2026-04-06"
link: "https://eprint.iacr.org/2026/667"
authors: ["[[Pengcheng Su]]", "[[Haibo Cheng]]", "[[Ping Wang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In recent years, the shuffle model has emerged as a prevalent paradigm in privacy-preserving data analysis, centered on the principle of \textit{privacy amplification via shuffling}: an individual user's report is obscured by the ``background noise'' of other users' messages, a phenomenon intuitively known as the \textit{privacy blanket}. This paper initiates a foundational and systematic study of this mechanism from an information-theoretic perspective. We investigate the following optimal noise-design problem: 
> given that a target user's message $Y_1$ follows a distribution $P$, what is the optimal blanket noise distribution $Q$ that maximizes privacy? Specifically, when $Y_1 \sim P$ and the remaining messages $Y_2, \dots, Y_n \stackrel{\text{i.i.d.}}{\sim} Q$ are shuffled to produce an output $\boldsymbol{Z} = (Y_{\sigma(i)})_{i=1}^n$, we seek the $Q$ that affords the strongest protection for $Y_1$ under various metrics, including mutual information $I(Y_1; \mathbf{Z})$, total-variation-information $I_{\mathrm{TV}}(Y_1; \mathbf{Z})$, message recovery advantage, and expected posterior variance. 
> 
> Our analysis reveals a series of non-intuitive results that challenge the conventional heuristic of setting $Q=P$. First, we prove that the optimal noise distribution $Q$ generally \textit{deviates} from the target distribution $P$. For binary alphabets, we show that the (near-)uniform distribution is optimal in a strong sense. For general finite alphabets, we derive an explicit analytical form $Q \propto \sqrt{P(1-P)}$ that achieves asymptotic optimality for mutual information. Furthermore, we demonstrate that our analytical framework transcends the shuffle model, yielding new security insights into broader cryptographic primitives such as the \textit{ideal cipher model} and \textit{honey encryption}.
> 
> Finally, we extend our results to the shuffle-DP paradigm, where messages $Y_i = \mathcal{R}(X_i)$ are outputs of $\varepsilon_0$-locally differentially private mechanisms. We establish a new, tight information-theoretic upper bound $I(X_1; \mathbf{Z} \mid (X_i)_{i=2}^n) \le \frac{(e^{\varepsilon_0/2}-1)^2}{2n} + \mathcal{O}(n^{-3/2})$. This result provides a sharp characterization that matches the optimal privacy-amplification parameters known in the literature, while offering a novel interpretation of the shuffling gain.
