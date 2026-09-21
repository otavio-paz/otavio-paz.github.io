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
  .jelly-roll-day { margin-top: 2.5rem; }
  .jelly-roll-day h2 { scroll-margin-top: 6rem; }
  .jelly-roll-contents { margin: 1.5rem 0 2rem; }
  .jelly-roll-contents li { margin-bottom: .3rem; }
</style>

**In progress · Initial two-week research plan**

I’m exploring how vision and force feedback could guide the peeling and unrolling of a battery’s jelly roll, and how process measurements could support DQI development. This is an ongoing study: the tasks below may take more or less than two weeks, and I may continue if I see opportunities to contribute further.

<nav aria-label="Project contents" class="jelly-roll-contents">
  <h2>Contents</h2>
  <ul>
    <li><a href="#reading-now">Reading now</a></li>
    <li><a href="#tentative-two-week-plan">Tentative two-week plan</a></li>
    <li><a href="#day-1">Day 1</a> — Paper questions and vision/planning concepts</li>
    <li><a href="#day-2">Day 2</a> — Follower-arm printing and disassembly ideas</li>
    <li><a href="#day-3">Day 3</a> — Hardware orders and further paper notes</li>
    <li><a href="#day-4">Day 4</a> — First battery simulation, leader print, and servos</li>
    <li><a href="#day-5">Day 5</a> — SO-101 pick-and-place simulation</li>
    <li><a href="#day-6">Day 6</a> — Battery quality, cutting ideas, and soft-body modeling</li>
    <li><a href="#day-7">Day 7</a> — Peeling trajectories and deformable-model implementation</li>
    <li><a href="#day-8">Day 8</a> — Young’s modulus literature and model assumptions</li>
    <li><a href="#day-9">Day 9</a> — Major simulation update, verification, and next steps</li>
    <li><a href="#day-10">Day 10</a> — Notes to come</li>
    <li><a href="#day-11">Day 11</a> — Notes to come</li>
    <li><a href="#day-12">Day 12</a> — Notes to come</li>
    <li><a href="#day-13">Day 13</a> — Notes to come</li>
    <li><a href="#day-14">Day 14</a> — Notes to come</li>
  </ul>
</nav>

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

<!-- Add dated notes inside each day section. -->
<section class="jelly-roll-day" aria-labelledby="day-1">
  <h2 id="day-1">Day 1</h2>
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
</section>

<section class="jelly-roll-day" aria-labelledby="day-2">
  <h2 id="day-2">Day 2</h2>
  <p class="mt-2">3D printing parts for the SO-101 follower arm. Next, I’ll 3D print the leader arm.</p>
  {% include video.liquid path="assets/projects/jelly-roll-peeling/videos/so-101-follower-print.webm" controls=true autoplay=true loop=true muted=true playsinline=true class="jelly-roll-note-video rounded" alt="3D printing parts for the SO-101 follower arm" caption="SO-101 follower-arm parts being 3D printed." %}
  <p>I was also studying the <a href="https://www.youtube.com/watch?v=-KAHiCb_8-s">battery disassembly video</a> and brainstorming ideas:</p>
  <ul>
    <li>How much do the black filaments falling from the layers affect AQI, and do we want to recover them? They appear very brittle and fragile.</li>
    <li>The person uses a razor blade. Would we want to mimic this approach, have one of the robot arms perform the initial cut, or use a more specialized machine?</li>
  </ul>
</section>

<section class="jelly-roll-day" aria-labelledby="day-3">
  <h2 id="day-3">Day 3</h2>
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
</section>

