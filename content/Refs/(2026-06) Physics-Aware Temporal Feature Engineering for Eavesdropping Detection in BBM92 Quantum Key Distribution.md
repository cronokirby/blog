---
published: "2026-06-18"
link: "https://eprint.iacr.org/2026/1282"
authors: ["[[Saksham Gupta]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Static Quantum Bit Error Rate (QBER) thresholding is the standard defense mechanism in deployed Quantum Key Distribution (QKD) systems. In noisy free-space optical (FSO) channels, however, natural atmospheric variations can camouflage short, low-intensity eavesdropping bursts, rendering fixed thresholds ineffective. This paper investigates physics-aware temporal feature engineering for machine learning-based anomaly detection in entanglement-based BBM92 QKD telemetry. A 24-dimensional feature space is computed over a 30-second sliding window, characterizing the temporal evolution and cross-observable correlations of QBER, the Bell S parameter, and photon coincidence rates. Evaluated on a simulated FSO telemetry dataset spanning 24 hours across five random seeds, static QBER thresholding achieves only 17.3% recall against blended sub-threshold attacks, while an XGBoost classifier trained on the proposed feature set achieves 96.9% recall and 97.6% precision within the same simulation framework. SHAP analysis suggests that detection is driven less by absolute error magnitude than by anomalous temporal decoupling between independent quantum observables. These results indicate that physics-aware temporal representations may improve resilience to stealthy attack strategies in simulated BBM92 environments, although validation on operational hardware and real telemetry remains an important direction for future work.
