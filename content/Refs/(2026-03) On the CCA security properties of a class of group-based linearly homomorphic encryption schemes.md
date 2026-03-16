---
published: "2026-03-04"
link: "https://eprint.iacr.org/2026/452"
authors: ["[[Duong Hieu Phan]]", "[[Renaud Sirdey]]", "[[Jean Vacher]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In a seminal paper at Eurocrypt'25, B. Libert solved the long-standing open question of the CCA1 security of the Damgard-ElGamal scheme under standard assumptions. That paper also further showed that several other schemes, including a variant of Paillier-ElGamal with plaintext zero-padding, are CCA1 secure under falsifiable assumptions. However, all these schemes are only somewhat linearly homomorphic.
> In this paper, we first tackle the fundamental question of designing efficient "truly" linearly homomorphic encryption schemes achieving CCA1 security under standard and falsifiable assumptions. We generalize Libert's approach to a large class of group-based PKE, that covers the aforementioned schemes, the Cramer-Shoup Lite scheme as well as new ones. In particular, we use our framework to show that a new variant of Paillier-ElGamal, which we call Damgard-Paillier-ElGamal (DPEG) as its design follows a Knowledge-of-Exponent pattern, achieves CCA1 security solely under the standard DCR assumption. To the best of our knowledge, DPEG is the first "truly" linearly homomorphic encryption scheme that is proven CCA1 secure under a standard assumption. Furthermore, DPEG can be extended to support one level of multiplication while still preserving its CCA1 security under the same assumption.
> Second, we show that DPEG also achieves Manulis&Nguyen's stronger notion of vCCA security under a non-falsifiable linear-only homomorphism assumption. We then connect vCCA security to a no-go Theorem of Gentry&Wichs and show that, under mild assumptions, vCCA security cannot be established from any falsifiable assumption. This explains why all currently known vCCA secure constructions, including ours, rely on non-falsifiable assumptions.
