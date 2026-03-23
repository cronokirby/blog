---
published: "2026-03-17"
link: "https://eprint.iacr.org/2026/540"
authors: ["[[Ryan Little]]", "[[Daniel S. Roche]]", "[[Mayank Varia]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> When using Transport Layer Security (TLS), web users can connect to a server and trust that they are sending and receiving data with the intended web server. This guarantee, however, is not transferable: there is no immediate way for a client to convince an external party that a transcript or message originated from a particular server. Beginning with the DECO protocol of Zhang et al., there has been a line of work on "TLS oracles"—cryptographic protocols that allow a client to commit to, prove provenance, and disclose arbitrary properties of TLS application data to a verifier party. TLS oracles only require the server to run standard TLS, making them compatible with existing real-world web servers.
> 
> In this work we introduce Ticket to Hide, a new TLS oracle protocol for TLS 1.3. We operate in the multi-server setting, previously explored in the DiStefano protocol by Celi et al., in which the client additionally wishes to hide the identity of the server they are communicating with among a set of $N$ publicly known servers. We leverage new features of TLS 1.3 in surprising ways to yield performance and security benefits, resulting in a protocol that is both faster and more private than previous work. Additionally, we are the first TLS oracle protocol to be compatible with post-quantum secure TLS key agreement and certificates. Our implementation, which builds on top of the Garble-then-Prove framework of Xie et al., scales to $N=100$ servers in less than 3 seconds of end-to-end time in a WAN setting—only 3.5$\times$ the latency of a regular TLS 1.3 interaction.
