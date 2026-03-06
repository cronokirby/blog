---
published: "2026-02-26"
link: "https://eprint.iacr.org/2026/395"
authors: ["[[Jay Taylor]]", "[[Paul Gerhart]]", "[[Sri AravindaKrishnan Thyagarajan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> AI agents and custodial services are increasingly being entrusted as intermediaries to conduct transactions on behalf of institutions. The stakes are high: The digital asset market is projected to exceed \$16 trillion by 2030, where exchanges often involve proprietary, time-sensitive goods. Although industry efforts like Google’s Agent-to-Payments (AP2) protocol standardize how agents authorize payments, they leave open the core challenge of fair exchange: ensuring that a buyer obtains the asset if and only if the seller is compensated without exposing sensitive information.
> 
> We introduce proxy adaptor signatures (PAS), a new cryptographic primitive that enables fair exchange through delegation without sacrificing atomicity or privacy. A stateless buyer issues a single request and does not need to manage long-term cryptographic secrets while proxies complete the exchange with a seller. The seller is guaranteed payment if the buyer can later reconstruct the purchased witness; meanwhile, the proxies remain oblivious to the witness throughout the protocol. We formalize PAS under a threshold model that tolerates the collusion of up to $t-1$ proxies. We also present an efficient construction from standard primitives that is compatible with Bitcoin, Cardano, and Ethereum. Finally, we evaluate a Rust implementation that supports up to 30 proxies. Our prototype is concretely efficient: buyer and seller computations take place in microseconds, proxy operations in milliseconds, and on-chain costs are equivalent to those of a standard transaction without fair exchange.
