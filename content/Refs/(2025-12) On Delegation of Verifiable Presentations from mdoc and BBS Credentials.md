---
published: "2025-12-22"
link: "https://eprint.iacr.org/2025/2306"
authors: ["[[Andrea Flamini]]", "[[Andrea Gangemi]]", "[[Enrico Guglielmino]]", "[[Vincenzo Orabona]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The interest in verifiable credential systems has gained traction as eIDAS 2.0 Regulation has been published. This regulation instructs EU member states to provide their citizens with digital identity wallets (EUDI Wallet) that must store the credentials and enable privacy-preserving presentation of identity information to relying parties. This new digital identity system requires defining new protocols and procedures to perform tasks involving the disclosure of identity information. One of such procedures is the delegation of attestation, as is reported in the EUDI Wallet Reference Implementation Roadmap.
> 
> In this work, we address the problem of constructing secure processes for the delegation of verifiable presentations derived from both verifiable and anonymous credentials. Our goal is to enable a credential holder (the delegator) to securely delegate another party (the delegatee) to present a credential on their behalf.
> We introduce the notion of a verifiable presentation delegation scheme, formalizing the core algorithms, namely delegation issuance, delegated presentation, and presentation verification, and defining the relevant security properties that such a scheme should satisfy: the correctness, the unforgeability, and, when the scheme is built on top of anonymous credentials, even the unlinkability. We present two concrete instantiations of delegation schemes: the first is built on top of mdoc verifiable credentials, the credential format currently supported by the EUDI Wallet Architecture and Reference Framework (EUDI ARF), while the second is built on top of BBS anonymous credentials. Finally, we discuss and analyze the security of our constructions in terms of the security properties we have introduced.
