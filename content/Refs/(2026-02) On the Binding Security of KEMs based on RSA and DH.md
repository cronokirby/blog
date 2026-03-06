---
published: "2026-02-27"
link: "https://eprint.iacr.org/2026/407"
authors: ["[[Juliane Kr\u00e4mer]]", "[[Maximiliane Weish\u00e4upl]]", "[[Stefan Winderl]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Motivated by new attack vectors against KEMs, a framework for binding security has recently been introduced and has since been widely used for analyzing post-quantum schemes. However, KEMs based on classical schemes have not been analyzed yet. NIST recently published SP 800-227, where they illustrate how KEMs can be built from classical cryptographic schemes such as Diffie-Hellman (DH) or RSA. Following their descriptions, we analyze the binding security of the resulting KEMs based on (elliptic curve) Diffie-Hellman, X25519, RSA, and RSA-OAEP. Due to structural similarities to the other DH schemes and since it has not been analyzed so far, we also include the post-quantum scheme CSIDH. Our analysis yields mixed results for theKEMs under consideration, with both binding attacks as well as proofs. Where possible, we propose minor modifications to the schemes, which improve their binding security. Further, we conclude from our results whether hybrid schemes, i.e., KEMs obtained by combining a classical and a post-quantum scheme, need to add the classical ciphertext in the key-derivation function to achieve IND-CCA security.
