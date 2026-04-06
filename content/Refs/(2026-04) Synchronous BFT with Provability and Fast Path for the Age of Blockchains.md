---
published: "2026-04-01"
link: "https://eprint.iacr.org/2026/639"
authors: ["[[Ittai Abraham]]", "[[Kartik Nayak]]", "[[Ling Ren]]", "[[Ertem Nusret Tas]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Synchronous Byzantine fault tolerant (BFT) protocols offer stronger security guarantees, increasing resilience from one third to one half. However, existing constructions suffer from three drawbacks that are critical in blockchain settings.
> 
> First, blockchain systems require rotating leaders, but the existing constructions are not optimized for low latency under leader rotation. Second, blockchain systems require provable commitments that can be forwarded to clients or offchain entities. Third, modern blockchains optimize for low latency in the good case, and often further optimize for a fast path under even milder adversarial conditions. 
> 
> In this work, we formalize and study fast paths in the context of provable synchronous BFT. Our first result is that for $n \le  2t + 2p + c -1$, it is impossible to obtain a provable synchronous BFT protocol that tolerates $t$ Byzantine and $c$ crash faults while also achieving a two round fast path resilient to $p$ Byzantine faults. Guided by this bound, we then present four provable synchronous protocols tailored to two deployment paradigms: optimistic responsivness and fixed view schedules.
> 
> For optimistic responsiveness, we present $\Delta$-Sync Simplex and $2\Delta$-Sync Simplex, which for $n = 2t + 2p + c + 1$, produce provable commit certificates in time $2\delta$ under a correct leader when the number of faulty parties $f$ satisfies $f \le p$. $2\Delta$-Sync Simplex also achieves $3\delta$ commit latency when the total number of faulty parties is $f \le \lfloor (p + t)/2 \rfloor$ with Byzantine faults $f_b \le t$ and crash faults $f_c \le c$. Outside these optimistic regimes, the protocols remain safe and live for $t$ Byzantine and $c$ crash faults, and output provable commitments within $2\Delta + 2\delta$ and $1\Delta + 3\delta$, respectively. Under faulty leaders, the protocols guarantee a worst case view length of $6\Delta + \delta$ and $5\Delta + \delta$ respectively.
> 
> For fixed view schedules, we present two additional protocols, TenderSync and SyncMint, that trade off commit latency and view duration. They achieve either $3\Delta$ provable commit with $4\Delta$ views, or $4\Delta$ provable commit with $3\Delta$ views. Both protocols obtain a provable commit in $2\delta$ under a correct leader when $f \le p$.