<section class="jelly-roll-day" aria-labelledby="day-4">
  <h2 id="day-4">Day 4</h2>
  <p class="mt-2">I’ve set up the Python environment and added the first battery model to the <a href="https://github.com/otavio-paz/battery-robot">project repository</a>. The setup checks cover MuJoCo, OpenCV, and PyTorch/TorchVision on CPU and CUDA.</p>
  <p>The first model is a rigid 18650 cylinder in MuJoCo, using nominal dimensions of 18 × 65 mm and an assumed mass of 45 g. It’s a starting point for the simulation; peeling, adhesion, and layer deformation still need to be added. Next, I’m planning to work on the roll and a simple peeling model. <a href="https://github.com/otavio-paz/battery-robot/blob/main/docs/setup-and-modeling.md">Setup and modeling notes</a>.</p>
  <div class="row">
    <div class="col-sm-6">
      {% include figure.liquid path="assets/projects/jelly-roll-peeling/images/battery-v1.png" alt="First MuJoCo model of a cylindrical 18650 battery on a plane" class="img-fluid rounded" caption="First rigid battery model in MuJoCo." %}
    </div>
    <div class="col-sm-6">
      {% include figure.liquid path="assets/projects/jelly-roll-peeling/images/battery-v1-edges.png" alt="Edge-detection output outlining the simulated battery" class="img-fluid rounded" caption="OpenCV edge-detection output from the setup check." %}
    </div>
  </div>
  <p>The leader-arm print is done, and the servos arrived. I noticed that some of the printed parts fit too tightly, even though I checked the gauge beforehand. I’m planning to file them down instead of printing them again.</p>
  {% include figure.liquid path="assets/projects/jelly-roll-peeling/images/leader-print-and-servos.jpg" alt="Finished blue 3D-printed leader-arm parts beside the newly arrived servos" class="jelly-roll-note-video rounded" caption="Finished leader-arm parts and the servos that arrived." %}
</section>

<section class="jelly-roll-day" aria-labelledby="day-5">
  <h2 id="day-5">Day 5</h2>
  <p class="mt-2">I’ve added the SO-101 arm to the MuJoCo scene, with a desk close to the size of mine and a target for the battery. The arm model comes from <a href="https://github.com/google-deepmind/mujoco_menagerie/tree/8161bba264d7fa7c99ca301e91e7fb44737676ad/robotstudio_so101">MuJoCo Menagerie</a>.</p>
  <p>I’m using numerical inverse kinematics to move through a basic pick-and-place sequence: approach, lower, grasp, lift, transfer, place, release, and retreat. The battery is picked up through simulated contact with the gripper. This is a scripted sequence, with friction values that still need validation.</p>
  {% include video.liquid path="assets/projects/jelly-roll-peeling/videos/so101-pick-and-place.webm" poster="assets/projects/jelly-roll-peeling/images/so101-pick-and-place.jpg" controls=true autoplay=true loop=true muted=true playsinline=true class="jelly-roll-note-video rounded" alt="SO-101 arm picking up and placing a battery in MuJoCo" caption="Pick-and-place simulation. The battery tips onto its side after release." %}
  <p>The simulation passes the lift and placement checks without physics warnings, but the battery ends up on its side, about 3.4 cm from the target center. So there’s still work to do on the release and placement. Next, I want to try peeling a layer with the battery fixed in place, and possibly add the second arm.</p>
  <p>I still need to file down the 3D-printed parts. I’ll be doing that tomorrow.</p>

  <p><a href="https://github.com/otavio-paz/battery-robot/commit/8f0b72c436da9397957cc13e4a8b52c3bd2b8a36">Day 5 code update</a> · <a href="https://github.com/otavio-paz/battery-robot/blob/8f0b72c436da9397957cc13e4a8b52c3bd2b8a36/docs/so101-scene.md">Scene details and assumptions</a></p>
  
</section>

