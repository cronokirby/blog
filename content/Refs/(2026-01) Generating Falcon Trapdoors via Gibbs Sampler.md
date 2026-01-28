---
published: "2026-01-24"
link: "https://eprint.iacr.org/2026/116"
authors: ["[[Chao Sun]]", "[[Thomas Espitau]]", "[[Junjie Song]]", "[[Jinguang Han]]", "[[Mehdi Tibouchi]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Falcon is a lattice-based signature scheme that has been selected as a standard in NIST post-quantum cryptography standardization project.  The trapdoor generation process of Falcon amounts to generating two polynomials, $f$ and $g$, that satisfy certain conditions to achieve a quality parameter $\alpha$ as small as possible, because smaller $\alpha$ usually leads to higher security levels and shorter signatures. The original approach to generate NTRU trapdoors, proposed by Ducas, Lyubashevsky, and Prest (ASIACRYPT 2014), is based on trial-and-repeat, which generates $f$ and $g$ with small Gaussian coefficients and tests whether they satisfy the condition or not. If not, the process is repeated. In practice, $\alpha$ is chosen as 1.17 because it is the smallest value that keeps the number of repetitions relatively small. 
> A recent work by Espitau et al. (ASIACRYPT 2023) proposed a new approach to generate NTRU trapdoors: instead of using trial-and-repeat, sample $f$ and $g$ in the Fourier domain that satisfies the targeted quality and map them back to ring elements.  In principle, the idea of Fourier sampling applies to Falcon itself as well, but the sampling region in the Fourier domain for Falcon has a distinct, less elegant geometric shape, which makes sampling more challenging. 
> In this paper, we adopt Markov Chain Monte Carlo (MCMC) methods for sampling. The core idea is to start from an arbitrary point within the target region and perform random walks until the point approximates a random sample from the desired distribution. Specifically, we use Gibbs sampler with Fourier sampling to generate Falcon trapdoors.  
> Our approach allows us to achieve \(\alpha\) values arbitrarily close to 1 efficiently, whereas the original trial-and-repeat method would require impractically many repetitions (far exceeding trillions) to reach even \(\alpha = 1.04\). In particular, Falcon-512 currently falls short of the NIST level one requirement of 128 bits, but our method effectively mitigates this gap. 
> Furthermore, our approach eliminates the need for discrete Gaussian sampling, which is challenging to implement and secure. Instead, our method relies solely on uniform sampling over an interval, simplifying the implementation and improving efficiency.
