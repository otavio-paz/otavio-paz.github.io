---
layout: page
title: Autonomous Navigation with DRL on TurtleBot3/4 (under changes)
description: Under the mentorship of Professor McCarrin, this involves developing on navigation and obstacle avoidance for the TurtleBot3 and TurtleBot4.
img: assets/img/turtlebot-diagram.png
importance: 3
category: work
---

Welcome to the project hub for our exploration of **Deep Reinforcement Learning (DRL)** in autonomous navigation using the **TurtleBot**.

This research has evolved over the semesters as we explored new possibilities that aligned with the team's growing interests and desires:

- **Fall 2023**: Focused on surface-level autonomous vehicles, introduced to ROS and Gazebo
- **Spring 2024**: Acquired TurtleBot 3 Burger, learned about SLAM and the possibility of fiducial markers
- **Fall 2024**: Shifted focus to deep reinforcement learning for obstacle avoidance, primarily based on Tomas van Rietbergen's work
- **Spring 2025**: Acquired TurtleBot 4, considering continuing work on DRL and sensor fusion

Our work has two key objectives: **obstacle avoidance** and **dynamic target following**. By integrating DRL with PyTorch, we aim to improve the robot’s decision-making in real-time scenarios.

## Navigation

- [About the Project](#about-the-project)
- [Research Methodology](#research-methodology)
- [Results](#results)
- [Blog/Updates](#blogupdates)
- [Resources](#resources)
- [Team](#team)

---

## About the Project

### Problem Statement

Navigating dynamic and cluttered environments autonomously remains a challenging problem for robots.

### Objectives

- Implement **DRL** for real-time **obstacle avoidance** by [van Rietbergen T.L](https://github.com/tomasvr/turtlebot3_drlnav) for LD08 sensor.
- Enable **dynamic target following** while maintaining the first feature.

### Motivation

This research addresses critical challenges in robotics and contributes to practical applications in service robots, autonomous vehicles in warehouses, and in other areas.

---

## Research Methodology

### Robot Platform

- **TurtleBot3 Burger**: Compact, ROS-compatible, ideal for research and education.

- **TurtleBo4**: Better documentation, great capabilities in terms of sensoring (RGBD Camera, infrared sensors, etc), and built-in features.

### Software Stack

- **ROS**: Robot Operating System for communication and control.
- **PyTorch**: Framework for developing DRL models.
- **Gazebo**: Simulation environment for testing and training.

### Approach

1. **Simulations**: Training DRL models in controlled virtual environments.

<div class="row justify-content-center">
  <div class="col-sm-12 col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/robot-simulation.png" title="TurtleBot3 Simulation" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

2. **Real-world Testing**: Refining models on the physical TurtleBot 3 and 4.

<div class="row justify-content-center">
  <div class="col-sm-12 col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/robot-testing.png" title="TurtleBot3 Testing" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

### Challenges

- Overcoming outdated documentation for the TurtleBot 3 and driver.
- Adapting DRL techniques for hardware limitations.
- Integrating multiple robots (TurtleBot 3 and 4).

<div class="row justify-content-center">
  <div class="col-sm-12 col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/turtlebot4.png" title="TurtleBot4" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

---

## Results

In progress.

### Demonstrations

In progress.

### Metrics

- Success rates for navigation tasks.
- Training times and resource efficiency.

---

## Resources

### Codebase

- [Our GitHub Repository](https://github.com/otavio-paz/turtlebot3_drlnav): Our modifications and models.

- [Original GitHub Repository](https://github.com/tomasvr/turtlebot3_drlnav): van Rietbergen T.L, Master Thesis at UT Delft.

### Datasets

- Details about simulation data and real-world test results (in progress).

### Documentation

- Tutorials for setting up the TurtleBot3 and replicating our experiments (in progress).

---

## Team

- Prof. Michael R. McCarrin (Advisor)
- Otavio Paz Nascimento (Student Researcher - 2023-Present)
- Rosie McKusick (Student Researcher - 2023)
- Eliza Bomfim Guimaraes (Student Researcher - 2023)
