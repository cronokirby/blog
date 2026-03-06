---
published: "2026-02-23"
link: "https://eprint.iacr.org/2026/365"
authors: ["[[Shuo Peng]]", "[[Akram Khalesi]]", "[[Zahra Ahmadian]]", "[[Hosein Hadipour]]", "[[Jiahui He]]", "[[Kai Hu]]", "[[Zhongfeng Niu]]", "[[Shahram Rasoolzadeh]]", "[[Meiqin Wang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The protection of executable code in embedded systems requires efficient mechanisms that ensure confidentiality and integrity.
> Belkheyar \emph{et al.} recently proposed the Authenticated Code Encryption (ACE) framework, with \chilow as the first ACE-2 instantiation at EUROCRYPT~2025.
> \chilow-(32 + $\tau$) is a 32-bit tweakable block cipher combined with a pseudorandom function, featuring quadratic nonlinear layers called ChiChi (\dchi) and a nested tweak/key schedule optimized for low-latency \emph{decryptions} in secure code execution under strict query limits.
> 
> In this paper, we exploit the algebraic structure of \dchi and study the resistance of \chilow-(32 + $\tau$) to cube-like and integral cryptanalysis in single- and multiple-tweak settings.
> In the multiple-tweak setting, we present conditional attacks that can recover the full key for 5-round \chilow-(32 + $\tau$) with practical complexity, and extend the analysis to 6 rounds at a still non-trivial but purely theoretical cost below brute force.
> 
> We additionally construct borderline cube attacks on 5- and 6-round \chilow-(32 + $\tau$), each capable of recovering the full key with practical complexity.
> Specifically, we recover the full key for 5-round \chilow-(32 + $\tau$) using $2^{32}$ decryptions, $2^{18.58}$ chosen ciphertext data, and $2^{33.56}$ bits of memory, and for 6-round \chilow-(32 + $\tau$) using $2^{34}$ decryptions, $2^{33.58}$ chosen ciphertext data, and $2^{54.28}$ bits of memory.
> 
> We then focus on integral cryptanalysis and the challenge of extending the analysis to 7 rounds.
> We identify integral distinguishers in the single- and multiple-tweak models and extend suitable 2-round and 3-round integral distinguishers to build a 7-round attack.
> We present a nested strategy to recover all round tweaks and tackle the problem of deriving the master key from round-tweak and key information.
> Our key-recovery method exploits high-degree monomials that arise in the integral key-recovery phase to reduce the average number of guessed key bits and hence reduce the time complexity.
> As a result, we mount a 7-round key-recovery attack on \chilow-(32 + $\tau$) that requires $2^{6.32}$ chosen ciphertext data, has a time complexity of about $2^{108.55}$ encryptions, and needs negligible memory.
> 
> Notably, all our attacks remain consistent with the security claims of the design.
