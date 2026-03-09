---
published: "2026-03-03"
link: "https://eprint.iacr.org/2026/429"
authors: ["[[Pranav Shriram Arunachalaramanan]]", "[[Ananya Appan]]", "[[David Heath]]", "[[Ling Ren]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Range queries can filter, aggregate, and retrieve database entries that lie in a specified multi-dimensional rectangle. 
> Private range queries allow a client to query a server's public database while keeping the client's multi-dimensional rectangle hidden.
> 
> We construct RangeR, a constant-round private range query scheme that supports any associative aggregation function (e.g., SUM, MAX, TOP-K) and works with any number of servers. In the single-server setting, RangeR is orders of magnitude faster and uses 50%-90% less communication than HADES (VLDB 2025), a prior single-server private range query scheme that only supports linear aggregation functions. 
> 
> We describe how RangeR can be used to implement a privacy-preserving map application that can return the highest-rated restaurants near a user. Using data from $\mathtt{OpenStreetMaps}$, we estimate that a user can find the highest-rated restaurants within one kilometer of their location within $2$ seconds, while revealing only that the user is somewhere in the USA.
