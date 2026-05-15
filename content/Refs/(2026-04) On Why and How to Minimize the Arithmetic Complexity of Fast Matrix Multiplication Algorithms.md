---
published: "2026-04-30"
link: "https://eprint.iacr.org/2026/849"
authors: ["[[Erik M\u00e5rtensson]]", "[[Paul Stankovski Wagner]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Naively multiplying two $2 \times 2$ matri-
> ces requires eight multiplications and four additions.
> Strassen showed how to perform the same computation
> using seven multiplications and 18 additions. By chang-
> ing basis, Karstadt and Schwartz lowered the number of
> additions to 12, which they showed to be optimal within
> this generalized Karstadt-Schwartz (KS) framework.
> 
> We present improved methods for optimizing the
> number of additions in Strassen-type matrix multipli-
> cation schemes for larger matrix sizes, and without any
> change of basis. Considering fast matrix generation
> process holistically as consisting of scheme generation
> and addition reduction, we discuss how to optimize both
> parts of this pipeline. We indicate that minimizing ad-
> ditions during the generation process is advantageous.
> 
> We implement of our methods and use them to
> optimize the number of additions for schemes with
> dimensions up to $(n, m, k) = (5, 7, 10)$. Our methods
> can handle larger dimensions than (what has been
> published within) the KS framework.
> 
> We compare our results against solutions within the
> KS framework on several large sets of schemes. We show
> that our method performs better relative to the KS
> framework, the larger the matrix dimensions are. We
> also apply our algorithms to a large number of schemes
> where we do not have apples-to-apples results in the KS
> framework as a comparison.
> 
> We optimize the arithmetic complexity for two sets
> of thousands of schemes with the same rank. The
> number of additions needed after optimization roughly
> follows a normal distribution. Thus, we need to generate
> many solutions to minimize arithmetic complexity.
> 
> Finally, our results on a large set of schemes and
> our extensive list of future research directions make for a valuable benchmark and facilitate future study of the
> arithmetic complexity of fast matrix multiplication.
