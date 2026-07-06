---
published: "2026-06-12"
link: "https://eprint.iacr.org/2026/1247"
authors: ["[[Kota Urushigaki]]", "[[Hayato Kimura]]", "[[Atsushi Tanaka]]", "[[Takanori Isobe]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Session is a widely deployed decentralized messenger application that emphasizes user anonymity and privacy through end-to-end encryption. Session currently employs its own uniquely designed messaging protocol, Session Protocol V1, having migrated from the extensively studied Signal Protocol. In this paper, we conduct a comprehensive, implementation-driven security analysis of the Session Protocol V1, focusing on its 1-to-1 and closed-group communication mechanisms. Our analysis reveals two fundamental design vulnerabilities: the absence of mutual public key authentication and the lack of cryptographic bindings to monotonic sequence counters. Exploiting these weaknesses within the context of actual application environments, we demonstrate three practical attacks: an impersonation attack, a message timestamp forgery attack, and message dropping and replay attacks. These attacks allow malicious server nodes or unprivileged malicious insiders to substitute public keys, silently suppress or duplicate messages, and manipulate the perceived chronological order of conversations. The findings highlight that these exploits severely undermine the fundamental security guarantees of the messenger. Finally, we propose immediate, actionable mitigation strategies to address the identified flaws and secure the protocol against these threats.
