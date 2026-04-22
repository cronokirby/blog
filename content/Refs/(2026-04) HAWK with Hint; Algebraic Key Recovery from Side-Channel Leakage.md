---
published: "2026-04-09"
link: "https://eprint.iacr.org/2026/699"
authors: ["[[Byoungchan Chi]]", "[[Changmin Lee]]", "[[Inhun Lee]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Quantum computing threatens classical public key systems and has motivated NIST’s PQC standardization, and within this process HAWK has been submitted as a lattice-based signature scheme. While prior analyses focused on mathematical security, the consequences of side-channel leakage in practical HAWK implementations are less systematically understood. We address this gap by formalizing discrete Gaussian sampler leakage as HAWK with Hint and studying three leakage categories: (i) full coefficient recovery, (ii) sign-only recovery, and (iii) noisy sign recovery. For each category, including (i) which has been covered in prior work, we design algebraic key recovery algorithms that derive explicit linear relations between leaked information and the secret basis and solve the resulting structured linear systems in polynomial time.
> 
> For HAWK-1024, we obtain the following results under the stated threat models. With full coefficient leakage, a single signature suffices for secret key recovery by directly solving the induced linear system, improving prior work that required two signatures under the same conditions. With sign-only leakage, the secret key is recovered using 14 signatures in approximately 100 seconds. With noisy sign leakage, we achieve key recovery using 400 signatures within about 30 seconds at a 10% bit-error rate, and still succeed with roughly 7,000 signatures within about one minute even when the bit-error rate increases to 40%. We implement all attacks and empirically validate them, clarifying how measurement noise affects the required number of signatures.
