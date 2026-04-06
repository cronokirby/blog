---
published: "2026-03-26"
link: "https://eprint.iacr.org/2026/598"
authors: ["[[Boxin Zhao]]", "[[Qingliang Hou]]", "[[Lingyue Qin]]", "[[Xiaoyang Dong]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> To penetrate more rounds with Meet-in-the-Middle (MitM) attack, the neutral words are usually subject to some linear constraints, e.g., Sasaki and Aoki's initial structure technique. At CRYPTO 2021, Dong et al.  found the neutral words can be nonlinearly constrained. They introduced a table-based method to precompute and store the solution space of the neutral words, which led to a huge memory complexity. In this paper, we find some nonlinearly constrained neutral words can be solved efficiently by Khovratovich et al.'s triangulation algorithm (TA). Furthermore, motivated by the structured Gaussian elimination paradigm developed by LaMacchia et al. and Bender et al., we improve the TA to deal with the case when there are still many unprocessed equations, but no variable exists in only one equation (the original TA will terminate). Then, we introduce the new MitM attack based on our improved TA, called triangulating MitM attack. 
> As applications,  the memory complexities of the single-plaintext key-recovery attacks on 4-/5-round AES-128 are significantly reduced from $2^{80}$ to the practical $2^{24}$ or from $2^{96}$ to $2^{40}$. Besides, a series of new one/two-plaintext  attacks are proposed for reduced AES-192/-256 and Rijndael-EM, which are the basic primitives of NIST PQC candidate FAEST. A partial key-recovery experiment is conducted on 4-round AES-128 to verify the correctness of our technique. For AES-256-DM, the memory complexity of the 10-round preimage attack is reduced from $2^{56}$ to  $2^{8}$, thus an experiment is also implemented. Without our technique, the impractical memories $2^{80}$ or $2^{56}$ of previous attacks in the precomputation phase will always prevent any kind of (partial) experimental simulations. 
> In the full version, we extend our techniques to sponge functions.
