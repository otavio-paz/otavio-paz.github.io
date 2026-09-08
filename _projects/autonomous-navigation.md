---
layout: page
title: DRL Autonomous Navigation
description: TurtleBot research spanning LiDAR mapping, reinforcement learning, and a documented handoff for future students.
img: assets/projects/autonomous-navigation/images/turtlebot-diagram.png
importance: 3
featured: false
category: work
hide_description: true
skills:
  - ROS 2
  - PyTorch
  - Gazebo
---

<style>
  .turtlebot-lead { max-width: 50rem; font-size: 1.12rem; line-height: 1.75; }
  .turtlebot-callout, .turtlebot-contents { background: var(--global-code-bg-color); border-left: 4px solid var(--global-theme-color); border-radius: .25rem; padding: 1.1rem 1.25rem; margin: 1.5rem 0 2rem; }
  .turtlebot-callout p:last-child { margin-bottom: 0; }
  .turtlebot-contents ul { columns: 2; margin-bottom: 0; padding-left: 1.2rem; }
  .turtlebot-contents li { break-inside: avoid; margin-bottom: .4rem; }
  .turtlebot-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; margin: 1.5rem 0 2rem; }
  .turtlebot-grid figure { margin: 0; }
  .turtlebot-grid img { width: 100%; height: 20rem; object-fit: contain; border-radius: .4rem; background: var(--global-code-bg-color); }
  .turtlebot-grid figcaption { font-size: .9rem; color: var(--global-text-color); padding-top: .65rem; }
  .turtlebot-step { border: 1px solid var(--global-divider-color); border-radius: .4rem; padding: 1rem; }
  .turtlebot-step strong { display: block; color: var(--global-theme-color); margin-bottom: .4rem; }
  .turtlebot-step p { margin-bottom: 0; }
  .turtlebot-source { font-size: .9rem; color: var(--global-text-color); }
  @media (max-width: 767px) { .turtlebot-grid { grid-template-columns: 1fr; } .turtlebot-contents ul { columns: 1; } .turtlebot-grid img { height: auto; max-height: 24rem; } }
</style>

<p class="turtlebot-lead">From 2023 through Spring 2025, I worked with Professor Michael R. McCarrin on mobile robot navigation. The project grew from learning ROS and investigating LiDAR mapping into testing whether a policy trained in Gazebo could guide a physical TurtleBot around obstacles. My work combined literature review, simulation training, sensor-driver investigation, and documentation of the installation and hardware problems we encountered.</p>

<div class="turtlebot-callout">
  <p><strong>Status: paused after my transfer to Columbia University.</strong> I left the research documented for the next student to continue, including setup procedures, experiments, troubleshooting, and unresolved problems. We ran the DRL framework in simulation and established TurtleBot4 networking and manual control; reliable DRL navigation on the physical robots and dynamic target following remained open goals.</p>
</div>

<nav class="turtlebot-contents" aria-label="Page contents">
  <ul>
    <li><a href="#how-the-research-evolved">Research across semesters</a></li>
    <li><a href="#the-thesis-behind-the-project">Thesis overview</a></li>
    <li><a href="#how-the-framework-works">How the framework works</a></li>
    <li><a href="#installation-and-integration-lessons">Installation and integration</a></li>
    <li><a href="#what-we-achieved">Progress and open problems</a></li>
    <li><a href="#continuing-the-project">Handoff and resources</a></li>
  </ul>
</nav>

## How the research evolved

### Fall 2023: learning the robotics stack

We began with an interest in surface-level autonomous vehicles and an introduction to ROS, Gazebo, and the lab's computing environment. Setting up Linux, graphics drivers, Docker, and shared research resources laid the groundwork for the later robot experiments.

### Spring 2024: LiDAR, mapping, and fiducial markers

With the TurtleBot3 Burger, we investigated how raw laser measurements become a ROS scan and then a map. We brought up the robot, inspected the `/scan` topic, explored Cartographer and RViz, and studied physical fiducial markers that could encode recognizable patterns in LiDAR depth readings.

I examined the LD08 driver's parsing code, including `LiPkg::Parse()`, and helped document the path from sensor packets to visualization. Questions about scan density, angular spacing, and invalid readings appeared here, well before they became obstacles to deploying a learned policy. We also prepared diagrams and a research shareout explaining the robot, mapping, and marker ideas.

