---
layout: page
title: Sim2Real Unitree G1 Locomotion with RL
description: Testing and documenting a complete reinforcement-learning pipeline for Unitree G1 locomotion at Washington University in St. Louis.
img: assets/projects/humanoid-rl/videos/deploying-walking-policy.gif
importance: 1
featured: true
category: work
giscus_comments: false
hide_description: true
skills:
  - Isaac Lab
  - Reinforcement learning
  - Sim-to-real
---

<style>
  .humanoid-lead { max-width: 50rem; font-size: 1.12rem; line-height: 1.75; }
  .humanoid-contents { background: var(--global-code-bg-color); border-left: 4px solid var(--global-theme-color); border-radius: .25rem; margin: 1.7rem 0 2.2rem; padding: 1.1rem 1.25rem; }
  .humanoid-contents h2 { font-size: 1.2rem; margin: 0 0 .75rem; }
  .humanoid-contents ol { columns: 2; column-gap: 2rem; margin: 0; padding-left: 1.25rem; }
  .humanoid-contents li { break-inside: avoid; margin: 0 0 .45rem; padding-left: .15rem; }
  .humanoid-pipeline { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; gap: .7rem; align-items: stretch; margin: 1.4rem 0 2rem; }
  .humanoid-stage { border: 1px solid var(--global-divider-color); border-radius: .5rem; padding: 1rem; background: var(--global-bg-color); }
  .humanoid-stage span { color: var(--global-theme-color); display: block; font-size: .78rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
  .humanoid-stage strong { display: block; margin: .25rem 0 .35rem; }
  .humanoid-stage p { color: var(--global-text-color-light); font-size: .9rem; margin: 0; }
  .humanoid-arrow { align-self: center; color: var(--global-theme-color); font-size: 1.35rem; }
  .humanoid-media-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1.25rem 0 2rem; }
  .humanoid-media-card { background: var(--global-code-bg-color); border: 1px solid var(--global-divider-color); border-radius: .55rem; margin: 0; overflow: hidden; }
  .humanoid-media-card figure { margin: 0; }
  .humanoid-media-card img { aspect-ratio: 16 / 9; display: block; object-fit: cover; width: 100%; }
  .humanoid-media-card figcaption { color: var(--global-text-color-light); font-size: .9rem; margin: 0; padding: .8rem 1rem .9rem; text-align: left; }
  .humanoid-media-card figcaption strong { color: var(--global-text-color); display: block; font-size: 1rem; margin-bottom: .2rem; }
  .humanoid-table-wrap { overflow-x: auto; margin: 1.2rem 0 2rem; }
  .humanoid-table { border-collapse: collapse; min-width: 44rem; width: 100%; }
  .humanoid-table th, .humanoid-table td { border-bottom: 1px solid var(--global-divider-color); padding: .8rem .7rem; text-align: left; vertical-align: top; }
  .humanoid-table th { color: var(--global-theme-color); font-size: .82rem; letter-spacing: .04em; text-transform: uppercase; }
  .humanoid-table td:first-child { font-weight: 650; width: 24%; }
  .humanoid-callout { background: var(--global-code-bg-color); border-left: 4px solid var(--global-theme-color); border-radius: .25rem; margin: 1.35rem 0 2rem; padding: 1rem 1.15rem; }
  .humanoid-callout p:last-child { margin-bottom: 0; }
  .humanoid-contributions { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1.2rem 0 2rem; }
  .humanoid-contribution { border: 1px solid var(--global-divider-color); border-radius: .5rem; padding: 1rem; }
  .humanoid-contribution h4 { margin: 0 0 .4rem; }
  .humanoid-contribution p { margin: 0; }
  .humanoid-source { color: var(--global-text-color-light); font-size: .92rem; }
  @media (max-width: 767px) {
    .humanoid-contents ol { columns: 1; }
    .humanoid-pipeline { grid-template-columns: 1fr; }
    .humanoid-arrow { transform: rotate(90deg); justify-self: center; }
    .humanoid-media-grid { grid-template-columns: 1fr; }
    .humanoid-contributions { grid-template-columns: 1fr; }
  }
