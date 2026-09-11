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

<style>
  .jelly-roll-note-video {
    display: block;
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 65vh;
    max-height: 65svh;
    margin: 0 auto;
    object-fit: contain;
  }
</style>

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
  <p class="mt-2"><strong>Preprint:</strong> <a href="https://arxiv.org/abs/2606.08152"><em>Vision-Guided Dual-Arm Humanoid Robotic Disassembly of End-of-Life 18650 Lithium-ion Battery Packs</em></a></p>
  <h3>Questions about the approach</h3>
  <ul>
    <li>Why use “humanoid” in the title? I’m not yet convinced that the demonstrated system has enough humanoid features to justify the term.</li>
    <li>On page 5, the authors describe role specialization as a way to simplify bimanual planning. Why, then, allow the arms to exchange roles? On page 6, they say this extends the effective workspace. How does that improve coverage, and by how much?</li>
  </ul>
  <p><strong>Reading clarification:</strong> My interpretation is that the roles remain specialized within each phase: one arm stabilizes while the other extracts. In Section 4.5, the authors describe switching roles when the extracting arm reaches its workspace boundary, allowing extraction from the opposite side. They claim this effectively doubles the covered workspace; I still want to understand how that gain is measured. <a href="https://arxiv.org/html/2606.08152v1#S4.SS5">Source: extraction and support-transfer procedure.</a></p>
  <h3>To read and learn</h3>
  <ul>
    <li><strong>Reading list:</strong> <a href="https://www.sciencedirect.com/science/article/pii/S0278612524001109"><em>Robotised disassembly of electric vehicle batteries: A systematic literature review</em></a>.</li>
    <li><strong>Hough-circle cell localizer:</strong> A circle detector estimates centers and radii from image edges. Circular cell tops provide a useful geometric cue; depth and camera calibration then turn image detections into 3D positions. The preprint averages detections across frames to reduce noise. <a href="https://docs.opencv.org/4.12.0/d4/d70/tutorial_hough_circle.html">OpenCV explanation</a> · <a href="https://arxiv.org/html/2606.08152v1#S4.SS5">Paper implementation</a>.</li>
    <li><strong>RRT-Connect planner:</strong> A sampling-based motion planner grows trees from the start and goal configurations and tries to connect them through collision-free motions. It aims to find a feasible path quickly, without guaranteeing the shortest path. The preprint uses it for arm motion planning. <a href="https://ompl.kavrakilab.org/classompl_1_1geometric_1_1RRTConnect.html">OMPL explanation</a> · <a href="https://arxiv.org/html/2606.08152v1#S3.SS3">Paper implementation</a>.</li>
  </ul>
</details>

<details class="mb-3">
  <summary>Day 2</summary>
  <p class="mt-2">3D printing parts for the SO-101 follower arm. Next, I’ll 3D print the leader arm.</p>
  {% include video.liquid path="assets/projects/jelly-roll-peeling/videos/so-101-follower-print.webm" controls=true autoplay=true loop=true muted=true playsinline=true class="jelly-roll-note-video rounded" alt="3D printing parts for the SO-101 follower arm" caption="SO-101 follower-arm parts being 3D printed." %}
  <p>I was also studying the <a href="https://www.youtube.com/watch?v=-KAHiCb_8-s">battery disassembly video</a> and brainstorming ideas:</p>
  <ul>
    <li>How much do the black filaments falling from the layers affect AQI, and do we want to recover them? They appear very brittle and fragile.</li>
    <li>The person uses a razor blade. Would we want to mimic this approach, have one of the robot arms perform the initial cut, or use a more specialized machine?</li>
  </ul>
</details>

