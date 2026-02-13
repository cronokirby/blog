---
published: "2026-02-10"
link: "https://eprint.iacr.org/2026/220"
authors: ["[[Ferran Alborch]]", "[[Andreas Athanasiou]]", "[[Pascal Reisert]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Differential privacy (DP) is one of the most efficient tools for protecting the privacy of individual data holders under computation. This property guarantees that the computation outputs for every pair of adjacent input sets are statistically indistinguishable with respect to a given parameter ε, which is independent of the likelihood that specific inputs occur or not. While the distribution of input sets is generally unknown, in some use cases (approximate) information about it might be available. If the latter is the case, two adjacent inputs of one individual are sometimes already obfuscated by other inputs and the computation itself (i.e., without any additional noise). For example, if the sum of n independent and identically distributed uniformly random bits outputs approximately n/2, both values for the first bit remain (almost) equally likely for large n.
> 
> Based on this observation, we present a new DP mechanism that uses an estimate of the input distribution to reduce the noise addition (compared to standard DP) and hence improves the accuracy of the output. We first explore this idea in the central model, where a single central party collects all data. Then, we provide a new technique (possibly of independent interest) that allows multiple entities to jointly generate reduced noise, using the property of infinite divisibility. This allows each party to individually add noise to their respective inputs, e.g., in Federated Analytics applications.
> 
> We apply our theoretical results, both for the single and multi-party setups, to perform data analysis over human resources data from different subsidiaries within a corporate group. Our benchmarks show that our new DP mechanism provides more accurate outputs while retaining the same privacy level as state-of-the-art DP approaches using the geometric mechanism.
