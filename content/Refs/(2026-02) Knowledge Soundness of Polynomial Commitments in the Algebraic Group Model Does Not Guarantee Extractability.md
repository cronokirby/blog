---
published: "2026-02-17"
link: "https://eprint.iacr.org/2026/284"
authors: ["[[Petr Chmel]]", "[[Pavel Hub\u00e1\u010dek]]", "[[Dominik Stejskal]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> The Algebraic Group Model (AGM) has become a standard framework for analyzing the knowledge soundness of group-based polynomial commitment schemes. In this work, we formally establish inherent limitations of this methodology. We isolate a structural property satisfied by essentially all practical group-based polynomial commitments, which we term AGM-clarity. We prove that for AGM-clear schemes, evaluation binding implies knowledge soundness in the AGM. This collapse reveals that the AGM definition of knowledge soundness does not capture a distinct security property, but is merely a structural consequence of evaluation binding.
> 
> To precisely characterize the guarantees on extractability provided by the AGM, we introduce Weak Interpolation Knowledge Soundness (WIKS) in the standard model, which is an extreme relaxation of extractability. We show that WIKS is implied by standard evaluation binding and prove that, for AGM-clear schemes, knowledge soundness in the AGM is equivalent to WIKS. Ultimately, our results demonstrate that proofs in the AGM for practical polynomial commitment schemes do not certify ``knowledge'' in the sense of immediate extractability, as they yield no guarantees beyond those already implied by standard model evaluation binding.
