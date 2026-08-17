---
published: "2026-08-12"
link: "https://eprint.iacr.org/2026/1670"
authors: ["[[Filip Rezabek]]", "[[Kilian Glas]]", "[[Eber Christer]]", "[[Xinxin Fan]]", "[[Georg Carle]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Threshold signatures reduce the risk of single-key compromise by distributing signing authority, but each key share remains exposed to compromise of the software and infrastructure that execute the protocol. We present RSS, a threshold signing service that runs share generation and signing inside Trusted Execution Environments (TEEs). 
> We integrate GG20 threshold ECDSA, FROST, and threshold BLS into the EnGINE experimentation framework and evaluate local and Google Cloud deployments using AMD SEV-SNP and Intel TDX. Our experiments separate distributed key generation (DKG), preprocessing, and online signing, and cover up to 40 logical protocol participants distributed across four physical hosts or confidential VMs (CVMs). 
> In matched-platform comparisons, confidential execution adds limited overhead relative to protocol and deployment effects. DKG is the main scaling bottleneck: for 40 participants, it completes within seconds in the evaluated configurations, whereas signing completes in tens of milliseconds. Threshold BLS is approximately twice as slow as FROST for comparable values of $n$ and $t$. These results establish the performance feasibility of executing threshold-signature workloads inside CVMs under benign-operation assumptions. The evaluation does not cover a complete attestation-bound provisioning lifecycle, persistent-state rollback protection, or Byzantine fault behavior.