We resolved the TurtleBot3's SLAM setup problems and successfully used it to scan a floor of King Building, viewing the resulting map in RViz. During mapping, we used FaceTime to give me a live view of the robot and nearby people. I could watch for potential collisions or the robot getting too close to someone and take over control when needed.

<div class="turtlebot-grid">
  <figure>
    <a href="{{ '/assets/projects/autonomous-navigation/images/king-building-slam-facetime.png' | relative_url }}">
      <img src="{{ '/assets/projects/autonomous-navigation/images/king-building-slam-facetime.png' | relative_url }}" alt="FaceTime views of the TurtleBot3 moving through King Building during SLAM mapping" loading="lazy">
    </a>
    <figcaption>Spring 2024: monitoring the TurtleBot3 over FaceTime so I could take over if it approached someone too closely.</figcaption>
  </figure>
  <figure>
    <a href="{{ '/assets/projects/autonomous-navigation/images/king-building-slam-map.jpeg' | relative_url }}">
      <img src="{{ '/assets/projects/autonomous-navigation/images/king-building-slam-map.jpeg' | relative_url }}" alt="RViz displaying the map generated by the TurtleBot3 while scanning a floor of King Building" loading="lazy">
    </a>
    <figcaption>The King Building floor scan displayed in RViz after we got TurtleBot3 SLAM working. Select either photo to view it at full size.</figcaption>
  </figure>
</div>

### Fall 2024: moving toward reinforcement learning

The focus shifted to obstacle avoidance using Tomas van Rietbergen's `turtlebot3_drlnav` framework. I studied the thesis and the DQN, DDPG, and TD3 algorithms, installed the framework, and got the simulation side working. The next step exposed the central integration problem: the physical TurtleBot3's LiDAR output did not match the observations expected by the pretrained models.

### Winter 2025: investigating the simulation-to-reality gap

I compared TD3 and DDPG states and actions in simulation and on the robot, experimented with reducing the driver's scan output, and investigated `NaN` sensor values and velocity commands. We also tried training with settings closer to the physical testing area. An initial 600-episode attempt did not resolve the problem. The notes record sticking during turns and uncertainty about whether motors, floor friction, or policy behavior were responsible.

### Spring 2025: establishing a TurtleBot4 baseline

With a new TurtleBot4, we shifted toward getting a dependable platform running before returning to DRL. This meant firmware, ROS 2 networking, controller pairing, basic nodes, and SLAM tutorials. We also investigated GPU cloud services and discussed LiDAR plus camera input, sensor fusion, and simulation fidelity. These were directions for further research; a TurtleBot4 DRL deployment was not completed.

## The thesis behind the project

Our starting point was **Tomas van Rietbergen's _Toward Reliable Robot Navigation Using Deep Reinforcement Learning_**, a master's thesis at **Delft University of Technology (TU Delft)**. Its central question is how to obtain reliable local navigation around moving obstacles while keeping the robot and learning system relatively simple.

The thesis uses LiDAR and odometry to learn motion commands for a differential-drive robot. It examines how algorithm choice, hyperparameters, sensor configuration, and reward design affect navigation. Three particularly useful ideas shaped our reading:

- **Frame stacking:** giving the policy several observations over time can help it infer obstacle motion that a single scan cannot reveal.
- **Backward motion and full-circle sensing:** allowing retreat expands the robot's responses to approaching obstacles, but requires observing the space behind it.
- **Behavioral rewards:** the objective should encourage useful motion and discourage unwanted behavior such as swaying, alongside reaching the goal and avoiding collisions.

Van Rietbergen evaluates these choices in simulation and demonstrates his system on a self-developed physical robot, including encounters with fast-moving obstacles. Those demonstrations belong to the thesis. Our research used the accompanying framework as a foundation and investigated the work needed to reproduce its approach on our TurtleBot hardware.

<p class="turtlebot-source">Reference: Tomas van Rietbergen, <em>Toward Reliable Robot Navigation Using Deep Reinforcement Learning</em>, especially Chapters 3–7; <a href="https://github.com/tomasvr/turtlebot3_drlnav">accompanying framework and documentation</a>.</p>

## How the framework works

The framework connects **ROS 2** communication, **Gazebo** simulation, and **PyTorch** learning. A goal specifies where the robot should go; the policy repeatedly chooses movement from its current observation. The mapless local policy does not require a prebuilt occupancy map, although it still needs goal-relative information.

