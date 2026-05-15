---
published: "2026-05-05"
link: "https://eprint.iacr.org/2026/884"
authors: ["[[Fran\u00e7ois Dupressoir]]", "[[Kristian Gj\u00f8steen]]", "[[Cameron Low]]", "[[Charlotte Mylog]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We present a machine-checked security proof for the NTOR
> key exchange protocol, which is used to establish connections in the Tor
> onion routing system. It was previously studied by Goldberg et al. (DCC
> 2013), but within a slightly non-standard model that did not explicitly
> capture forward secrecy.
> Our proof is fully formalized in EasyCrypt, adding to the still small set
> of cryptographic protocols verified in the computational model. A key
> contribution is a systematic treatment of halting reductions involving
> failure events expressed as global properties of the execution. In the
> course of this work, we also contributed improvements to the EasyCrypt
> framework itself.
> We prove NTOR secure in a new model of unilaterally authenticated
> key exchange that captures forward secrecy, and is intentionally close to
> established bilaterally AKE models (such as eCK). By examining more
> carefully how identities and public keys are used in key exchange proto-
> cols, we obtain simpler formal arguments and introduce several variants
> of our UAKE security model, connected by general reductions that, in
> the case of NTOR, are also realized in EasyCrypt. This allows us to
> carry out the main proof in a simpler setting and then derive the desired
> security guarantee for NTOR via these reductions.
