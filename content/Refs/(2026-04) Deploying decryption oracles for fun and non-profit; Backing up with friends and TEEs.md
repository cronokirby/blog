---
published: "2026-04-23"
link: "https://eprint.iacr.org/2026/800"
authors: ["[[Kanav Gupta]]", "[[Gabriel Kaptchuk]]", "[[Ian Miers]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Secure backups are the Achilles' Heel of the E2EE ecosystem if they do not provide the same strong security properties as the E2EE messaging systems they support. They constitute a set of servers that, if compromised, would expose nearly all user messages.  Unfortunately, state-of-the-art and deployed secure backup systems fail to consider forward secrecy and post-compromise security of these servers as first-order design constraints.  Additionally, some proposals, in limited deployment, implicitly rely on the PKIs of trusted execution environments in order to provide security, creating a small number of keys whose compromise would be catastrophic.
> 
> We develop an elegant, efficient, and simple secure backup system that naturally addresses these issues by regularly rotating backup servers, each of which samples independent key material.  To make this approach scalable, we design a silent backup procedure, reducing server load compared to state-of-the-art designs while providing improved security.  
> Our design can be trivially extended to incorporate \emph{social key recovery}, enabling more flexible deployment configurations.  We carefully prove the security of our construction and benchmark it to  show that it is deployment-ready. Our approach works on commodity hardware making it deployable without the resources needed for  WhatsApp or Apple's Encrypted Backups.
