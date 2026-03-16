---
published: "2026-03-11"
link: "https://eprint.iacr.org/2026/504"
authors: ["[[Adi Akavia]]", "[[Hayim Shaul]]", "[[Ofer Shayevitz]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Compression has been a fundamental problem in computer science for decades. Simply put, we want to represent a low-entropy vector $v$ of size $n$ with less than $n$ elements so that $v$ can be reconstructed (decompressed) from the shorter representation.
> Since compressed vectors require less storage and less communication, compression algorithms are part of almost every digital system.
> 
> When the vector is encrypted with fully homomorphic encryption (FHE) the problem becomes significantly harder. Some research (e.g., [TCHES'19, CCS'21, EuroCrypt'23 ,USENIX'24]) have considered the problem of compressing an encrypted vector but they all assumed the decompression step happens in cleartext. This is a significant restriction. For example, any system with an untrusted agent that needs to receive data and analyze it cannot use existing compression algorithms.
> 
> In this paper, we give the first (to the best of our knowledge) non-trivial compression-decompression algorithms that are both FHE-friendly.
> Our algorithms use the copy-and-recurse technique together with the known duality between compression and error-correcting codes.
> Our experiments show that our decompression algorithm is faster than the folklore decompression algorithm. This is useful in systems with an agent-in-the-middle that is bounded by communication and by computation.
