---
published: "2026-08-07"
link: "https://eprint.iacr.org/2026/1635"
authors: ["[[Jessica Chen]]", "[[Lucas Xia]]", "[[Wilson Nguyen]]", "[[Benedikt B\u00fcnz]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Non-native arithmetic is a key bottleneck in SNARK design. It introduces large overheads, and application designers often have to avoid it through the use of non-standard arithmetization friendly hash-functions or other means like elliptic curve cycles.
> Besides performance concerns, non-native circuit arithmetization is also a major cause of implementation errors.
> In a collection of 27 critical bugs in real world ZK systems (0xPARC/zkbugtracker), 9 were related to non-native arithmetization.
> We tackle these challenges by constructing a \emph{minimal overhead} SNARK for integer computation that generically handles non-native arithmetic.
> We follow the recipe of Zaratan (PKC 26), which proves an integer relation such as $a\cdot b = c + u\cdot m$ by fingerprinting---reducing it to the same relation but over a randomly sampled prime field. Realizing this recipe requires an integer mod-PCS that commits to integer polynomials and opens their evaluations modulo a random prime, which is crucially chosen after the underlying PCS's setup and commitment phases.
> Our central contribution is \emph{Limber}, the first practical integer mod-PCS construction that asymptotically has $o(1)$ multiplicative commitment overhead and can be instantiated with any standard field polynomial commitment scheme, including ones over small fields. Combining Limber with a PIOP for integer R1CS over the random prime yields our SNARK.
> We demonstrate its practicality by implementing our scheme and showing that we can prove RSA arithmetic more than $67\times$ faster than prior circuit-based approaches.
