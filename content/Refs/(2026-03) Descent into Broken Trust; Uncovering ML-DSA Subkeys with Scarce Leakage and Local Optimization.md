---
published: "2026-03-06"
link: "https://eprint.iacr.org/2026/472"
authors: ["[[Carsten Schubert]]", "[[Niklas Julius M\u00fcller]]", "[[Jean-Pierre Seifert]]", "[[Marian Margraf]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> ML-DSA (formerly CRYSTALS-Dilithium), the primary NIST post-quantum signature standard, relies on rejection sampling to ensure that released signatures are statistically independent of the secret key. Recent work by Liu et al. and Damm et al. showed that this protection breaks down as soon as an attacker obtains even a single bit of the generated masking randomness per signature, enabling key recovery via linear regression over the resulting noisy linear system. However, this regression approach requires the attacker to collect a large number of such leaky signatures—up to 2.4 million so-called informative relations for ML-DSA-65—thereby limiting the attack’s practical applicability.
> We dramatically reduce this cost by reformulating the key recovery as a constraint-satisfaction problem solvable by local optimization. Our approach rests on two contributions. First, we construct a verification routine that checks candidate subkeys using only the collected leakage relations, i.e. without knowledge of the remaining secret-key components or relying on computation-intensive reductions. Second, building on theoretical insights from this verification method, we design a
> multi-tier hill-climbing algorithm that iteratively refines candidates by minimizing a scoring function.
> In the exact leakage setting, our attack recovers ML-DSA subkeys from as few as 5 000 to 35 000 informative relations across all parameter sets and leakage bit indices the attack is applicable for, constituting a reduction by a factor of 37–68× over the previous state of the art. We further extend the attack to a noisy leakage model, where the leaked bit is flipped independently with error probability p. We demonstrate experimentally that key recovery remains feasible even at noise rates as high as 45%, again with substantially fewer leakage information than prior work.
