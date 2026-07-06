---
published: "2026-06-17"
link: "https://eprint.iacr.org/2026/1277"
authors: ["[[Ran Cohen]]", "[[Daniel Collins]]", "[[Pouyan Forghani]]", "[[Juan Garay]]", "[[Vassilis Zikas]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> What is the round complexity of MPC over point-to-point channels that is secure with unanimous/identifiable abort in the dishonest-majority setting? 
> 
> Even after four decades of research, the answer to this question remains unclear. Although two-round MPC protocols exist in the broadcast-channel model, and, further, broadcast protocols with expected-constant rounds exist facing any constant fraction of corruptions, a naïve combination of the two yields MPC with expected  rounds, where  is the number of parties. The reason for this gap is the need to preserve the expected round complexity under parallel composition, yet existing techniques for the composition of broadcast protocols inherently rely on an honest majority of parties.
> 
> Further, when considering MPC with abort, one can also consider \emph{broadcast with abort}. However, existing lower bounds on the round complexity of broadcast do not translate to this relaxed notion of broadcast, with the end result that the existing lower bounds for MPC and broadcast do not apply to the question above.
> 
> In this work, we initiate the systematic study of this question and present the following positive and negative results for MPC over point-to-point channels:
> 
> - First, we prove the impossibility of (strict) constant-round MPC with unanimous abort. In fact, we show that any broadcast protocol with unanimous abort that is secure against super-constant corruptions requires super-constant rounds. 
> 
> - Second, we present a round-preserving and black-box parallel composition construction of broadcast with unanimous abort, which leads to our main result: Assuming oblivious transfer (OT) and verifiable random functions (VRFs), MPC with unanimous abort and expected constant rounds is possible in the PKI model for signatures and VRFs, in the presence of any constant fraction of corruptions.
> 
> - Finally, we show that in the presence of slightly more corruptions---i.e.,  corruptions---there is no expected-constant-round broadcast (and thus MPC) with identifiable abort.
