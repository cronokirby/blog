---
published: "2026-02-19"
link: "https://eprint.iacr.org/2026/323"
authors: ["[[Hadrien Barral]]", "[[David Naccache]]", "[[Aleksa Veli\u010dkovi\u0107]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Cryptographic operations are momentary. Typically, the verification of a digital signature validates the signer's intervention at a specific moment in the past whereas a successful $\Sigma$-protocol round validates a prover's present existence. While cryptography handles very well the notions of "before" and "after" (typically in the blockchain), it remains blind to physical time.
> 
> In many practical situations it is important to assess the probability that the legitimate user is still present as time elapses. The situation is even more complex when the system needs to provide an assessment based on both cryptographic and non-cryptographic (e.g. biometric) inputs. 
> 
> This paper draws an analogy between Continuous User Authentication (CUA) and pharmacokinetics, a branch of pharmacology that studies how drugs interact with the body over time using differential equations.
> 
> We relate CUA events to two modes of drug administration: injection and infusion. We compare password logins or digital signatures to injection, where trust is immediately established while $\Sigma$-protocols or facial recognition are analogized to intravenous infusion, where trust is maintained continuously as long as rounds succeed or as long as the user is in view of the camera.
> 
> We introduce mathematical models blending data from heterogeneous security inputs (that we call "sensors") to estimate the overall level of trust at any time. The models take into account the presence of the legitimate user, attackers and the absence of incoming information.
