---
published: "2026-01-16"
link: "https://eprint.iacr.org/2026/066"
authors: ["[[Divesh Aggarwal]]", "[[Zihan Li]]", "[[Saswata Mukherjee]]", "[[Maciej Obremski]]", "[[Jo\u00e3o Ribeiro]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We introduce the SHEDAG (Somewhere Honest Entropic sources over Directed Acyclic Graphs) source model, a general model for multi-block randomness sources with causal correlations. 
> A SHEDAG source is defined over a directed acyclic graph (DAG) $G$ whose nodes output $n$-bit blocks. Blocks output by honest nodes are independent (by default uniformly random, more generally having high min-entropy), while blocks output by corrupted nodes are arbitrary functions of their causal views (all predecessors in $G$). 
> We tightly characterize the conditions under which randomness extraction from SHEDAG sources is possible.
> 
> $\textbf{Zero-error extraction:}$ We show that perfect extraction from SHEDAG sources with $t$ corruptions is possible if and only if $G$ contains an "unrelated set" (an antichain under reachability) of size at least $t+1$. Conversely, if every unrelated set has size at most $t$, we show that no function can output a perfectly uniform bit. We also provide a polynomial-time algorithm to find a maximum unrelated set, thus efficiently identifying the largest corruption threshold $t$ allowing perfect extraction.
> 
> $\textbf{Negligible-error extraction:}$
> We identify a quantity that we call "resilience" of a DAG $G$, denoted $\text{res}(G)$, that characterizes the possibility of randomness extraction with negligible error (in the block length).
> We show that negligible-error extraction is impossible whenever $t>\text{res}(G)$, and, to complement this, for every $t\leq \text{res}(G)$ we construct explicit extractors with polynomial output length and negligible error.
> 
> Our results generalize prior online source models studied by (Aggarwal, Obremski, Ribeiro, Siniscalchi, Visconti, Eurocrypt 2020) and (Chattopadhyay, Gurumukhani, Ringach, FOCS 2024), which correspond to the special case of a SHEDAG source whose DAG $G$ is a path.
