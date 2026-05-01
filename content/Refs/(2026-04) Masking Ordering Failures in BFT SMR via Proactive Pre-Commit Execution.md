---
published: "2026-04-22"
link: "https://eprint.iacr.org/2026/796"
authors: ["[[Jianting Zhang]]", "[[Alberto Sonnino]]", "[[Lefteris Kokoris-Kogias]]", "[[Aniket Kate]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Modern Byzantine fault-tolerant state machine replication (BFT SMR) systems adopt a decoupled BFT consensus process to separate data dissemination from transaction ordering as it enables efficient (asynchronous) dissemination even when ordering fails intermittently under partial synchrony. Nevertheless, they may still suffer from high transaction confirmation latency as the transaction-execution process waits for the ordering process to complete: when the ordering process stalls, the execution process does not proceed even when transactions are disseminated.
> 
> We propose Pufferfish, the first BFT SMR system that effectively masks intermittent ordering failures in practice. Pufferfish introduces a pre-commi execution scheme that enables replicas to speculatively execute transactions even during the ordering process stalls. These pre-commit execution results can be directly committed, if correct, when the ordering failures are resolved. To achieve this, Pufferfish builds an adaptive probabilistic speculation mechanism on top of a DAG-based BFT consensus protocol, enabling replicas to predict and speculatively execute transactions ahead of confirmed ordering. Additionally, Pufferfish adopts a commit-aware snapshot mechanism to minimize the overhead of transaction re-execution in cases of speculation failures. To demonstrate the effectiveness of Pufferfish, we implement and evaluate it on a geo-distributed AWS environment. The evaluation results show that Pufferfish achieves faster recovery and 1.36x speedup on the p99 transaction confirmation latency compared to the state-of-the-art BFT SMR in the presence of ordering failures. Even under normal execution, Pufferfish can achieve a 1.58x speedup on transaction confirmation latency under a transaction workload of 80k tps.
