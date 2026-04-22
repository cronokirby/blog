---
published: "2026-04-07"
link: "https://eprint.iacr.org/2026/677"
authors: ["[[Huimin Li]]", "[[Mohamadreza Rostami]]", "[[Pallavi Borkar]]", "[[Lichao Wu]]", "[[Ahmad-Reza Sadeghi]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Modern processors are largely fixed at the time of fabrication, rendering post-silicon security updates infeasible. This lack of flexibility is especially problematic for speculative execution attacks, which exploit microarchitectural optimizations to leak sensitive information through transient execution. However, existing defenses are typically hardwired, narrowly scoped, and non-adaptive. 
> Once deployed, these defenses lack the flexibility to respond to new attack variants, creating a critical security gap.
> 
> 
> This paper presents SPLASH, a novel and adaptive framework for comprehensively mitigating speculative execution vulnerabilities across processor components. SPLASH introduces two primary contributions: (i) we introduce Speculative Information Flow Tracking (SIFT), which enables fine-grained tracking of speculative data propagation throughout the microarchitecture; (ii) the reconfigurable speculative table provides, for the first time, enforceable and fully configurable control over speculative behavior across the processor pipeline. SPLASH is runtime-configurable, allowing dynamic security policy adjustments post-fabrication, such as tuning the speculative window size or selectively protecting specific microarchitectural structures, without requiring hardware redesign.
> 
> We implement SPLASH on both the small and medium BOOM processors and evaluate its effectiveness in mitigating speculative leakage vulnerabilities. SPLASH successfully mitigates all types of speculative execution attacks. In terms of computation overhead, SPLASH incurs only 0.05% overhead on small BOOM and 1.23% on medium BOOM on average compared with the baseline.
> Compared to the best performing state-of-the-art defenses, SPLASH reduces overhead by 129.2X and 1.2X, respectively, with negligible hardware cost.
