---
published: "2026-06-23"
link: "https://eprint.iacr.org/2026/1307"
authors: ["[[Hanchao Ku]]", "[[Hikaru Tsuchida]]", "[[Mingwu Zhang]]", "[[Takashi Nishide]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Secure Multi-Party Computation (MPC) is a cryptographic primitive that enables multiple parties to jointly compute a function over their inputs without revealing the inputs. An MPC protocol is required to provide security against adversarial behavior, typically considered in two classic models: the \textit{semi-honest} model, where adversaries follow the protocol but attempt to learn additional information from the transcript, and the \textit{malicious} model, where adversaries may arbitrarily deviate from the protocol. Protocols secure against semi-honest adversaries are often more efficient, but in many real-world applications the stronger guarantee of malicious security is required.
> 
> In this work, we propose an efficient MPC protocol secure against static malicious adversaries controlling at most  out of  parties. Our protocol builds on Shamir's secret sharing and follows a compiler-based approach: the parties first evaluate the circuit using a semi-honest protocol and then run a verification procedure that enables honest parties to detect cheating except with small statistical error. Our construction injects fresh randomness into the verification procedure to detect cheating even in the presence of incorrect multiplication triples. It also reduces communication overhead by replacing several invocations of multiplication verification with local degree- computations and a batched opening, while keeping the local verification cost comparable to or lower than that of prior protocols. We give a concrete instantiation of the compiler and prove that the resulting protocol is secure against malicious adversaries.
