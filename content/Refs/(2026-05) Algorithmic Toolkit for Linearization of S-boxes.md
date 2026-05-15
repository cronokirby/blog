---
published: "2026-05-09"
link: "https://eprint.iacr.org/2026/913"
authors: ["[[Alex Biryukov]]", "[[Philip Ture\u010dek]]", "[[Aleksei Udovenko]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Linearization is a cryptanalysis technique in which a nonlinear function (an S-box) is represented by an affine mapping on a certain subset of inputs. Its variants were applied to analyze Keccak, LowMC, RAIN and AIM. In these primitives, the S-boxes are either very small (up to 5 bits) or are very specific monomial functions over a binary field. Linearization of arbitrary S-boxes was never practically explored due to the lack of theoretic, algorithmic, and cryptanalytic understanding.
>  
> For the first time, we develop an algorithmic toolkit which allows one to compute strong linearizations of S-boxes, when they exist. For up to $n=8$ bits, our algorithms are able to find provably the best possible approximations, while for larger S-boxes it is feasible to obtain good approximations together with meaningful upper bounds. We apply our algorithms to a variety of S-boxes from existing primitives, to monomial functions, to so-called APN functions, and to 16-bit Super-Sboxes. We obtain interesting results raising many new open questions and open up new research directions, as well as a foundation for developing cryptanalytic attacks.
> 
> To advance the cryptanalytic utility of linearization, we study and solve the problem of covering an S-box with multiple approximations. As an application, we derive a generic linearization approach for the CICO problem (constrained-input-constrained-output) over SPN-based permutations (Substitution-Permutation Networks) with general linear layers. This is the first such general cryptanalysis based on the existence of a strong linearization of the S-box.