<div class="turtlebot-grid" aria-label="Navigation loop">
  <div class="turtlebot-step"><strong>1. Observe</strong><p>Normalize LiDAR distances and combine them with distance and angle to the goal and the previous linear and angular velocities.</p></div>
  <div class="turtlebot-step"><strong>2. Choose a motion</strong><p>The neural policy selects an action. DDPG and TD3 produce continuous linear and angular velocity commands; DQN selects from discrete actions.</p></div>
  <div class="turtlebot-step"><strong>3. Step the environment</strong><p>The simulated or physical robot moves. New scans and odometry describe the outcome, while the environment checks progress, collisions, and episode termination.</p></div>
  <div class="turtlebot-step"><strong>4. Learn or evaluate</strong><p>During training, transitions enter a replay buffer and update the networks using rewards. Evaluation uses a saved policy to test its behavior.</p></div>
</div>

DQN estimates the value of discrete actions. DDPG uses an actor to propose a continuous action and a critic to evaluate it. TD3 extends DDPG with two critics, delayed policy updates, and target-action smoothing to reduce value overestimation. Our winter debugging focused on the continuous actions from DDPG and TD3.

The workflow separates the environment from the agent: simulation training uses `train_agent`, simulation evaluation uses `test_agent`, and physical deployment pairs `real_environment` with `real_agent` and the robot's bringup. A successful simulation run therefore does not establish that the physical sensor stream matches the policy's input.

In the configuration we investigated, **40 LiDAR samples plus four goal and previous-motion values formed a 44-value state**. That input size was part of the trained model's interface. Changing a scan-count setting alone could not make a differently shaped physical scan compatible with the saved network.

<div class="turtlebot-grid">
  <figure>
    <img src="{{ '/assets/projects/autonomous-navigation/images/robot-simulation.png' | relative_url }}" alt="Lab workstation displaying TurtleBot research terminal output" loading="lazy">
    <figcaption>The lab workstation used to run and inspect the robotics software.</figcaption>
  </figure>
  <figure>
    <img src="{{ '/assets/projects/autonomous-navigation/images/robot-testing.png' | relative_url }}" alt="Physical TurtleBot3 research setup" loading="lazy">
    <figcaption>Physical testing exposed sensor and control differences that the simulation setup did not resolve.</figcaption>
  </figure>
</div>

## Installation and integration lessons

### Getting the framework running

The Fall 2024 setup used the framework's ROS 2 Foxy environment. The most useful installation notes capture specific failures and their outcomes:

- **NVIDIA driver availability:** the CUDA container test failed because `libnvidia-ml.so.1` was unavailable. I discovered that the laptop was not using the proprietary NVIDIA driver. Host graphics configuration had to be addressed before GPU use inside Docker.
- **Build memory:** dependency installation exited with code 137. Increasing the available RAM and swap allowed that build step to finish.
- **Docker configuration:** the switch through Docker Desktop introduced credential-store, file-sharing, and GPU-access problems. The notes record getting the GPU container running after returning to a Docker installation without Desktop. This was a working outcome on that machine, rather than proof of a single cause for every error.
- **Workspace paths:** a missing `install/setup.bash` and a `colcon build` reporting zero packages exposed an incorrect workspace path. Correcting the mounted repository path with my advisor allowed the build to find the packages.
- **GUI startup:** the recorded procedure included restoring Docker's X display access after a reboot so Gazebo could open.

