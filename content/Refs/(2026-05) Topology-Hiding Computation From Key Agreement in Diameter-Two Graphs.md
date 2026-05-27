---
published: "2026-05-19"
link: "https://eprint.iacr.org/2026/996"
authors: ["[[D'or Banoun]]", "[[Elette Boyle]]", "[[Ran Cohen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Topology-hiding computation (THC) enables a set of parties, communicating over an incomplete network, to execute a secure multiparty computation (MPC) protocol for securely computing a function, while also hiding the network topology from within a given class of graphs. Semi-honest THC can be achieved over arbitrary graph classes, facing an arbitrary number of corruptions, from various assumptions implying oblivious transfer (OT). These assumptions are justified by strong lower bounds, indicating that $2$-secure topology-hiding broadcast (THB) over certain diameter-$3$ graph classes requires OT, as well as $1$-secure THC over certain diameter-$2$ graph classes of variable size.
> 
> While THC from weaker assumptions, such as key agreement (KA), is achievable for $t=1$ over fixed-size graphs, the case of multiple corruptions remains unclear, with no known candidate constructions. Even in the simpler, privacy-free case of THB, tolerating $t>1$ corruptions without assuming OT is only known for "friendship" graphs (which are diameter-$2$ graphs of a certain form): in fact, the latter holds information theoretically and for $t<n$. 
> 
> The state of the art raises two foundational questions: First, considering THC, is OT necessary for protecting against adversaries with multiple points of view in the graph? Second, considering THB, is there a zero-one law for $t>1$, where given a graph class, THB either holds unconditionally or requires OT?
> 
> In this work we study these questions over graphs of diameter $2$ (in which the lower bounds requiring OT do not hold) and provide THC protocols for various graph classes supporting many corruptions assuming KA. For some of these results we obtain optimal resilience assuming KA: $t<n$ for THB and $t<n/2$ for THC. We also present new lower bounds, showing that in certain graph classes that support information-theoretic THB for $t=1$, KA is necessary for $t=2$.
