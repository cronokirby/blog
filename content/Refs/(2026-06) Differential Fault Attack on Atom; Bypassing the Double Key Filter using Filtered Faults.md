---
published: "2026-06-20"
link: "https://eprint.iacr.org/2026/1294"
authors: ["[[Vaibhav Dixit]]", "[[Satyam Kumar]]", "[[Santanu Sarkar]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this paper, we present a Differential Fault Attack (DFA) on the lightweight stream cipher Atom,  proposed by Banik et al. in IACR Transactions on Symmetric Cryptography (TOSC)-2021. It employs two key filters simultaneously during the pseudo-random generation algorithm phase, one of which depends on LFSR state bits. Due to this LFSR-dependent key filter, the authors claim that forming algebraic equations relating key and state bits as variables to the keystream bits is difficult unless the entire LFSR state is known. In contrast, we propose a method to formulate such algebraic equations without guessing any LFSR bits. This enables us to implement a successful DFA on Atom. To the best of our knowledge, this is the first successful DFA reported on Atom . In the proposed DFA, we identify the location of injected faults using a weighted ensemble of trained MLP and XGBoost models. To further improve accuracy, we filter out ML predictions with confidence below a predefined threshold. We found that this strategy significantly reduces the number of SAT solver invocations and improves the overall time complexity of the attack.  
> Based on our experiments, we demonstrate a successful DFA on Atom within a practical time by injecting 18 faults, provided all are correctly identified. Obtaining a set of 18 correctly identified faults requires, on average, 52 fault injections. The attack requires a total of 70 keystream bits (normal and faulty combined) just after a fault injection and guessing two random key bits.
