---
published: "2026-05-15"
link: "https://eprint.iacr.org/2026/960"
authors: ["[[Qiang Tang]]", "[[Yuchen Ye]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Sleepy consensus allows parties to join and leave execution arbitrarily, which is a fundamental requirement for large-scale distributed systems. Classic longest-chain protocols, such as Bitcoin and its variants, achieve consensus under this model but suffer from inherent long latency. In contrast, recent protocols that build upon the classic view-based BFT paradigm can achieve constant expected latency and short best-case latency under optimal resilience, but they often incur high communication cost. We observe that the high communication overhead stems from the time-shifted quorums, a technique that makes quorum certificates transferable under dynamic participation. However, the technique relies on extensive message forwarding to reconcile parties' inconsistent local views, and thus incurs a cubic communication cost unavoidably.
> 
> In this work, we tackle the problem by proposing a novel way to transfer certificates. Building on this, we construct a Byzantine Agreement (BA) protocol secure against the state-of-the-art growing adversary model. Our BA protocol achieves optimal resilience, constant expected round complexity, and an expected communication complexity of $O(nNL+nN\kappa+nN\log N)$, where $n$ is the maximum number of awake parties throughout the execution, $N$ is the total number of eligible parties, $L$ is the input length, and $\kappa$ is the security parameter. We also present an efficient recovery mechanism for our BA, incurring only $O(N\kappa+nL)$ bits per recovering party. Then we extend our BA to an Atomic Broadcast (ABC) protocol that achieves optimal resilience, constant expected latency, and an expected amortized communication complexity of $O(nNL+nN\kappa+nN\log N)$ per input value. The recovery mechanism for our ABC incurs $O(N\kappa+n\ell L+n\ell \kappa)$ bits per recovering party, where $\ell$ is the number of views that the party has slept for. Last but not least, we establish communication lower bounds of $\Omega(N^2L)$ for sleepy BA and ABC. The result shows that our BA and ABC are communication-optimal when $L$ is sufficiently large (i.e., when $L=\Omega(\kappa+\log N)$), and highlights a fundamental limitation of communication efficiency in the sleepy model.
