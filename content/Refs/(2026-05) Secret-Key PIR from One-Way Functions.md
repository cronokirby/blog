---
published: "2026-05-04"
link: "https://eprint.iacr.org/2026/865"
authors: ["[[Nir Bitansky]]", "[[Noam Mazor]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In secret-key private information retrieval (SK-PIR), the client in an offline phase processes the database using a short secret key. In the online phase the client could then use the secret key to make queries to the server, without revealing the entries accessed, and using only sublinear communication $o(N)$ in the database size $N$. While (non-SK) PIR requires public-key cryptography, recent work provides evidence that SK-PIR may not. In particular, Chen, Ishai, Mour, and Rosen (STOC 26) construct SK-PIR with communication $N^{\varepsilon}$, for any $\varepsilon$, from high-noise LPN, which is not known to imply public-key cryptography.   
> 
> We construct SK-PIR with online communication $\tilde{O}(\sqrt{N)}$, under the minimal assumption of one-way functions. More generally we can achieve client-to-server communication $\tilde{O}(N_c)$ and server-to-client communication $\tilde{O}(N_s)$ as long as $N_c \cdot N_s \geq N$. 
> 
> Our construction is simple and is based on garbled circuits with an uncorrelated input encoding property, which is satisfied by schemes from the literature.
