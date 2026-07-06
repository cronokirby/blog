---
published: "2026-06-11"
link: "https://eprint.iacr.org/2026/1242"
authors: ["[[Billy Bob Brumley]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Constant time programming patterns is the primary defense
> against timing attacks on cryptographic implementations,
> yet what "constant time" means varies across academia and industry.
> This work systematizes constant time models and their evolution,
> identifies a recurring gap between what models protect and what specifications assume,
> and distills an offensive methodology for discovering timing vulnerabilities
> that originate outside the cryptographic primitive boundary.
> Applying this methodology,
> we locate a specification-level vulnerability related to private key loading,
> and confirm the leak in both OpenSSL and BoringSSL.
> Counterintuitively,
> BoringSSL's per-observation signal is several orders of magnitude stronger than OpenSSL's,
> despite an explicitly stricter threat model.
