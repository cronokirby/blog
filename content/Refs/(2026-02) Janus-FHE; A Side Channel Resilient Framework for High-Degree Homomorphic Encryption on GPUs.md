---
published: "2026-02-23"
link: "https://eprint.iacr.org/2026/362"
authors: ["[[Kashfia Farheen]]", "[[Nektarios Georgios Tsoutsos]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Homomorphic Encryption (HE) enables secure cloud computing through computations on encrypted data, yet the physical security of these implementations on shared hardware accelerators remains a critical challenge. While Graphics Processing Units (GPUs) offer the massive parallelism required for HE workloads, their Single Instruction Multiple Thread (SIMT) architecture amplifies side-channel vulnerabilities. Standard implementations of polynomial multiplication and relinearization often exhibit data-dependent control flows and irregular memory access patterns that leak sensitive information through variable timing behavior. In this paper, we present Janus-FHE, a GPU-based framework for BFV ciphertext multiplication and relinearization designed with intrinsic side-channel resistance. We reformulate polynomial multiplication as large-integer arithmetic via Kronecker substitution, executing it using a Schonhage-Strassen algorithm based on the Discrete Galois Transform (DGT). Critically, we compute these transforms using the Stockham algorithm, which enforces strictly deterministic, input-independent memory access patterns, effectively mitigating cache-timing vulnerabilities. Furthermore, we implement a constant-time relinearization strategy that replaces conditional branching with masked arithmetic to prevent warp divergence. Our experimental evaluation confirms that Janus-FHE eliminates the control-flow leakage observed in state-of-the-art libraries like HEonGPU, extending the computational reach of GPU-based FHE by successfully computing multiplications for polynomial degrees up to $2^{18}$.