</style>

<p class="humanoid-lead">
  During my Summer 2025 research at Washington University in St. Louis, my main goal was to <strong>improve the documentation for Unitree's updated <code>unitree_rl_lab</code> pipeline</strong>. The update had recently moved the repository from the deprecated <strong>Isaac Gym to Isaac Lab</strong>, and the instructions did not cover several steps required to train, validate, and deploy a G1 walking policy. I tested each stage, recorded the errors and corrections, and prepared a <strong>reproducible workflow for future lab members</strong>.
</p>

<nav class="humanoid-contents" aria-label="Page contents">
  <h2>Contents</h2>
  <ol>
    <li><a href="#research-goal-and-reproducibility">Research goal and reproducibility</a></li>
    <li><a href="#project-videos">Project videos</a></li>
    <li><a href="#what-the-literature-contributed">What the literature contributed</a></li>
    <li><a href="#testing-the-pipeline">Testing the pipeline</a></li>
    <li><a href="#setbacks-and-how-i-addressed-them">Setbacks and solutions</a></li>
    <li><a href="#a-second-policy-experiment">A second policy experiment</a></li>
    <li><a href="#deployment-speed-and-reliability">Deployment speed and reliability</a></li>
    <li><a href="#my-contributions-to-the-lab">Contributions to the lab</a></li>
    <li><a href="#what-i-learned-about-reinforcement-learning">What I learned about RL</a></li>
  </ol>
</nav>

## Research goal and reproducibility

The lab was already working within an established research question: **can the lab train a walking policy, challenge it in a second simulator, and deploy it to the Unitree G1?**

My contribution focused on **reproducibility**. I checked whether the newly released Isaac Lab workflow contained enough information for another researcher to repeat the three stages. At each stage, I compared the repository instructions with the behavior I observed, documented missing steps, issues, how I solved them, and verified the corrections before continuing.

<div class="humanoid-pipeline" aria-label="Humanoid reinforcement learning deployment pipeline">
  <div class="humanoid-stage">
    <span>Stage 1</span>
    <strong>Isaac Lab</strong>
    <p>Train and inspect locomotion policies with parallel GPU simulation.</p>
  </div>
  <div class="humanoid-arrow" aria-hidden="true">&rarr;</div>
  <div class="humanoid-stage">
    <span>Stage 2</span>
    <strong>MuJoCo</strong>
    <p>Test whether the exported policy survives a different physics engine.</p>
  </div>
  <div class="humanoid-arrow" aria-hidden="true">&rarr;</div>
  <div class="humanoid-stage">
    <span>Stage 3</span>
    <strong>Unitree G1</strong>
    <p>Verify connectivity, safety states, controller commands, and real-robot execution.</p>
  </div>
</div>

## Project videos

These recordings show the walking policy moving through **training, validation in two simulators, and hardware deployment**.

<div class="humanoid-media-grid" aria-label="Recordings from the humanoid locomotion pipeline">
  <div class="humanoid-media-card">
    {% include figure.liquid loading="lazy" path="assets/projects/humanoid-rl/videos/training-policy.gif" alt="Parallel Unitree G1 environments training a walking policy in Isaac Lab" caption="<strong>1. Training the policy</strong> Parallel G1 environments running during the Isaac Lab training process." %}
  </div>
  <div class="humanoid-media-card">
    {% include figure.liquid loading="lazy" path="assets/projects/humanoid-rl/videos/testing-policy-isaac.gif" alt="Trained Unitree G1 walking policy being tested in Isaac Lab" caption="<strong>2. Testing in Isaac Lab</strong> Playback of the exported walking policy in its training simulator." %}
  </div>
  <div class="humanoid-media-card">
    {% include figure.liquid loading="lazy" path="assets/projects/humanoid-rl/videos/testing-policy-mujoco.gif" alt="Unitree G1 walking policy being tested in MuJoCo" caption="<strong>3. Testing in MuJoCo</strong> Sim2Sim validation of the policy in a second physics engine." %}
  </div>
  <div class="humanoid-media-card">
    {% include figure.liquid loading="lazy" path="assets/projects/humanoid-rl/videos/deploying-walking-policy.gif" alt="Walking policy deployed to a Unitree G1 on rough terrain" caption="<strong>4. Deploying the walking policy</strong> The Unitree G1 walking in the lab." %}
  </div>
