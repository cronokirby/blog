---
published: "2026-03-24"
link: "https://eprint.iacr.org/2026/584"
authors: ["[[Martin Bach]]", "[[Vuka\u0161in Karad\u017ei\u0107]]", "[[Lukas Knittel]]", "[[Robert Merget]]", "[[Jean Paul Degabriele]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> DTLS-SRTP was designed to secure real-time media communication and is found in prominent audio and video call platforms, including Zoom, Teams, and Google Meet. Notably, it is part of Web Real-Time Communication (Web-RTC), a web standard enabling real-time communication in the browser. To this end, WebRTC uses multiple technologies, including HTTP, TLS, SDP, ICE, STUN, TURN, UDP, TCP, DTLS, (S)RTP, (S)RTCP, and SCTP. This amalgamation of technologies results in an overly complex system that is very challenging to audit systematically and automatically. As a result, the security of deployments of this core modern communication technology remains largely unexplored.
> 
> In this work, we aim to close this gap by developing an automated MitM testing framework (DTLS-MitM-Scanner (DMS)) to test the DTLS channel of a DTLS-SRTP connection. We use our framework to study the current state of the ecosystem in a case study spanning 24 service providers across their browser and mobile applications. Our analysis puts special emphasis on the authentication mechanism in DTLS-SRTP, where we test for 19 potential vulnerabilities that could lead to authentication bypasses for both the client and server. We find that among the 33 tested media server implementations, 19 contained vulnerabilities allowing an attacker to break authentication at the DTLS layer. For 9 of the affected systems, which serve hundreds of millions of users, we could also demonstrate that they could be exploited by an attacker to retrieve media data, assuming only Man-in-the-Middle capabilities. We highlight the impact of these vulnerabilities by building a Proof-of-Concept exploit to listen to Webex video conference calls.
