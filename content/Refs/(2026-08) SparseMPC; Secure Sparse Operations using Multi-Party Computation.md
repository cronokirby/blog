---
published: "2026-08-13"
link: "https://eprint.iacr.org/2026/1675"
authors: ["[[Marc Damie]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Multi-party computation (MPC) enables multiple parties to jointly process sensitive data without revealing their inputs. However, existing MPC protocols remain inefficient for high-dimensional sparse data. In plaintext, sparse linear algebra algorithms address this problem using two fundamental primitives, Scatter and Gather.
> 
> We propose SparseMPC, an outsourced MPC protocol that securely implements Scatter and Gather and uses them to perform sparse matrix multiplication. Our protocol supports an arbitrary number of data owners and provides a low memory footprint, constant round complexity, and low communication cost. Beyond sparse matrix multiplication, SparseMPC provides a foundation for efficiently realizing a broader class of sparse computations in outsourced MPC.
