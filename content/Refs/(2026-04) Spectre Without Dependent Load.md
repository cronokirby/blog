---
published: "2026-04-23"
link: "https://eprint.iacr.org/2026/806"
authors: ["[[Can Aknesil]]", "[[Andreas Lindner]]", "[[Roberto Guanciale]]", "[[Hamed Nemati]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Transient execution attacks that disclose arbitrary memory commonly assume a multi-stage read-then-transmit gadget: a transient load to fetch secret data and a subsequent operation to leak that data into an observable side channel. We show that this assumption does not hold under electromagnetic (EM) observations, by verifying that a single transient load already produces value-dependent EM leakage without any explicit follow-up transmission instruction or relying on prefetching. Our results expand the set of exploitable gadgets and show that even simple processors like the Cortex-A53 are vulnerable.
