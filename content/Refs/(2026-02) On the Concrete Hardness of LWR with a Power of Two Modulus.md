---
published: "2026-02-13"
link: "https://eprint.iacr.org/2026/250"
authors: ["[[Jules Baudrin]]", "[[Rachelle Heim Boissier]]", "[[Fran\u00e7ois-Xavier Standaert]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> LWR has been introduced by Banerjee et al. in 2012 as a deterministic variant of LWE. Since then, it has found many applications in the design of symmetric primitives and post-quantum schemes. Despite its deterministic nature, LWR is usually analyzed as LWE, under the (implicit) assumption that no improved attack can take advantage of the additional structure it provides. In this paper, we tackle this assumption in the context of power-of-two moduli and investigate the security of LWR against algebraic attacks in depth. For this purpose, we model its samples as the outputs of a vectorial Boolean function. We first observe that there are corner cases where the state-of-the-art linearisation attack of Arora & Ge does not apply. In contrast, we propose the first LWR-specific attack, which applies in any parameter regime as long as the modulus is a power of two. We combine analyses of standard criteria such as the algebraic degree and the number of monomials in the secret with an analysis of the algebraic normal form, that we are able to express exactly in a compact representation by leveraging group action theory. Our results exhibit specificities in the structure of LWR that we are able to exploit. They allow refining and strengthening the understanding of this important problem, and systematically improve over the attack of Arora & Ge. They also put forward new tools for (symmetric) cryptanalysis, which we believe can be of independent interest.
