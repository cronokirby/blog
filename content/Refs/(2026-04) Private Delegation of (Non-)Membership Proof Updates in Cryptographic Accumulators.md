---
published: "2026-04-28"
link: "https://eprint.iacr.org/2026/832"
authors: ["[[Bence So\u00f3ki-T\u00f3th]]", "[[Botond Glasz]]", "[[Alireza Kavousi]]", "[[Istv\u00e1n Andr\u00e1s Seres]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> A universal, dynamic accumulator is a verifiable data structure that compresses a set of elements (e.g., unspent coins, issued public key certificates, etc.) into a succinct digest while supporting addition and deletion of elements alongside efficient proving of (non-)membership in that set. In many applications, valid (non-)membership proofs are a prerequisite to access a service (e.g., send a private payment transaction, establish a TLS connection, etc.). Typically, newly added or deleted elements necessitate updating all existing (non-)membership proofs per update. Thus, intermittently connected clients will possess invalid (non-)membership proofs whenever they reconnect. In this work, we design, implement, and evaluate algorithms for the RSA and bilinear accumulators that allow a resource-constrained client to privately delegate the updates of its (non-)membership proofs to an untrusted server. We define and prove security in a game-based framework under standard assumptions. We also study proof delegation in the batch setting. The online client algorithms are constant-time, i.e., independent of the updated set size $k$ compared to prior $\mathcal{O}(k),\mathcal{O}(\sqrt{k})$ works. The private delegation algorithms for membership proofs incur small concrete computational overhead for the server compared to the non-private membership proof creation algorithms, e.g., $6.99\%$ overhead when $2^{10}$ elements were added in the offline phase to the RSA accumulator.
