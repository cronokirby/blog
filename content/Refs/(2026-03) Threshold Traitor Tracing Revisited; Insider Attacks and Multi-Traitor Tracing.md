---
published: "2026-03-02"
link: "https://eprint.iacr.org/2026/422"
authors: ["[[Jan Bormet]]", "[[Sebastian Faust]]", "[[Hussien Othman]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Recently, Boneh, Partap, and Rotem [Crypto’24] initiated the study of threshold traitor tracing, which aims to enhance threshold decryption with anti-collusion mechanisms through a tracing functionality. In their model, a set of colluders constructs a decryption box, called a decoder, and sells it to an external buyer. Collusion-resilience is guaranteed by a tracing algorithm that, given only black-box access to the decoder, can identify at least one of the colluders. 
> However, in this paper, we argue that the state-of-the-art definition and constructions are not resilient against attacks where the decoder is sold to an insider, i.e., a member of the decryption committee. 
> 
> 
> Motivated by this gap, we introduce new definitions to model decoder boxes that are sold to insiders. We show that existing threshold traitor tracing techniques are inherently vulnerable to insider attacks. Then, we introduce a novel approach to achieve insider resilience through multi-traitor tracing, i.e., identifying multiple traitors.
> We present compilers that amplify the number of traitors that can be found, thereby achieving insider-resilience with efficient parameters, in particular, sublinear ciphertext size. These compilers may also be of independent interest.
