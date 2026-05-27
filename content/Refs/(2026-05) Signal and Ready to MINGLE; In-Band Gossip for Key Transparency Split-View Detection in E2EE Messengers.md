---
published: "2026-05-20"
link: "https://eprint.iacr.org/2026/1010"
authors: ["[[Edona Fasllija]]", "[[Lena Heimberger]]", "[[Kevin Paul]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> End-to-end encrypted (E2EE) messengers such as Signal, WhatsApp and iMessage increasingly deploy Key Transparency (KT) to make malicious key substitution detectable. Yet KT only delivers its intended protection if users are anchored to the same global append-only KT history. A malicious operator can break this condition by equivocating, presenting incompatible views of the KT directory to different clients. Current deployments delegate detection to a small set of third-party auditors, creating a centralized trust bottleneck that can be pressured, compromised, or fail to audit continuously.
> 
> We ask whether clients can detect equivocation themselves, without dedicated infrastructure, simply by comparing KT state as they communicate. We introduce MINGLE, an opportunistic in-band gossip protocol for end-to-end encrypted messengers. MINGLE piggybacks compact KT commitments on a subset of ordinary messages before encryption, keeping gossip indistinguishable from regular application data while requiring no external services or overlay network. Rather than asking users to manually verify safety numbers or relying on a small set of auditors, MINGLE distributes the consistency check across the entire communication graph: an adversary wishing to sustain a split view must permanently isolate targeted clients from the rest of the network, preventing any cross-partition message from ever being delivered, a requirement that grows increasingly difficult to maintain covertly as the social graph densifies. 
> MINGLE inherits the Trust-on-First-Use (TOFU) assumption standard in E2EE messengers: equivocation that begins at registration evades immediate detection, though the append-only log ensures it remains retroactively exposable once any cross-partition gossip event occurs. Using a temporal communication model, we show that under eventual cross-partition connectivity, conflicting KT views yield publicly verifiable evidence.
> 
> We prototype MINGLE in the Signal Android client using Signal's KT Server implementation, incurring a payload overhead of 119 bytes per gossip-carrying message without UI changes.
> Simulations under realistic messaging patterns show that MINGLE achieves high reliability and fast evidence generation without aggressive gossip flooding. 
> MINGLE yields evidence of a targeted split view in a \(12000\)-client deployment within about \(5\) minutes when only \(20\%\) of clients participate and gossip is attached to roughly \(5\%\) of messages, suggesting that ordinary client communication can serve as a practical audit layer for KT.
