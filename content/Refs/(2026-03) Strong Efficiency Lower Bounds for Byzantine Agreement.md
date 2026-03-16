---
published: "2026-03-08"
link: "https://eprint.iacr.org/2026/479"
authors: ["[[Cl\u00e9ment Ducros]]", "[[Julian Loss]]", "[[Matthieu Rambaud]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Understanding the complexity of Byzantine agreement (BA) is a fundamental problem in distributed computing and cryptography. Existing round- or communication lower bounds either restrict the class of protocols they apply to in terms of communication, setup assumptions, or determinism. Another class of lower bounds holds only with respect to a very powerful (arguably unrealistic) adaptive adversary that can delete undelivered messages sent by a newly corrupted party while it was still honest. On the other hand, many popular BA protocols including the consensus protocol underlying the Algorand cryptocurrency assume only a standard adaptive adversary which cannot perform after-the-fact message removals. In this work, we aim to further narrow the gap between existing upper and lower bounds. We first revisit existing communication lower bounds of Abraham et al. (PODC 2019) and Blum et al. (TCC 2020) which show that, under certain conditions, $\Omega(t^2)$ messages are necessary in expectation for randomized BA protocols with security against $t$ adaptive corruptions. We give two new lower bounds on the communication complexity of randomized BA protocols that hold against even a standard adaptive adversary, for previously unexplored settings of practical interest. Our bounds assume a complete network of authenticated communication channels.
> Our first bound improves over Abraham et al. when the setup is limited to a common reference string (CRS), and the second one improves the bit complexity of Blum et al since in the authenticated setting, i.e., we allow idealized signatures.
> As a technical contribution, we present a new formal model for protocols using idealized signatures, which may be of independent interest. We then turn our attention to the round complexity of randomized BA protocols in which only a subset of parties may speak. We show that such protocols must either rely on erasures or determine whether or not to first speak in the protocol and decide in dependence the parties' inputs.
> We discuss in detail how both of these design paradigms have been used in prior work and how they lead to efficiency and design-related issues for practical BA protocols.
