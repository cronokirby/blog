---
published: "2026-03-24"
link: "https://eprint.iacr.org/2026/585"
authors: ["[[Alexandra Boldyreva]]", "[[Kaishuo Cheng]]", "[[Jehad Hussein]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> We study the problem of provably-secure format-preserving authenticated encryption scheme for images, where decryption is successful even when ciphertexts undergo compression. This novel primitive offers users more control and privacy when sharing and storing images on social media and other photo-centric, compressing platforms like Facebook and Google Photos. Since compression is usually lossy, we cannot expect the decrypted image to be identical to the original. But we want the decrypted image to be visually as close to the original image as possible. 
> There is a vast number of works on image encryption, mostly in the signal processing community, but they do not provide formal security analyses. We formally define security, covering the goals of image confidentiality and integrity. While we first treat the problem generically, we are particularly interested in the construction for the most common compression format, JPEG. We design a scheme for JPEG compression using the standard symmetric cryptographic tools and special pre- and post-processing.  We formally assess the security guarantees provided by the construction, discuss how to select the parameters using empirical experiments, and study performance of our scheme in terms of computational efficiency and decryption quality. We also build a browser plug-in that helps users store and share photos privately.
