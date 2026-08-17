---
published: "2026-08-09"
link: "https://eprint.iacr.org/2026/1643"
authors: ["[[Jonathan Passerat-Palmbach]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> MEV and censorship, fuelled by public mempool visibility, remain existential threats to Ethereum and have recently started to spread to its layer-two ecosystem. Encrypted mempools promise to conceal transaction content until ordering is final. While this sounds appealing, their viability rests on cryptographic, economic, and deployment trade-offs.
> 
> This paper systematises the evolution of threshold-encrypted mempools, from early schemes such as Shutter and Ferveo to the most recent research, and analyses how successive iterations have resolved bottlenecks like committee communication overhead, lack of pending transaction privacy, and position-dependent encryption. We highlight a convergence along four design axes, namely batched decryption to mitigate latency, silent setup to eliminate the complexity of distributed key generation, epochless encryption to remove position dependency, and collision-free encoding to prevent slot-collision censorship. We further survey the active Ethereum deployment debate, including EIP-8105 and the LUCID headliner submission, and map the requirements raised there onto the cryptographic corpus.
> 
> We conclude by exposing a critical limitation common to all current proposals: blind ordering and binary decryption together suppress not only the toxic part of MEV that motivated encrypted mempools, but also the same-block auction mechanisms that return value to users and sustain geographic decentralisation of the network.
