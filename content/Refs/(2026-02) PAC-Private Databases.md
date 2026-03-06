---
published: "2026-02-12"
link: "https://eprint.iacr.org/2026/238"
authors: ["[[Mayuri Sridhar]]", "[[Michael A. Noguera]]", "[[Chaitanyasuma Jain]]", "[[Kevin Kristensen]]", "[[Srinivas Devadas]]", "[[Hanshen Xiao]]", "[[Xiangyao Yu]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> As data collection and sharing becomes more prevalent, quantifying leakage about released data is an increasingly crucial privacy issue. Prior work in private database analytics demonstrates how to provide strong theoretical privacy guarantees through differential privacy (DP). However, these techniques are often limited to specific queries; to the best of our knowledge, among the 19 queries in the TPC-H benchmark which do not directly leak customer information, prior work in DP can handle at most 9 queries, without additional analyst effort.
> 
> In this work, we apply the recently-proposed Probably Approximately Correct (PAC)  Privacy mechanism in order to provide a black-box technique to privatize general SQL queries against membership inference attacks. Naively applying PAC Privacy would allow us to privatize any individual query. However, databases are an interactive process: a user queries the database, views the response, and then chooses their next query. Prior work in PAC Privacy cannot provide any theoretical guarantees in this setting; instead, users would be required to provide all the queries a priori, which is a fundamental usability limitation. We construct the first algorithm to allow users to query the database adaptively and prove that algorithmic modifications via independent randomness provide automatic privatization guarantees.
> 
> Our privatization layer, PAC-DB, does not require any human analysis in order to privately return a response for a general SQL query. PAC-DB is compatible with any database management system and does not require a trusted data curator. We provide an open-source implementation, where we privatize all of the 19 queries in consideration from the TPC-H benchmark with customers as our privacy concern. We provide both relative errors and initial performance estimates.
