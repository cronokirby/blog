---
published: "2026-08-08"
link: "https://eprint.iacr.org/2026/1640"
authors: ["[[Yi-Fu Lai]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> This paper presents several optimizations to Qlapoti (Asiacrypt'25),
> an ideal-finding procedure at the heart of modern isogeny-based
> signature schemes. We apply these optimizations to the Qlapoti-based
> NIST Round-2 SQIsign implementation from Asiacrypt'25. Together,
> they accelerate the Qlapoti procedure by approximately \(1.6\times\) to
> \(5.3\times\), depending on the parameter set and implementation.
> 
> Under the Broadwell benchmark, compared with the baseline implementation in Asiacrypt'25,
> our optimizations achieve key-generation speedups of \(1.29\times\),
> \(2.23\times\), and \(1.54\times\), and signing speedups of
> \(1.23\times\), \(1.79\times\), and \(1.43\times\), at NIST security
> levels~1, 3, and~5, respectively.
> 
> Our techniques also apply to the Qlapoti-optimized PRISM implementation
> (PKC'25, Journal of Cryptology), for which we introduce an additional
> tailored optimizations. 
> Under the Broadwell benchmark, compared with the baseline implementation in JoC using Qlapoti, our improvements translate into key-generation speedups of \(1.22\times\), \(1.87\times\), and \(1.46\times\), and
> signing speedups of \(1.47\times\), \(1.90\times\), and \(1.60\times\),
> at NIST security levels~1, 3, and~5, respectively.
