---
published: "2026-05-07"
link: "https://eprint.iacr.org/2026/898"
authors: ["[[Nikita Polianskii]]", "[[Ilya Vorobyev]]", "[[Sebastian Muller]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> DAG-based Byzantine fault-tolerant (BFT) consensus protocols achieve
> high throughput by allowing many validators to propose concurrently, but scaling them to large committees remains challenging. In a committee of $n$ validators, up to $f$ of which may be Byzantine ($n = 3f{+}1$), dense round-based DAG designs require each block to reference at least $2f{+}1$ blocks from the previous round. This yields $O(n)$ metadata per block, $O(n^2)$ metadata per round, and $O(n^3)$ metadata bytes transmitted per round under all-to-all dissemination, increasing bandwidth and processing costs and making metadata, rather  than payload, the latency bottleneck.
> 
> We present Bluestreak, a sparse uncertified DAG BFT consensus protocol that keeps non-leader blocks constant-size (in $n$) and concentrates committee-scale ancestry in a single leader block per round, yielding constant \emph{average} metadata per block as committees grow. Bluestreak combines this sparse block format with a new leader commit rule co-designed for the sparse DAG and a new pull-based pacemaker, and we prove safety and liveness under partial synchrony using only collision-resistant hashes and standard digital signatures.
> 
> We implement and evaluate Bluestreak under wide-area latency spanning ten geo-distributed regions. Bluestreak scales from 10 to 400 validators on commodity 4-vCPU instances with sub-second WAN latency throughout (${\approx}\,470$ ms at $n{=}10$, ${\approx}\,720$ ms at $n{=}400$), keeping average per-block metadata constant at ${\approx}\,320$ bytes. At $n{=}120$, Bluestreak sustains ${\approx}\,220$k tx/s with LSM-tree storage and ${\approx}\,400$k tx/s with WAL-based storage, both at sub-second latency.
