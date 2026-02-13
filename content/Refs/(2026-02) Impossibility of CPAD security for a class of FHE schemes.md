---
published: "2026-02-08"
link: "https://eprint.iacr.org/2026/203"
authors: ["[[Marina Checri]]", "[[Pierre-Emmanuel Clet]]", "[[Marc Renard]]", "[[Renaud Sirdey]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this paper, we focus on the class of at least linearly homomorphic schemes such that their homomorphic addition operator is itself a linear operator over the ciphertext domain. This class of schemes, which we refer to as HELLHO schemes, notably encompasses the basic variant of most practically used FHE schemes such as BFV, BGV, CKKS and TFHE, as long as their mode of operation allows for homomorphic additions not immediately followed by bootstrapping, but also several extensions of them as well as other less mainstream proposals based on other assumptions. 
> Although the aforementioned specific FHE are known to be CPAD insecure due to the existence of concrete attacks against them in that model, we first show by a simple argument that no HELLHO scheme can achieve CPAD security. Moving one step further, we also establish several counter-intuitive facts for the class of HELLHO schemes: for example that any CCA2 attack can be turned into a CPAD one or that, still only for this class of schemes, CCA1 security is equivalent to CPAD1 security (a strictly weaker ``CCA1-style'' variant of CPAD). Among other practical consequences, the results in this paper notably allow to show that instantiating the Dynamic Error Estimation (DEE) heuristic of Li et al. (Crypto'22) from any ``natural'' (R)LWE-based schemes cannot yield a CPAD secure scheme. As another notable consequence, we further exhibit a practical KRD attack on the DE-CKKS scheme, which is presently supported in OpenFHE. We conclude the paper by experimental results showing that this attack is able to perform a full key recovery on DE-CKKS in a matter of hours on an average laptop PC.
