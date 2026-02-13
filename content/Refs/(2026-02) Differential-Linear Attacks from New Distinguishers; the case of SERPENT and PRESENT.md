---
published: "2026-02-09"
link: "https://eprint.iacr.org/2026/205"
authors: ["[[Thierno Mamoudou Sabaly]]", "[[Marine Minier]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Differential-linear distinguishers have been introduced by Langford and Hellman in 1994. They consist in combining, first, a differential distinguisher and second, a linear distinguisher and then study the bias between plaintexts with a difference and linear approximations of the two ciphertexts to create a differential-linear distinguisher. The original method has been improved by Bar-On et al. in 2019 where the table called the DLCT (Differential Linear Connectivity Table) has been introduced and more recently, in 2024 by Hadipour et al. where, as for the case of boomerang distinguishers, several intermediate tables are used to tune the computation of the middle part of the distinguisher. From a distinguisher, it is thus natural to try to mount some dedicated attacks. This step has been done by Broll et al. in 2021 and in 2022 for the case of SERPENT.
> 
> In this paper, we propose a tool that directly searches for the best differential-linear attacks automating the work of Broll et al. using the differential-linear distinguishers proposed by Hadipour et al. More precisely, both searches (distinguishers and attacks) are done in the same step to improve the overall complexity of the differential-linear attack. We apply this tool to the case of SERPENT and PRESENT. The attack against SERPENT reaches 12 rounds with a time complexity equal to $2^{220.9}$ for a data/memory complexity equal to $2^{125.01}$. The attack against PRESENT-80 (PRESENT-128 respectively) reaches 16 (18 respectively) rounds with a time complexity equal to $2^{73.88}$ ($2^{124}$ respectively) for a data/memory complexity equal to $2^{57.88}$ ($2^{63.25}$ respectively).
