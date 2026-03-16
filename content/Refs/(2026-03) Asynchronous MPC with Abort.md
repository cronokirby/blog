---
published: "2026-03-04"
link: "https://eprint.iacr.org/2026/455"
authors: ["[[Ananya Appan]]", "[[David Heath]]", "[[Ling Ren]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Most prior works on secure Multi-Party Computation (MPC) in asynchronous networks study Guaranteed Output Delivery (GOD), meaning that all parties learn the function output. Asynchronous MPC protocols with GOD necessarily tolerate only t < n/3 corruptions, and they necessarily allow the adversary to exclude the inputs of up to t honest parties from the computation, a phenomenon referred to as input loss. Seeking improvements to threshold/input loss, we consider weakening GOD to security with abort, a standard notion studied in the context of synchronous networks. Unfortunately we show that, when these standard notions are applied in asynchrony, it is not possible to improve the corruption threshold or the input loss.
> 
> We therefore study relaxations of these standard notions under which protocols can be improved. In particular, we propose a relaxation of the standard notion of correctness for asynchronous MPC protocols. Our relaxed notion requires only that parties obtain the correct output when all parties are honest and when at most a threshold A of the parties are asynchronous. We present several impossibility and feasibility results that completely characterize what is possible in the context of our relaxed correctness. For instance, it is possible to achieve selective abort even when t < n parties are corrupt if (and only if) A < (n-t)/2, but it is impossible to achieve unanimous abort unless t < n/3, even when A=0. We additionally propose a new notion of identifiable abort for asynchronous networks (aIA), and we show that we can achieve fair MPC with aIA and min(A,t) input loss.
