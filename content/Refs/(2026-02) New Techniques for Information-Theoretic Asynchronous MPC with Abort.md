---
published: "2026-02-19"
link: "https://eprint.iacr.org/2026/319"
authors: ["[[Xiaoyu Ji]]", "[[Yifan Song]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We study the communication complexity of information-theoretic asynchronous multiparty computation (AMPC) with optimal resilience $n=3t+1$ and malicious security. In this setting, the only known result with linear communication per gate is due to Goyal, Liu-Zhang, and Song [CRYPTO ’24]. However, their construction incurs a large communication overhead of $\Omega(n^{14})$ elements that is independent of the circuit size, rendering their result only of theoretical interest. By additionally assuming a random oracle, Bandarupalli et al. [CCS ’25] reduce the communication overhead to $\mathcal{O}(n^3)$ while maintaining the linear communication per gate, at the cost of only achieving malicious security with fairness.
> 
> In this work, we remove the random oracle assumption and design an information-theoretic AMPC protocol that achieves malicious security with abort. The communication complexity of our construction is $\mathcal{O}(|C|n + Dn^2 + n^3)$ field elements for an arithmetic circuit of size $|C|$ and depth $D$, assuming a functionality for Agreement on Common Set (ACS). 
> 
> Our main technical contribution is a novel verification mechanism with the following guarantee: whenever verification succeeds, there exists a subset of at least $t+1$ honest parties whose local computations are mutually consistent, and the final output is correct with respect to their computation. In contrast to prior approaches that require all honest parties to hold consistent states and execute identical computations before verification, our mechanism tolerates inconsistencies among honest parties while still ensuring that the verified computation is correct for at least one such honest subset, if the verification succeeds.
