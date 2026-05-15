---
published: "2026-04-30"
link: "https://eprint.iacr.org/2026/843"
authors: ["[[Dongwook Kim]]", "[[Jihye Kim]]", "[[Hyunok Oh]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Code-based fair data exchange (FDE) substantially reduces client work by checking only a Fiat--Shamir sample of a redundant Reed--Solomon codeword.  The most practical prior construction, VECK\(^{\star}_{\mathrm{EL}}\), still pays a large prover cost because sampled ElGamal consistency is enforced inside the SNARK circuit.
> 
> We present a code-based FDE construction that removes these sampled in-circuit ElGamal gadgets.  The ciphertext is produced by hash-based masking, sampled consistency with the committed file is certified by KZG commitments, and a small commit-and-prove SNARK checks masking, interpolation, and the key relation \(vk=h^{sk}\).  CP-linking is used to bind the hidden opening value \(u_\alpha\) to \(U_\alpha=g_1^{u_\alpha}\).
> 
> This change reduces the SNARK constraint count by about \(20\times\) and, in our benchmark instantiation, allows the implementation to use BLS12-381 directly instead of the curve cycle required by VECK\(^{\star}_{\mathrm{EL}}\).  For \(2^{20}\) scalar-field elements in that instantiation, our prover time is 3.07 seconds at sample size 512 and 3.8 seconds at sample size 1024, compared with 21.7 and 41 seconds for VECK\(^{\star}_{\mathrm{EL}}\).  Verification remains sample-size dependent but file-size independent after the ciphertext transcript is fixed, and takes 10--21 ms in our implementation.
