---
published: "2026-02-20"
link: "https://eprint.iacr.org/2026/338"
authors: ["[[Nathan Rousselot]]", "[[Karine Heydemann]]", "[[Lo\u00efc Masure]]", "[[Vincent Migairou]]", "[[R\u00e9mi Strullu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> This paper investigates a recent, claimed state-of-the-art attack on the ASCADv2 dataset, a higher-order masked and shuffled AES implementation, which we demonstrate to be a false positive. Despite successful validation using classical metrics, including a converging Guessing Entropy (GE), we prove that the model learned no actual side-channel leakage. Instead, it exploited a statistical bias in the intermediate value distribution.
> 
> We argue that the usual scoring function used in the GE is an unreliable metric in the presence of such biases. To address this critical evaluation flaw, we propose a set of methods to avoid falling in this pitfall. First, we introduce pre-emptive methods to detect significant biases in the target's value distribution before profiling, as well as post-mortem ones to examine the resulting model. Second, we present guidelines to avoid regimes where the GE is unreliable, and we derive the Asymptotically Optimal Distinguisher, a new, lightweight distinguisher that provably neutralizes the influence of learned priors in the GE metric, thereby isolating the information gained purely from the side-channel leakage. We demonstrate our methodology by successfully identifying the ASCADv2 false positive and applying it to synthetically biased versions of the ASCADv1 dataset.