<section class="jelly-roll-day" aria-labelledby="day-6">
  <h2 id="day-6">Day 6</h2>
  <p>I also watched <a href="https://www.youtube.com/watch?v=-Y23nfAOiXQ">this video about Lumafield’s battery research</a>, which gave me some amazing insights I wasn’t aware of. The main point I took from it is that 18650 batteries can have very different qualities depending on the manufacturer, or whether they are knockoffs of famous brands. Lumafield did some great research on the quality of different brands and the possible risks. This is useful information for the actual implementation of this research, which might deal with many different batteries.</p>
  <p>This made me think about adding a thermal camera system to continuously monitor the battery’s temperature and stop the robot’s instructions if it starts to warm up. I’m also thinking about a protocol for moving the battery to a containment box. I initially thought of a sealed box, but I still need to understand what containment would be appropriate and whether moving a warming battery would be safe.</p>
  <p>The robot needs to be robust enough to deal with the small, but important, mechanical differences between batteries.</p>
  <p>I also wonder if it would be necessary to build a separate machine specifically to cut the protective layer, and then let the robotic hands do the peeling and unrolling.</p>
  <p>I watched <a href="https://www.youtube.com/watch?v=per8ybI55bI">this battery disassembly video</a> too, and I really like the idea of using a pipe cutter to cut the top and bottom of the battery. I could design a way to drive it with a motor and possibly control the force or torque applied. It’s an idea I want to explore for the cutting stage.</p>
  {% include figure.liquid path="assets/projects/jelly-roll-peeling/images/pipe-cutter-video-still.png" alt="Video still showing a small pipe cutter positioned around the end of a cylindrical battery" class="jelly-roll-note-video rounded" caption="Pipe-cutter idea. Still from the battery disassembly video linked below." %}
  <div class="embed-responsive embed-responsive-16by9 mb-3" style="max-width: 42rem; margin-left: auto; margin-right: auto;">
    <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/per8ybI55bI" title="Battery disassembly video showing the pipe-cutter approach" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  <p class="caption">Image and video credit: <a href="https://www.youtube.com/watch?v=per8ybI55bI">original battery disassembly video on YouTube</a>.</p>
  <p>I’m having some difficulty figuring out how to build the battery model in MuJoCo, since the jelly roll is a soft body. I’ve been looking at the <code>&lt;flex&gt;</code> element introduced in MuJoCo 3.0, but the definitions seem quite low-level to me, and I’m not very familiar with that yet.</p>
  <p>After reading one of the papers related to <a href="https://github.com/Jianghanxiao/PhysTwin">PhysTwin</a>, I’m trying my best to see if I could model the jelly roll using their framework instead of MuJoCo. I’m still figuring out whether it would work for this problem.</p>
  <p>While reading their README, I also found a small typo: “wiht” instead of “with.”</p>
  {% include figure.liquid path="assets/projects/jelly-roll-peeling/images/phystwin-readme-typo.png" alt="PhysTwin README screenshot with the misspelling wiht highlighted" class="img-fluid rounded" caption="The typo I noticed in the PhysTwin README." %}
  <h3>Peeling simulation and synchronization</h3>
  <p class="mt-2">I’ve added a simplified peeling experiment to the <a href="https://github.com/otavio-paz/battery-robot">project repository</a>. It is an elastic-perfectly-plastic strip surrogate, so it is useful for learning the timing and control loop, but it is not yet a model of battery material or a validated DQI predictor.</p>
  {% include figure.liquid path="assets/projects/jelly-roll-peeling/images/peeling-demo-day6.png" alt="MuJoCo peeling simulation with an orange strip, blue puller, and fixed tangent point" class="img-fluid rounded" caption="Mid-peel frame from the synchronized MuJoCo experiment. The orange strip is a visual surrogate, the blue block is the puller, and the red marker is the fixed peel-front proxy." %}
  <p>The simulation advances physics at 500 Hz, updates the control command at 100 Hz, records force and displacement at 100 Hz, and captures RGB frames at 25 Hz. Each frame is joined to the exact sensor sample from the same simulation state, which gives me a clean starting point for testing vision and force-based control.</p>
  <p>The 11-second trial produced 1,101 sensor samples and 276 frames. The simulated strip peeled 47.2 mm, with a peak force of 0.8 N. These are synthetic process features for now; the next step is to replace the fixed-tangent abstraction with a more physical peeling and roll model.</p>
  <p><a href="https://github.com/otavio-paz/battery-robot/commit/c9c6459cd8246eb0aa4433a2a6b0dc7127222d7c">Day 6 code update</a> · <a href="https://github.com/otavio-paz/battery-robot/blob/c9c6459cd8246eb0aa4433a2a6b0dc7127222d7c/docs/peeling-and-synchronization.md">Peeling and synchronization notes</a></p>
</section>

<section class="jelly-roll-day" aria-labelledby="day-7">
  <h2 id="day-7">Day 7</h2>
  <p class="mt-2">I’ve been working on synchronization and the gripper trajectories for the peeling phase, as well as how to model this in MuJoCo.</p>
  <p>One thing I noticed is that the minimum gap between the SO-101 gripper’s fingers is larger than the strip, so I increased the strip’s size for now. Later, I want to start testing other simulation alternatives that are more closely related to the research being developed in Prof. Yunzhu Li’s lab.</p>
  <p>I should be done tomorrow with the initial code, but the complexity has increased a bit. I want to make sure I understand the steps I need to take and check whether my rationale makes sense and is relevant to this exploration.</p>
  <p>I also worked on a more physical battery model that includes adhesion between the jelly roll and the core, along with MuJoCo’s native <code>flexcomp</code> for the deformable outer layer. The current model uses a two-dimensional flexible shell with contact, membrane stretching, and bending. Adhesion is represented separately by breakable point constraints, so it is still a custom, uncalibrated approximation rather than a native fracture model.</p>
  <p>This proved very difficult to implement in a short amount of time. To test whether my plan was feasible, I used GPT-5.6 Sol to help with the implementation. My main focus was therefore to review the code and determine whether the simulation behaved as intended.</p>
