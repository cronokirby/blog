---
published: "2026-01-05"
link: "https://eprint.iacr.org/2026/015"
authors: ["[[Arka Rai Choudhuri]]", "[[Sanjam Garg]]", "[[Matthew Gregoire]]", "[[Keewoo Lee]]", "[[Mike Lodder]]", "[[Hart Montgomery]]", "[[Guru Vamsi Policharla]]", "[[Jim Zhang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Central bank digital currencies (CBDCs) and other related digital asset platforms have the potential to revolutionize the financial world.  While these platforms have been deployed in test environments by virtually all large financial institutions, including central banks, there are still several limitations of these systems that prevent widespread adoption.  These include (i) privacy, (ii) security against quantum adversaries, and (iii) auditability. In this work, we undertake (to our knowledge) the first formal study of these systems.
> 
> While there have been many digital asset platforms implemented, we do not know of any formal model for a fundamentally UTXO-based digital asset platform/CBDC. Our first contribution is a formal modeling of a UTXO-based private digital asset system that meets our requirements listed above.  This model is loosely based upon the open source software that we found came the closest to meeting our requirements, Linux Foundation Decentralized Trust (LFDT) Zeto.  In the course of our formal modeling, we helped to improve the security of Zeto. We then provide an efficient construction of such a system, which we call Qurrency.  Qurrency is an efficient UTXO-based privacy-preserving token system that includes an auditing mechanism and is secure against "harvest now, decrypt later" attacks, which is critically important for several central banks, including the Bank of Brazil. We implemented our construction to show that it is practically efficient and can be used on any EVM-based blockchain system with ease.
