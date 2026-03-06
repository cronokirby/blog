---
published: "2026-02-16"
link: "https://eprint.iacr.org/2026/275"
authors: ["[[Shahzad Ahmad]]", "[[Stefan Rass]]", "[[Zahra Seyedi]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Traditional deniable encryption primarily focuses on denying the $content$ of secret communications, allowing plausible alternative plaintexts to be presented in the event of coercion. However, even the recognizable use of deniable encryption may already defeat its purpose, making any revealed plaintext suspicious to a coercer. Hence, for practical deniability, not only does the content need to be deniable, but also the entire use of deniable encryption must be considered. We call this $second~order~deniability$. This notion aims to hide the whole use of deniable encryption, where covert communication is indistinguishable from innocuous data, and enhanced content deniability, enabling multiple, cryptographically plausible decryptions that are computationally indistinguishable from the true message. To show its practicality, we present PhantomCrypt, which combines conventional deniable encryption (DE) with steganographic methods to hide the use of DE itself, while retaining the ability to decrypt a ciphertext into several distinct plaintexts, even if not under pressure. We prove the security of PhantomCrypt using a formalization of second-order deniability in standard cryptographic terms.
