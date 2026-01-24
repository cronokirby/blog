---
published: "2025-12-28"
link: "https://eprint.iacr.org/2025/2330"
authors: ["[[Ioannis Kaklamanis]]", "[[Wenhao Wang]]", "[[Harjasleen Malvai]]", "[[Fan Zhang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Accurate measurements of user engagement underpin important decisions in various settings, such as determining advertising fees based on viewership of online content, allocating public funding based on a clinic’s reported patient volume, or determining whether a group chat app disseminated a message without censorship. 
> While common, self-reporting is inherently untrustworthy due to misaligned incentives (e.g., to inflate).
> 
> Motivated by this problem, we introduce the notion of Verifiable Aggregate Receipts (VAR).
> A VAR system allows an issuer to issue receipts to users and to verify the number of receipts possessed by a prover, who is given receipts upon serving users. An ideal VAR system should satisfy inflation soundness (the prover cannot overstate the count), privacy (the verifier learns only the count), and be performant for large-scale applications involving millions of users.
> 
> We formalize VAR using an ideal functionality and present two novel constructions.
> Our first protocol, S-VAR, leverages bottom-up secret-sharing to enable tiered ``fuzzy'' audits, and achieves constant-size receipts regardless of the number of supported thresholds. Our second protocol, P-VAR, uses bilinear pairings to aggregate receipts into a proof verifiable in constant time, enables exact auditing, and can be extended to handle a dynamic user set. We prove both constructions secure with respect to our ideal functionality. 
> 
> We implement and benchmark our VAR constructions. For a million users, issuance takes less than $2$ seconds for either scheme, and for audit proving time, P-VAR requires less than $10$ seconds and S-VAR requires less than $35$ seconds. 
> Compared to our schemes, baseline and existing solutions are either at least an order of magnitude slower in proving and verification time, or they do not scale to one million users. 
> Our benchmarks demonstrate that our VAR protocols can be used to enable verifiable and privacy-preserving user engagement auditing at scale. Finally, we showcase how VAR can be integrated with the aforementioned applications.
