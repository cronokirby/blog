---
published: "2026-06-26"
link: "https://eprint.iacr.org/2026/1326"
authors: ["[[Rui-Jie Wang]]", "[[Zhong-Xiao Wang]]", "[[Qun-Xiong Zheng]]", "[[Xuan Zhao]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The Learning with Errors (LWE) problem is a central foundation for post-quantum schemes such as Kyber and Dilithium. Dual attacks are among the main tools for assessing the concrete hardness of LWE instances. At EUROCRYPT 2024, Pouly and Shen introduced the first provable dual attack against LWE. Subsequently, at ASIACRYPT 2025, Qu and Xu incorporated modulus switching into this framework by recovering the guessed secret modulo several small primes and recombining the resulting residues via the Chinese Remainder Theorem (CRT). Although this CRT-based strategy substantially reduces the search space of each individual run, it reconstructs the full guessed secret through several distinct primes whose product must exceed . Consequently, the total guessing cost is dominated by the largest CRT prime . This raises a natural question: can the same recovery effect be achieved by repeatedly applying the subroutine with a fixed small prime, while further reducing the overall complexity?
>     We answer this question affirmatively by proposing layered modulus switching (), a provable modulus switching dual attack based on a -adic view of the guessed secret. Instead of recovering residues modulo several distinct primes, \LaMS\ fixes a single small prime  and recovers the guessed secret digit by digit in its -adic expansion. After each digit is recovered, its contribution is subtracted from the LWE samples, producing a new target LWE instance in which the next digit becomes the new target modulo . As a result, the dominant guessing term is reduced from  in the CRT-based attack to , where .
>     We also correct a parameter issue in previous Kyber estimates. With this correction, \LaMS\ reduces the estimated attack cost by 22/31/41 bits for Kyber-512/768/1024, respectively, relative to the corrected CRT-based attack of Qu and Xu.
