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

## Ways to frame the question

In this constantly changing post, I’ll do my best to define terms, acknowledge assumptions, discuss arguments, and give my opinions on the initial question and its implications. Most of them started from discussions I had in my CSCI 375 Ethics and Epistemology of AI class with Prof. McCarrin at Oberlin College.

One thing that I found interesting about the many arguments discussed on this topic is that they will eventually tell us more about ourselves than about the machines: whether our mind is fully material or not, whether we have free will or not, what “human understanding” is, and much more. Thus, and I think many fail to see this, the question posed can no longer be answered in isolation from the realm of Computer Science.

This section will be centered in providing the many questions and frameworks on how people should start thinking and analyzing anything that we start calling intelligent.

One of the recurrent questions during class was whether an author viewed intelligence as a byproduct of consciousness and whether consciousness is material or immaterial.

We are off to a great start because we have to define another idea of "consciousness" and understand it if only applies to humans (and perhaps animals), so then we can extend it to machines and "AIs". Now, the question of materiality is really philosophical as one can imagine, but I've recognized that this assumption could have major complications in the way we see our humanity.

If one answers that consciousness is material, I believe we can agree (without making a logic jump) that therefore we can explain consciousness with physical evidence, whether by detecting it using probes and specialized machine. In any way, it is present in nature and is manifested. Humanity has the chance to find it and replicate it artificially. This could be recreating our neurons synthetically or our entire brain.

The next implication is: if there is materiality to our consciousness, are we byproduct of all stimuli and environment? The assumption is that all components of one's mind (here I am using mind as an equivalent term to consciousness) can be detected, estimated, and computed. Our actions could be predicted to the millisecond if all stimuli were accounted for, perhaps we might be able to add randomness as part of this system.

{% include figure.liquid path="assets/img/blog/stimuli-drawing-1.png" alt="A person with arrows labeled stimuli, environment, actions, thoughts, and anything else?" title="Stimuli and environment" class="img-fluid rounded z-depth-1" %}

Can you see the ramification?

We could just subtract the human there and add a machine. We could be a functional that takes many variables and spits out an probability for actions. The same way we can train models and have a predictions of certain outcomes. Therefore, what truly defines humanity? Are we machines made out carbon who have the ingenuity to call ourselves as a fancy word for a special biological machine. Can this be used to expand human rights to machines?

{% include figure.liquid path="assets/img/blog/stimuli-drawing-2.png" alt="A second version of the stimuli and environment diagram" title="Stimuli and environment" class="img-fluid rounded z-depth-1" %}

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
