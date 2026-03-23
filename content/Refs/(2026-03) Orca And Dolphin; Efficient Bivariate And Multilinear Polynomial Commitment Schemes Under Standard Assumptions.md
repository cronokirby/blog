---
published: "2026-03-17"
link: "https://eprint.iacr.org/2026/539"
authors: ["[[Helger Lipmaa]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Most polynomial commitment schemes have either superlinear prover time or superconstant argument size. Recently, Ganesh, Patranabis, and Singh introduced SamaritanPCS, and Eagen and Gabizon proposed Mercury. Both build on efficient univariate polynomial IOPs that lift univariate polynomial commitment schemes (PCSs) to the multilinear setting, enabling sum-check-based multilinear polynomial IOPs for prover-efficient zk-SNARKs with small communication. Since multilinear PCSs are fundamental building blocks of zk-SNARKs, they must be secure under minimal assumptions while remaining maximally efficient. However, SamaritanPCS and Mercury achieve knowledge soundness only in the joint random-oracle and algebraic-group model. We introduce Orca and Dolphin, optimized bivariate and multilinear PCSs, respectively. We prove that their interactive evaluation protocols have computational special soundness in the standard model, assuming that KZG satisfies binding and interpolation binding (both secure under ARSDH). Thus, they have knowledge soundness in the random oracle model. Both schemes can have a more efficient evaluation protocol that is knowledge sound in the joint random-oracle and algebraic-group model. Dolphin's evaluation phase is more efficient than either SamaritanPCS's or Mercury's.
