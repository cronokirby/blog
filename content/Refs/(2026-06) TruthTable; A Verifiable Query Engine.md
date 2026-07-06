---
published: "2026-06-15"
link: "https://eprint.iacr.org/2026/1260"
authors: ["[[Bharath Namboothiry]]", "[[Alireza Shirzad]]", "[[Spencer Solit]]", "[[Ryan Marcus]]", "[[Pratyush Mishra]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We present TruthTable, a verifiable database engine that allows a prover to produce a succinct proof that convinces a verifier of the correct execution of the verifier's SQL query over the prover's committed database.
> 
> TruthTable supports a large subset of SQL, enabling it to prove 17 out of 22 queries in the standard TPC-H benchmark. To our knowledge, this is the widest support out of all prior work. Moreover, TruthTable's proofs are small, and fast to generate and verify: on the TPC-H benchmark with a database of a million rows, TruthTable's average proving time is  seconds, average verification time is  ms, and average proof size is  kB. Compared to prior work, TruthTable's proving times are between - better, while the verification times and proof sizes are competitive.
> 
> TruthTable achieves these properties via a codesign of cryptography and database techniques. On the cryptographic front, we propose a new polynomial representation of database tables, and design new subprotocols for proving the correct execution of various relational operators on these representations. On the database front, we propose a query planner that optimizes queries for minimal proving time, as opposed to minimal execution time. We also design new optimizations for this planner that reduce proving time by up to .
