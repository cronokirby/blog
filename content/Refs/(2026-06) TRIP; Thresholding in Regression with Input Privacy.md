---
published: "2026-06-22"
link: "https://eprint.iacr.org/2026/1302"
authors: ["[[Chrysa Oikonomou]]", "[[Katerina Sotiraki]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Secure computation allows multiple parties to jointly evaluate a function without leaking their individual inputs. An intrinsic issue with these techniques  is that they do not offer any protection against parties which may contribute bad quality or even maliciously crafted data. 
>     We introduce TRIP, a protocol which protects against malicious manipulations of the input in secure computation of linear regression tasks. Linear regression is the cornerstone in many machine learning tasks, and hence creating secure protocols for this task is a crucial step towards secure machine learning. 
>     Our protocol utilizes a novel combination of techniques from secure computation, robust statistics, and differential privacy.
>     On synthetic data, TRIP recovers the planted ground truth; on real-world datasets, its model remains close to the clean OLS baseline under up to 40\% target corruption. In terms of efficiency, our protocol runs up to  faster than an MPC-only baseline for  samples. Even in the smallest parameter setting, TRIP is  faster than our baseline.
