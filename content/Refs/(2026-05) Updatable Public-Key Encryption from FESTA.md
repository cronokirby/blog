---
published: "2026-05-20"
link: "https://eprint.iacr.org/2026/1014"
authors: ["[[Andrea Basso]]", "[[Tako Boris Fouotsa]]", "[[Fatna Kouider]]", "[[P\u00e9ter Kutas]]", "[[Luciano Maino]]", "[[Laurane Marco]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Updatable public-key encryption (UPKE) is a cryptographic primitive that was proposed for secure messaging to provide forward secrecy in public-key settings.
> It extends standard public-key encryption with a key-update mechanism that lets anyone update a receiver’s public key and issue a corresponding token for updating the secret key. Unlike traditional forward secrecy where all past messages should remain secure after a key leakage, UPKEs guarantee security only as long as at least one honest update has occurred.  
> While classically-secure efficient instantiations of UPKE are known from Diffie-Hellman assumptions, constructing an efficient post-quantum secure UPKE scheme with unbounded updates remains an open problem. 
> In this work, we propose an isogeny-based UPKE that relies on a dimension-four version of the FESTA public-key encryption scheme.
> It is practically efficient and supports an unbounded amount of updates. Moreover, we provide a formal security proof based on a problem in isogeny-based cryptography that has received considerable scrutiny.
