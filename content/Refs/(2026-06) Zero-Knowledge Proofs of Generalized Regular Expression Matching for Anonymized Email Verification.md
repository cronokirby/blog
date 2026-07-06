---
published: "2026-06-18"
link: "https://eprint.iacr.org/2026/1284"
authors: ["[[Shreyas Londhe]]", "[[Aayush Gupta]]", "[[Sora Suegami]]", "[[Yogesh Shahi]]", "[[Rute Figueiredo]]", "[[Parisa Hassanizadeh]]", "[[Shahriar Ebrahimi]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Digital communication increasingly underpins identity, financial transactions, and regulatory compliance. In many settings, possession of a DKIM-signed email serves as evidence of account control, transaction confirmation, or institutional affiliation. Yet demonstrating such properties typically requires revealing the full email or relying on centralized intermediaries, introducing privacy risks and additional trust assumptions. A framework called ZK Email addresses this limitation by applying zero-knowledge proofs (ZKPs)  to email verification, enabling publicly verifiable proofs of authenticity while preserving message confidentiality. However, its existing implementations struggle to support complex, real-world messages due to the inefficiency of regular-expression verification over structured formats and rich alphabets.
> 
> We address this limitation with a new ZKP system for regex matching based on path verification over -free NFAs, yielding prover complexity linear in the captured path and independent of the original email's size. This approach enables practical validation of expressive standard structures required for full DKIM-signed email verification. To fully integrate our constructions into ZK Email, we design complete end-to-end ZK circuits that combine (i) DKIM signature verification, (ii) an arbitrary-length SHA-256 circuit with partial precomputation for  under RFC 6376, and (iii) a general-purpose regex primitive enforcing structural constraints over email headers and body. We formalize the associated zero-knowledge relations and analyze their security under realistic adversary models. We implement the system (fully integrated with ZK Email and released under the MIT license) in  and , targeting  and  backends, and evaluate it in both client-side and zkVM (SP1) deployment settings.  Experimental results on commodity hardware demonstrate substantial efficiency improvements over prior DFA-based approaches, achieving a - speedup in proving time using the  backend, while supporting a significantly richer class of regex languages.
