---
published: "2026-06-14"
link: "https://eprint.iacr.org/2026/1253"
authors: ["[[Dongkun Hou]]", "[[Yuanzhe Zhang]]", "[[Shujie Cui]]", "[[Tsz Hon Yuen]]", "[[Joseph K. Liu]]", "[[Jiangshan Yu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Universal multi-party swaps were proposed for secure cross-chain cryptocurrency exchanges across multiple blockchains that require only signature verification from the underlying blockchains. However, existing universal swap protocols remain vulnerable to griefing attacks, where a deviating party aborts the swap to lock a compliant party’s assets for a long period, potentially causing indirect economic losses. A natural approach is to lift existing griefing-free solutions to the universal setting; however, we observe that this direct approach still faces three key challenges: (i) a timeout race attack, which arises from the absence of an upper bound on the transaction validity; (ii) a premium escape attack, which results from multiple refund transactions for the same assets being simultaneously valid; and (iii) a topological limitation, which implies that universal multi-party swaps can support only a special class of strongly connected digraphs, called reuniclus graphs.
> 
> In this paper, we propose GumSwap, a Griefing-free universal multi-party atomic Swap, which guarantees that a compliant party receives a premium if its asset is locked but not redeemed. To mitigate the timeout race attack and the premium escape attack, we impose minimum timeout intervals for the principal and premium timeouts, respectively, and introduce an asset migration mechanism that ensures that, during any time interval, at most one refund transaction is valid.  Given the topological limitations of universal swap protocols, we further design a novel premium distribution mechanism that accommodates two classes of leaders in reuniclus graphs. Our experimental results demonstrate that GumSwap can be performed in less than 0.5 seconds per party, while reducing gas costs by 10.3X compared with existing contract-based solutions.