<details class="mb-3">
  <summary>Day 3</summary>
  <p class="mt-2">I’ve ordered the motors, driver, and power supply. I’m still looking for camera modules at a good price.</p>
  <p><strong>Continuing my reading:</strong> <a href="https://arxiv.org/abs/2606.08152"><em>Vision-Guided Dual-Arm Humanoid Robotic Disassembly of End-of-Life 18650 Lithium-ion Battery Packs</em></a>.</p>
    <h3>Questions about the paper</h3>
    <ul>
      <li><strong>Success rates:</strong> On page 13, I wanted to understand why they show the success rate for each phase as 10/10. It feels like too small a test sample, given that the goal is a safe and reliable system to disassemble batteries.<br>
        <strong>What I found:</strong> Showing 10/10 makes it clear how many tests they ran, which is useful. But ten successful tests don’t mean it will always work. With independent trials and a fixed success probability, the exact two-sided 95% confidence interval is about 69.2–100%. So my concern about the small sample still stands. <a href="https://www.itl.nist.gov/div898/software/dataplot/refman2/auxillar/exacbici.htm">NIST explanation</a>.</li>
      <li><strong>Wrist-camera offset:</strong> On the same page, the offset for the camera’s lateral mounting relative to the tool centre point is “measured once by a one-time calibration experiment.” Is that enough? Also, doesn’t this wording feel redundant?</li>
      <li><strong>Re-grasping:</strong> On page 14, they say the descend-and-re-grasp step removes <em>any</em> residual error introduced during transport. Is that a good statement? It sounds like it removes all the error. Is that even possible?<br>
        <strong>What I found:</strong> They don’t show a measurement proving that the error becomes zero. “Reduces the error introduced during transport” seems more reasonable to me. It would be nice to see the pose error before and after re-grasping. <a href="https://arxiv.org/html/2606.08152v1#S4.SS2">§4.2</a>.</li>
      <li><strong>Grip force:</strong> On pages 14 and 15, they mention a 10% reduction and then say Stage 3 uses reduced grip force. Were these reductions learned, chosen through experiments, or arbitrary? Also, is switching between “grip-force” and “grip force” a typo?<br>
        <strong>What I found:</strong> These settings are hand-tuned. The reduction in Stage 2 lets the assembly slide out under gravity, but I still don’t see how they chose the exact setting. The hyphen makes sense in “grip-force reduction,” where the words describe the reduction, so that part isn’t necessarily a typo. <a href="https://arxiv.org/html/2606.08152v1#S3.SS2">§3.2</a> · <a href="https://arxiv.org/html/2606.08152v1#S4.SS3">§4.3</a>.</li>
      <li><strong>Camera streams:</strong> On page 18, the camera streams are between 15 and 30 fps. I don’t understand if this is supposed to vary. Wouldn’t it be better to have them all capture at the same time to make synchronization easier?</li>
      <li><strong>Real battery packs:</strong> It would be nice to see this done on a real battery pack instead of a mock-up.</li>
    </ul>
  <h3>New concepts to study</h3>
  <ul>
    <li><strong>TSAI, PARK, HORAUD, ANDREFF, DANIILIDIS:</strong> Five hand-eye calibration methods for estimating the rigid camera-to-gripper transform from robot and target observations, commonly expressed as <code>AX = XB</code>. Tsai–Lenz, Park–Martin, and Horaud–Dornaika solve rotation and translation separately; Andreff–Horaud–Espiau and Daniilidis solve them simultaneously. Daniilidis uses dual quaternions. I’ll compare their assumptions and sensitivity to noise and pose diversity. <a href="https://docs.opencv.org/4.13.0/d9/d0c/group__calib3d.html">OpenCV calibration reference and original-paper citations</a>.</li>
    <li><strong>HSV gating:</strong> Keep pixels within chosen hue, saturation, and value ranges to create a color mask. In this paper, that mask is combined with a depth gate to isolate the lid. Thresholds can depend on lighting and object color. <a href="https://docs.opencv.org/5.0/tutorials/imgproc/threshold_inRange/threshold_inRange.html">OpenCV: color thresholding</a> · <a href="https://arxiv.org/html/2606.08152v1#S4.SS3">§4.3</a>.</li>
  </ul>
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
