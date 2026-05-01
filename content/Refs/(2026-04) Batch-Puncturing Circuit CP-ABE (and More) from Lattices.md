---
published: "2026-04-21"
link: "https://eprint.iacr.org/2026/783"
authors: ["[[Yongkang Lang]]", "[[Fangguo Zhang]]", "[[Jianghong Wei]]", "[[Xinyi Huang]]", "[[Xiaofeng Chen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Puncturable attribute-based encryption ($\mathsf{PABE}$) not only supports fine-grained access control over encrypted data, but also enables users to revoke the decryption capability for specific messages by puncturing tags, thereby achieving fine-grained forward security. It finds wide applications in scenarios such as sharing government classified documents and personal health records. However, existing $\mathsf{PABE}$ schemes only support tag-by-tag puncturing, where each puncturing operation is done through key delegation, which causes the key size to grow with the number of punctured tags. This inefficiency makes $\mathsf{PABE}$ impractical in scenarios that require frequent puncturing or mass revocations. To address this limitation, it is crucial to support batch puncturing of tags, i.e., the decryption capability for messages associated with multiple tags can be revoked simultaneously via a single puncture. 
> 
> In this work, we construct a ciphertext-policy attribute-based encryption ($\mathsf{CPABE}$) scheme for circuits with batch-puncturing. Notably, the size of the punctured key in our scheme is independent of the number of punctured tags, as well as the size and depth of the circuits. This is achieved by leveraging the evasive learning with errors ($\mathsf{LWE}$) and tensor $\mathsf{LWE}$ assumptions. In addition, we observe that puncturable $\mathsf{CPABE}$ can be re-stated by dual-policy $\mathsf{ABE}$ ($\mathsf{DPABE}$) with key delegation, and generalize batch-puncturing $\mathsf{CPABE}$ to provide the first lattice-based construction of $\mathsf{DPABE}$ for circuits. Moreover, inspired by the observation of Agrawal and Yamada (Eurocrypt '20), we introduce the puncturing property into optimal broadcast encryption ($\mathsf{BE}$), capturing a new primitive called puncturable $\mathsf{BE}$, which allows the receiver to securely erase sensitive messages without communicating with the authority.
