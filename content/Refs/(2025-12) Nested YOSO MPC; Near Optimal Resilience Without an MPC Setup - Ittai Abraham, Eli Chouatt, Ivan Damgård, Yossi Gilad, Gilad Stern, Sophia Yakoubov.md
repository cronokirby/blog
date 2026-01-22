---
published: "2025-12-23"
link: "https://eprint.iacr.org/2025/2313"
authors: ["[[Ittai Abraham]]", "[[Eli Chouatt]]", "[[Ivan Damg\u00e5rd]]", "[[Yossi Gilad]]", "[[Gilad Stern]]", "[[Sophia Yakoubov]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> You Only Speak Once (YOSO) secure Multi-Party Computation (MPC) provides scalability and adaptive security by distributing the computation across a sequence of anonymous committees. This relies on role assignment, which sets up the infrastructure necessary for the members of one committee to send secret messages to members of subsequent committees without knowing their identities. Existing approaches to role assignment suffer from significant limitations: high broadcast complexity, reliance on secure computation (which creates a circular dependency), or the requirement of an overwhelming honest majority among available nodes in order to guarantee output delivery in the MPC. 
> 
> In this work, we introduce Nested YOSO MPC, which overcomes all of these drawbacks by departing from the traditional threshold adversary structure. We design our MPC to run over a sequence of size-$m^2$ committees, each composed of $m$ subcommittees of size $m$. This MPC is secure (with guaranteed output delivery) as long as most subcommittees on each committee have an honest majority. Our efficient, setup-free role assignment protocol guarantees an honest majority on most subcommittees as long as $(\frac{1}{2} + \epsilon)N$ of the available participants are honest, where $\epsilon$ is a constant and $N$ is the total number of available participants.
> 
> As a complementary contribution, we prove that no MPC with polylogarithmic (in $N$) broadcast complexity can rely on $\frac{N}{2} + o(\frac{N}{polylog(N)})$ honest parties, indicating that our construction is near-optimal in terms of the number of corruptions it can tolerate.
