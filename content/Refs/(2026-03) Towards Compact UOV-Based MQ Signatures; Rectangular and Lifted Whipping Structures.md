---
published: "2026-03-13"
link: "https://eprint.iacr.org/2026/516"
authors: ["[[Quang-Duc Nguyen]]", "[[Minh Hieu Nguyen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Multivariate quadratic (MQ) signatures offer fast signing and verification with small signatures, but their practicality is often limited by large public keys. Recent schemes, such as MAYO, address this limitation by employing the "whipping" technique. This method utilizes emulsifier matrices to expand a mini-UOV map into a larger one while ensuring that signing reduces to solving a linear system a linear system that is full-rank with high probability. In this work, we propose two general improvements to whipping structures that can be broadly applied to UOV-based whipped signatures. First, we introduce rectangular emulsifier matrices. This approach allows the underlying UOV instance to utilize fewer equations, yielding significantly smaller public keys and potentially faster operations, while strictly preserving the necessary full-rank behavior for the core linear combinations of the emulsifiers. Second, we propose lifting the emulsifier matrices to an extension field while maintaining the base UOV map over the ground field. By leveraging the whipping technique to keep the variable-to-equation ratio close to one, this structural modification effectively avoids known lifted system attacks. By combining both techniques, we design a new variant MAYO$^−_L$ and provide a detailed security analysis against known forgery and key-recovery attacks, and propose parameter sets that improve public key and signature sizes at comparable security levels. Finally, we discuss the applicability of these improvements to SNOVA, noting that due to SNOVA’s specific design constraints, the lifting technique integrates much more seamlessly than the rectangular matrix modification.
