---
published: "2026-06-23"
link: "https://eprint.iacr.org/2026/1308"
authors: ["[[Xiyuan Fu]]", "[[Zixing Wang]]", "[[Hongbo Wang]]", "[[Yu Chen]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Audio recordings are often used as evidence, but modern forgery tools make their origin harder to verify. Existing authentication methods require releasing the original signed recording, which exposes sensitive source content as well as provenance information. Redacting the audio avoids that disclosure, but doing so also invalidates the original signature. Revealing the edit operations to prove edit compliance can also disclose the redacted content. This creates a conflict for existing approaches: authenticating a released audio file requires disclosing the original audio, edit operations, or identity of the recording device, but preserving privacy requires keeping all three hidden.
> 
> In this work, we propose  (PPAAS). PPAAS uses a single relation that binds source provenance and edit correctness to the same hidden witness. This witness includes both the attested source recording and device attestation, so the verifier can be convinced that the released audio came from an authorized device and was obtained through allowed edits, without learning the source recording, the edit operations, or which enrolled device produced it. We formalize this notion and provide two constructions adapted to different editing scenarios. The first is a  construction that requires zero-knowledge proofs only for actively edited segments and is therefore well-suited to sparse edits. The second is an  construction that uses Incrementally Verifiable Computation (IVC) with zero-knowledge compression to fold repeated checks into a single proof, which is efficient for dense edits. Our evaluations show the practicality of both constructions: the segmentation-based approach minimizes cost for sparse edits, whereas the iteration-based approach becomes preferable as edit density increases.
