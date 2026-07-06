---
published: "2026-06-11"
link: "https://eprint.iacr.org/2026/1245"
authors: ["[[Pierre Civit]]", "[[Rachid Guerraoui]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In non-synchronous networks, classic partition arguments imply that any  protocol among  parties cannot ensure safety for many meaningful functionalities once the number of corruptions reaches . This motivates building in accountability to detect (and deter) safety violations.
> 
> We present the first accountable asynchronous MPC (AAMPC) protocol that securely evaluates any arithmetic circuit  (asynchronously computable by a trusted third party). Our protocol:
> 
> (1)  Ensures all target hyperproperties (correctness, privacy, input-independence, and guaranteed output delivery) whenever .
> 
> (2) Provides strong accountability for  with : either
>   (i) all hypersafety properties continue to hold (without guaranteed output delivery), or
>     (ii) every honest party obtains publicly verifiable evidence implicating at least  faulty processes.
>  
> The construction follows the standard offline/online paradigm and assumes only a transparent setup: a bulletin-board public key infrastructure (PKI) and a common random string (CRS).
> 
> Our main technical contribution is an accountable additively homomorphic high-threshold asynchronous complete (verifiable) secret sharing functionality with amortized linear communication for both sharing and reconstruction. 
> This yields an efficient online phase with  latency and amortized  communication.
> 
> We additionally provide a constant-round offline phase with cubic communication per generated Beaver triple.
> 
> Our results are formalized and proven in the Accountable Universal Composability (AUC) framework (S&P 2023), an extension of UC designed to support modular analysis of accountability guarantees.
