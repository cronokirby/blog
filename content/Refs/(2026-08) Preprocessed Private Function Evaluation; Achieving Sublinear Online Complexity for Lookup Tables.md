---
published: "2026-08-07"
link: "https://eprint.iacr.org/2026/1631"
authors: ["[[Tanping Zhou]]", "[[Xiaoyi Wang]]", "[[Yi Qu]]", "[[Wenchao Liu]]", "[[Long Chen]]", "[[Zhenfeng Zhang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Private Function Evaluation (PFE) facilitates the secure computation of private functions on private inputs in an oblivious manner, ensuring that both the function and the inputs remain confidential throughout the entire computational process. PFE has garnered significant attention due to its critical applications in various domains, such as privacy-preserving healthcare systems and privacy-preserving credit checks, where safeguarding the confidentiality of the function itself is of paramount importance.
> 
> However, despite its broad applicability, existing PFE schemes often exhibit inefficiencies, even in relatively straightforward scenarios such as the evaluation of lookup tables. To mitigate these limitations, we propose a novel variant of PFE, termed Preprocessed Private Function Evaluation (PPFE), which leverages preprocessing techniques to significantly enhance the efficiency of online computations. Within this framework, we introduce a specialized construction tailored specifically for lookup table operations, achieving sublinear complexity during the online computation phase.
> 
> The efficacy of the proposed approach is demonstrated through experimental evaluations. For a lookup table of size $2^{24}$, the online computation time required to process a single query is about 3 milliseconds, representing a performance improvement of more than an order of magnitude compared to existing results. Furthermore, the proposed scheme exhibits strong scalability, effectively handling thousands of adaptive queries within the same framework.
