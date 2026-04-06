---
published: "2026-04-06"
link: "https://eprint.iacr.org/2026/671"
authors: ["[[I\u00f1igo Diaz Iribarnegaray]]", "[[V\u00e1clav Gregor]]", "[[Florian L\u2019\u00e9cu Leal]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> In this work, we study the proposal for a linkable ring signature (LRS) in
> [KTS+24]. It is instantiated from the group action based 
> framework described in [BKP20], using the Lattice Isomorphism 
> Group Action (LIGA), meaning that the security of the signature rests on the famous Lattice Isomorphism Problem (LIP).
> 
> We will show that this signature does not in fact fit the requirements to be a linkable ring signature, despite the guarantees of the [BKP20] framework, due to it straying from that framework by using a non-commutative group for the
> group actions. More specifically, we will show that the signature from 
> [KTS+24] satisfies neither the property of correctness nor 
> linkability, which are required of a LRS.  
> 
> This further damages the signature, as it was already shown in 
> [BCF25] that the linkable anonymity property of [KTS24+]
> isn't satisfied. 
> 
> The group used in LIGA is the group of invertible integer matrices: 
> $\mathrm{GL}_n(\mathbb{Z})$. As the main obstacle in successfully applying the framework mentioned 
> above to construct a LRS based on LIP is the fact that this group 
> is non-commutative, we try fixing the signature by restricting 
> the secret key space to a commutative subgroup of $\mathrm{GL}_n(\mathbb{Z})$. 
> However, we will see that finding a commutative subgroup of $\mathrm{GL}_n(\mathbb{Z})$ that 
> maintains the hardness of the underlying LIP, and that at the same time 
> is realistic to use is not as easy as it may seem.
