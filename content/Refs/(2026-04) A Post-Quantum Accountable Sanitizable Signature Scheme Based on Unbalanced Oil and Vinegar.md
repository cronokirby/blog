---
published: "2026-04-28"
link: "https://eprint.iacr.org/2026/827"
authors: ["[[Zhiwei Wang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Sanitizable signature schemes~(SSS) allow a designated sanitizer to
> modify admissible portions of a signed message while preserving the
> validity of the original signer's authorisation. All existing SSS
> constructions satisfying the Brzuska et~al.\ security framework rely
> on classical number-theoretic assumptions broken by Shor's algorithm.
> We present \textsf{UOV-San}, the first sanitizable signature scheme
> based entirely on multivariate cryptography. The construction employs
> a dual-signature architecture with strict key separation enforced by
> a two-message interactive signing protocol: the signer holds only
> $\sk_S$ and the public chameleon key~$\ck$; the sanitizer holds
> $\sk_\mathit{San}$ and the trapdoor key~$\tk$. We introduce a new
> \textsf{PreColl} (preimage collision) assumption capturing the
> hardness of finding distinct inputs to the public quadratic map that
> collide under $P$ (not only under $H_2 \circ P$). Combined with the
> collision resistance of a random oracle we obtain an implementable
> multivariate chameleon hash requiring no random-oracle programming.
> \textsf{UOV-San} provably achieves \emph{unforgeability},
> \emph{immutability}, and \emph{accountability}---including against a
> malicious signer---under MQ, OVD, PreColl, and sEUF-CMA in the random
> oracle model with classical adversaries. We forgo transparency and
> privacy: these properties are structurally incompatible with the
> dual-signature architecture and key-separation requirement, and are
> operationally unnecessary for our target application domains (supply
> chain audit, government document redaction, blockchain audit trails).
> Experimental evaluation confirms practical signing times under
> 5\,ms and verification times under 2\,ms on commodity hardware.
