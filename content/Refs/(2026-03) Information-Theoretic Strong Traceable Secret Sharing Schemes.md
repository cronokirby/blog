---
published: "2026-03-03"
link: "https://eprint.iacr.org/2026/435"
authors: ["[[Oriol Farr\u00e0s]]", "[[Miquel Guiot]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Traceable secret sharing complements traditional schemes by enabling the identification of parties who sell their shares. Recently, two independent works extended traceable secret sharing to general access structures.
> 
> Goyal, Jain, and Partap [EC'26] introduced a model in which a reconstruction box is augmented with a label $I \subseteq [n]$ and is only required to distinguish between two secrets when queried with the shares of parties in $I$. Based on how this label relates to the corrupted set $J$ that built the box, they defined two notions of traceability. If $I \cap J = \emptyset$, the model is called $\emptyset$-strong traceability, for which they presented a construction based on indistinguishability obfuscation (iO). Otherwise, their model is calledstrong traceability, for which they proved an impossibility result.
> Farràs and Guiot [EC'26] proposed a different model, which we call hiding traceability, where the reconstruction box has no label and the access structure is hidden from the parties. 
> 
> In this work, we improve traceable secret sharing for general access structures in three directions. First, we present a fully information-theoretic scheme for the $\emptyset$-strong traceability model, eliminating the need for strong cryptographic assumptions. This resolves an open question posed by Goyal, Jain, and Partap, who asked what are the minimal assumptions needed in the $\emptyset$-strong traceability model.
> 
> Second, motivated by the impossibility of strong traceability, we introduce a relaxed notion calledhidden mildly strong traceability. This model is relevant in practice and bridges the strong and hidden models. For this setting, we present an information-theoretic scheme for general access structures.
> 
> Finally, we consider the more general model of stateful traceability, where reconstruction boxes may keep state across queries, and we prove an impossibility result for this setting.
