---
published: "2026-03-20"
link: "https://eprint.iacr.org/2026/555"
authors: ["[[Nesrine Kaaniche]]", "[[Seyni Kane]]", "[[Maryline Laurent]]", "[[Jacques Traor\u00e9]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Attribute-based anonymous credential systems often fail to hide the issuer’s identity. Recent attempts to address this issue either suffer from efficiency problems or contain critical policy vulnerabilities (where a policy is defined as the set of issuers that relying parties are willing to accept). More precisely, we present several attacks that exploit these vulnerabilities. These attacks allow a malicious user to collaborate with a single authorized issuer and forge credentials for arbitrary attributes. This enables the malicious user to usurp the powers of any trusted issuer.  
> To address these security and architectural gaps, we propose a novel BBS-based issuer-hiding credential system that adopts a signed-policy approach.
> Our construction resolves several open challenges: (1) it is proven secure in the Algebraic Group Model (AGM) rather than the Generic Group Model (GGM), (2) it eliminates the requirement for \textit{secret policy} keys, allowing verification to be performed without secret values; and (3) it enables policy generation to be delegated to a trusted certification authority rather than requiring each relying party to maintain individual policy keys.
> Furthermore, we introduce the first pairing-free variant of an issuer-hiding anonymous credential based on algebraic MACs.
> The implementation results and formal security proofs confirm that our scheme achieves unforgeability and everlasting issuer-hiding anonymity and establishes our protocol as a practical, secure solution for privacy-preserving credential systems that is suitable for real-world deployment.
