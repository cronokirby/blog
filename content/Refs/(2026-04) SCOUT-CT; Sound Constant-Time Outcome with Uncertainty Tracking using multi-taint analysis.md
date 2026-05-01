---
published: "2026-04-20"
link: "https://eprint.iacr.org/2026/776"
authors: ["[[Damien Maier]]", "[[Jean-Fran\u00e7ois Pasche]]", "[[Maxim Golay]]", "[[Alexandre Duc]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Side-channel attacks are an important class of security exploits, in which an attacker gains access to confidential data by observing information inadvertently leaked by a system.
> Writing constant-time code is a common defense against time-based and microarchitectural side-channel attacks.
> 
> Many approaches have been proposed to automatically verify that a program is constant-time.
> Sound methods can detect all information leaks but, to efficiently analyze large programs, most of them rely on overapproximation which can yield false alarms (i.e., reports of non-existent information leaks).
> Each finding produced by such analyses therefore requires manual inspection.
> Additionally, most existing approaches do not perform binary-level analysis and thus miss vulnerabilities introduced by compilation.
> 
> In this paper, we present a novel sound analysis for detecting information leaks under the constant-time threat model.
> Compared with existing work, our technique improves taint analysis by systematically tracking precision loss to determine whether a detected information leak could be caused by overapproximation.
> Findings for which no precision loss is detected are reported as confirmed; as long as they do not arise from dead code, confirmed findings are guaranteed to be true and thus do not require significant manual inspection.
> Only findings with detected precision loss need classical human verification.
> Our analysis operates directly on binary executables.
> We instantiate our technique within the abstract interpretation framework and provide a proof of correctness.
> 
> We implemented our approach in a prototype tool, SCOUT-CT, and evaluated it on a benchmark of constant-time and non-constant-time programs, including real-world cryptographic implementations.
> Our results show that SCOUT-CT is effective: our tool detected all 98 timing leaks in the benchmark and automatically classified 97 as confirmed findings that do not require significant manual inspection.