These were historical troubleshooting steps for our setup, not a current installation guide. The original framework now identifies itself as unmaintained in its [repository](https://github.com/tomasvr/turtlebot3_drlnav).

### Connecting the physical TurtleBot3

Matching `ROS_DOMAIN_ID` between the computer and robot fixed a communication mismatch, then revealed a different problem: scans arriving with approximately **239–240 readings** where the example configuration expected **40**. We explored changes in the real environment and LD08 driver to limit the scan array and investigate invalid values.

A separate model-loading problem involved `/tmp/drlnav_current_stage.txt`. Starting the training setup created the missing stage file and allowed the real agent to load in the recorded test. This was a workaround; the robot still did not move reliably afterward.

The key lesson was to trace the complete input-to-command path. A process starting without errors, or even a state with the expected length, did not establish valid observations or useful actions. Winter logs still showed `NaN` linear and angular velocities, and driver investigations found invalid range and intensity values. Their causal relationship remained under investigation.

### Bringing up TurtleBot4

The Spring 2025 documentation records a robot running Ubuntu 24.04.02 and ROS 2 Jazzy, while the lab PC was recorded with Humble. Version-specific instructions and firmware therefore needed careful attention. The handoff includes these findings:

- A startup problem was resolved by installing the correct firmware after finding Humble firmware in the Jazzy setup.
- Missing remote topics were traced to an incomplete environment setup, including a missing `ROS_DOMAIN_ID`.
- Controller pairing improved using the documented `p4pair` workaround, although intermittent disconnections remained.
- A missing `namespace` launch configuration was associated with manually starting a service normally launched at startup without supplying its namespace. I reported the issue in [TurtleBot4 issue #587](https://github.com/turtlebot/turtlebot4/issues/587).
- Package updates were blocked by insufficient cache space. The documented workaround that succeeded was a temporary RAM-backed package cache.

## What we achieved

**TurtleBot3 SLAM mapping.** In Spring 2024, we fixed the SLAM setup and scanned a floor of King Building. FaceTime provided a live view for monitoring people near the robot and taking over control when necessary.

**Simulation and research foundation.** We ran the DRL framework in simulation, studied its architecture and thesis, tested model configurations, and recorded installation procedures. I documented the sensor pipeline and investigated the LD08 driver's behavior rather than treating the laser scan as an interchangeable input.

**Hardware integration findings.** We identified ROS discovery mismatches, model-loading dependencies, changing scan lengths, and invalid sensor and action values. These findings narrowed the work needed for a reliable TurtleBot3 deployment, but did not establish successful autonomous obstacle avoidance on the physical robot.

**A working TurtleBot4 baseline.** The final documentation records Discovery Server networking under the `robot1` namespace, successful manual driving, and completion of the first-node tutorials in both C++ and Python.

**An explicit unresolved SLAM problem.** TurtleBot4 map generation remained incomplete. RViz maps updated only every two to four minutes and appeared coarse, alongside a “Failed to compute odom pose” error. The recorded SLAM parameter changes did not resolve it. This mapping work was a platform tutorial and diagnostic step, separate from the mapless DRL policy.

No validated navigation success-rate benchmark was established in this work. Dynamic target following, sensor fusion, cloud-based training improvements, and reliable deployment of a learned policy remained future objectives.

## Continuing the project

After transferring to Columbia University, I stopped working on this project and left the research archive for the next student. It contains the semester meeting notes, thesis and framework explanations, installation logs, ROS 2 Foxy setup notes, driver investigations, TD3/DDPG observations, parameter experiments, and TurtleBot4 setup and troubleshooting documentation.

A practical continuation sequence is:

1. **Reestablish the documented hardware baseline.** Verify firmware and ROS versions, discovery, namespace, manual control, scan data, and odometry before attempting a learned policy.
2. **Resolve the observation interface.** Choose a consistent angular sampling scheme, handle invalid readings, and verify that physical observations match the saved model's shape and normalization. Retrain if that interface changes.
3. **Trace finite commands through the system.** Check goal reception, policy inputs and outputs, and robot command delivery. Investigate the remaining SLAM timing and odometry issue separately.
4. **Evaluate a reproducible baseline.** Record model settings, training duration, arena layout, and repeated navigation outcomes before adding target following, camera input, or cloud experiments.

The documentation preserves both successful fixes and unsuccessful attempts so the next student can begin from the project's actual stopping point.

### Resources and research record

- [Original framework by Tomas van Rietbergen](https://github.com/tomasvr/turtlebot3_drlnav)
- [TurtleBot4 namespace issue I reported](https://github.com/turtlebot/turtlebot4/issues/587)

This account draws on the Spring 2024 driver and shareout notes; Fall 2024 thesis overview, framework explanation, and installation log; Winter 2025 meeting notes, driver modifications, and TD3/DDPG findings; and Spring 2025 meeting notes and TurtleBot4 research documentation.

### Team

- **Prof. Michael R. McCarrin** — advisor
- **Otavio Paz Nascimento** — student researcher, 2023–2025
- **Rosie McKusick** — student researcher; early project and Spring 2024 driver work
- **Eliza Bomfim Guimaraes** — student researcher, early project team
