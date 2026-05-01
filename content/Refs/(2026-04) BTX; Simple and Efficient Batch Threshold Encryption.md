---
published: "2026-04-17"
link: "https://eprint.iacr.org/2026/754"
authors: ["[[Amit Agarwal]]", "[[Sourav Das]]", "[[Babak Poorebrahim Gilkalaye]]", "[[Peter Rindal]]", "[[Victor Shoup]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Batched threshold encryption (BTE) enables a committee of servers to jointly decrypt any chosen subset of ciphertexts from a large pool, while all remaining ciphertexts stay private. BTE is a key building block for encrypted mempools, where transactions are encrypted until block inclusion to mitigate maximal extractable value (MEV). Existing epochless  BTE constructions either require user-chosen ciphertext indices that create coordination and censorship concerns or are computationally inefficient.
> 
> In this paper, we present BTX, a simple and concretely efficient BTE construction that is both epochless and collision-free: encryption does not require a user-chosen batch index. Our scheme achieves the shortest ciphertext size among all known BTE constructions having the same size as a standard elgamal ciphertext. By making the scheme amenable to FFT, we reduce the decryption cost to $O(B\log B)$ group exponentiations and $O(B)$ pairings, where $B$ is the size of the dynamically chosen batch of ciphertexts.
> 
> We implement BTX and two baselines in a shared, aggressively optimized C++ codebase over BLS12-381 with AVX-512 vectorization, FFT-based backends where applicable, and additional low-level engineering throughout. At batch size $B = 512$, using a single core, BTX requires approximately $598$ ms total for decryption, compared with $1197$ ms for the FFT optimized version of partial-fraction evaluation baseline of Boneh et al., an overall $2.0\times$ improvement.
