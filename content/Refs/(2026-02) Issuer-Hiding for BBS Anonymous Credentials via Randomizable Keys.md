---
published: "2026-02-23"
link: "https://eprint.iacr.org/2026/369"
authors: ["[[Andrea Flamini]]", "[[Karla Friedrichs]]", "[[Anja Lehmann]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Anonymous credentials (AC) equip users with credentials on attested attributes, which enable them to prove verifiable yet data-minimizing statements over their attributes. However, in standard ACs, each credential presentation reveals the credential issuer, which could be more information than intended and necessary, e.g., when merely proving age or personhood. Issuer-Hiding Anonymous Credentials (IHAC) address this limitation and hide the issuer in the presentation. That is, they only reveal that the user has a credential from an issuer within a certain trust set, referred to as the policy. Recent works by Sanders and
> Traoré, and Katz and Sefranek show how to add issuer-hiding to PS- and BBS-based credentials while keeping presentations compact, i.e., not scaling in the number of issuers. However, both constructions require the verifier to generate dedicated policy key pairs, turning verification into a secret key operation. Managing these verifier-specific keys introduces additional complexity and affects the resulting practical privacy and security guarantees. In this work, we propose two IHAC schemes from BBS signatures that achieve compact presentations without the need of such verifier-specific keys. At the core of our schemes is a technique to randomize BBS public keys and adapt the signatures accordingly, which we believe to be of independent interest.
