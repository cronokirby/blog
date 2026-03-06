---
published: "2026-02-14"
link: "https://eprint.iacr.org/2026/262"
authors: ["[[Seunghun Paik]]", "[[Jae Hong Seo]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We propose a new fuzzy private set intersection (FPSI) protocol, a two-party functionality that securely identifies similar items across private sets. Our design departs from the prevailing separation-based paradigm in existing constructions. Rather than enforcing common separation-based assumptions, e.g., ``apart by $2\delta$'' or disjoint projection assumptions, we adopt a fundamentally different perspective: we explicitly allow collisions within $\delta$-balls, but require that their multiplicity be bounded per axis. We formalize this by introducing a new structural assumption called \textit{$k$-max collision}, which upper-bounds the number of items intersecting any $\delta$-ball along each axis by a parameter $k$. This new assumption intrinsically reflects the axis-wise distinctness of the data through density, rather than pairwise separability. Following prior analyses of disjoint projection assumptions, we show the plausibility of $k$-max collision by proving that uniformly distributed data satisfies this property. Under the $k$-max collision assumption, we propose an FPSI protocol with computation/communication complexities scaling linearly with both parties' set sizes and the data dimension for a fixed $k$. Our results demonstrate that separation assumptions are not necessary for efficient FPSI. Notably, our construction accommodates the intermediate-dimension regime ($1\ll d \ll \kappa$ for the data dimension $d$ and the statistical security parameter $\kappa$), which has remained neither efficiently supported nor well-justified under existing separation-based FPSI paradigms.
