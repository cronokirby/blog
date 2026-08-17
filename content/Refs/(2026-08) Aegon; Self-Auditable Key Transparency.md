---
published: "2026-08-13"
link: "https://eprint.iacr.org/2026/1681"
authors: ["[[Hossein Hafezi]]", "[[Alireza Shirzad]]", "[[Benedikt B\u00fcnz]]", "[[Kevin Lewi]]", "[[Dillon George]]", "[[Joseph Bonneau]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Key transparency enables a centralized encrypted messaging provider to publicly commit to the public keys it distributes, allowing clients to detect potentially malicious keys.  Recent deployments by WhatsApp and iMessage demonstrate the promise of this approach, but they rely on third-party global auditors to detect misbehavior by the key server.  No existing system supports auditing efficiently enough to be done by lightweight end users while also providing scalability to billions of users and short epoch latency.
> 
> We present $\mathsf{Aegon}$, a key transparency scheme designed for global-scale encrypted messaging. Building on ideas from $\mathsf{IronDict}$, $\mathsf{Aegon}$ avoids per-epoch work that scales with the full dictionary size: its server computation depends only on the number of updates in the current epoch, eliminating global invariance proofs and enabling epoch latency of under a minute ($500\times$ reduction compared to $\mathsf{IronDict}$). $\mathsf{Aegon}$ further introduces a sharded dictionary design that reduces global parameters to shard-dependent sizes and enables horizontal scaling. To control long-term storage, $\mathsf{Aegon}$ uses proof caching to safely discard historical dictionary snapshots, so storage grows only with retained history. 
> 
> We provide a production-grade Rust implementation of $\mathsf{Aegon}$ and demonstrate practical scalability to a dictionary with $4$ billion entries, comparing it against the public codebase of WhatsApp Key Transparency ($\mathsf{AKD}$). At the throughput of $1{,}250$ updates per second, $\mathsf{Aegon}$ produces constant-size auditor proofs of under $30$ KB, verifiable in under $65$ ms and independent of the number of updates per epoch or of the directory fill. At a fully-populated $2^{32}$-entry directory, this is roughly an $80{,}000\times$ reduction in audit proof size and a $370\times$ reduction in verify time relative to $\mathsf{AKD}$. All other server and client operations remain highly efficient and comparable to $\mathsf{AKD}$, while $\mathsf{Aegon}$ achieves stronger privacy guarantees.
