---
published: "2026-08-15"
link: "https://eprint.iacr.org/2026/1694"
authors: ["[[Zijun Zhuang]]", "[[Yingjie Zhang]]", "[[Jintai Ding]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The uniform multivariate quadratic (UMQ) assumption states that it is hard to find a zero of a uniformly generated MQ function. It is the average-case hardness assumption about the MQ problem. In this paper, we investigate the relations among the UMQ assumption, the MQ one-wayness (MQOW) assumption, and the MQ second-preimage resistance (MQSPR) assumption.
> 
> We show that UMQ and MQSPR tightly imply each other, and MQOW tightly implies UMQ. Then, we show that UMQ implies MQOW when $m\leq n+O(\log\lambda)$, where $n$ is the number of variables, $m$ is the number of MQ equations, and $\lambda$ is the security parameter. In particular, when $m\leq n+O(1)$, this implication is tight.
> 
> As a corollary, we show that  MQSPR implies MQOW under the same condition $m\leq n+O(\log\lambda)$, which is weaker than the compression condition $n=m+\omega(\log\lambda)$ required for the implication from SPR to OW for general function families. In particular, our result covers the square case $m=n$ as well as mildly overdetermined MQ systems satisfying $m=n+O(\log\lambda)$.
