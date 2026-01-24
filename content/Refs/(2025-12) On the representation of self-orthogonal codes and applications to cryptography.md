---
published: "2025-12-18"
link: "https://eprint.iacr.org/2025/2279"
authors: ["[[Marco Baldi]]", "[[Rahmi El Mechri]]", "[[Paolo Santini]]", "[[Riccardo Schiavoni]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The hull of a linear code is the intersection between the code and its dual. 
> When the hull is equal to the code (i.e., the code is contained in the dual), the code is called self-orthogonal (or weakly self-dual); if, moreover, the code is equal to its dual, then we speak of a self-dual code.
> For problems such as the Permutation Equivalence Problem (PEP) and (special instances of) the Lattice Isomorphism Problem (LIP) over $q$-ary lattices, codes with a sufficiently large hull provide hard-to-solve instances.
> In this paper we describe a technique to compress the representation of a self-orthogonal code.
> Namely, we propose an efficient compression (and decompression) technique that allows representing the generator matrix of a self-orthogonal code with slightly more than $k(n-k)-\binom{k+1}{2}$ finite field elements.
> The rationale consists in exploiting the relationships deriving from self-orthogonality to reconstruct part of the generator matrix entries from the others, thus reducing the amount of entries one needs to uniquely represent the code.
> For instance, for self-dual codes, this almost halves the amount of finite field elements required to represent the code.
> We first present a basic version of our algorithm and show that it runs in polynomial time and, moreover, its communication cost asymptotically approaches the lower bound set by Shannon's source coding theorem.
> Then, we provide an improved version which reduces both the size of the representation and the time complexity, essentially making the representation technique as costly as Gaussian elimination.
> As concrete applications, we show that our technique can be used to reduce the public key size in cryptosystems based on PEP such as LESS and SPECK (achieving approximately a 50% reduction in the public key size), as well as in the Updatable Public Key Encryption Scheme recently proposed by Albrecht, Benčina and Lai, which is based on LIP.
