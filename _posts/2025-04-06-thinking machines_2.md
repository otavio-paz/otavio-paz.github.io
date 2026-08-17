---
layout: post
title: Can machines think?
date: 2026-03-19 11:55:00
description: A collection of thoughts and arguments about consciousness, the mind, and robots
thumbnail: /assets/img/blog/marvin.gif
image_alt: Marvin the Paranoid Android reacting to a conversation about life
tags: robotics
categories: journal
toc:
  beginning: true
---

## Introduction

In this constantly changing post, I’ll do my best to define terms, acknowledge assumptions, discuss arguments, and give my opinions on the initial question and its implications. Most of them started from discussions I had in my CSCI 375 Ethics and Epistemology of AI class with Prof. McCarrin at Oberlin College.

One thing that I found interesting about the many arguments discussed on this topic is that they will eventually tell us more about ourselves than about the machines: whether our mind is fully material or not, whether we have free will or not, what “human understanding” is, and much more. Thus, and I think many fail to see this, the question posed can no longer be answered in isolation from the realm of Computer Science.

## Ways to frame the question

This section will be centered in providing the many questions and frameworks on how people should start thinking and analyzing anything that we start calling intelligent.

One recurring question during class was whether an author viewed intelligence as a byproduct of consciousness, and whether consciousness itself is material or immaterial.

We are off to a great start because we have to define another idea of "consciousness" and understand it if only applies to humans (and perhaps animals), so then we can extend it to machines and AIs. The question of whether consciousness is material is deeply philosophical, but I have come to recognize that the assumptions we make here can have major consequences for how we understand our own humanity.

If we answer that consciousness is material, then consciousness must somehow arise from processes occurring in the physical world. In principle, this means that those processes may be observable and describable through physical evidence, whether through neuroscience, increasingly sophisticated instruments, or methods that do not yet exist.

The next implication is that if consciousness is produced entirely by physical processes, an even more provocative possibility appears: could those processes eventually be reproduced artificially?

Perhaps this would mean recreating individual neurons synthetically. Perhaps it would require reproducing the organization of an entire brain. The exact method is less important here than the implication: if consciousness emerges from matter, then there may be no fundamental physical barrier preventing us from attempting to recreate the processes that produce it.

But accepting the materiality of consciousness raises a second, more unsettling question: **if consciousness arises entirely from physical processes, to what extent are we simply the products of our biology, stimuli, and environment?**

Suppose, for the sake of this thought experiment, that every relevant component involved in conscious experience could eventually be detected, estimated, and computed. If we had enough information about someone's internal state and everything acting upon them, could their next action theoretically be predicted? Is free will impossible under these assumptions?

{% include figure.liquid path="assets/img/blog/stimuli-drawing-1.png" alt="A person with arrows labeled stimuli, environment, actions, thoughts, and anything else?" title="Stimuli and environment" class="img-fluid rounded z-depth-1" %}

Can you see the ramification?

We could just subtract the human there and add a machine. Suddenly, the structures do not look so different. Both could be described as systems receiving information about themselves and their environments, processing that information, and producing actions with different probabilities. This is not entirely unlike the models we already train to assign probabilities to different outcomes.

{% include figure.liquid path="assets/img/blog/stimuli-drawing-2.png" alt="A second version of the stimuli and environment diagram" title="Stimuli and environment" class="img-fluid rounded z-depth-1" %}

Are humans simply extraordinarily sophisticated machines made of carbon? Are we just self-centered enough to invent a special vocabulary for machine when it comes to our existence? Is there something fundamentally different about human consciousness, or are the differences between humans and machines ultimately differences of complexity, architecture, and material?

And if the distinction between biological and artificial minds becomes increasingly difficult to defend, another question follows: could the same reasoning we use to justify human moral status eventually require us to recognize some form of moral consideration, personhood, or rights for machines?

These questions do not necessarily give us an answer to what intelligence is. But they begin to reveal why defining intelligence, and deciding which beings or systems possess it, is much more consequential than it may initially appear.

## Stochastic parrots

Right now, I want to focus on the idea of stochastic parrots discussed by Bender et al. (2021). I recommend reading the article because I will not be just summarizing its claims.

What makes the "stochastic parrot" critique so interesting is that many of the rebuttals to it seem to answer a weaker claim than the one Bender et al. were actually focusing on. The easy rebuttal is: these systems are not merely copying and pasting their training data with some probabilistic magic. Fair enough. With fine-tuning and post-training methods, LLMs can in fact become more coherent, produce correct outputs, and have some level of ground-truth checking in a certain context. That much is true to the extent I understand, but I do not think this really settles the deeper issue.

The stronger version of the parrots argument is not about this probabilistic bird, but more the way we see them. We have a tendency to encounter fluent language and immediately infer mind, intention, understanding, and even personhood. For now, I lack immediate good sources to corroborate this claim. Oddly enough, one analogy that comes to my mind is from Frieren: Beyond Journey's End. The comparison may sound fantastical, but I think it gets at something real. In Frieren, demons, a race of human-eating monsters, can reproduce human speech not because they share human feelings, but because they learn which words affect humans and how we empathize when we feel like we are talking with another being. A demon might learn to say "mom" when it is attacked, not out of love, empathy, or if the human is a mom or not. This demon has simply learned that the word can keep humans from ki\*\*\*ng it. In an analogous way, LLMs can produce language associated with wisdom, honesty, or even care without possessing any of those qualities, and instinctively we add those qualities to the thing that is chatting with us.

Other than that, I believe the focus is understanding and acknowledging the limitations of any LLM. I fear that with the many implementations of agentic AI may not be advertising enough the limitations of such systems. Similarly, if you try to make a parrot say something that has never been said, these models often cannot and, specifically, will hallucinate because there is no data to help predict the next chunk based on existing ones. We truly need a next "Attention is all you need" article to develop another infrastructure that is based on the logic of our world, the physics, the mathematics, and above all our human principles (hopefully good ones).

## Determining "thinking"

The next question that came to me after this discussion is: how can we determine when a machine can think?

---

## References

[1] Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big? In Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (pp. 610–623). ACM. https://doi.org/10.1145/3442188.3445922
