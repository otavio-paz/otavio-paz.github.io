---
layout: page
title: Vision-Guided Jelly-Roll Peeling
description: Ongoing research into battery unrolling, vision and force feedback, and DQI development.
img: assets/projects/jelly-roll-peeling/images/peeling.png
importance: 3
featured: true
category: work
giscus_comments: false
skills:
  - Computer vision
  - Robotic manipulation
  - Simulation
---

**In progress · Initial two-week research plan**

I’m exploring how vision and force feedback could guide the peeling and unrolling of a battery’s jelly roll, and how process measurements could support DQI development. This is an ongoing study: the tasks below may take more or less than two weeks, and I may continue if I see opportunities to contribute further.

{% include figure.liquid loading="eager" path="assets/projects/jelly-roll-peeling/images/peeling.png" alt="Gloved hands peeling apart the layers of a cylindrical battery jelly roll" class="img-fluid rounded z-depth-1" %}

<div class="caption">Image credit: still from <a href="https://www.youtube.com/watch?v=-KAHiCb_8-s">this battery disassembly video on YouTube</a>.</div>

I’ve watched the battery peeling and unrolling process in the video to better understand how the layers separate and how the peel front moves.

## Reading now

I’m carefully reading Prof. Yunzhu Li and coauthors’ [Real-to-Sim Robot Policy Evaluation with Gaussian Splatting Simulation of Soft-Body Interactions](https://arxiv.org/abs/2511.04665), alongside [Vision-Guided Dual-Arm Humanoid Robotic Disassembly of End-of-Life 18650 Lithium-ion Battery Packs](https://arxiv.org/abs/2606.08152).

My annotated papers in Goodnotes:

- [Real-to-Sim policy evaluation — Prof. Li and coauthors](https://web.goodnotes.com/s/usYQ3F6cLTUBr77uIGQrWX)
- [Battery disassembly — main paper](https://web.goodnotes.com/s/TprbzPBVZq2XgNavq0boNf#page-1)

## Tentative two-week plan

- **Days 1–3:** Map research gaps, collect and annotate video frames, define candidate DQI features, and establish a classical vision baseline.
- **Days 4–5:** Train and evaluate a lightweight peel-front model; estimate position, orientation, and confidence over video.
- **Days 6–7:** Build a simplified MuJoCo peeling surrogate and synchronize simulated vision, force, and displacement.
- **Days 8–10:** Compare open-loop motion with force feedback, then combine vision and force for closed-loop control.
- **Days 11–12:** Explore lightweight predictive control and test robustness to changing conditions.
- **Days 13–14:** Connect process features to a future material-quality validation plan and document findings, limitations, and next steps.

The initial work will use video and simulation. Force, energy, and tracking measurements would be candidate DQI predictors; assessing recovery quality and contamination would require later material measurements.

## Daily notes

<!-- Add dated notes inside each day's details block. These are editable source placeholders, not a live journal form. -->
<details class="mb-3">
  <summary>Day 1</summary>
  <p class="mt-2"><em>Notes to come.</em></p>
</details>

<details class="mb-3">
  <summary>Day 2</summary>
  <p class="mt-2"><em>Notes to come.</em></p>
</details>

<details class="mb-3">
  <summary>Day 3</summary>
  <p class="mt-2"><em>Notes to come.</em></p>
</details>

<details class="mb-3">
  <summary>Day 4</summary>
  <p class="mt-2"><em>Notes to come.</em></p>
</details>

<details class="mb-3">
  <summary>Day 5</summary>
  <p class="mt-2"><em>Notes to come.</em></p>
</details>

<details class="mb-3">
  <summary>Day 6</summary>
  <p class="mt-2"><em>Notes to come.</em></p>
</details>

<details class="mb-3">
  <summary>Day 7</summary>
  <p class="mt-2"><em>Notes to come.</em></p>
</details>

<details class="mb-3">
  <summary>Day 8</summary>
  <p class="mt-2"><em>Notes to come.</em></p>
</details>

<details class="mb-3">
  <summary>Day 9</summary>
  <p class="mt-2"><em>Notes to come.</em></p>
</details>

<details class="mb-3">
  <summary>Day 10</summary>
  <p class="mt-2"><em>Notes to come.</em></p>
</details>

<details class="mb-3">
  <summary>Day 11</summary>
  <p class="mt-2"><em>Notes to come.</em></p>
</details>

<details class="mb-3">
  <summary>Day 12</summary>
  <p class="mt-2"><em>Notes to come.</em></p>
</details>

<details class="mb-3">
  <summary>Day 13</summary>
  <p class="mt-2"><em>Notes to come.</em></p>
</details>

<details class="mb-3">
  <summary>Day 14</summary>
  <p class="mt-2"><em>Notes to come.</em></p>
</details>
