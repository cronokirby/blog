---
published: "2026-02-12"
link: "https://eprint.iacr.org/2026/236"
authors: ["[[Gennaro Avitabile]]", "[[Vincenzo Botta]]", "[[Daniele Friolo]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Anamorphic Encryption (Persiano, Phan and Yung, Eurocrypt '22) allows private communication in a challenging setting where encryption is severely controlled by a central authority (henceforth the dictator) who can demand the users to surrender their secret keys. Anamorphic Signatures (AS) (Kutylowski, Persiano, Phan, Yung, Zawada, Crypto '23) face the even more restrictive world where only authentication is allowed but users still want to send secret messages despite the repressive control of the dictator holding their signing key. Several constructions have been proposed so far, but they all come with some limitations.
> 
> We propose a new flexible setting where digital signatures are used to covertly embed secret shares which $t$ out of $N$ designated receivers can combine to recover a covert secret. We formalize this new primitive called Anamorphic Secret Sharing Signatures (ASSS) together with new robustness, forward secrecy, and private unforgeability notions and we give a construction for Schnorr-like signatures overcoming the limitations of previous constructions. ASSS additionally imply (regular single-receiver) AS, but two signatures (instead of one) are needed to recover the covert message.
