---
published: "2026-06-21"
link: "https://eprint.iacr.org/2026/1298"
authors: ["[[Quang Dao]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> HAWK is a signature scheme based on the module lattice isomorphism problem, and the only lattice-based candidate in the third round of NIST's call for additional post-quantum signatures. Its specification claims that HAWK achieves the BUFF (Beyond UnForgeability Features) security properties "as is", without applying the generic BUFF transform, citing the analysis of Aulbach, Düzlü, Meyer, Struck, and Weishäupl (PQCrypto'24).
> 
> We refute this claim for HAWK exactly as specified. Several of the BUFF games let the adversary register a public key of its own choosing, yet the HAWK reference verifier performs almost no validity check on a key beyond decoding it. We exhibit degenerate "weak" public keys under which the all-zero signature verifies for all random-oracle challenges except the negligible symmetry-breaking corner case, and use them to break the three BUFF properties whose games let the adversary supply both the verification key and the signature: message-bound signatures, malicious strong universal exclusive ownership, and weak non-resignability.
> 
> We trace these breaks to gaps in the BUFF proofs for HAWK of Aulbach et al.: one missing case analysis, and three steps that silently assume properties of the adversarially chosen keys as if they come from honest key generation. Honest key generation already enforces bounds that would reject our weak-key family on the attacks we exhibit. We prove that enforcing this norm floor at verification yields message-bound security for constant keys, but we make no claim that it fully restores BUFF security.
