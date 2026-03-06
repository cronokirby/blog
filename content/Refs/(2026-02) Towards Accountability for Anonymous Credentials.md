---
published: "2026-02-25"
link: "https://eprint.iacr.org/2026/389"
authors: ["[[Shailesh Mishra]]", "[[Martin Burkhart]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Anonymous Credentials (or ACs) enable users to prove claims
> with strong privacy guarantees, protecting credential holders
> from being tracked by issuers and verifiers. However, these
> privacy guarantees imply that a credential holder cannot be
> held accountable for misuse (e.g., selling credential checks
> online for proving 𝑎𝑔𝑒 > 18). The lack of accountability may
> raise questions about the adoption of ACs into national iden-
> tity systems (e.g., European EUDI or Swiss e-ID), which
> might lead to the issuing authorities resorting to credential
> systems with weaker privacy guarantees (e.g., batch issuance
> of one-show credentials). This shows that the lack of account-
> ability can adversely impact the levels of privacy enjoyed by
> users.
> Hence, in this paper, we discuss transferability attacks on
> ACs and introduce a framework for providing accountability
> in AC systems. In addition to issuers, holders and verifiers,
> it assumes the existence of: (i) a law enforcement body (the
> police) and a judicial body (the judge) that work together to
> find information on credential misuse and; (ii) one or more
> digital privacy advocates, called the NGO(s), that ensure the
> system is not used for tracking people.
> We introduce the cryptographic forensic trail (CFT), which
> is attached to each credential show. The CFT can be used for
> obtaining more information about an individual if and only
> if the police have probable cause and can convince the judge
> to issue a corresponding search warrant. Then, the police,
> the judge, and the NGO(s) run a multiparty protocol for
> decrypting relevant trails only. The protocol mimics checks
> and balances of a healthy democracy, in which neither law
> enforcement nor justice can track people as they will. Even
> if both branches colluded, the NGO(s) can detect the misuse
> and block further use.
> In addition to possible extensions, we discuss performance
> constraints on mobile phones and argue that practical feasi-
> bility of the CFT is within reach.
