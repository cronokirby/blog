---
published: "2026-04-05"
link: "https://eprint.iacr.org/2026/666"
authors: ["[[Jos\u00e9 Luis Delgado]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Post-quantum migration in TLS 1.3 should not be understood as a flat substitution problem in which one signature algorithm is replaced by another and the resulting deployment cost is read directly from primitive-level benchmarks. In certificate-based authentication, the practical effect of a signature family depends on where it appears in the certification hierarchy, how much of that hierarchy is exposed during the handshake, and how the resulting cryptographic burden is distributed across client and server roles. This makes post-quantum TLS migration a problem of cryptographic design in authenticated key establishment, rather than merely a matter of algorithm selection.
> 
> This paper presents a local experimental study of TLS 1.3 authentication strategies built on OpenSSL 3 and oqsprovider. Using a reproducible laboratory, it compares ML-DSA and SLH-DSA across multiple certificate placements, hierarchy depths, and key-exchange modes, including classical, hybrid, and pure post-quantum configurations. The analysis is organized around four complementary campaigns: a leaf-only comparison, a full hierarchy strategy matrix, a depth comparison, and a key-exchange exploration.
> 
> Across the experimental matrix, the clearest discontinuity appears when SLH-DSA is placed in the server leaf certificate. In that configuration, handshake latency and server-side compute cost increase by orders of magnitude, while strategies that confine SLH-DSA to upper trust layers and preserve ML-DSA in the interactive leaf remain within a substantially more plausible operational range. The results further show that transport size alone does not explain the heavy regime: outside leaf-SLH scenarios, transferred bytes and observed chain size track latency closely, but once SLH-DSA reaches the leaf, server-side cryptographic cost becomes dominant.
> 
> The paper therefore argues that post-quantum TLS migration is best evaluated as a problem of certificate-hierarchy design, chain exposure, and cryptographic cost concentration during live authentication. In practical terms, signature placement matters at least as much as signature-family choice.
