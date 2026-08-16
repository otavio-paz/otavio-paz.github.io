---
layout: page
title: Spider-Like Robot with OLED Display
description: Building and programming a four-legged robot with 12 servo-driven joints, an Arduino Nano, and an animated OLED face.
img: assets/projects/spiderbot/images/complete.png
importance: 3
category: work
giscus_comments: false
hide_description: true
skills:
  - Arduino
  - C++
  - 3D printing
---

<style>
  :root { --spider-accent-bg: #17696a; }
  .spider-lead { max-width: 49rem; font-size: 1.12rem; line-height: 1.75; }
  .spider-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: .7rem; margin: 1.15rem 0 1.9rem; }
  .spider-actions .btn { color: #fff !important; background-color: var(--spider-accent-bg) !important; border-color: var(--spider-accent-bg) !important; }
  .spider-actions .btn:hover, .spider-actions .btn:focus-visible { color: #fff !important; background-color: #0d5455 !important; border-color: #0d5455 !important; }
  .spider-hero { margin: 1.5rem 0 2.25rem; }
  .spider-hero figure { margin: 0; }
  .spider-hero img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; background: transparent; border: 0; border-radius: 0 !important; box-shadow: none !important; }
  .spider-media-row { align-items: stretch; margin-bottom: 1rem; }
  .spider-media-card { display: flex; }
  .spider-media-card figure { display: flex; flex-direction: column; width: 100%; margin: 0; }
  .spider-media-card picture { display: flex; flex: 1; align-items: center; justify-content: center; min-width: 0; }
  .spider-media-card img { display: block; width: 100%; height: auto; max-height: 34rem; object-fit: contain; padding: 0; background: transparent; border: 0; border-radius: 0 !important; box-shadow: none !important; }
  .spider-media-card--schematic picture { position: relative; display: block; flex: none; width: 100%; aspect-ratio: 1 / 1; overflow: hidden; }
  .spider-media-card--schematic img { position: absolute; top: 50%; left: 50%; width: 94%; max-width: none; max-height: none; transform: translate(-50%, -50%) rotate(90deg); transform-origin: center; }
  .spider-media-card figcaption, .spider-hero figcaption { margin-top: .65rem; color: var(--global-text-color); line-height: 1.5; }
  .spider-stack { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: .85rem; margin: 1.2rem 0 2rem; }
  .spider-stack-card { border: 1px solid var(--global-divider-color); border-top: 3px solid var(--global-theme-color); border-radius: .45rem; padding: 1rem; background: var(--global-bg-color); }
  .spider-stack-card h4 { margin: 0 0 .35rem; color: var(--global-text-color); }
  .spider-stack-card p { margin: 0; font-size: .94rem; }
  .spider-table-wrap { margin: 1rem 0 2rem; overflow-x: auto; border: 1px solid var(--global-divider-color); border-radius: .5rem; }
  .spider-table { width: 100%; margin: 0; border-collapse: collapse; min-width: 34rem; color: var(--global-text-color) !important; background: var(--global-bg-color); }
  .spider-table th, .spider-table td { padding: .78rem .9rem; border: 0; border-bottom: 1px solid var(--global-divider-color); text-align: left; vertical-align: top; color: var(--global-text-color) !important; background-color: var(--global-bg-color) !important; }
  .spider-table thead th { color: #fff !important; background-color: var(--spider-accent-bg) !important; border-bottom: 2px solid var(--spider-accent-bg); font-size: .8rem; letter-spacing: .04em; text-transform: uppercase; }
  .spider-table tbody tr:last-child th, .spider-table tbody tr:last-child td { border-bottom: 0; }
  .spider-table tbody tr:nth-child(even) th, .spider-table tbody tr:nth-child(even) td { background-color: var(--global-code-bg-color) !important; }
  .spider-table th, .spider-table td { overflow-wrap: anywhere; }
  .spider-table code { white-space: nowrap; color: inherit !important; background: transparent !important; }
  .spider-code-note { border-left: 4px solid #0d4546; margin: 1rem 0 1.5rem; padding: .85rem 1rem; background: var(--spider-accent-bg); }
  .spider-code-note, .spider-code-note p, .spider-code-note strong { color: #fff !important; }
  .spider-code-note p:last-child { margin-bottom: 0; }
  .spider-callout { border: 1px solid var(--global-divider-color); border-radius: .5rem; padding: 1rem 1.1rem; margin: 1rem 0 1.75rem; }
  .spider-callout strong { color: var(--global-text-color); }
  .post article p code, .post article li code { color: var(--global-text-color) !important; background: var(--global-code-bg-color) !important; border: 1px solid var(--global-divider-color); overflow-wrap: anywhere; }
  .post article figure.highlight { max-width: 100%; overflow-x: auto; border: 1px solid #334155; border-radius: .4rem; background: #1f2933 !important; }
  .post article figure.highlight pre { min-width: 100%; margin: 0; overflow-x: auto; color: #f8fafc !important; background: #1f2933 !important; white-space: pre; }
  .post article figure.highlight code, .post article figure.highlight code span { color: #f8fafc !important; background: transparent !important; border: 0; }
  @media (max-width: 767px) {
    .spider-stack { grid-template-columns: 1fr; }
    .spider-media-card { margin-bottom: 1.5rem; }
    .spider-table-wrap { overflow-x: hidden; }
    .spider-table { min-width: 0; table-layout: fixed; }
    .spider-table th, .spider-table td { padding: .65rem .45rem; font-size: .88rem; }
    .spider-table--hardware thead { display: none; }
    .spider-table--hardware, .spider-table--hardware tbody, .spider-table--hardware tr { display: block; width: 100%; }
    .spider-table--hardware tbody tr { padding: .85rem; border-bottom: 1px solid var(--global-divider-color); }
    .spider-table--hardware tbody tr:last-child { border-bottom: 0; }
    .spider-table--hardware tbody th, .spider-table--hardware tbody td { display: grid; grid-template-columns: 5.25rem minmax(0, 1fr); gap: .65rem; width: 100%; padding: .45rem 0; border-bottom: 0; background: var(--global-bg-color) !important; }
    .spider-table--hardware tbody th::before, .spider-table--hardware tbody td::before { content: attr(data-label); font-weight: 600; color: var(--global-text-color-light); }
  }
</style>

<p class="spider-lead">
  This four-legged robot was built with Jingyi Yang as the final project for PHYS 242: Electronics at Oberlin College. Each leg has three servo-driven joints, giving the Arduino Nano 12 actuators to coordinate. A small OLED adds an expressive face while the mechanical, electrical, and software layers turn a collection of printed parts into a characterful robotics prototype.
</p>

<div class="spider-actions">
  <a class="btn btn-outline-primary" href="https://github.com/otavio-paz/SpiderBot" target="_blank" rel="noopener noreferrer">
    <i class="fa-brands fa-github" aria-hidden="true"></i> View the source code
  </a>
</div>

<div class="spider-hero">
  {% include figure.liquid loading="eager" path="assets/projects/spiderbot/images/complete.png" title="Completed spider-like robot with OLED face" caption="The assembled prototype combines 3D-printed linkages, 12 micro servos, breadboard electronics, and a front-mounted OLED face." class="img-fluid" %}
</div>

## Design brief

A wheeled platform can move with only two motor channels. This design deliberately takes the harder route: four articulated legs that must lift, swing, land, and support the body in a useful sequence. The project therefore focused on four connected problems:

1. **Mechanical range:** design and print hip, knee, and foot linkages that move without colliding or binding.
2. **Repeatable control:** calibrate 12 inexpensive servos and keep each joint's current angle in software.
3. **Power and wiring:** distribute regulated 5 V power while routing 12 control signals around a compact body.
4. **Personality and interaction:** render a custom bitmap face and prepare a serial/Bluetooth control path.

## Mechanical and electrical architecture

<div class="spider-stack" aria-label="Robot system architecture">
  <div class="spider-stack-card">
    <h4>Mechanics</h4>
    <p>PLA body and linkages create four legs with hip, knee, and foot joints.</p>
  </div>
  <div class="spider-stack-card">
    <h4>Control</h4>
    <p>An Arduino Nano stores joint positions, generates motion sequences, and updates the OLED.</p>
  </div>
  <div class="spider-stack-card">
    <h4>Power</h4>
    <p>A 2S 7.4 V LiPo feeds a 7805 regulator stage with local filtering for the 5 V rail.</p>
  </div>
</div>

<div class="row justify-content-center spider-media-row">
  <div class="col-sm-12 col-md-5 mt-3 mt-md-0 spider-media-card">
    {% include figure.liquid loading="lazy" path="assets/projects/spiderbot/images/joint-map.png" title="Annotated servo positions on the spider robot" caption="Joint map used during assembly and calibration. H, K, and F identify each leg's hip, knee, and foot servos." class="img-fluid" %}
  </div>
  <div class="col-sm-12 col-md-7 mt-3 mt-md-0 spider-media-card spider-media-card--schematic">
    {% include figure.liquid loading="lazy" path="assets/projects/spiderbot/images/circuit-schematic.png" title="Arduino Nano, servo, OLED, and power schematic" caption="System schematic showing the 12 servo signals, OLED connections, Arduino Nano, and regulated battery input." class="img-fluid" %}
  </div>
</div>

### Hardware choices

<div class="spider-table-wrap">
  <table class="spider-table spider-table--hardware">
    <thead>
      <tr><th scope="col">Component</th><th scope="col">Role</th><th scope="col">Why it fit the prototype</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row" data-label="Component">Arduino Nano</th><td data-label="Role">Central controller</td><td data-label="Reason">Enough I/O for the 12 servo signals and display while remaining small enough for the body.</td></tr>
      <tr><th scope="row" data-label="Component">12 × SG90</th><td data-label="Role">Hip, knee, and foot actuation</td><td data-label="Reason">Compact and inexpensive, making a three-joint leg practical within a course-project budget.</td></tr>
      <tr><th scope="row" data-label="Component">2S 7.4 V LiPo</th><td data-label="Role">Portable energy source</td><td data-label="Reason">Provides a rechargeable supply for untethered testing.</td></tr>
      <tr><th scope="row" data-label="Component">7805 regulator stage</th><td data-label="Role">5 V power rail</td><td data-label="Reason">Simple to assemble on protoboard; the schematic adds bulk and local decoupling capacitors around the regulator.</td></tr>
      <tr><th scope="row" data-label="Component">128 × 64 OLED</th><td data-label="Role">Face and visual feedback</td><td data-label="Reason">A monochrome bitmap creates personality without adding much mechanical or electrical complexity.</td></tr>
      <tr><th scope="row" data-label="Component">3D-printed PLA frame</th><td data-label="Role">Body and leg linkages</td><td data-label="Reason">Made joint geometry easy to iterate and replace during fitting.</td></tr>
    </tbody>
  </table>
</div>

### Servo pin map

The firmware treats the robot as a two-dimensional array: four legs, each containing a hip, knee, and foot. Keeping the wiring table in the same shape makes debugging much easier than tracking 12 unrelated variables.

<div class="spider-table-wrap">
  <table class="spider-table">
    <thead>
      <tr><th scope="col">Leg</th><th scope="col">Hip</th><th scope="col">Knee</th><th scope="col">Foot</th></tr>
    </thead>
    <tbody>
      <tr><th scope="row">Front left</th><td><code>D2</code></td><td><code>D3</code></td><td><code>D4</code></td></tr>
      <tr><th scope="row">Front right</th><td><code>D8</code></td><td><code>D9</code></td><td><code>D10</code></td></tr>
      <tr><th scope="row">Back left</th><td><code>D5</code></td><td><code>D6</code></td><td><code>D7</code></td></tr>
      <tr><th scope="row">Back right</th><td><code>A1</code></td><td><code>A2</code></td><td><code>A3</code></td></tr>
    </tbody>
  </table>
</div>

<div class="row justify-content-center spider-media-row">
  <div class="col-sm-12 col-md-7 mt-3 mt-md-0 spider-media-card">
    {% include figure.liquid loading="lazy" path="assets/projects/spiderbot/images/electronics-testing.png" title="Top view of the spider robot during electronics testing" caption="Breadboard integration kept the Nano, servo headers, and display connections accessible during bring-up." class="img-fluid" %}
  </div>
  <div class="col-sm-12 col-md-5 mt-3 mt-md-0 spider-media-card">
    {% include figure.liquid loading="lazy" path="assets/projects/spiderbot/images/voltage-regulator-board.png" title="Prototype voltage regulator board" caption="The compact regulator board was soldered separately before being integrated with the robot's power wiring." class="img-fluid" %}
  </div>
</div>

## How the robot was programmed

The main sketch is organized around the physical structure instead of giving every motor a separate name. A 4 × 3 servo matrix and a matching pin matrix let the same movement function address any joint by leg and joint index.

{% highlight cpp %}
Servo joints[4][3];
const int jointPins[4][3] = {
{2, 3, 4}, {8, 9, 10},
{5, 6, 7}, {A1, A2, A3}
};
{% endhighlight %}

### Mirroring the neutral pose

The servos are physically mirrored across the chassis, so identical angle commands would not create a symmetric stance. The sketch compensates with complementary values such as `180 - startAngle` for opposite joints. This keeps the higher-level gait code readable: it can think in terms of legs and joint targets while the initialization handles orientation.

<div class="spider-code-note">
  <p><strong>Design decision:</strong> store the calibrated position of every joint in a matching 4 × 3 array. Movement code then knows where a servo is starting instead of assuming it already reached the previous command.</p>
</div>

### Smoothing each joint movement

Rather than jumping directly to a target angle, the movement helper advances one degree at a time and updates the stored position after the move:

{% highlight cpp %}
while (current != target) {
current += (current < target) ? 1 : -1;
joints[leg][joint].write(current);
delay(10);
}
{% endhighlight %}

This reduces abrupt motion and made early testing easier to observe. The tradeoff is that `delay()` blocks the controller, so one joint completes before the next command progresses. A future version could replace this loop with a timer-driven state machine to update several joints together and remain responsive to new commands.

### Building a diagonal gait

The forward routine alternates diagonal pairs: front-right with back-left, then front-left with back-right. For each pair, the knees lift, the hips swing, the knees lower, and the joints return toward their starting pose. That sequence aims to preserve support on the opposite diagonal while moving two legs.

{% highlight cpp %}
movePair(frontRight, backLeft);
movePair(frontLeft, backRight);
{% endhighlight %}

The production sketch expands those two conceptual calls into explicit servo commands. Hip and knee joints drive the current forward sequence; the foot joints are attached and tracked but are not yet used in that gait. Keeping foot control in the data model leaves room for better ground clearance and body leveling later.

### Serial control and the OLED face

The current interaction loop uses a simple character command: receiving `f` over serial triggers the forward sequence. A `SoftwareSerial` bridge for an HC-06 Bluetooth module is present as a prototype, but it is not yet called by the main loop. That separation was useful during development—motion could first be verified over USB before adding wireless behavior.

{% highlight cpp %}
if (Serial.read() == 'f') {
moveForward();
}
{% endhighlight %}

The face is stored as a 128 × 64 bitmap in program memory and drawn to the OLED during setup. Storing the image in flash avoids spending the Nano's limited working memory on a full-screen graphic.

{% highlight cpp %}
display.drawBitmap(0, 0, faceBitmap, 128, 64, WHITE);
display.display();
{% endhighlight %}

<div class="spider-callout">
  <strong>Before a final PCB revision:</strong> the OLED signal names and pin assignments should be reconciled between the schematic and the current software-defined display constructor. Resolving that single source of truth will make the wiring easier to reproduce.
</div>

## Testing and iteration

The robot was brought up in stages rather than powered as a complete 12-servo system on the first attempt:

1. Individual servos were exercised with a separate calibration sketch to confirm direction and safe travel limits.
2. PLA joints were printed, fitted, and checked for mechanical interference.
3. Servo labels were matched to the physical legs and the Arduino pin map.
4. Breadboard wiring and continuity were checked before integrating the regulator board and OLED.
5. The complete assembly was tested with slow, observable motion sequences so binding or reversed joints could be caught quickly.

This process exposed the central constraint of the prototype: the assembled robot was heavier than the small servos and sequential gait code could comfortably move. The system demonstrated coordinated joint commands and the custom OLED face, but the planned walking patterns were too slow and did not produce reliable locomotion. That result is more useful than claiming a finished gait—it identifies where the next engineering iteration needs to focus.

## What I would improve next

- **Reduce mass and joint friction:** revise the printed linkages and body so more servo torque is available for lifting rather than supporting the frame.
- **Use non-blocking motion:** update all active joints on a shared time step instead of finishing one blocking sweep at a time.
- **Tune the gait from measured poses:** record safe joint limits and stance offsets per servo, then interpolate coordinated body trajectories.
- **Strengthen power distribution:** replace the breadboard layout with a completed PCB and a supply designed for the combined current transients of 12 servos.
- **Complete wireless control:** connect the existing Bluetooth bridge to explicit forward, backward, left, right, and stop commands.

The prototype succeeded as an electronics and robotics platform: it connected mechanical design, power regulation, multi-axis actuation, embedded graphics, and firmware architecture in one build. Its limitations also made the next design decisions concrete—lighter mechanics, simultaneous motion, calibrated gait generation, and more robust power delivery.
