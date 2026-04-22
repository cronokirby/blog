---
published: "2026-04-15"
link: "https://eprint.iacr.org/2026/737"
authors: ["[[Charlotte Hoffmann]]", "[[Krzysztof Pietrzak]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> A verifiable delay function (VDF), introduced by Boneh et al. [CRYPTO’18], on input $(x,T)$ produces an output $(y,\pi)$ where computing $y$ requires $T$ inherently sequential steps, and $\pi$ is a proof certifying correctness. VDFs have found numerous applications, and many of these rely on the assumption that honest parties can evaluate the VDF nearly as fast as adversaries.
> 
> To support this assumption, significant effort has been invested in developing dedicated VDF hardware (ASICs). However, such devices are expensive and produced in limited quantities, leaving only a small number of parties with access to fast VDF evaluation. A natural workaround is to offer “VDFs as a service,” where a server equipped with specialized hardware evaluates instances on behalf of clients. This approach, however, is unsuitable when the VDF input must remain private.
> 
> In this work, we introduce and construct blind VDFs, enabling secure VDF outsourcing without revealing the input. Inspired by blind signatures, our protocol allows a client to transform an input $x$ into a blinded instance $\alpha$, which is evaluated by the server. The server returns a result $\beta$,  from this and its local state, the client can unblind to recover the correct output $(y,\pi)$, while the server learns nothing about $x$.
> 
> We realize this notion by constructing a blinded version of Pietrzak’s VDF [ITCS’19]. In the original scheme, computing $y$ requires $T$ sequential steps, while generating the proof $\pi$ can be done in $O(T/S)$ parallel time using $O(S)$ space (e.g., $O(\sqrt{T})$ time and space). In our blind variant, the server performs the $T$ sequential steps and sends $O(S)$ data to the client, who completes the unblinding in $O(T/S)$ time. By allowing slightly more interaction, we obtain a protocol where the client’s work is small, while the server performs essentially the same computation as in the unblinded VDF.
