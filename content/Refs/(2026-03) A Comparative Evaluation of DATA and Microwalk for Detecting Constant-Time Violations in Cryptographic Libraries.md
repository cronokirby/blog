---
published: "2026-03-27"
link: "https://eprint.iacr.org/2026/611"
authors: ["[[Dominik Schneider]]", "[[Paul Fuchs]]", "[[Kerstin Lemke-Rust]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> DATA [22] and Microwalk [23] are two advanced dynamic binary instrumentation (DBI) tools  for detecting constant-time (CT) violations in software implementations.
> This paper presents a comparative evaluation of these tools' findings using a common test setup and several cryptographic implementations that are included in the libraries LibTomCrypt, OpenSSL, and liboqs.
> Our experiments yield reliable results for symmetric ciphers. For asymmetric cryptographic schemes, however, internal random numbers cause a high number of reported findings that also differ among the tools.
> In order to make the tools' results more comparable our test setup is adapted to externally inject random numbers that are otherwise generated internally by the cryptographic libraries. 
> We discuss the differences of the tools' design and their impact on practical results of cryptographic implementations as well as their resource consumption in terms of memory and runtime.
