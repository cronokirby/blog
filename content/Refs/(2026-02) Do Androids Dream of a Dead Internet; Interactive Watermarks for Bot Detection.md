---
published: "2026-02-17"
link: "https://eprint.iacr.org/2026/281"
authors: ["[[Brennon Brimhall]]", "[[Harry Eldridge]]", "[[Maurice Shih]]", "[[Ian Miers]]", "[[Matthew Green]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> A number of recent works propose watermarking the outputs of large language models (LLMs) but fail to describe who is authorized to watermark the text or check for a watermark. To resolve these problems, we propose interactive watermarking schemes. Our technique leverages the fact that, for many of the cases in which detecting synthetic text is useful, the detector is able to control some part of the prompt that is passed to the LLM.
> 
> In other words, we propose poisoning the prompt, through which the examining user establishes a steganographic channel with the LLM provider. This lets the user and the LLM provider agree on a shared key, which is then used to embed a a symmetric watermark and permits the end-user examiner to learn if the entity they are conversing with is a bot. Because the steganographic prompt and the LLM response are indistinguishable from their natural distributions, this approach simultaneously sidesteps prior impossibility results from Zhang et al. [ICML'24] and resolves the authorization questions unanswered by previous work.
> 
> Our primary construction is based on elliptic curve Diffie-Hellman; we sketch a more sophisticated version using broadcast encryption. Our secondary construction uses a symmetric key protocol with a pre-shared key. To improve efficiency, we introduce steganographic synchronization codes. We experimentally validate our theoretical findings and outline directions for future work.
