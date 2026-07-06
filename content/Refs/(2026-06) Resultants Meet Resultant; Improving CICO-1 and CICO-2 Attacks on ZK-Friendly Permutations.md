---
published: "2026-06-18"
link: "https://eprint.iacr.org/2026/1281"
authors: ["[[Antoine Bak]]", "[[Augustin Bariant]]", "[[Ma\u00ebl Hostettler]]", "[[Vincent Neiger]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The increasing usage of Zero-knowledge proof protocols has raised the need for cryptographic primitives that are efficient in that setting, called Arithmetization-oriented primitives. The security of such permutations is commonly evaluated with the CICO- problem.
> The best known CICO- attack against ZK-Friendly permutations over  based on -inversions  exploits resultants (ASIACRYPT 2024, CRYPTO 2025). It starts from one input variable  and introduces a temporary variable after each -inversion. With an efficient procedure to eliminate temporary variables, the attack reaches a time and memory complexity of , where  is the ideal degree of the CICO- modeling and  is the number of -inversions. In this work, we study such an approach using two input variables , and we generalize the temporary variable elimination to that setting. Subsequently, we present a new CICO- attack framework and a new Start-From-The-Middle (SFTM) CICO- attack framework.
> Both our attacks rely on fast bivariate resultants for their final bivariate system solving step. Using resultant algorithms with complexity almost linear in , our CICO- and CICO- attacks reach a complexity almost linear in  and in , respectively, which is a first theoretical improvement. Designing an efficient implementation of these resultant algorithms remains a challenge, so for our practical contributions we turn to Villard's algorithm (ISSAC 2018). After adapting it to our context, we obtain practical complexities  and  for CICO- and CICO- respectively, where   depending on the chosen linear algebra exponent .
> Our attacks improve upon the best known ones against several instances of Anemoi, Rescue and Griffin, successfully breaking -bit and -bit security instances of Rescue in the CICO- setting and full-round instances of Anemoi and Griffin in the CICO- setting for the first time. Our implementation of the attack confirms the practicality of the approach.
