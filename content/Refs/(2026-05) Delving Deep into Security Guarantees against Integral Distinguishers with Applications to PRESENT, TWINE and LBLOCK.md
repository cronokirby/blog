---
published: "2026-05-15"
link: "https://eprint.iacr.org/2026/961"
authors: ["[[Shuo Peng]]", "[[Jiahui He]]", "[[Kai Hu]]", "[[Meiqin Wang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Integral attacks pose a significant threat to block cipher security, yet providing guarantees against such attacks for a target block cipher is difficult. At
> ASIACRYPT 2021, Hebborn, Lambin, Leander, and Todo proposed the integral resistance property, which offers strong security guarantees for certain SPN and
> AND-RX block ciphers, assuming independent round keys. However, limitations
> remain: they proved a security bound for 13-round Present, while the longest
> known integral distinguisher covers only 9 rounds. Further, their method cannot
> tackle complex Feistel structures such as Twine and Lblock. A major challenge in
> their method is the difficulty of finding key monomials that lead to odd-number
> monomial trails. We observe that in the first and last parts of the target cipher,
> many interfering monomials exist that always produce interfering trails, which
> is a critical reason that makes it difficult to find odd-number monomial trails.
> Fortunately, we find that these interfering monomials are avoidable by a careful
> selection of the key monomials. Using this insight, we successfully prove the security of 11-round Present, improving the previous result by 2 rounds, and provide
> a partial analysis for 10-round Present. We also extend their integral-resistance
> property to general-Feistel-network (GFN) ciphers Twine and Lblock by proposing an equivalent key transformation method. Through acceleration strategies for
> identifying key monomials, we confirm, for the first time, that 20-round Twine (out of 36 rounds) and Lblock (out of 32 rounds) are resistant to integral distinguishers. We believe our observations and strategies provide gains to Hebborn et
> al.’s security guarantees for block ciphers.