</div>

## What the literature contributed

The project followed the reasoning behind [Humanoid-Gym](https://arxiv.org/abs/2404.05695), which presents a train-in-simulation, validation in MuJoCo, then transfer to hardware workflow. The paper explains why the middle step matters: agreement across two physics engines is a stronger robustness check than replaying a policy only where it was trained. It also describes several ideas that shaped my understanding of the pipeline:

- **PPO and privileged learning:** actor learns from deployable observations while the critic can use additional simulator-only information during training.
- **Partial observability:** the (physical) robot never exposes the complete simulator state, so the policy must act from a limited observation history.
- **Domain randomization:** variations in friction, mass, motor strength, delay, and sensor signals make a policy less dependent on one perfectly tuned virtual robot.
- **Layered control:** the paper's learned policy runs at **100 Hz** and produces joint targets for a **1,000 Hz PD controller**. The policy generates targets, and the PD controller stabilizes the physical response at a higher frequency.
- **Reward design:** velocity tracking, gait phase, smooth actions, stable contacts, posture, and energy use must be balanced. These terms define the walking behavior learned during training.

The broader survey [Humanoid Locomotion and Manipulation: Current Progress and Challenges in Control, Planning, and Learning](https://arxiv.org/abs/2501.02116) placed this work in a greater context. It compares model-based control, reinforcement learning, imitation learning, and emerging foundation-model approaches. For this project, its most relevant conclusion was that simulation-trained RL can produce robust locomotion, but humanoids make the sim-to-real gap especially difficult because of their high dimensionality and intrinsically unstable dynamics. It also reinforced that learned and model-based control are complementary: the policy can generate joint targets while a lower-level controller enforces fast physical response.

There were many discussions I had with my PhD supervisors in terms of how we can structure a RL policy: a master policy that controls small policies, the existence of a curriculum in which slowly introduces new policies (or increased difficulty), hierarchical, and other ideas.

## Testing the pipeline

### 1. Establishing the training baseline

I first trained the native G1 velocity tasks in Isaac Lab. The flat-terrain policy converged to a useful walking behavior in **roughly two hours**, while a rough-terrain run took **about one hour and forty minutes**. This was a bit surprising given that a rough terrain has a more complex walking motion in order to successfully learn how to walk. The mysteries of RL training I guess. Then, I replayed both policies in simulation and located the exported **PyTorch and ONNX policies** needed for the next stage.

These runs confirmed that the GPU, robot asset, RL task, and exporter worked together. Training took a few hours. The integration work between Isaac Lab, MuJoCo, the controller, and the robot took most of the project time.

### 2. Making Sim2Sim validation work

My first deployment attempt used an older Unitree repository built around the deprecated Isaac Gym stack. The MuJoCo controller expected a **47-element observation**, while the Isaac Lab policy expected **123 inputs**. I stopped this test because the observation schemas were incompatible and continued with Unitree's updated Isaac Lab workflow.

The updated workflow exposed several documentation gaps. Missing **Git LFS assets** left the G1 model without rigid bodies or contact sensors. The repositories gave conflicting library installation locations. The tested simulator version was **MuJoCo 3.2.7**. The configuration used `enable_elastic_band`, and the **29-DoF scene** had to be selected explicitly. I traced each error, corrected the environment, and rebuilt the controller.

Unitree's Bluetooth remotes paired without creating a usable Linux joystick device, and the connections dropped unpredictably. I tested the Bluetooth configuration, input services, and alternative mappings. A **wired Xbox-compatible controller** appeared immediately as a joystick device and allowed the MuJoCo test to proceed. I added two checks to the procedure: use a wired controller and confirm its device index before starting the simulator.

<div class="humanoid-callout">
  <p><strong>Integration lesson:</strong> deployment depends on the policy's <strong>observation order, joint order, normalization, control rate, robot model, and action scaling</strong>. Sim2Sim testing checks this interface before the policy reaches the hardware. At least the one tested in this project. </p>
</div>

### 3. Moving from simulation to the G1

The first real-robot command failed because the repository's example network name did not exist on the workstation. The wireless interface did not receive the expected low-level state stream. Despite both workstation and Unitree G1 were connected to the same network and ROS topics were accessible. I switched to a **direct Ethernet connection**, configured the workstation on the robot's subnet, selected the actual wired interface, and established communication with the G1.

From the [Go1 connection guide](https://docs.trossenrobotics.com/unitree_go1_docs/getting_started/network.html), I followed the same setup flow as for the G1:

1. Connect the Ethernet cable from the PC to the robot.
2. Run the following commands on the PC:

```bash
sudo ifconfig enp2s0 down
sudo ifconfig enp2s0 192.168.123.XX/24
sudo ifconfig enp2s0 up
```

I consolidated the hardware sequence into a lab-specific deployment guide: **verify the robot model**, begin in **zero-torque or damping mode**, raise the robot while it is supported, establish ground contact, activate the policy, and keep both the physical and software **emergency stops** ready. The procedure also monitors the low-level state because the model identifier in the outgoing commands must match the robot's reported mode.

## Setbacks and how I addressed them

<div class="humanoid-table-wrap">
  <table class="humanoid-table">
    <thead>
      <tr><th scope="col">Setback</th><th scope="col">What it revealed</th><th scope="col">Resolution</th></tr>
    </thead>
    <tbody>
      <tr><td>Policy input mismatch</td><td>The older deployment code and the Isaac Lab policy used different observation dimensions and definitions.</td><td>Moved to the maintained Isaac Lab pipeline and treated the observation schema as a strict interface.</td></tr>
      <tr><td>G1 asset would not load</td><td>Repository pointers existed, but the large USD model files had not been downloaded.</td><td>Installed Git LFS in the model repository, pulled the assets, and documented the missing step in a public issue.</td></tr>
      <tr><td>MuJoCo controller crashes</td><td>Version, installation prefix, scene, policy path, permissions, and network flags were coupled.</td><td>Pinned the working simulator version, corrected the configuration, rebuilt the controller, and recorded the exact launch order.</td></tr>
      <tr><td>Unitree remotes were unreliable</td><td>The remotes paired without creating a usable Linux joystick device.</td><td>Validated the input layer directly and standardized on a wired Xbox-compatible controller for simulation tests.</td></tr>
      <tr><td>Robot connection stalled</td><td>The example interface name differed from the workstation, and policy control required direct Ethernet.</td><td>Used direct Ethernet, configured the correct interface, and verified the robot's low-level state stream before sending commands.</td></tr>
      <tr><td>Enhanced policy moved erratically</td><td>The deployment input used a different order and physical meaning for the new base-velocity observation.</td><td>Restored a consistent observation order and began a longer retraining run; the test confirmed that raw acceleration and estimated velocity represent different quantities.</td></tr>
    </tbody>
  </table>
</div>

## A second policy experiment

After the baseline pipeline worked, I began testing a slightly more robust walking policy with external disturbances. This experiment was initial attempt to see how to model these forces on the training stage in a curriculum approach.

With Zaid Ahmed, I traced the real-time IMU fields available to the C++ deployment layer and added a base-linear-motion term. The first test produced erratic behavior. That failure was informative: the training configuration placed the term in one location, while the deployment code inserted it elsewhere, and the available accelerometer signal did not have the same physical meaning as base velocity. I corrected the ordering and launched a roughly 15-hour retraining run.

This test gave me the clearest technical lesson of the project. The network will return an action for any numeric vector with the expected shape. It does not check whether an entry has the correct physical meaning. This is another topic discussed with my peers. Although the policy heavily punishes sudden and fast changes in articulations, it does not eliminate the possibility of that happening when testing the policy in simulation or in real life. Additional safeguards must be built on top of the output of the policy.

## Deployment speed and reliability

Policy inference was somewhat fast for just the walking scenarios. However, for more complex goals, and multi-purpose policies, this showed to be very slow. The preparation before inference caused most of the delay: resolving software versions, locating exported checkpoints, rebuilding controllers, pairing input devices, selecting the correct interface, and moving the robot through safe startup states.

The most effective improvements were therefore operational:

- **Freeze versions:** keep known-good Isaac Lab, MuJoCo, compiler, and SDK versions.
- **Use an explicit policy path:** store exported policies in one stable location.
- **Use wired controllers:** verify the joystick index before launch.
- **Use direct Ethernet:** connect the workstation to the robot for policy control.
- **Check the robot state:** verify the robot model and low-level state before sending commands.
- **Keep the stop procedure visible:** review the emergency-stop sequence before every hardware test.

Once those decisions were documented, deployment changed from exploratory debugging into a short, repeatable checklist.

## My contributions to the lab

<div class="humanoid-contributions">
  <div class="humanoid-contribution">
    <h4>Validated the full workflow</h4>
    <p>Tested policy training, export, MuJoCo validation, controller input, robot networking, and hardware execution as one connected system.</p>
  </div>
  <div class="humanoid-contribution">
    <h4>Created reusable documentation</h4>
    <p>Turned scattered instructions and experimental notes into a lab-specific training and deployment guide with safety and monitoring steps.</p>
  </div>
  <div class="humanoid-contribution">
    <h4>Closed documentation gaps</h4>
    <p>Identified missing Git LFS assets and configuration details, recorded working version constraints, and posted a <a href="https://github.com/unitreerobotics/unitree_rl_lab/issues/25">public Unitree RL Lab issue</a>.</p>
  </div>
  <div class="humanoid-contribution">
    <h4>Extended the observation pipeline</h4>
    <p>Traced sensor data through the C++ deployment code, implemented an experimental motion observation, and documented why its initial behavior failed.</p>
  </div>
</div>

I reduced the number of undocumented decisions between **"train" and "walk."** The next lab member can begin with a tested sequence of versions, commands, checks, and fixes.

## What I learned about reinforcement learning

- **Policies learn interfaces as well as behaviors:** Observation order, scale, history, and physical meaning must remain identical across training and deployment.
- **PPO fits parallel simulation well:** It may be sample-inefficient, but thousands of simulated environments make data comparatively cheap and policy updates scalable. It works well if your workstation is able to process that. However, I believe that better cost-efficient alternatives should be more prevalent.
- **The reward is the specification:** Stable posture, contact timing, smooth actions, energy penalties, and velocity tracking shape the gait that emerges.
- **Privileged information belongs to training:** An asymmetric actor-critic can give the critic complete simulated state while keeping the actor limited to observations available on the robot.
- **Domain randomization targets robustness:** Varying dynamics and adding disturbances discourages dependence on one exact simulator, although the ranges still require careful tuning. It's definitely recommended to study this topic more (and I'm planning on doing that).
- **Sim2Sim is a risk-reduction tool:** Successful execution in a second physics engine shows that the policy and deployment code are compatible outside the training simulator. If setup quickly, it's a step that might stop someone from deploying a bad policy in little time.
- **State estimation is part of RL deployment:** Sensors and estimators must reproduce the state variables used during training; a raw sensor channel may represent a different physical quantity.
- **Safety surrounds the learning algorithm:** Damping modes, supported startup, model checks, low-level monitoring, and emergency stops are part of a successful real-robot experiment. Transitions between policy and hard-coded control should always have guardrails.

## Selected references

<p class="humanoid-source">
  X. Gu, Y.-J. Wang, and J. Chen, <a href="https://arxiv.org/abs/2404.05695"><em>Humanoid-Gym: Reinforcement Learning for Humanoid Robot with Zero-Shot Sim2Real Transfer</em></a>, 2024.<br>
  Z. Gu et al., <a href="https://arxiv.org/abs/2501.02116"><em>Humanoid Locomotion and Manipulation: Current Progress and Challenges in Control, Planning, and Learning</em></a>, 2025.
</p>
