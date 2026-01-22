---
published: "2026-01-16"
link: "https://eprint.iacr.org/2026/072"
authors: ["[[Aniket Kate]]", "[[Pratyay Mukherjee]]", "[[Pratik Sarkar]]", "[[Hamza Saleem]]", "[[Nibesh Shrestha]]", "[[David Yang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Distributed key generation (DKG) is a foundational building block for designing efficient threshold cryptosystems, which are crucial components of blockchain ecosystems. Existing DKG protocols address the problem in a standalone setting, focusing on establishing the final DKG public key and individual secret keys among the participating parties. This work focuses on DKG primitives for use over blockchain, where the final DKG public key must be available on-chain, enabling on-chain smart contracts to seamlessly execute threshold cryptographic verifications. We observe that existing standalone DKG designs do {\em not} sufficiently exploit the presence of blockchain, leaving substantial scope for improvement in performance. 
> 
> In this work, we design the first discrete-log-based DKG protocol tailored for use over blockchain, leveraging the blockchain's built-in consensus mechanism to realize DKG efficiently. Interestingly, the use of blockchains enables us to solve DKG while tolerating up to one-half Byzantine faults even in non-synchronous settings. Our protocol is asynchronous, allowing it to operate independently of the network's timing assumptions, with the exact network model depending on the destination blockchain.  
> 
> Our solution further utilizes an associated random beacon to select smaller committees and achieves a DKG protocol with sub-cubic communication complexity, sub-quadratic computation complexity, and minimal on-chain storage. Notably, our protocol employs a single invocation of consensus and can terminate in just eleven communication rounds in the good case when deployed on an optimal latency partially synchronous blockchain. Our experiments show that our protocol terminates faster than state-of-the-art standalone protocols, with similar bandwidth overhead for committee members and significantly reduced bandwidth for other parties. Additionally, our protocol benefits from higher CPU resources—when deployed on machines with $32$ vCPUs, it completes in approximately $6.5$ seconds in the optimistic case, even for larger systems with $256$ nodes.
