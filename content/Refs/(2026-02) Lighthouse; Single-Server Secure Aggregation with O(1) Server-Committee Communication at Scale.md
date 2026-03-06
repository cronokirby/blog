---
published: "2026-02-20"
link: "https://eprint.iacr.org/2026/346"
authors: ["[[Sanjam Garg]]", "[[Alireza Kavousi]]", "[[Dimitris Kolonelos]]", "[[Erkan Tairi]]", "[[Zhipeng Wang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Secure aggregation is a core primitive for privacy-preserving federated learning, enabling a server to compute aggregates of client updates without learning individual inputs. Recent protocols have explored committee-based designs to reduce client overhead and tolerate weakly connected participants. However, existing approaches still incur communication and computation costs that scale with the number of clients and/or the size of model updates. This becomes a serious bottleneck in interaction between the server and the committee, given that model updates are high-dimensional and committee is a small set of clients.
> 
> We present Lighthouse, a new secure aggregation protocol that supports one-shot client communication and achieves constant committee computation and communication overhead with server, independent of both the number of clients and the size of the input vector. Our protocol attains the best-known round complexity of two rounds, matching OPA (CRYPTO 2025) and TACITA (ePrint 2025) and improving upon Flamingo (IEEE S&P 2023) and Willow (CRYPTO 2025).  Our core technical contribution is a novel application of recent advances in batched threshold encryption, which enables succinct server–committee interaction while preserving security and correctness. Beyond asymptotic improvements over prior works, Lighthouse yields substantial concrete efficiency gains: For an aggregation with 1024 clients, we reduce server-to-committee communication by over 100× and committee-to-server communication by over 300× compared to Flamingo and Willow. Also, we present an extension that supports dynamic client participation, a critical requirement for practical deployments at scale, while preserving the asymptotic and concrete efficiency of the static protocol for clients.
