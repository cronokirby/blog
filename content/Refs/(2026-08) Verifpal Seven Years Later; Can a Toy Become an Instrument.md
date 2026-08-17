---
published: "2026-08-11"
link: "https://eprint.iacr.org/2026/1654"
authors: ["[[Nadim Kobeissi]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Verifpal, introduced in 2019, is a symbolic protocol verifier that traded analytical generality for a modeling language a working engineer could read without training. Its own paper called the resulting soundness argument "incomplete, semi-formal, in-progress," and the fair conclusion at the time was that Verifpal was a teaching tool standing beside two research tools.
> 
> The engine that paper described has since been replaced outright. Where the 2019 engine searched forward, enumerating combinations of wire values to mutate under four tuned parameters, the new engine is goal-based: it starts from the query it is trying to contradict, breaks that requirement into subgoals, and forces a binding whenever a subgoal can be discharged in only one way, with the search bounded by the protocol's own term structure. This paper gives the first formal account of the replacement: its semantics, equational theory, knowledge closure and goal-directed solving. Soundness does not depend on the solver: before an attack is reported, a small trusted region re-checks that the attacker controls every slot the attack touches and can derive every term it installs, then re-executes the protocol and re-tests the query, so a solver bug can cost a missed attack but cannot produce a false one.
> 
> The language is also simpler and more capable: public-key cryptography no longer needs a special kind of value, key encapsulation mechanisms are expressible, and a primitive can be declared weak or forgeable at the call site. Every principal is now analyzed as several concurrent sessions holding their own fresh values, which brings attacks needing two instances of one role (such as Millen's necessarily-parallel $f^n g^n$) within reach. Attack traces are always reproducible and are written almost entirely in the modeler's own names, which greatly improves the usefulness and readability of Verifpal's findings.
> 
> Verifpal still comes with limits: no observational equivalence, a fixed equational theory, and while parallel execution is now genuinely supported, it is over a bounded number of sessions rather than unbounded replication. Our answer to the title's question is that Verifpal has become a different instrument rather than a smaller one, worth using alongside its two peers rather than instead of them.
