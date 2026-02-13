---
published: "2026-02-10"
link: "https://eprint.iacr.org/2026/217"
authors: ["[[Aggelos Kiayias]]", "[[Marc Roeschlin]]", "[[Polina Vinogradova]]", "[[Pyrros Chaidos]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Blockchain light clients (LCs) are agents with limited resources that are not able or not willing to maintain a fully validated copy of the ledger. They rely on service providers (SPs), typically full nodes, to access data required for tasks such as constructing transactions or interacting with off-chain applications.
> We introduce Cavefish, a novel protocol for UTxO-based platforms that enables LCs to submit transactions with minimal trust, storage, and computation overheads. Cavefish defines a two-party computation protocol between an LC and an SP, in which the LC specifies a transaction and the SP constructs it. The LC only receives a blinded version of the transaction, preventing modification and reuse, but allowing the LC to verify the transaction against the original intent. The SP is compensated inside the constructed transaction, eliminating the need for a separate protocol or exchange.
> To support this, we propose a variant of the predicate blind signature (PBS) scheme of Fuchsbauer and Wolf (Eurocrypt 2024), letting the SP obtain a valid signature on the unblinded transaction, which can then be posted on chain as the resulting signatures verify as standard Schnorr signatures. When combined with hierarchical deterministic (HD) wallets, the LC can provide a single public key and chain code to the SP, reducing communication footprint to a minimum. To further reduce overheads, our PBS variant relaxes the unlinkability requirements of traditional blind signatures in favor of efficiency as transactions only need to stay private until posted.
> On top of this, we define a multi-SP version of Cavefish that provides strong liveness and optimality guarantees. We benchmark the Non-interactive Argument of Knowledge (NArg) component of Cavefish on two major UTxO-based blockchains. Our results show that proving and verification times, as well as circuit sizes, are practical for real-world deployment.
