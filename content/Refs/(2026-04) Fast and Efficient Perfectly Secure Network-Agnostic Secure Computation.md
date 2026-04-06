---
published: "2026-04-04"
link: "https://eprint.iacr.org/2026/655"
authors: ["[[Gilad Asharov]]", "[[Fatima Elsheimy]]", "[[Gilad Stern]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Secure multiparty computation (MPC) enables mutually distrustful parties to jointly compute over private data without revealing their inputs. 
> While protocols in both synchronous and asynchronous settings have achieved impressive efficiency in either communication or round complexity, combining the two has remained challenging.
> Only recently, Abraham, Asharov, Patil, and Patra (Eurocrypt’23, Eurocrypt’24) achieved protocols that combine low communication complexity ($O((Cn + Dn^2 + n^4)\log n)$) with fast execution ($O(D)$ rounds) in both synchronous and asynchronous models, for circuits of size $C$ and depth $D$, in the perfect setting with optimal resilience. However, both protocols crucially assume advanced knowledge of the network type and are fragile under mismatched or varying network conditions.
> 
> The fragility of protocols under mismatched network assumptions highlights the need for network-agnostic MPC, where security and correctness are preserved in both synchronous and asynchronous settings.
> Yet, all known perfect network-agnostic protocols incur $\Omega(D+n)$ rounds and communication complexity in the order of $n^3$ or higher, far worse than their network-specific counterparts.
> 
> In this work, we present the first network-agnostic MPC protocol in the perfect security setting, achieving expected round complexity $O(D)$. Our protocol has expected communication complexity $O((Cn^2 + Dn^2 + n^4)\log n)$, improving on the state of the art by a factor of $n^3$ for small circuits and $n^2$ for large circuits in communication, in addition to an additive $O(n)$ improvement in round complexity. Our design departs from the structure of prior network-agnostic protocols and introduces several new technical ideas that enable both round and communication efficiency.
