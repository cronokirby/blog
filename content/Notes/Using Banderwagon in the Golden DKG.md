---
created: 2026-06-24
tags:
  - cryptography
---
[Golden](https://eprint.iacr.org/2025/1924) is a neat DKG scheme, making use of an Elliptic-Curve based VRF:

$$
\begin{align}
k &\leftarrow x(\text{sk} \cdot \text{Pk}) \\
o &\leftarrow x(k \cdot H_0(m)) + \alpha \cdot x(k \cdot H_1(m))
\end{align}
$$

(some details omitted, but that's the core of it)

This needs to be represented in a ZK circuit, with that circuit's field being whatever you're doing a DKG for. So, if you're doing a DKG for BLS, the circuit will be using the BLS scalar field, and you'll need an Elliptic Curve over this field.

The [Bandersnatch](https://eprint.iacr.org/2021/1152) curve is exactly what you need here, but comes with the annoying downside of having a cofactor. You need to consider this when doing the Diffie-Hellman exchange, and even more so when signing, which complicates the protocol design a bit.

You can avoid these concerns using the [Decaf construction]https://eprint.iacr.org/2015/673), creating a prime order group out of this curve, called [Banderwagon](https://hackmd.io/@kevaundray/BJBNcv9fq). This works in two steps:
- first, you eliminate half of the curve by doing an extra check on incoming claimed group elements, removing some points on the curve but not in the subgroup,
- second, you eliminate the remaining half by identifying $P$ and $-P$, for any given point.

The latter check means that we consider $(x, y)$ to be the same point as $(-x, -y)$. Whenever we compare points for equality, we can check $x_0 y_1 \overset{?}{=} x_1 y_0$ which neatly takes this into account.

Unfortunately, this poses a problem for our neat VRF, where we need to use the x coordinate of a point. When serializing a point, we can get a "canonical" x coordinate by considering the sign of y, but computing the sign inside of the circuit is very expensive, because witnessing the bits of a field element is not cheap.

Thankfully, we can get around this by simply using $x^2(P)$ instead of $x(P)$ inside. $x^2(P)$ is a true function of our quotient group, and everything works out.