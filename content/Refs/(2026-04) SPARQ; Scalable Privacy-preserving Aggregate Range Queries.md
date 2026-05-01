---
published: "2026-04-15"
link: "https://eprint.iacr.org/2026/744"
authors: ["[[Mahdieh Heidaripour]]", "[[Maryam Rezapour]]", "[[Benjamin Fuller]]", "[[Hoda Maleki]]", "[[Gagan Agrawal]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Searchable encryption enables efficient querying over outsourced data while limiting server-side leakage. Existing methods for associative aggregation queries on multidimensional array data suffer from significant limitations:
> 
>    * Use range structures that precompute ranges yielding either:
> 
>        ** Storage size proportional to the total domain size (Demertzis et al., TODS 2018/Falzon et al., PVLDB2022). 
>         ** Or linear-time search in the worst case (Chang et al., IEEE TKDE 2021).
> 
>     * Bucket-based methods (Espiritu, Markatou, Tamassia, PoPETS 2022) are only practical when the largest bucket is small.
>    Fully homomorphic encryption (FHE) approaches (Kushnir, Moskowich, Shaul, PoPETS 2024) remain computationally impractical.
> 
> 
> Due to strong attacks on range schemes with access pattern leakage (Falzon et al., CCS 2020), we consider the task of  oblivious search.
> We propose oblivious segment trees, which offer efficient storage and search. Our approach achieves polylogarithmic query complexity. Storage depends on the number of distinct values per dimension, not on the domain size. Under typical data distributions, segment trees are provably shorter than standard alternatives. 
> 
> We evaluate performance on datasets with 1–3 dimensions and up to $5$ million entries. Across multidimensional datasets, our method reduces the number of stored items by $10$ to $10^{10}$ compared to prior non-FHE approaches. On a 32-thread machine, server-side query processing remains under $1.2$ seconds.
