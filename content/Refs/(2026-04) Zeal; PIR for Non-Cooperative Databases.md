---
published: "2026-04-07"
link: "https://eprint.iacr.org/2026/684"
authors: ["[[Javin Zipkin]]", "[[Ofir Dvir]]", "[[Divyakant Agrawal]]", "[[Trinabh Gupta]]", "[[Soamar Homsi]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Private Information Retrieval (PIR), a set of techniques from the literature on cryptography, enables the retrieval of data from a public database while concealing the intent of those querying it, even when the database itself is untrusted. While the scalability of PIR has improved in recent years, its applicability remains limited  due to the assumption that databases cooperate with users. PIR schemes usually require the database or website administrators to perform costly operations beyond servicing requests, which they have little incentive to do. In this paper, we introduce a new direction of PIR research that eliminates requirement of any special cooperation from the database and assumes the presence of a strong adversary that controls not only the database but also any third parties involved in the system. We present Zeal, the first `non-cooperative' PIR scheme that defends against a strong adversary. We also implement Zeal on AWS and evaluate its performance. Zeal has roughly three to four minutes of latency for a database with one million records, improving upon the latency of a naive solution by a factor of 50. We also prove and quantify Zeal's security using a differential privacy guarantee.
