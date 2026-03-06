---
published: "2026-02-19"
link: "https://eprint.iacr.org/2026/324"
authors: ["[[Gowri R Chandran]]", "[[Melek \u00d6nen]]", "[[Thomas Schneider]]"]
tags: ["cryptography", "paper"]
---

# Abstract

> Federated Learning (FL) is a collaborative Machine Learning (ML) process where clients locally train an ML model on their private inputs, and send it to a server that aggregates the local model updates to obtain a global model update. FL is widely used in applications where the training data is distributed among several clients, e.g., for next word prediction in Google keyboard (Gboard). Nevertheless, FL faces several challenges concerning privacy and security. 1) Client privacy needs to be preserved by employing defenses against inference attacks using Secure Aggregation (SA) protocols. 2) The security of the model has to be defended against poisoning and backdoor attacks, e.g., by using clustering or filtering algorithms.
> 
> In this work, we present FLiPD,  an optimised SA protocol for FL that protects against several attacks via a combination of Multi-Party Computation (MPC) and Differential Privacy (DP) mechanisms. We provide defenses against both inference and backdoor attacks. Moreover, by applying distributed DP noise generation, we show that our protocol is secure even when the majority of the clients collude with a server. 
> 
> As opposed to existing solutions, in FLiPD, the client-server communication cost is essentially the same as in unprotected FL, which sends plaintext updates. Furthermore,  the server-server communication cost is slightly lower (by 11%) than the state-of-the-art Prio+ (Addanki et al., SCN'22). In addition, we examine the accuracy of FLiPD both in the presence and absence of attacks. We achieve 87% accuracy for a Linear Regression model trained on the HAR dataset, and 90% for a Convolution Neural Network trained on the MNIST dataset.
