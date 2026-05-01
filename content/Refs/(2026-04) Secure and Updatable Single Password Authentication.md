---
published: "2026-04-21"
link: "https://eprint.iacr.org/2026/784"
authors: ["[[Devri\u015f \u0130\u015eLER]]", "[[HamidReza Saadi Dadmarzi]]", "[[Alptekin K\u00fcp\u00e7\u00fc]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Passwords remain the dominant authentication method despite weaknesses such as offline dictionary attacks and password reuse. Single Password Authentication (SPA) mitigates these risks by protecting high entropy secrets under one memorable password and distributing them across untrusted storage providers. However, existing SPA schemes cannot prevent preemption and overwrite attacks by storage providers, and they lack secure, efficient support for secret and password updates.
> 
> We present UpSPA, an efficient, secure, and updatable threshold SPA that addresses both limitations without requiring changes on the login server. UpSPA prevents preemption through a storage provider specific high entropy identifier secret, supports secret updates via implicit authentication, and enables password updates via explicit authentication using a password protected signing key. We prove security in the ideal real paradigm, including resistance to offline dictionary attacks under standard static threshold corruption assumptions. Our evaluation shows low overhead and competitive performance compared to a prior SPA scheme that does not support updates.
