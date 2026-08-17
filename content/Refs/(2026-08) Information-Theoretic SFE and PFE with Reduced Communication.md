---
published: "2026-08-10"
link: "https://eprint.iacr.org/2026/1647"
authors: ["[[Shuaishuai Li]]", "[[Cong Zhang]]", "[[Juntong Lin]]", "[[Anyu Wang]]", "[[Xiaoyun Wang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Secure function evaluation (SFE) and private function evaluation (PFE) are fundamental primitives in multiparty computation. In SFE, multiple parties jointly compute a \textit{public} function over private inputs while revealing nothing beyond the output, whereas in PFE the function itself is \textit{private} and known only to a designated party. In this work, we focus on the semi-honest setting and present more efficient information-theoretic constructions for both SFE and PFE.
> 
> For SFE, the classical BGW protocol incurs $O(n^2)$ communication per multiplication gate. The DN protocol (Damg\aa rd and Nielsen, Crypto 2007) reduces the amortized communication to linear but still require an additional $O(n^2)$ term, yielding $O(m^* n + n^2)$ communication for $m^*$ multiplication gates. This becomes suboptimal in the regime $m^*= o(n)$. We introduce a simple technique that removes this quadratic overhead, achieving strictly linear $O(m^* n)$ communication.
> 
> For PFE, the only existing information-theoretic approach relies on universal circuits, which results in $O(m^5n+n^2)$ complexity for arithmetic circuits. We develop new techniques that avoid universal circuits entirely. Combined with our SFE improvements, this yields an honest-majority PFE protocol achieving $O(m^2n)$ communication for circuit size $m$. We further obtain improved efficiency in special cases, including a three-party protocol with $O(m^{4/3})$ communication, and an $n$-party protocol tolerating one corruption with $O(m^{(2n-2)/(2n-3)}n)$ communication.
