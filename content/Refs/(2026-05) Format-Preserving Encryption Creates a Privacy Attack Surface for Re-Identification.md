---
published: "2026-05-19"
link: "https://eprint.iacr.org/2026/993"
authors: ["[[Martin Staal Boesgaard]]", "[[Markus Larsen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Format-preserving de-identification methods, for example format-
> preserving encryption, enable de-identified data to act as an in-place
> replacement for the original data by retaining syntactic properties.
> However, when applied to data types with multiple formats, format
> preservation introduces inherent information-theoretic leakage, as the
> format itself can reveal non-trivial information about the original data,
> creating an attack surface that can be realized when appropriate aux-
> iliary information is available. We formalize format preservation and
> use Shannon entropy to quantify the resulting leakage. To illustrate
> the practical impact of this, we document real-world use of format-
> preserving de-identification on variable-format data types and apply
> the theory to a real-world dataset. Using personal data from Dan-
> ish financial institutions, we find that a length and word-preserving
> transformation has a leakage of 10.12 bits for person names and 3.9
> bits for cities, out of a maximum of 17.2 bits. While exploiting this
> leakage requires appropriate auxiliary information, such information
> is often readily available in practice. In the worst-case scenario, this
> can lead to re-identification of some data records; however, even in
> less extreme cases, it can significantly narrow down the search space
> for re-identification, e.g. by revealing the length of the original data,
> or the format of an e-mail domain.
