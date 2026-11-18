---
layout: page
title: Eridian-like Quadruped robot
description: An eight-servo crawler developed through CAD, printed hardware, joint calibration, and spoken diagnostics.
img: assets/projects/rocky/images/prototype.jpg
importance: 2
category: work
hide_description: true
giscus_comments: false
skills:
  - SolidWorks
  - 3D printing
  - Python
  - Raspberry Pi
---

<style>
.rocky-lead { max-width:50rem; font-size:1.12rem; line-height:1.75; }
.rocky-note { background:var(--global-code-bg-color); border-left:4px solid var(--global-theme-color); padding:1.1rem 1.25rem; margin:1.5rem 0 2rem; }
.rocky-note p:last-child { margin-bottom:0; }
.rocky-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:1.25rem; margin:1.5rem 0 2rem; }
.rocky-grid figure { margin:0; }
.rocky-grid img { width:100%; height:21rem; object-fit:contain; background:var(--global-code-bg-color); border-radius:.4rem; }
.rocky-grid figcaption, .rocky-hero figcaption { padding-top:.65rem; font-size:.9rem; line-height:1.5; }
.rocky-hero { margin:1.5rem 0 2rem; }
.rocky-hero img { width:100%; max-height:38rem; object-fit:contain; }
.rocky-specs { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:.85rem; margin:1.5rem 0 2rem; }
.rocky-specs div { border:1px solid var(--global-divider-color); border-top:3px solid var(--global-theme-color); border-radius:.4rem; padding:1rem; }
.rocky-specs strong { display:block; margin-bottom:.4rem; }
.rocky-specs p { margin:0; }
@media(max-width:767px) { .rocky-grid,.rocky-specs { grid-template-columns:1fr; } .rocky-grid img { height:auto; max-height:28rem; } }
.rocky-table-wrap { overflow-x:auto; margin:1.3rem 0 2rem; border:1px solid var(--global-divider-color); border-radius:.4rem; }
.rocky-table { width:100%; border-collapse:collapse; color:var(--global-text-color); font-size:.92rem; }
.rocky-table caption { caption-side:top; padding:.8rem 1rem; color:var(--global-text-color); font-weight:600; }
.rocky-table th,.rocky-table td { padding:.65rem .8rem; border-bottom:1px solid var(--global-divider-color); text-align:left; vertical-align:top; }
.rocky-table thead th { background:#17696a; color:#fff; white-space:nowrap; }
.rocky-table tbody tr:nth-child(even) { background:var(--global-code-bg-color); }
.rocky-table tfoot { font-weight:600; }
.rocky-table--calibration { min-width:47rem; }
</style>

<p class="rocky-lead">I am building Rocky, a four-legged crawler inspired by <em>Project Hail Mary</em>, for MECE 4611: Robotics Studio at Columbia. The rock-like exterior started the concept; most of the work so far has gone into the structure underneath it: fitting eight bus servos, making the printed legs serviceable, and bringing each joint into a calibrated control system.</p>

<div class="rocky-note"><p><strong>In progress · Fall 2026.</strong> The prototype has battery-powered joint motion, a homing routine, servo disconnect handling, and spoken startup diagnostics. A complete walking gait, stronger legs, and the enclosing shell remain in development.</p></div>

<div class="rocky-hero">
<figure><img src="{{ '/assets/projects/rocky/images/prototype.jpg' | relative_url }}" alt="Red printed quadruped prototype with exposed electronics" loading="lazy"><figcaption>Physical prototype during joint-motion testing. The open chassis keeps the electronics accessible while the mechanics and control routines are being developed.</figcaption></figure>
</div>

<div class="rocky-specs">
<div><strong>8 actuated joints</strong><p>Two HTD-35H bus servos per leg.</p></div>
<div><strong>Raspberry Pi 4B</strong><p>Onboard control and USB audio.</p></div>
<div><strong>Separate 3S supplies</strong><p>2200 mAh for servos; 650 mAh for compute through a 5 V regulator.</p></div>
</div>

## From a rock silhouette to a serviceable chassis

My first sketches placed the electronics inside a low rock-shaped body. The early CAD model used a broad enclosure; the next revision opened the chassis with ventilation slots and dedicated component mounts. I split the chassis into two levels with largely independent wiring so that reaching one subsystem would require less disassembly.

I also moved away from adapting the movie's supplied STL. Simplifying its irregular geometry into usable shell pieces was difficult, so I began designing the exterior and its structural attachments from scratch.

<div class="rocky-grid">
<figure><img src="{{ '/assets/projects/rocky/images/early-cad.jpg' | relative_url }}" alt="Early Rocky CAD with rock-textured feet and exposed chassis" loading="lazy"><figcaption>Early CAD: the enclosure and leg geometry before the open-frame revision.</figcaption></figure>
<figure><img src="{{ '/assets/projects/rocky/images/chassis-cad.jpg' | relative_url }}" alt="Revised slotted chassis with eight servos and mounted electronics" loading="lazy"><figcaption>Revised CAD: ventilated structure, component supports, and a more deliberate weight distribution.</figcaption></figure>
</div>

The component-level mass budget reached approximately **1.53 kg**, including an estimated 200 g shell. That is a design estimate, not a measured finished mass. The corresponding **0.15–0.20 m/s** speed target also remains unverified on the physical robot.

<div class="rocky-table-wrap" role="region" aria-label="Mass budget · Assignment 3 estimates" tabindex="0"><table class="rocky-table "><caption>Mass budget · Assignment 3 estimates</caption><thead><tr><th scope="col">Component</th><th scope="col">Mass (g)</th><th scope="col">Share</th><th scope="col">Basis</th></tr></thead><tbody><tr><th scope="row">Printed structure</th><td>378.0</td><td>24.7%</td><td>Bambu Slicer; excludes shell</td></tr><tr><th scope="row">Printed shell</th><td>200.0</td><td>13.1%</td><td>Estimate from earlier STL</td></tr><tr><th scope="row">HTD-35H servos</th><td>512.0</td><td>33.4%</td><td>8 × 64 g</td></tr><tr><th scope="row">Raspberry Pi 4B</th><td>47.0</td><td>3.1%</td><td>Board only</td></tr><tr><th scope="row">USB speaker</th><td>73.6</td><td>4.8%</td><td>Enclosure and cable included</td></tr><tr><th scope="row">USB microphone</th><td>2.2</td><td>0.1%</td><td>Small microphone estimate</td></tr><tr><th scope="row">650 mAh 3S battery</th><td>59.0</td><td>3.9%</td><td>Compute supply</td></tr><tr><th scope="row">2200 mAh 3S battery</th><td>150.0</td><td>9.8%</td><td>Servo supply; pack dependent</td></tr><tr><th scope="row">5 V regulator</th><td>20.0</td><td>1.3%</td><td>Pending measurement</td></tr><tr><th scope="row">M2 screws and inserts</th><td>32.5</td><td>2.1%</td><td>Combined estimate</td></tr><tr><th scope="row">Wiring and connectors</th><td>40.0</td><td>2.6%</td><td>Includes XT30/XT60</td></tr><tr><th scope="row">Other mounting hardware</th><td>17.5</td><td>1.1%</td><td>Brackets, ties, and mounts</td></tr></tbody><tfoot><tr><th scope="row">Total</th><td>1531.8</td><td>100.0%</td><td>Estimated finished mass</td></tr></tfoot></table></div>

## What changed after printing

The first hardware exposed problems that were less obvious in CAD. Leg links flexed, screw holes needed more clearance, and the flat servo interface was difficult to center. I thickened the links, increased the holes from 2.0 to 2.2 mm, and added a locating recess for the servo wheel.

The original knee and foot were one printed part. I replaced that with a detachable foot so I could change its length or contact geometry without reprinting the whole link. The tight, screwless connection still needs testing for repeated loading.

<div class="rocky-grid">
<figure><img src="{{ '/assets/projects/rocky/images/detachable-foot.jpg' | relative_url }}" alt="Separate red printed foot and knee link" loading="lazy"><figcaption>Detachable foot: a smaller part to replace when testing a different length or shape.</figcaption></figure>
<figure><img src="{{ '/assets/projects/rocky/images/leg-test.jpg' | relative_url }}" alt="Printed leg mounted to the chassis during a motion test" loading="lazy"><figcaption>Bench motion tests revealed chassis interference and unequal travel between mirrored joints.</figcaption></figure>
</div>

A battery holder also cracked during insertion: its corners were thin and its fit too tight. The next print used thicker internal walls and +0.15 mm hole compensation. Removing supports from the slotted chassis was another fabrication issue to address in later revisions.

## Calibrating the hardware that actually exists

I calibrated all eight joints with torque disabled, manually moving each servo to its minimum, maximum, and home positions. The configured limits sit eight raw units inside the observed endpoints. Each joint stores its own home value and direction, accounting for the mirrored mounting on the two sides.

<div class="rocky-table-wrap" role="region" aria-label="Joint calibration · Assignment 5" tabindex="0"><table class="rocky-table rocky-table--calibration"><caption>Joint calibration · Assignment 5</caption><thead><tr><th scope="col">Joint</th><th scope="col">ID</th><th scope="col">Observed raw range</th><th scope="col">Safe raw range</th><th scope="col">Home</th><th scope="col">Direction</th><th scope="col">Travel from home</th></tr></thead><tbody><tr><th scope="row">Front-left hip</th><td>1</td><td>240–971</td><td>248–963</td><td>521</td><td>+1</td><td>−65.5° to +106.1°</td></tr><tr><th scope="row">Front-left knee</th><td>2</td><td>37–989</td><td>45–981</td><td>410</td><td>+1</td><td>−87.6° to +137.0°</td></tr><tr><th scope="row">Front-right hip</th><td>3</td><td>12–641</td><td>20–633</td><td>358</td><td>−1</td><td>−66.0° to +81.1°</td></tr><tr><th scope="row">Front-right knee</th><td>4</td><td>26–845</td><td>34–837</td><td>296</td><td>−1</td><td>−129.8° to +62.9°</td></tr><tr><th scope="row">Rear-left hip</th><td>5</td><td>131–774</td><td>139–766</td><td>495</td><td>+1</td><td>−85.4° to +65.0°</td></tr><tr><th scope="row">Rear-left knee</th><td>6</td><td>96–919</td><td>104–911</td><td>395</td><td>+1</td><td>−69.8° to +123.8°</td></tr><tr><th scope="row">Rear-right hip</th><td>7</td><td>184–848</td><td>192–840</td><td>424</td><td>−1</td><td>−99.8° to +55.7°</td></tr><tr><th scope="row">Rear-right knee</th><td>8</td><td>78–933</td><td>86–925</td><td>448</td><td>−1</td><td>−114.5° to +86.9°</td></tr></tbody></table></div>


The motion tests progressed from paired leg movements to moving one leg at a time, then to a sequence where each hip advances and returns home in reverse order. These are actuator and sequencing tests; they do not yet establish a stable walking gait.

<div class="rocky-grid">
<figure><img src="{{ '/assets/projects/rocky/images/homing.jpg' | relative_url }}" alt="Assembled Rocky held during calibration and homing tests" loading="lazy"><figcaption>Assembled hardware used for the calibrated homing routine.</figcaption></figure>
<figure><img src="{{ '/assets/projects/rocky/images/test-pose.jpg' | relative_url }}" alt="Rocky prototype viewed from above during movement tests" loading="lazy"><figcaption>Hip sequencing on the physical prototype, with the shell still absent.</figcaption></figure>
</div>

## Startup checks and failure handling

The boot routine checks that all servos are present and reads their temperature, position, and supply voltage. Status messages and warnings pass through a Python text-to-speech module, making the checks audible on the robot's speaker.

In a separate disconnect test, I interrupted one servo during a programmed 20-second movement. The controller stopped the servos that remained reachable. This gave me a concrete failure case to test before combining the individual motions into a gait.

## Next steps

The next mechanical work is to strengthen the legs, refine the foot connection, and finish the shell mounts. On the control side, I need to turn the calibrated joint sequences into a crawl and measure its stability, speed, and power use under load.

I also plan to explore a Rocky-inspired voice with Piper TTS and later local language-model interaction. The current audio implementation is spoken diagnostics; character voice and conversation are future work.



