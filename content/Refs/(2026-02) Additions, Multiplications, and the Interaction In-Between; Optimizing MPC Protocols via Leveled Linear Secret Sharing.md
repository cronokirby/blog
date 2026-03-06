---
published: "2026-02-23"
link: "https://eprint.iacr.org/2026/368"
authors: ["[[Andreas Br\u00fcggemann]]", "[[Thomas Schneider]]", "[[Maximilian Stillger]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In concretely efficient secure multiparty computation (MPC) protocols based on secret sharing, a frequent pattern is to locally multiply two shared values into some intermediate representation that is immediately and interactively translated back into sharings of the product. The intermediate representation is often still a full-fledged but different secret sharing scheme. This has been used to efficiently compute dot products by computing the sum of all intermediate products and then interactively translating only the sum instead of translating each individual product. Beyond that, the intermediate representation or secret sharing scheme has mostly been seen only as a necessary interim step, leaving most of its potential untapped.
> 
> We change that by proposing the paradigm of leveled linear secret sharing, which allows dynamic switching between the original secret sharing and the previously only intermediate one more freely, while enabling arbitrary linear computations in any of the domains. Prior multiplications are split into a non-interactive multiplication that switches from one to the other secret sharing, and an interactive upgrade back to the original secret sharing domain. The upgrade now does not necessarily follow each multiplication immediately, but just needs to be placed somewhere before the next multiplication is computed, possibly upgrading the linear aggregation of many multiplications' results. We apply this idea to improve three-party computation on replicated sharings (Araki et al., CCS'16), n-party BGW-style protocols (Ben-Or et al., STOC'88), and masked secret sharing protocols such as ABY2.0 (Patra et al., USENIX Security'21). We develop a novel optimizer that optimally selects which gate of a circuit is evaluated in which domain. With that, we improve communication by 10-37% for many circuits. Furthermore, we implement our generalization for replicated sharing, measure run time improvements of mostly 10-26% in a LAN, and make a full implementation of the protocol and our novel optimizer publicly available.
