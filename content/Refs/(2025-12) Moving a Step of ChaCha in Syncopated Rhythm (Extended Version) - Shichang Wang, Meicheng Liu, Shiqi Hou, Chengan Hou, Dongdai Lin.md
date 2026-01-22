---
published: "2025-12-29"
link: "https://eprint.iacr.org/2025/2334"
authors: ["[[Shichang Wang]]", "[[Meicheng Liu]]", "[[Shiqi Hou]]", "[[Chengan Hou]]", "[[Dongdai Lin]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The stream cipher ChaCha is one of the most widely used ciphers in the real world, such as in TLS, SSH and so on. In this paper, we study the security of ChaCha via differential cryptanalysis based on probabilistic neutral bits (PNBs). We introduce the syncopation technique for the PNB-based approximation in the backward direction, which significantly amplifies its correlation by utilizing the property of ARX structure. In virtue of this technique, we present a new and efficient method for finding a good set of PNBs, and then a refined framework of key-recovery attack is formalized for round-reduced ChaCha. Further, we generalize the PNB-based approximation by a concept called probabilistic neutral expressions (PNEs). In the PNE-based framework, a new key guessing strategy is presented along with the carry-preserving technique. The new techniques allow us to break 7.5 rounds of 256-bit ChaCha, as well as to bring faster attacks on 7 rounds of 256-bit ChaCha. In addition, to the best of our knowledge, we present the first related-key attack on 256-bit ChaCha8 which is one out of three original ciphers in the ChaCha family. Regarding 128-bit ChaCha, our techniques permit us to defeat 7 rounds when excluding the last rotation.
