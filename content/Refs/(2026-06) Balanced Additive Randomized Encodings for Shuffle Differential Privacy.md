---
published: "2026-06-10"
link: "https://eprint.iacr.org/2026/1239"
authors: ["[[Yu Wei]]", "[[Jaspal Singh]]", "[[Adya Agrawal]]", "[[Vassilis Zikas]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Shuffle differential privacy (shuffle DP) offers an attractive distributed alternative to standard differential privacy. It uses a secure shuffler to permute users' randomized encodings, providing individual data privacy without a central trusted entity. A key challenge, however, is to achieve both generality and client efficiency. Under information-theoretic shuffle-DP guarantees, protocols that nearly match central-model utility are restricted to statistical tasks such as summation and histograms. In contrast, in the computational setting, additive randomized encodings (ARE), introduced by Halevi et al. (CRYPTO 2023), yield a generic compiler that achieves central-model utility for arbitrary mechanisms. However, their construction incurs prohibitive worst-case computation and communication costs for clients, making it impractical for resource-constrained devices such as mobile phones, IoT sensors, and web browsers.
> 
> In this work, we present a client-efficient one-round compiler from central DP to non-robust computational shuffle DP. To achieve this, we first construct a new balanced ARE scheme, where all the clients almost equally share the computational burden in the protocol. For a mechanism  over  clients, this reduces the worst-case per-client computation from  in prior work to , where  denotes the circuit complexity of the mechanism. The key technical ingredient is a new permute-XOR ARE primitive that enables wire splicing across independently generated garbled subcircuits. Secondly we design a more efficient ARE-to-shuffle compiler, whose client bandwidth scales with the sparsity and cross-partition structure parameter of the ARE encoding - a quantity that is always  sublinear in . This is an improvement over Halevi et al. (CRYPTO 2023) where each client bandwidth is . At a high level, the first contribution improves client computation while the second improves client bandwidth.
> 
> We provide an implementation of our generic compiler for differentially private tasks including selection, distinct elements, and linear contextual bandits. We obtain shuffle protocols that match the utility of their central-model counterparts with reasonable client overhead. We evaluate our method across a range of practical settings, and observe substantial gains over the compiler of Halevi et al., with per-client computational and bandwidth speedups increasing linearly in the number of clients.
