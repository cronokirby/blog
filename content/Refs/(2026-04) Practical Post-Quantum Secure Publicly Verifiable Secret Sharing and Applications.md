---
published: "2026-04-24"
link: "https://eprint.iacr.org/2026/813"
authors: ["[[Aniket Kate]]", "[[Pratyay Mukherjee]]", "[[Hamza Saleem]]", "[[Pratik Sarkar]]", "[[Rohit Sinha]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We present a new framework for constructing practically efficient publicly verifiable secret sharing(PVSS) with non-interactive dealers, in that the dealer may go offline after sending a single message, and is not involved in the share verification process. We use identity-based encryption (IBE) and commitments as the main ingredients and avoid expensive zero-knowledge proofs. Instantiating them with post-quantum secure schemes, a lattice-based IBE and a hash-based commitment, we obtain our first construction - a post-quantum secure PVSS with non-interactive dealers that outperform the prior lattice-based practical construction, Gentry et al. [Eurocrypt 2022] by two orders of magnitude.
> 
> However, to enable the aggregation of PVSS transcripts (which facilitates many additional applications such as secure voting), we propose our second construction by replacing hash-based commitments with Pedersen's homomorphic commitments. While this does not achieve full-fledged post-quantum security (as Pedersen's scheme is not quantum safe), it still provides privacy against a post-quantum adversary. We prove the security of this construction in a new model, which we call long-lasting security. This model guarantees that the protocol is secure in the present (pre-quantum era) while maintaining privacy in the long term (post-quantum era). This new model is of independent interest for constructing efficient schemes that are resilient to harvest-now-decrypt-later line of attacks. In this model, we propose a blockchain-compatible secure voting scheme using our PVSS scheme. 
> 
> Our PVSS schemes demonstrate practical efficiency: our post-quantum PVSS shares a secret among $1024$ receivers in $692$~ms and verifies the dealing in $128$ ms, and communicates $4$MB, overall yielding a two orders of magnitude improvement over the state of the art [Gentry et al., Eurocrypt 2022].
