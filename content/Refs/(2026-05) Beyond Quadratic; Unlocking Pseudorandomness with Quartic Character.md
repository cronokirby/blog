---
published: "2026-05-15"
link: "https://eprint.iacr.org/2026/964"
authors: ["[[Mriganka Dey]]", "[[Sampa Dey]]", "[[Sampurna Pal]]", "[[Subhabrata Samajder]]", "[[Rana Barua]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We study pseudorandomness arising from quartic Dirichlet characters and obtain results that connect analytic and cryptographic perspectives. From an analytic perspective, and following the framework of Mauduit and Sárközy, we define a Boolean function $\psi_\pi$ from the quartic character $\chi_\pi$ modulo a Gaussian prime $\pi$ and analyze sequence $E_{p-1}=(\psi_\pi(1),\ldots,\psi_\pi(p-1))$ for $p=\pi\bar\pi \equiv 1 \bmod{4}$. Using classical character-sum bounds (Pólya-Vinogradov and refinements of Mauduit-Sárközy and Oon), we show that $E_{p-1}$ satisfies $W(E_{p-1}) =O(\sqrt{p}\log p)$ and $C_{\mu}(E_{p-1}) \leq 2^{\frac{\mu}{2}+1} \mu \sqrt{p}\log p,$ which imply strong pseudorandomness for small $\mu$. From the cryptographic side, we resolve an open question posed by Damgård by proving that quartic characters yield the secure pseudorandom generators and weak pseudorandom functions (wPRFs). Adapting similar techniques of Corrigan-Gibbs and Wu, we have shown that distinguishing quartic wPRF implies solving quadratic residuosity, via a chain of polynomial-time reductions. Our results show that under the Quadratic Residuosity Assumption, the quartic character also yields cryptographically secure wPRFs whose one-wayness was assumed in the construction of $\mathsf{Quartapus}$ signature scheme by Brier et al. and the post-quantum secure signature scheme $\mathsf{PorcRoast}_{4}$ by Beullens et al. that are more efficient and secure than legacy schemes based on the Legendre character.
