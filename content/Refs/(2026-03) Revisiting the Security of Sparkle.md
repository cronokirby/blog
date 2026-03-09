---
published: "2026-03-03"
link: "https://eprint.iacr.org/2026/431"
authors: ["[[Ojaswi Acharya]]", "[[Georg Fuchsbauer]]", "[[Adam O'Neill]]", "[[Marek Sefranek]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We revisit the three-round threshold Schnorr signature scheme Sparkle of Crites, Komlo, and Maller (CRYPTO 2023), as well as its variant Sparkle+. While Sparkle+ was accompanied by a claim of full adaptive security, subsequent work identified a gap in the analysis. Moreover, the original—and simpler and more efficient—Sparkle scheme has so far lacked even a proof of static security.
> 
> We resolve this state of affairs by giving the first proof of static security for Sparkle and then, as our main result, a tight proof of full adaptive security in the pure random oracle model, i.e. without relying on the algebraic group model. The core obstacle is that, in the fully adaptive setting for Sparkle, rewinding arguments fundamentally break down. To address this, our proof is based on a new Vandermonde circular discrete-logarithm (VCDL) assumption, an interactive strengthening of the circular discrete-logarithm assumption of Cho et al. (CRYPTO 2025), originally introduced to prove tight security of basic Schnorr signatures. In particular, circular-style assumptions eliminate the need for rewinding. Beyond tightness, our analysis highlights circular-style assumptions as a general approach to achieving security in settings—such as full adaptive security—where rewinding is inherently problematic.
> 
> We justify VCDL by reducing it to the low-dimensional vector representation (LDVR) problem of Crites et al. (CRYPTO 2025) in the elliptic-curve generic group model; conversely, VCDL implies LDVR in the standard model. Finally, we generalize VCDL (and similarly LDVR) by abstracting away the specific choice of Vandermonde vectors. As an application, we identify a different assumption within this framework that yields a tight proof of adaptive multi-user security for the basic Schnorr signature scheme, a result of independent interest.
