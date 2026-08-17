---
layout: page
title: Prototyping Artificial Muscles with Silicone and Iron Powder
description: An eight-week soft-robotics study combining CAD, FDM molds, silicone–iron composites, solenoids, and magnetic-field measurements.
img: assets/projects/soft-robotics/images/actuator-design.jpg
importance: 2
category: work
giscus_comments: false
hide_description: true
skills:
  - Experimental design
  - CAD & FDM
  - Materials testing
  - Data analysis
---

<style>
  :root { --soft-accent: #0b6b69; --soft-accent-dark: #075251; --soft-warm: #d55e00; }
  .soft-lead { max-width: 51rem; font-size: 1.13rem; line-height: 1.75; }
  .soft-actions { display: flex; flex-wrap: wrap; gap: .7rem; margin: 1.2rem 0 1.8rem; }
  .soft-actions .btn { color: #fff !important; background: var(--soft-accent) !important; border-color: var(--soft-accent) !important; }
  .soft-actions .btn:hover, .soft-actions .btn:focus-visible { color: #fff !important; background: var(--soft-accent-dark) !important; border-color: var(--soft-accent-dark) !important; }
  .soft-hero { margin: 1.45rem 0 2rem; }
  .soft-hero figure { margin: 0; }
  .soft-hero picture { display: block; overflow: hidden; }
  .soft-hero img { display: block; width: 100%; aspect-ratio: 16 / 9; object-fit: cover; object-position: 50% 63%; border: 0; border-radius: .6rem !important; box-shadow: none !important; }
  .soft-hero figcaption, .soft-media-card figcaption, .soft-plot-card figcaption { color: var(--global-text-color-light); font-size: .91rem; line-height: 1.5; text-align: left; }
  .soft-metrics { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: .75rem; margin: 1.4rem 0 2.1rem; }
  .soft-metric { border-top: 3px solid var(--soft-accent); padding: .8rem .25rem 0; }
  .soft-metric strong { display: block; color: var(--global-text-color); font-size: 1.35rem; line-height: 1.15; }
  .soft-metric span { display: block; color: var(--global-text-color-light); font-size: .86rem; line-height: 1.35; margin-top: .3rem; }
  .soft-contents { background: var(--global-code-bg-color); border-left: 4px solid var(--soft-accent); border-radius: .3rem; margin: 1.5rem 0 2.25rem; padding: 1.1rem 1.25rem; }
  .soft-contents h2 { font-size: 1.15rem; margin: 0 0 .75rem; }
  .soft-contents ol { columns: 2; column-gap: 2rem; margin: 0; padding-left: 1.25rem; }
  .soft-contents li { break-inside: avoid; margin: 0 0 .45rem; }
  .soft-question { border: 1px solid var(--global-divider-color); border-left: 4px solid var(--soft-accent); border-radius: .45rem; margin: 1.15rem 0 1.8rem; padding: 1rem 1.15rem; }
  .soft-question p:last-child { margin-bottom: 0; }
  .soft-process { counter-reset: soft-step; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: .75rem; margin: 1.25rem 0 2rem; }
  .soft-process-step { counter-increment: soft-step; border: 1px solid var(--global-divider-color); border-radius: .5rem; padding: .9rem; }
  .soft-process-step::before { content: "0" counter(soft-step); display: block; color: var(--soft-accent); font-size: .78rem; font-weight: 750; letter-spacing: .08em; margin-bottom: .45rem; }
  .soft-process-step strong { display: block; font-size: .95rem; margin-bottom: .25rem; }
  .soft-process-step p { color: var(--global-text-color-light); font-size: .86rem; line-height: 1.5; margin: 0; }
  .soft-media-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin: 1.25rem 0 2.15rem; }
  .soft-media-card { background: var(--global-code-bg-color); border: 1px solid var(--global-divider-color); border-radius: .55rem; margin: 0; overflow: hidden; }
  .soft-media-card figure { display: flex; flex-direction: column; height: 100%; margin: 0; }
  .soft-media-card picture { display: block; aspect-ratio: 4 / 3; overflow: hidden; }
  .soft-media-card img { display: block; width: 100%; height: 100%; object-fit: cover; }
  .soft-media-card figcaption { flex: 1; margin: 0; padding: .8rem .9rem .9rem; }
  .soft-plot-card { background: #fff; border: 1px solid var(--global-divider-color); border-radius: .65rem; margin: 1.35rem 0 1.8rem; overflow: hidden; }
  .soft-plot-card figure { margin: 0; }
  .soft-plot-card img { display: block; width: 100%; height: auto; background: #fff; }
  .soft-plot-card figcaption { background: var(--global-bg-color); border-top: 1px solid var(--global-divider-color); margin: 0; padding: .85rem 1rem 1rem; }
  .soft-findings { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .9rem; margin: 1.15rem 0 2rem; }
  .soft-finding { border: 1px solid var(--global-divider-color); border-top: 3px solid var(--soft-accent); border-radius: .45rem; padding: 1rem; }
  .soft-finding strong { display: block; margin-bottom: .35rem; }
  .soft-finding p { margin: 0; }
  .soft-caveat { background: var(--global-code-bg-color); border-left: 4px solid var(--soft-warm); border-radius: .3rem; margin: 1.2rem 0 2rem; padding: 1rem 1.15rem; }
  .soft-caveat p:last-child { margin-bottom: 0; }
  .soft-setbacks { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .95rem; margin: 1.25rem 0 2rem; }
  .soft-setback { border: 1px solid var(--global-divider-color); border-radius: .5rem; padding: 1rem 1.05rem; }
  .soft-setback h4 { margin: 0 0 .45rem; }
  .soft-setback p { margin: 0; }
  .soft-setback .soft-response { border-top: 1px solid var(--global-divider-color); color: var(--global-text-color-light); margin-top: .75rem; padding-top: .75rem; }
  .soft-review { border: 1px solid var(--global-divider-color); border-radius: .55rem; margin: 1.25rem 0 2rem; overflow: hidden; }
  .soft-review-intro { background: var(--global-code-bg-color); padding: 1.05rem 1.15rem; }
  .soft-review-intro p:last-child { margin-bottom: 0; }
  .soft-review-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .soft-review-block { padding: 1.05rem 1.15rem; }
  .soft-review-block + .soft-review-block { border-left: 1px solid var(--global-divider-color); }
  .soft-review-block h4 { margin: 0 0 .55rem; }
  .soft-review-block ul { margin-bottom: 0; padding-left: 1.15rem; }
  .soft-review-block li { margin-bottom: .45rem; }
  .soft-reference-list { font-size: .92rem; line-height: 1.55; padding-left: 1.35rem; }
  .soft-reference-list li { margin-bottom: .7rem; }
  .soft-references { border: 1px solid var(--global-divider-color); border-radius: .5rem; margin: 1.2rem 0 1.8rem; padding: .9rem 1rem; }
  .soft-references summary { color: var(--global-theme-color); cursor: pointer; font-weight: 650; }
  .soft-references[open] summary { margin-bottom: 1rem; }
  @media (max-width: 991px) {
    .soft-process { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .soft-metrics { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (max-width: 767px) {
    .soft-contents ol { columns: 1; }
    .soft-process, .soft-media-grid, .soft-findings, .soft-setbacks, .soft-review-grid { grid-template-columns: 1fr; }
    .soft-review-block + .soft-review-block { border-left: 0; border-top: 1px solid var(--global-divider-color); }
    .soft-hero img { aspect-ratio: 4 / 3; object-position: 56% 60%; }
    .soft-plot-card { margin-left: -.25rem; margin-right: -.25rem; }
    .soft-plot-card picture { display: block; overflow-x: auto; }
    .soft-plot-card picture img { width: 46rem; max-width: none; }
  }
</style>

<p class="soft-lead">
  During the June-July 2023 Oberlin College Research Fellowship, I worked with Prof. Patrick Simen to test whether cast silicone–iron composites could support a low-cost, muscle-inspired soft actuator. Across eight weeks, I moved from literature review and CAD to mold fabrication, material-ratio experiments, and magnetic-field measurements. The result was a repeatable prototyping method and a clearer experimental question—not yet a finished artificial muscle.
</p>

<div class="soft-actions">
  <a class="btn btn-outline-primary" href="https://docs.google.com/presentation/d/1Qtw751AlG6HJE_puJ9hkHq_7S8N8ZrPx/edit?usp=sharing&ouid=115848431762361689971&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">View the fellowship presentation</a>
</div>

<div class="soft-hero">
  {% include figure.liquid loading="eager" path="assets/projects/soft-robotics/images/measuring-prototype.jpg" alt="Otavio measuring a silicone and iron prototype beside a solenoid and magnetic-field meter" title="Measuring a soft-robotics prototype" caption="Measuring a cast prototype at the Robotics Club workbench. The test setup combined a wound coil, a fixed sensor distance, and a magnetic-field meter." class="img-fluid" %}
</div>

<div class="soft-metrics" aria-label="Project summary">
  <div class="soft-metric"><strong>8 weeks</strong><span>Literature, design, fabrication, and testing</span></div>
  <div class="soft-metric"><strong>6 designs</strong><span>Muscle-like, solenoid-like, spring-like, and magnet-like concepts</span></div>
  <div class="soft-metric"><strong>3–4 iterations</strong><span>Typical refinement cycle per design family</span></div>
  <div class="soft-metric"><strong>1–3 in</strong><span>Prototype size range documented in the final presentation</span></div>
</div>

<nav class="soft-contents" aria-label="Page contents">
  <h2>Contents</h2>
  <ol>
    <li><a href="#research-question">Research question</a></li>
    <li><a href="#from-cad-to-measurement">From CAD to measurement</a></li>
    <li><a href="#prototype-gallery">Prototype gallery</a></li>
    <li><a href="#what-the-measurements-show">Measurements and plots</a></li>
    <li><a href="#setbacks-and-how-i-addressed-them">Setbacks and solutions</a></li>
    <li><a href="#paper-review">Paper review</a></li>
    <li><a href="#what-i-would-test-next">Next experiments</a></li>
    <li><a href="#references">References</a></li>
  </ol>
</nav>

## Research question

Soft robotics replaces rigid links with compliant structures that can deform around people and irregular objects. The literature includes pneumatic systems, dielectric elastomer actuators, magnetically controlled elastomers, and many hybrid approaches ([Hines et al., 2017](https://doi.org/10.1002/adma.201603483); [Chung et al., 2021](https://doi.org/10.1002/aisy.202000186)). My project focused on a narrower fabrication question:

<div class="soft-question">
  <p><strong>Can a pourable Dragon Skin™ silicone and iron-powder mixture be molded into a flexible structure that responds usefully to magnetic forces, while remaining simple to fabricate with desktop 3D printing?</strong></p>
</div>

The working hypothesis was that a reusable mold and tunable iron loading could provide a practical rapid-prototyping route. The quantitative work therefore measured how **core material**, **coil current**, **sensor position**, and **iron-to-silicone mass ratio** changed magnetic flux density. The iron ratio is defined as iron-powder mass divided by the combined mass of silicone parts A and B.

## From CAD to measurement

The workflow combined Rhino and SolidWorks for CAD, fused-deposition modeling for the molds, and a benchtop magnetic-field test. This use of additive manufacturing followed the low-cost, fast-iteration approach described in soft-robotics manufacturing reviews ([Gul et al., 2018](https://doi.org/10.1080/14686996.2018.1431862); [Schmitt et al., 2018](https://doi.org/10.3389/frobt.2018.00084)).

<div class="soft-process" aria-label="Prototype workflow">
  <div class="soft-process-step"><strong>Design</strong><p>Model muscle-, coil-, spring-, and permanent-magnet concepts in CAD.</p></div>
  <div class="soft-process-step"><strong>Print</strong><p>FDM-print two-part molds and fit the halves before casting.</p></div>
  <div class="soft-process-step"><strong>Mix</strong><p>Weigh equal silicone parts, add the target iron mass, and mix to an even consistency.</p></div>
  <div class="soft-process-step"><strong>Cast</strong><p>Fill and clamp the mold, cure the silicone, demold, and trim flash with an X-ACTO knife.</p></div>
  <div class="soft-process-step"><strong>Measure</strong><p>Wind the test coil, fix the meter at 1 or 8 mm, sweep current, and record flux density.</p></div>
</div>

The experiments used 5 Ω test coils, a fixed jig for sensor spacing, and both north- and south-side readings where available. Prototype records also tracked the two silicone masses, iron-powder mass, final part mass, visible bubbles, and demolding defects.

## Prototype gallery

<div class="soft-media-grid">
  <div class="soft-media-card">
    {% include figure.liquid loading="lazy" path="assets/projects/soft-robotics/images/actuator-mold.jpg" alt="An array of 3D-printed molds and silicone actuator iterations arranged on a gridded cutting mat" title="Prototype and mold iterations" caption="Six design families were explored, typically through three or four iterations each. The gridded mat made size and geometry changes easy to compare." class="img-fluid" %}
  </div>
  <div class="soft-media-card">
    {% include figure.liquid loading="lazy" path="assets/projects/soft-robotics/images/silicone-iron-mix.jpg" alt="Dragon Skin silicone containers, iron powder, a mixing cup, and a precision scale" title="Preparing the silicone and iron mixture" caption="Each batch was weighed on a precision scale. Iron loading was recorded as iron mass divided by the combined mass of silicone parts A and B." class="img-fluid" %}
  </div>
  <div class="soft-media-card">
    {% include figure.liquid loading="lazy" path="assets/projects/soft-robotics/images/mold-curing.jpg" alt="A clamped 3D-printed mold curing on a work surface" title="Clamped mold during curing" caption="Two-part printed molds were filled, clamped, and left to cure before the part was removed and trimmed." class="img-fluid" %}
  </div>
  <div class="soft-media-card">
    {% include figure.liquid loading="lazy" path="assets/projects/soft-robotics/images/prototype-result.jpg" alt="A gray silicone prototype being measured with digital calipers on a gridded mat" title="Checking the final geometry" caption="Dimensions and visible defects were checked after demolding. Small openings, bubbles, and plate spacing drove the next CAD revision." class="img-fluid" %}
  </div>
</div>

## What the measurements show

### Core material dominated the coil response

The first comparison held the geometry at a 1 mm sensor distance and swept current from 0 to 0.28 A. Ordinary least-squares fits show an iron-core sensitivity of **51.77 ± 0.81 mT/A** (95% fit interval), compared with **22.47 ± 0.53 mT/A** for silicone and **22.13 ± 0.43 mT/A** for air. At the highest recorded current, the iron-core field reached **14.61 mT**.

<div class="soft-plot-card">
  {% include figure.liquid loading="lazy" zoomable=true path="assets/projects/soft-robotics/images/core-comparison.svg" alt="Scatter plot and linear fits showing magnetic flux density versus current for iron, silicone, and air cores" title="Magnetic-field response by core material" caption="Raw workbook measurements with ordinary least-squares fits. The iron core produced 2.3 times the fitted sensitivity of the silicone core. Each condition is a single current sweep, so the plot does not imply repeated-trial uncertainty." class="img-fluid" %}
</div>

### The silicone–iron mixture did not improve monotonically

For each mixture, I fitted the slope of magnetic flux density versus current. Among the complete 1 mm sweeps from ratios 0.00 to 0.86, the pure-silicone specimen produced the strongest south-side response and a near-strongest north-side response. Adding iron sometimes reduced the response, especially near the 0.50 ratio. A plausible explanation from the final reflection is that dispersed particles did not create a continuous high-permeability path; however, particle distribution was not imaged or otherwise characterized, so this remains a hypothesis.

<div class="soft-plot-card">
  {% include figure.liquid loading="lazy" zoomable=true path="assets/projects/soft-robotics/images/mixture-sensitivity.svg" alt="Line plot with confidence intervals showing fitted magnetic-field sensitivity versus iron-to-silicone mass ratio at three sensor positions" title="Magnetic-field sensitivity by iron loading" caption="Sensitivity is the OLS slope of each 11-point current sweep; error bars are 95% confidence intervals for the fitted slope. The 1.43 ratio has only a north-side 1 mm sweep, so the missing south-side and 8 mm conditions are left blank rather than inferred." class="img-fluid" %}
</div>

<div class="soft-findings">
  <div class="soft-finding"><strong>Reliable electrical trend</strong><p>Within each sweep, flux density increased almost linearly with current (fit R² values were generally above 0.98).</p></div>
  <div class="soft-finding"><strong>Strong core effect</strong><p>A solid iron core increased fitted field sensitivity by about 2.3× compared with silicone, while air and silicone behaved similarly.</p></div>
  <div class="soft-finding"><strong>Composition was not enough</strong><p>Low-to-moderate iron loading did not consistently increase the measured field; geometry, particle arrangement, and pole orientation also mattered.</p></div>
  <div class="soft-finding"><strong>Actuation remained preliminary</strong><p>The castings could be manipulated with permanent magnets, but this study did not yet quantify actuator stroke, blocking force, lifetime, or efficiency.</p></div>
</div>

<div class="soft-caveat">
  <p><strong>How to read these plots:</strong> the intervals quantify uncertainty in each linear fit, not manufacturing repeatability. The workbook contains one sweep per configuration, some incomplete conditions, and no randomized repeated specimens. The results are best treated as an engineering screen that identifies the next controlled experiment.</p>
</div>

## Setbacks and how I addressed them

As part of the fellowship, I was responsible to write weekly reflections and it showed to me that much of the research value came from resolving practical failures rather than following a clean linear plan.

<div class="soft-setbacks">
  <div class="soft-setback">
    <h4>CAD work was slower than expected</h4>
    <p>Rhino tool behavior delayed the first mold, and some shapes were faster to build in SolidWorks.</p>
    <p class="soft-response"><strong>Response:</strong> Prof. Simen helped complete the blocked feature, and I adopted a hybrid Rhino–SolidWorks workflow so files could still be exchanged while I used the faster tool for each operation.</p>
  </div>
  <div class="soft-setback">
    <h4>Filament repeatedly clogged the printers</h4>
    <p>Two Robotics Club printers jammed with the purchased PLA, halting the first mold and consuming much of weeks two through four.</p>
    <p class="soft-response"><strong>Response:</strong> I learned the cold-pull procedure, traced recurring clogs to moisture-sensitive filament, improved storage, repaired one printer, and used mentor-printed molds as a temporary fallback.</p>
  </div>
  <div class="soft-setback">
    <h4>Several parts would not demold cleanly</h4>
    <p>Two of three early prototypes failed or were difficult to remove, and the first compressed geometry became too stiff for the intended motion.</p>
    <p class="soft-response"><strong>Response:</strong> I revised wall placement and cavity geometry, considered split-cylinder molds, and treated demolding and compliance as design constraints rather than post-processing problems.</p>
  </div>
  <div class="soft-setback">
    <h4>Geometry defeated the magnetic concept</h4>
    <p>The fourth design left its rigid plates too far apart for strong attraction; the fifth design's small holes produced substantial mold imperfections.</p>
    <p class="soft-response"><strong>Response:</strong> I changed plate spacing and magnet sizes, then made five iterations of the fifth design to determine which openings produced the cleanest mold.</p>
  </div>
  <div class="soft-setback">
    <h4>The magnet-holder material created its own problem</h4>
    <p>An early holder was accidentally cast with the iron-filled mixture, magnetizing surfaces that needed to remain easy to assemble.</p>
    <p class="soft-response"><strong>Response:</strong> I separated structural holders from responsive material and recast the test piece without iron so the magnets could be inserted predictably.</p>
  </div>
  <div class="soft-setback">
    <h4>The final data challenged the hypothesis</h4>
    <p>Several silicone–iron mixtures generated a weaker field than pure silicone, contrary to the expected material trend.</p>
    <p class="soft-response"><strong>Response:</strong> I preserved the result, discussed alternative explanations with my mentor, added the concentration plots to the presentation, and framed particle continuity as a testable next hypothesis.</p>
  </div>
</div>

## Paper review

As another delivarable of the fellow, I did a review focused on [Cao, Gao, and Conn's magnetically coupled dielectric elastomer actuator](https://doi.org/10.1063/1.5071439). Their device used two parallel conical membranes that could be driven separately by changing the phase difference between electrical inputs. The paper reported **14% compression and 8.3% expansion**, making it directly relevant to my interest in magnetic repulsion and spring biasing even though my prototypes used a different actuation architecture.

<div class="soft-review">
  <div class="soft-review-intro">
    <p><strong>Why it mattered to this project:</strong> the paper showed how a magnetic coupling can alter the displacement of a compliant actuator and how force–displacement analysis can connect material behavior to mechanism design.</p>
  </div>
  <div class="soft-review-grid">
    <div class="soft-review-block">
      <h4>What the paper did well</h4>
      <ul>
        <li>Compared permanent-magnet and linear-spring biasing through a systematic force analysis.</li>
        <li>Allowed the two membranes to be activated separately by changing phase, rather than forcing both cones to move together.</li>
        <li>Provided energy approximations, passive force–displacement tests, and statistical analysis to support the mechanism.</li>
      </ul>
    </div>
    <div class="soft-review-block">
      <h4>What I would have liked to see</h4>
      <ul>
        <li>A stronger justification or optimization study for the stated 0.375 magnet-to-membrane diameter ratio.</li>
        <li>More discussion of failure modes, material alternatives, manufacturing difficulty, and practical design limits.</li>
        <li>Clearer photographs or visual measurements of expansion and contraction; the intended displacement was difficult to judge even with the supplemental material.</li>
      </ul>
    </div>
  </div>
</div>

## What I would test next

1. **Repeat each condition across independently cast specimens** to separate regression fit uncertainty from manufacturing variability.
2. **Complete the missing 1.43-ratio conditions** and test additional high loadings before drawing a composition trend.
3. **Control particle distribution** with a documented mixing, degassing, and curing protocol, then inspect cross-sections to test the particle-continuity hypothesis.
4. **Measure mechanical performance**—stroke, blocking force, response time, hysteresis, temperature, and cycle life—rather than using magnetic field alone as a proxy for actuator quality.
5. **Model the magnet-force and spring-force curves versus distance** to identify stable regions where magnetic attraction can overcome elastic restoring force, an idea developed with Prof. Simen during week seven.

## References

The project bibliography combined soft-actuator design, magnetically controlled elastomers, additive manufacturing, and general manufacturing texts. Citations used directly on this page are expanded below; the full research reading list is preserved for context.

<details class="soft-references">
  <summary>Show the complete project bibliography</summary>
  <ol class="soft-reference-list">
    <li>Cao, C., Gao, X., & Conn, A. T. (2019). A compliantly coupled dielectric elastomer actuator using magnetic repulsion. <em>Applied Physics Letters, 114</em>(1), 011904. <a href="https://doi.org/10.1063/1.5071439">https://doi.org/10.1063/1.5071439</a></li>
    <li>Chung, H., Parsons, A. M., & Zheng, L. (2021). Magnetically controlled soft robotics utilizing elastomers and gels in actuation: A review. <em>Advanced Intelligent Systems, 3</em>(3), 2000186. <a href="https://doi.org/10.1002/aisy.202000186">https://doi.org/10.1002/aisy.202000186</a></li>
    <li>Berselli, G., Vertechy, R., Vassura, G., & Parenti-Castelli, V. (2011). Optimal synthesis of conically shaped dielectric elastomer linear actuators: Design methodology and experimental validation. <a href="https://doi.org/10.1109/TMECH.2010.2090664">https://doi.org/10.1109/TMECH.2010.2090664</a></li>
    <li>Gul, J. Z., Sajid, M., Rehman, M. M., Siddiqui, G. U., Shah, I., Kim, K., Lee, J., & Choi, K. H. (2018). 3D printing for soft robotics—A review. <em>Science and Technology of Advanced Materials, 19</em>(1), 243–262. <a href="https://doi.org/10.1080/14686996.2018.1431862">https://doi.org/10.1080/14686996.2018.1431862</a></li>
    <li>Hines, L., Petersen, K., Lum, G. Z., & Sitti, M. (2017). Soft actuators for small-scale robotics. <em>Advanced Materials, 29</em>(13), 1603483. <a href="https://doi.org/10.1002/adma.201603483">https://doi.org/10.1002/adma.201603483</a></li>
    <li>Shintake, J., Rosset, S., Schubert, B. E., Floreano, D., & Shea, H. R. (2015). A foldable antagonistic actuator. <a href="https://doi.org/10.1109/TMECH.2014.2359337">https://doi.org/10.1109/TMECH.2014.2359337</a></li>
    <li>Nguyen, C. T., Phung, H., Nguyen, T. D., Jung, H., & Choi, H. R. (2017). Multiple-degrees-of-freedom dielectric elastomer actuators for a soft printable hexapod robot. <em>Sensors and Actuators A: Physical, 267</em>, 505–516. <a href="https://doi.org/10.1016/j.sna.2017.10.010">https://doi.org/10.1016/j.sna.2017.10.010</a></li>
    <li>Schmitt, F., Piccin, O., Barbé, L., & Bayle, B. (2018). Soft robots manufacturing: A review. <em>Frontiers in Robotics and AI, 5</em>, 84. <a href="https://doi.org/10.3389/frobt.2018.00084">https://doi.org/10.3389/frobt.2018.00084</a></li>
    <li>Tang, X., Li, H., Ma, T., Yang, Y., Luo, J., Wang, H., & Jiang, P. (2022). A review of soft actuator motion: Actuation, design, manufacturing and applications. <em>Actuators, 11</em>(11), 331. <a href="https://doi.org/10.3390/act11110331">https://doi.org/10.3390/act11110331</a></li>
    <li>Whitesides, G. M. (2018). Soft robotics. <em>Angewandte Chemie International Edition, 57</em>(16), 4258–4273. <a href="https://doi.org/10.1002/anie.201800907">https://doi.org/10.1002/anie.201800907</a></li>
    <li>Groover, M. P. (2010). <em>Fundamentals of modern manufacturing: Materials, processes, and systems</em> (7th ed.). Wiley.</li>
    <li>Laschi, C., Rossiter, J., Iida, F., Cianchetti, M., & Margheri, L. (Eds.). (2018). <em>Soft robotics: Trends, applications and challenges</em>. Springer International Publishing.</li>
  </ol>
</details>

<div class="soft-actions">
  <a class="btn btn-outline-primary" href="https://docs.google.com/presentation/d/1Qtw751AlG6HJE_puJ9hkHq_7S8N8ZrPx/edit?usp=sharing&ouid=115848431762361689971&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Open the original presentation</a>
</div>
