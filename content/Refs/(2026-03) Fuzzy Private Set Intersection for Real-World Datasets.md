---
published: "2026-03-04"
link: "https://eprint.iacr.org/2026/441"
authors: ["[[Satvinder Singh]]", "[[Yanxue Jia]]", "[[Aniket Kate]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Private Set Intersection (PSI) allows two mutually distrusting parties to compute the intersection of their private sets without revealing any additional information. Fuzzy PSI, an approximate variant of PSI, allows the receiver to learn points of the sender that are ``close" to its points. More formally, the receiver learns all $y$ in the sender's set that satisfy $dist(x,y)< \delta$ for some element $x$ in the receiver's set and threshold parameter $\delta$. Recently, there has been significant progress on Fuzzy PSI, as it allows us to realize several important applications such as password matching, facial recognition, and contact tracing in a privacy-preserving manner. However, existing Fuzzy PSI constructions make strong assumptions on the input sets, such as receiver set disjointedness or projected disjointedness. In this work, we analyze those strong assumptions from a practical viewpoint and observe a gap between theory and practice, i.e., real-world data sets do not abide to those assumptions. 
>     
>     To bridge the gap, we first define a new relaxed and weaker assumption based on the low density of sets, demonstrate the assumption to be practical, and build a compiler that converts constructions under the strong assumption to those under the new, practical assumption. At the core of our transformation is a novel idea involving higher-dimensional lifting and coloring. Combining our transformation with current Fuzzy PSI protocols under the strong assumption yields efficient and practical Fuzzy PSI protocols. We also concretely analyze the run-time and overhead of our transformed protocols for parameters for illustrative applications, such as password matching.
