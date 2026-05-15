---
published: "2026-05-05"
link: "https://eprint.iacr.org/2026/875"
authors: ["[[Halil \u0130brahim Kaplan]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> This paper provides a performance comparison of five MILP
> solvers applied to related-key differential cryptanalysis of ITUbee [10].
> We evaluate three open-source solvers (GLPK, HiGHS, SCIP) and two
> commercial solvers (Gurobi, CPLEX) using MILP models for 8, 10, and
> 12-round attacks. As rounds increase, the number of equations and con-
> straints grows exponentially. Experiments used an 11th Gen Intel Core
> i7-1165G7 processor with 32 GB of RAM. Commercial solvers (Gurobi
> and CPLEX) perform better than open-source options, achieving up to
> 94× speedup compared to GLPK for the 12-round model. This work
> provides guidance for choosing a solver for MILP-based cryptanalysis.
