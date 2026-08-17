---
published: "2026-08-07"
link: "https://eprint.iacr.org/2026/1634"
authors: ["[[Sven Bauer]]", "[[Fabrizio De Santis]]", "[[Florian Wilde]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> MAYO is a signature scheme based on the Unbalanced Oil and Vinegar
> (UOV) construction and a third round candidate in the NIST standardization process
> for additional post-quantum signature schemes. We present a memory-optimized pure-
> C implementation of MAYO signature verification that reduces RAM consumption
> by 97–99% compared to the reference implementation provided by the PQM4 project
> [KPR+] at the cost of increasing runtime by 50–200% and while maintaining code
> size. This reduction finally enables verifying MAYO signatures on smart cards and
> small microcontrollers with only a few kilobytes of RAM. We achieve it through three
> coupled design choices: a) we expand the public key vector-by-vector on the fly rather
> than all at once at the start; b) we reorder the calculation of the matrix product SPS
> so that each vector of P is used exactly once, which avoids repeated expansions; and
> c) we add precomputed multiples of each P-vector directly onto the result instead of
> accumulating P-vectors before multiplication. We provide results using the PQM4
> framework for all parameter sets listed in the specification and supported by PQM4 on
> our platform, including three main parameter sets MAYO{1,2,3}. This enables direct
> comparison with other post-quantum digital signature schemes. Further parameter
> sets not supported by PQM4, including the fourth main parameter set MAYO5, are
> measured on our own framework, which supports key and signature generation on
> the host. Our results for non-standard MAYO parameter sets offer insights into
> the performance and scalability of the proposed approach that may inform ongoing
> standardization efforts.
