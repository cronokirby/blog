---
published: "2026-08-11"
link: "https://eprint.iacr.org/2026/1656"
authors: ["[[Srinath Setty]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Spartan is a SNARK for R1CS that can be instantiated with any multi-
> linear polynomial commitment scheme. We instantiate Spartan over a binary field, using Ligerito as the commitment scheme along with the ring-switching technique of Diamond and Posen; we refer to the instantiation as BinarySpartan. It is transparent, so it requires no trusted setup, and it provides polylogarithmic-sized proofs. Its security rests on a hash function, so it is plausibly post-quantum. We apply only well-known optimizations to Spartan and sum-check: the SIMD R1CS of Phalanx; the next multilinear extension of SuperSpartan; sum-check optimizations from Gruen, from Dao and Thaler, and from Bagad, Dao, Domb, and Thaler; and the byte lookup tables used by Binius64 for evaluating bit-valued linear maps.
> 
> Thus, BinarySpartan is not a new proof system but rather a natural instantiation of Spartan over binary fields; we implement and evaluate it end to end. On a MacBook Pro M4 Max (using only its 12 performance cores, and without GPU/Metal acceleration), BinarySpartan proves BLAKE3 at 410,000 hashes/second and SHA-256 at 219,000 hashes/second, including witness generation. These clear the 200,000 hashes/second rate proposed as sufficient for a post-quantum Ethereum transition, as well as the roughly 30,000–180,000 hashes/second a possible post-quantum Bitcoin transition would require. We also evaluate BinarySpartan on the Ethereum Foundation’s client-side proving benchmark, where it proves a single SHA-256 of a 2 KiB message in 6.2 ms, making it the fastest scheme in the benchmark suite.
