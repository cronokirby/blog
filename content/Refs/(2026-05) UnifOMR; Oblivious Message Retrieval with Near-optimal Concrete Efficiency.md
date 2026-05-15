---
published: "2026-05-09"
link: "https://eprint.iacr.org/2026/910"
authors: ["[[Ben Fisch]]", "[[Zeyu Liu]]", "[[Eran Tromer]]", "[[Yunhao Wang]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> End-to-end encryption guarantees message confidentiality but does not hide metadata such as communication patterns among senders and recipients, or their identities. Oblivious Message Retrieval (OMR) is a cryptographic protocol that enables servers to assist recipients in retrieving their messages from a database without learning the mapping between messages and recipients, thereby protecting such metadata.  
> 
> This paper investigates two central questions of OMR: (1) What is the precise relationship between OMR and the better-studied primitive of Private Information Retrieval (PIR)?  (2) Can OMR schemes achieve concrete efficiency comparable to state-of-the-art PIR protocols?  
> 
> We show that OMR with a property we call strong detection-key-unlinkability is at least as hard as PIR, and that existing OMR constructions already satisfy this property. This PIR-to-OMR reduction has low overhead, suggesting that OMR cannot be made substantially more efficient than PIR.
> 
> We then present $\mathsf{UnifOMR}$, which achieves $20\times$ to $1080\times$ faster server runtime over the state-of-the-art $\mathsf{SophOMR}$ under practical parameter settings. For $2^{19}$ messages of 612 bytes each, $\mathsf{UnifOMR}$ completes in only ${\sim}25$ seconds with 4 MB of communication, compared to $>1250$ seconds and 260 KB for $\mathsf{SophOMR}$. These gains come with two trade-offs: an asymptotically linear digest size (albeit with small constants), and two rounds of interaction between the detector and the client.
> 
> 
> Furthermore, crucially, $\mathsf{UnifOMR}$ uses batch PIR as a black-box component, which in our experiments accounts for $50$--$92\%$ of the server runtime. Thus, $\mathsf{UnifOMR}$ nearly matches the aforementioned lower bound concretely (for databases of $2^{16}$ to $2^{23}$ messages, each with $612$ to $3060$ bytes), given the status quo of batch PIR.
