---
published: "2026-02-27"
link: "https://eprint.iacr.org/2026/406"
authors: ["[[Yashvanth Kondi]]", "[[Divya Ravi]]", "[[Jure Sternad]]", "[[Sophia Yakoubov]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We advance the study of best-possible security guarantees of two-round secure multiparty computation in the plain model. While Goel et al. (TCC ’21) showed the infeasibility of Identifiable Abort in two rounds in the plain model with a standard honest majority (i.e. $t < n/2$), the effect of relaxing the setting to that of Selective Identifiable Abort, or an honest supermajority (i.e. $t < n/3$), has not been established. 
> 
> In this work, we close this gap. In the honest supermajority case, we show a positive result: two rounds are sufficient to achieve identifiable abort, and thus also selective identifiable abort. Notably, ours is the first two-round general purpose MPC construction in the plain model tolerating more than one corruption that achieves a guarantee stronger than unanimous abort.
> 
> We obtain our construction via a new compiler that lifts any protocol with unanimous abort, to one that achieves identifiable abort. A core building block for our compiler is Oblivious Public Transfer with Intermediaries (OPTI), a new primitive that we introduce which may be of independent interest.
> 
> When a third or more of the parties might be corrupt, we show a negative result: three rounds are necessary to achieve Selective Identifiable Abort with straight-line simulation.
