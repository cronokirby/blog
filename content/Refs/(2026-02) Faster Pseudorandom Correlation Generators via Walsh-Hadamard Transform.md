---
published: "2026-02-06"
link: "https://eprint.iacr.org/2026/196"
authors: ["[[Zhe Li]]", "[[Hongqing Liu]]", "[[Chaoping Xing]]", "[[Yizhou Yao]]", "[[Chen Yuan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The past few years have witnessed the growing importance of pseudorandom correlation generators (PCGs) for generating correlated randomness with sublinear communication. To date, quasi-linear time PCGs for oblivious linear evaluation (OLE) over arbitrary finite fields have been constructed under either Ring-LPN or Quasi-Abelian syndrome decoding (QA-SD) assumptions, with a throughput of millions of OLEs per second demonstrated, in particular, for binary field. However, many modern MPC protocols deal with large prime fields, in which existing PCGs suffer from a significant efficiency gap due to a quasi-linear number of {\em multiplications} involved in FFT (Fast Fourier Transform) algorithms. Moreover, FFT typically relies on FFT-friendly fields that contain large smooth multiplicative subgroups, and therefore are not well suited to popular fields, such as Mersenne prime fields.
> 
> In this work, we close the gap by leveraging the well-known Walsh-Hadamard transform (WHT) in the context of QA-SD based PCGs. Although WHT is still a quasi-linear time algorithm as normal FFTs, no multiplication is needed — addition and subtraction suffice. Since multiplications over a prime field $\Fp$ typically incur an $O(\log{p})$ overhead over additions, our scheme that avoids a large number of multiplications perfectly fits the large prime field setting. Experimental results show that WHT is at least one magnitude faster than FFT over a $64$-bit smooth prime field. Consequently, our PCG achieves $27,000$ OLE per second over a $64$-bit prime field. This is the first full implementation of PCG for OLE over arbitrary large prime fields that we are aware of.
> 
> We then build PCG for vector-OLE over arbitrary large prime fields from QA-SD assumptions, and fully implement it using the $\mathsf{libOTe}$ library. We achieve a throughput of over $5$ million vector-OLEs per second over a $64$-bit prime field, roughly four times faster than state-of-the-art PCGs from either expand-accumulate (EA) codes (Boyle et al., CRYPTO 2022), or expand-convolute (EC) codes (Raghuraman et al., CRYPTO 2023).
