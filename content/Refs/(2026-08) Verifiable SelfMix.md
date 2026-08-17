---
published: "2026-08-05"
link: "https://eprint.iacr.org/2026/1617"
authors: ["[[Doron Zarchy]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Anonymous communication systems aim to hide which user sent which message.
> Existing designs span efficient mixnets that rely on at least one honest mix
> server and decentralized protocols such as Dining Cryptographers networks
> (DC-nets) or secure multi-party computation (MPC)-based shuffles, which
> typically require greater communication or interaction. We introduce
> \emph{verifiable self-mix} (VSM), an anonymity architecture for privately
> placing messages in a public bulletin-board table. VSM separates oblivious slot
> allocation from anonymous message placement: \emph{Unique Number Selection}
> (UNS) assigns each user a distinct hidden location, and \emph{Secure Mapping of
> Private Permutation} (SMPP) places each encrypted message at its assigned
> location without revealing the user-to-location mapping. Because each user
> learns their own final location, VSM provides unconditional individual
> verifiability after the table is decrypted. We define VSM and prove anonymity,
> integrity, and self-verifiability in a static malicious model. We instantiate
> UNS using either trusted hardware or multi-server plaintext-equivalence tests,
> and SMPP using ElGamal, Boneh--Goh--Nissim (BGN), and a theoretical fully
> homomorphic encryption (FHE) construction. For $n$ users and $m$ slots, the vector based SMPP constructions require
> $O(m)$ ciphertext upload per user and $O(nm)$ public aggregation.
> We also present an FHE based variant that reduces the client upload to
> $\tilde O(\log m)$ for fixed size messages.
> These constructions offer different tradeoffs between trust, communication,
> and computation, while preserving the modular structure of VSM and its
> unconditional individual verifiability.
