---
published: "2026-01-01"
link: "https://eprint.iacr.org/2026/002"
authors: ["[[Sarvar Patel]]", "[[Giuseppe Persiano]]", "[[Joon Young Seo]]", "[[Kevin Yeo]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We study the design of Oblivious RAMs (ORAMs) that allow a client to access memory outsourced to a remote, untrusted server without revealing the client’s data access pattern. We are interested in concretely efficient constructions and prior works have yielded different ORAM frameworks with various trade-offs. Tree-based constructions such as RingORAM [Ren et al., USENIX’15] obtain low communication overhead, but require client storage of linear position maps and two roundtrip queries. Hierarchical schemes such as FutORAMa [Asharov et al., CCS’23] further reduce communication at the cost of more roundtrips during queries. Finally, SQRT-ORAM [Goldreich, STOC ’87] enables fast queries of one roundtrip and one block of communication at the cost of larger amortized communication costs.
> We present two new constructions, LatORAM and Lat 2 ORAM, that simultaneously obtain the positive traits of all three types of ORAM constructions. Online queries are blazing fast with one roundtrip and a single block of communication like SQRT-ORAM. Fixing the client memory sizes for comparison, the online communication cost of our constructions are 5-8x smaller than RingORAM and 5-10x smaller than
> FutORAMa even though both RingORAM and FutORAM a require multiple roundtrips per online query. Furthermore, our total amortized communication is also up to 50% smaller. To obtain our constructions, we present a new lazy approach of lateral stash growth that delays large shuffles.
> 
> Of independent interest, we present improved oblivious merging schemes for specific settings important for our ORAMs. Our constructions solely rely on symmetric cryptography.
