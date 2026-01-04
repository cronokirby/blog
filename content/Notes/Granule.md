---
created: 2026-01-02
tags:
  - programming
  - functional-programming
  - linear-types
---
The most promising approach I've seen to integrating [[Linear Type|Linear Types]] in an effective way. They've also thought about how to do borrowing, and other things.

# Publications

Being a research language, some academic papers have been written about aspects of the language.

- [[(2016) Combining Effects and Coeffects via Grading]]
    - One interesting aspect of Granule is that it uses grading both for resource usage, but also for effect usage. This is an earlier paper with first work towards this.
- [[(2019) Quantitative Program Reasoning with Graded Modal Types]]
    - The core explanation of using grading for resource tracking.
- [[(2021) Deriving Distributive Laws for Graded Linear Types]]
    - One advantage of grading is recovering [[Parametricity (Functional Programming)|Parmatricity]].
- [[(2021) Graded Modal Dependent Type Theory]]
    - Combining grading and [[Dependent Type|Dependent Types]].
- [[(2021) Resourceful Program Synthesis from Graded Linear Types]]
    - The grading information is useful to generate programs from a type signature. Often, only a single program is possible, given the resource usage.
- [[(2021) Linear Exponentials as Graded Modal Types]]
    - In straight linear systems, you have a modality for being able to use a value an arbitrary number of times, cf. [[Exponential (Linear Programming)]].
- [[(2022) Linearity and Uniqueness; An Entente Cordiale]]
    - Adds [[Uniqueness Type|Uniqueness Types]] to the grading system.
- [[(2024) Functional Ownership through Fractional Uniqueness]]
    - One of the most interesting and promising aspects of Granule is the possibility of implementing borrowing, which is something that seems lacking in other attempts at [[Linear Functional Programming]].
- [[(2025) On Graded Coeffect Types for Information-Flow Control]]