</section>

<section class="jelly-roll-day" aria-labelledby="day-8">
  <h2 id="day-8">Day 8</h2>
  <p class="mt-2">I used a Young’s modulus of 3 MPa for the flexible shell, but this is a demonstrator assumption rather than a calibrated battery-material value. I found papers reporting higher stiffness values at other scales and under different loading conditions. Tang, Zhang, and Cheng report radial and axial moduli of 260 MPa and 1,200 MPa for a homogenized single-cell model, and equivalent battery-module values of 55 MPa and 90 MPa for two packing arrangements. Santosa and Fadillah use 20 GPa and 47.9 GPa as model inputs for dry and wet jelly-roll specimens under dynamic axial compression. However, I could not determine how those whole-cell, module, and compression values should translate to this thin-shell peeling demo. <a href="https://doi.org/10.1371/journal.pone.0181882">Tang et al. (2017)</a> · <a href="https://doi.org/10.3390/en17194967">Santosa and Fadillah (2024)</a></p>
  <p>For now, I am keeping 3 MPa as an explicit assumption and treating the simulation as a way to examine behavior and implementation, not as a validated material model.</p>
</section>

<section class="jelly-roll-day" aria-labelledby="day-9">
  <h2 id="day-9">Day 9</h2>
  <p class="mt-2"><strong>Major update:</strong> the SO-101 now pulls a pre-grasped deformable ribbon from a fixed cylindrical core. The ribbon is a native MuJoCo <code>flexcomp</code> with 114 vertices and 148 triangles. The custom adhesion model releases one bonded row at a time after its reaction force remains above the assumed threshold.</p>
  <p>In the 14-second simulation, all 32 releasable rows detached, corresponding to 58 mm of unwrapped material. The run recorded 1,401 sensor samples and 351 synchronized frames, with no MuJoCo warnings. Both regression tests also passed: one checks the scene geometry, grasp, contact, and pulling path; the other checks force-triggered release and sensor/camera synchronization.</p>
  {% include video.liquid path="assets/projects/jelly-roll-peeling/videos/so101-jelly-roll-peeling.webm" controls=true autoplay=true loop=true muted=true playsinline=true class="jelly-roll-note-video rounded" alt="SO-101 robot peeling a deformable jelly-roll surrogate from a cylindrical battery core in MuJoCo" caption="MuJoCo simulation of the SO-101 pulling a deformable, adhesively bonded jelly-roll surrogate from a fixed core." %}
  <p>When I inspect the simulation visually, the adhesion behavior appears to work. The main issue is that the jelly roll seems to overlap the battery model about halfway through the run. Neither regression test detected this visual problem, and MuJoCo produced no warnings. I will investigate whether this is a limitation of the model, a contact-visualization effect, or an implementation problem.</p>
  <p>My main goal was to see how easily I could carry out the plan. I believe that if an LLM can solve a research question or implementation too easily, then the question may not be challenging enough. I will now focus on understanding how other researchers have approached battery disassembly and on identifying a stronger research question.</p>
  <p><a href="https://github.com/otavio-paz/battery-robot/commit/bf29066">Day 9 code update</a> · <a href="https://github.com/otavio-paz/battery-robot/blob/bf29066/docs/soft-body-peeling.md">Model, assumptions, and verification notes</a></p>
</section>

<section class="jelly-roll-day" aria-labelledby="day-10">
  <h2 id="day-10">Day 10</h2>
  <p class="mt-2"><em>Notes to come.</em></p>
</section>

<section class="jelly-roll-day" aria-labelledby="day-11">
  <h2 id="day-11">Day 11</h2>
  <p class="mt-2"><em>Notes to come.</em></p>
</section>

<section class="jelly-roll-day" aria-labelledby="day-12">
  <h2 id="day-12">Day 12</h2>
  <p class="mt-2"><em>Notes to come.</em></p>
</section>

<section class="jelly-roll-day" aria-labelledby="day-13">
  <h2 id="day-13">Day 13</h2>
  <p class="mt-2"><em>Notes to come.</em></p>
</section>

<section class="jelly-roll-day" aria-labelledby="day-14">
  <h2 id="day-14">Day 14</h2>
  <p class="mt-2"><em>Notes to come.</em></p>
</section>
