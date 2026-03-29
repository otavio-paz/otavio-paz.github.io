---
layout: post
title: Can machines think?
date: 2026-03-19 11:55:00
description: A collection of thoughts and arguments about consciousness, the mind, and robots
tags: robotics
categories: journal
---

# Can machines think?

In this constantly changing post, I’ll do my best to define terms, acknowledge assumptions, discuss arguments, and give my opinions on the initial question and its implications. Most of them come from discussions I had in my CSCI 375 Ethics and Epistemology of AI class with Prof. McCarrin at Oberlin College.

One thing that I found interesting about the many arguments discussed on this topic is that they will eventually tell us more about ourselves than about the machines themselves: whether our mind is fully material or not, whether we have free will or not, what “human understanding” is, and much more. Thus, and I think many fail to see this, the question posed can no longer be answered in isolation from the realm of Computer Science.

Perhaps in the future I’ll add a table of contents with the different arguments and definitions.

- Stochastic Parrots

Right now, I want to focus on the idea of stochastic parrots discussed by Bender et al. (2021). I recommend reading the article because I will not be just summarizing its claims.

What makes the "stochastic parrot" critique so interesting is that many of the rebuttals to it seem to answer a weaker claim than the one Bender et al. were actually focusing on. The easy rebuttal is: these systems are not merely copying and pasting their training data with some probabilistic magic. Fair enough. With fine-tuning and post-training methods, LLMs can in fact become more coherent, produce correct outputs, and have some level of ground-truth checking in a certain context. That much is true to the extent I understand, but I do not think this really settles the deeper issue.

The stronger version of the parrots argument is not about this probabilistic bird, but more the way we see them. We have a tendency to encounter fluent language and immediately infer mind, intention, understanding, and even personhood. For now, I lack good sources to corroborate this claim. Oddly enough, one analogy that comes to my mind is from Frieren: Beyond Journey's End. The comparison may sound fantastical (or foolish), but I think it gets at something real. In Frieren, demons, a race of human-eating monsters, can reproduce human speech not because they share human feelings, but because they learn which words affect humans and how we empathize when we feel like we are talking with another being. A demon might learn to say "mom" when it is attacked, not out of love, empathy, or if the human is a mom or not. This demon has simply learned that the word can keep humans from ki***ng it. In an analogous way, LLMs can produce language associated with wisdom, honesty, or even care without possessing any of those qualities, and instinctively we add those qualities to the thing that is chatting with us.

Other than that, I believe the focus is understanding and acknowledging the limitations of any LLM. I fear that with the many implementations of agentic AI may not be adversting enough the limitations of such systems. Similarly, if you try to make a parrot say something that has never been said, these models often cannot and, specifically, will hallucinate because there is no data to help predict the next chunk based on existing ones. We truly need a next "Attention is all you need" article to develop another infrastructure that is based on the logic of our world, the physics, the mathematics, and above all our human principles (hopefully good ones).

- Determining "thinking"

The next question that came to me after this discussion is: how can we determine when a machine can think?

---

References:

[1] Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big? In Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (pp. 610–623). ACM. https://doi.org/10.1145/3442188.3445922
