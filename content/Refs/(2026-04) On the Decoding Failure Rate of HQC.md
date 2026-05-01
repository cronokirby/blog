---
published: "2026-04-22"
link: "https://eprint.iacr.org/2026/795"
authors: ["[[Alessandro Annechini]]", "[[Alessandro Barenghi]]", "[[Gerardo Pelosi]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Cryptography based on error correction codes has gained significant interest due
> to its ability to provide security against both classical and quantum adversaries.
> In 2025, the U.S. National Institute of Standards and Technology selected
> the Hamming Quasi-Cyclic (HQC) key encapsulation mechanism for standardization.
> A key aspect of HQC is the possibility of decryption failures, which reveal
> information about the private key. To address this issue, the HQC authors developed
> a probabilistic model for the decoding failure rate (DFR) of the underlying
> error-correcting code, and adjusted the cryptosystem parameters to thwart attacks
> based on decryption failures. However, the DFR model relies on the assumption of
> independence between coordinates of the error vector, which does not hold in HQC.
> This approximation yields conservative DFR estimates in regimes where failure
> probabilities can be simulated, and it is hypothesized to remains conservative
> for cryptographic-grade parameter sets.
> In this work, we eliminate the independence assumptions and derive a new
> closed-form DFR model for HQC. We demonstrate that the previous approximation
> remains conservative in the cryptographic regime and that HQC's current decoding
> failure rates are lower than the required ones. We describe optimization techniques
> that enable our probabilistic model to serve as a parameter-tuning tool, and
> demonstrate how the size of HQC public keys and ciphertexts can be slightly reduced
> without compromising security.
