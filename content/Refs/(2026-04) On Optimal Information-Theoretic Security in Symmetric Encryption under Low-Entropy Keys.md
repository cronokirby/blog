---
published: "2026-04-02"
link: "https://eprint.iacr.org/2026/646"
authors: ["[[Haibo Cheng]]", "[[Haijie Su]]", "[[Dongyi Li]]", "[[Wenting Li]]", "[[Ping Wang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We study the achievable level of information-theoretic security for symmetric encryption under low-entropy keys (e.g., passwords and biometrics), where classical notions such as perfect secrecy and entropic security are usually unattainable. We consider a model in which messages $M$ and keys $K$ are drawn independently from distributions $(p_\mathrm{m}, p_\mathrm{k})$. Prior work on homophonic ciphers (HC) and honey encryption (HE) suggests that randomized encryption tailored to $p_\mathrm{m}$ can improve security. We ask what the optimal achievable level is among all symmetric encryption schemes, and which necessary and/or sufficient conditions on encryption schemes characterize when this level can be achieved. 
> 
> For key confidentiality (KC), we show that the optimal achievable level is $I(K;C)=\mathsf{negl}(|C|)$, i.e., the ciphertext reveals only negligible information about the key. Moreover, this holds if and only if, informally, decrypting under any key induces sampling of messages according to $p_\mathrm{m}$. HC and HE following this principle achieve this level, whereas $p_\mathrm{m}$-agnostic schemes do not in general.
> For message confidentiality (MC) against message-recovery attacks, we show that the optimal bound on the adversary’s success probability is $p_{\max}+\mathsf{negl}(|C|)$, where $p_{\max}$ is the baseline success probability of guessing the most likely message or key under $(p_\mathrm{m}, p_\mathrm{k})$. We construct a scheme $\mathsf{OE}$ tailored to $(p_\mathrm{m}, p_\mathrm{k})$ that attains $p_{\max}+O(2^{-|C|})$, and prove that $p_\mathrm{k}$-agnostic schemes (including HC and HE) cannot in general achieve this bound. 
> Our results on necessary and/or sufficient conditions characterize fundamental principles governing the use of randomness in probabilistic encryption. 
> 
> The main technical challenge is to handle a discretization-induced negligible error that must be propagated throughout the derivation of our bounds and necessary and/or sufficient conditions. To facilitate the analysis, we introduce a continuous-ciphertext framework that separates structural constraints from discretization error.
