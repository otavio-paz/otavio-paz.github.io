---
layout: page
title: Hybrid Renewable Energy System
description: Designing and installing a solar-first, off-grid power system for a remote learning center in Oberlin, Ohio.
img: assets/img/hybrid-system.png
importance: 2
category: work
giscus_comments: false
---

<style>
  .hybrid-lead { font-size: 1.12rem; line-height: 1.75; max-width: 48rem; }
  .hybrid-facts { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: .85rem; margin: 1.6rem 0 2.2rem; }
  .hybrid-fact { border-top: 3px solid var(--global-theme-color); padding: .8rem .1rem 0; }
  .hybrid-fact strong { display: block; font-size: 1.45rem; line-height: 1.2; }
  .hybrid-fact span { display: block; margin-top: .3rem; color: var(--global-text-color-light); font-size: .88rem; }
  .hybrid-process { border-left: 2px solid var(--global-divider-color); margin: 1.3rem 0 2rem .35rem; padding-left: 1.25rem; }
  .hybrid-step { position: relative; margin: 0 0 1.4rem; }
  .hybrid-step::before { content: ""; position: absolute; width: .7rem; height: .7rem; border-radius: 50%; background: var(--global-theme-color); left: -1.65rem; top: .35rem; }
  .hybrid-step h4 { margin: 0 0 .25rem; }
  .hybrid-step p { margin: 0; }
  .hybrid-equation { background: var(--global-code-bg-color); border-left: 4px solid var(--global-theme-color); border-radius: .25rem; padding: 1rem 1.15rem; margin: 1rem 0; }
  .hybrid-flow { display: grid; grid-template-columns: repeat(7, auto); gap: .45rem; align-items: center; margin: 1.25rem 0 1.75rem; overflow-x: auto; padding-bottom: .4rem; }
  .hybrid-flow-node { border: 1px solid var(--global-divider-color); border-radius: .45rem; padding: .7rem .8rem; text-align: center; min-width: 7rem; background: var(--global-bg-color); }
  .hybrid-flow-arrow { color: var(--global-theme-color); font-size: 1.35rem; }
  .hybrid-media-row { align-items: stretch; }
  .hybrid-media-card { display: flex; }
  .hybrid-media-card figure { display: flex; flex-direction: column; width: 100%; margin: 0; }
  .hybrid-media-card picture { display: block; flex: 1; }
  .hybrid-media-card img { width: 100%; height: 22rem; object-fit: cover; background: var(--global-code-bg-color); }
  .hybrid-media-card--contain img { object-fit: contain; padding: .35rem; }
  .hybrid-media-wide { margin: 1.5rem auto 2rem; }
  .hybrid-media-wide figure { margin: 0; }
  .hybrid-media-wide img { width: 100%; max-height: 34rem; object-fit: contain; background: var(--global-code-bg-color); }
  .hybrid-media-wide--hero img { aspect-ratio: 16 / 9; max-height: none; object-fit: cover; }
  .hybrid-media-card figcaption, .hybrid-media-wide figcaption { margin-top: .65rem; }
  .hybrid-report-link { margin: .75rem 0 2.25rem; text-align: center; }
  .hybrid-note { font-size: .9rem; color: var(--global-text-color-light); }
  @media (max-width: 767px) {
    .hybrid-facts { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .hybrid-media-card img { height: auto; max-height: 32rem; object-fit: contain; }
  }
</style>

<p class="hybrid-lead">
  This project turned an open-ended request—bring modest, reliable electricity to a woodland learning center without connecting it to the grid—into a completed solar-and-wind system. The work moved through stakeholder interviews, hourly load modeling, site and resource assessment, component sizing, grant writing, solar installation in 2024, and wind-turbine installation in 2025.
</p>

<div class="hybrid-facts" aria-label="Project highlights">
  <div class="hybrid-fact"><strong>1.3 kW</strong><span>donated PV array installed</span></div>
  <div class="hybrid-fact"><strong>650.8 Wh</strong><span>worst-case daily load</span></div>
  <div class="hybrid-fact"><strong>2.88 kWh</strong><span>modeled usable storage</span></div>
  <div class="hybrid-fact"><strong>4.4 days</strong><span>modeled autonomy</span></div>
</div>

<div class="hybrid-media-wide hybrid-media-wide--hero">
  {% include figure.liquid loading="eager" path="assets/img/hybrid-system.png" title="Installed solar array at the learning center" caption="The completed solar installation at the woodland learning center." class="img-fluid rounded z-depth-1" %}
</div>

<div class="hybrid-media-wide">
  {% include figure.liquid loading="eager" path="assets/img/hybrid-system-schematic.jpg" title="Hybrid renewable energy system schematic" caption="Original system schematic showing the PV array, wind turbine, charge control, battery storage, inverter, load center, and distribution to the three buildings." class="img-fluid rounded z-depth-1" %}
</div>

<div class="hybrid-report-link">
  <a class="btn btn-outline-primary" href="{{ '/assets/pdf/repowering-schools-hybrid-system-design.pdf' | relative_url }}" download>
    <i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i> Download the final project report (PDF)
  </a>
</div>

## The site and the design brief

The learning center was a cabin/classroom, a sugar shed used during maple-syrup season, and an outhouse with a composting toilet. Before this project, nighttime activities relied on flashlights and rechargeable lanterns. Conversations with the place owner established a focused electrical scope: efficient lighting, a toilet fan, and occasional charging for phones, laptops, and lanterns. Heating and cooking remain non-electric.

The design priorities were therefore not maximum generation, but **reliability in February, low visual impact, safe operation, and educational value**. Roof mounting kept equipment out of the clearing, while the power enclosure and cable routes were planned around weather protection and the character of the site.

## Conversations to a buildable system

<div class="hybrid-process">
  <div class="hybrid-step">
    <h4>1. Define the loads</h4>
    <p>Owner interviews identified when each building is occupied and how long each light, outlet, lantern, and fan might run. The resulting 24-hour winter scenario totals 650.825 Wh/day.</p>
  </div>
  <div class="hybrid-step">
    <h4>2. Assess the site</h4>
    <p>Drone imagery, roof orientation, PVWatts, WINDExchange, the Global Wind Atlas, and a directional shelter/shading spreadsheet were used to compare solar access with the heavily wooded site's limited wind resource.</p>
  </div>
  <div class="hybrid-step">
    <h4>3. Size and refine</h4>
    <p>The team compared 20° and 30° south-facing PV cases, tested low-month energy margins, built a component list, and reviewed charge-control, disconnect, fuse, enclosure, and cable decisions with renewable-energy mentors.</p>
  </div>
  <div class="hybrid-step">
    <h4>4. Fund and install</h4>
    <p>A REpowering Schools seed grant and an Oberlin Green EDGE Fund proposal supported procurement. Donated panels changed the array from the planned 1.5 kW to approximately 1.3 kW, while installation required a roof transition panel, weatherproof cable glands, conduit, roof attachments, and extensions to turn the PV wiring down from the roof.</p>
  </div>
  <div class="hybrid-step">
    <h4>5. Complete the hybrid installation</h4>
    <p>The solar array and electrical enclosure were installed in 2024, followed by the wind turbine in 2025. The team investigated both custom-built and commercial datalogging options, but neither fit the remaining project budget.</p>
  </div>
</div>

## Load model and system autonomy

The load spreadsheet models each hour of a deliberately demanding winter day. The largest single share is the cabin string lighting (272 Wh/day), followed by laptop charging (100 Wh/day), sugar-shed lighting and phone charging (130 Wh/day), and the outhouse fan and light (60.6 Wh/day). Smaller cabin lights, phone charging, and lantern charging make up the balance.

With two 12 V, 200 Ah batteries, the original sizing model uses 60% of the nominal 4.8 kWh pack as usable energy:

<div class="hybrid-equation">
  <strong>Usable storage:</strong> 4,800 Wh × 60% = 2,880 Wh<br>
  <strong>Autonomy:</strong> 2,880 Wh ÷ 650.825 Wh/day = 4.43 days
</div>

The same workbook estimates approximately 2.1 days to refill the usable storage after depletion under its modeled solar conditions. These are planning values rather than guarantees: actual autonomy depends on temperature, battery age, occupancy, shading, and conversion losses.

## Solar assessment

Solar was selected as the primary resource because the cabin has a south-facing roof opening onto the clearing. PVWatts runs used the Oberlin location (41.29° N, 82.22° W), a 180° azimuth, 14.08% system losses, and 96% inverter efficiency. The early design compared 20° and 30° fixed tilts for a 1.5 kW concept:

- **20° tilt:** 1,893.6 kWh/year modeled AC output.
- **30° tilt:** 1,915.4 kWh/year modeled AC output, with a small annual advantage and stronger winter output.
- **Final installed array:** four 325 W Silvantis modules, totaling 1.3 kW.
- **Conservative planning case:** a separate PVWatts run reported 1,710 kWh/year before additional site-specific derating.

The load model then applied round-trip storage efficiency, inverter efficiency, and an additional tree-shading allowance. This conservative sequence was useful because the design target was the weakest solar period rather than the annual average. February production was the key stress case; summer surplus was not allowed to hide winter risk.

The original procurement plan called for four 365 W Q CELLS modules—about 1.5 kW in total. During implementation, the project received donated 325 W Silvantis panels instead. Accepting the donation reduced the installed nameplate capacity to approximately 1.3 kW, but it also allowed the team to complete the array within the available budget. The electrical design and performance expectations were updated around the panels that were actually available rather than the modules specified in the first report.

<div class="row justify-content-center hybrid-media-row">
  <div class="col-sm-12 col-md-7 mt-3 mt-md-0 hybrid-media-card hybrid-media-card--contain">
    {% include figure.liquid loading="lazy" path="assets/img/solar-resource-report.png" title="PVWatts monthly solar resource and modeled production" caption="PVWatts monthly solar resource and modeled production used during array sizing." class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 col-md-5 mt-3 mt-md-0 hybrid-media-card">
    {% include figure.liquid loading="lazy" path="assets/img/roof-drone.jpg" title="Roof orientation and tree-line shading survey" caption="Drone view used to evaluate the south-facing roof and nearby tree line." class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Wind assessment

The wind work moved from regional screening to site-specific reality. WINDExchange indicates about 5 m/s at 30 m in Lorain County, while the Global Wind Atlas was used to inspect prevailing direction and broader patterns. The team then applied a logarithmic wind-profile calculation and a directional shelter model to account for surface roughness, trees, buildings, and the much lower proposed hub height.

That downscaling changed the conclusion. One preliminary model reduced a 5.75 m/s reference wind speed at 80 m to roughly **2.2 m/s at a 4 m hub height**, predicting only about **27 kWh/year** and very little operating time. The wooded setting also violates the usual small-wind siting preference of placing the rotor well above nearby obstructions. For these reasons, wind was treated as an educational supplement—not a dependable contributor to the energy budget.

The 400 W Air X Marine turbine and short pole were installed in 2025. The turbine makes the renewable-energy mix visible, but the power system was intentionally sized to work from solar and storage alone. Its purpose is primarily ornamental and educational: it gives students a tangible example of another renewable technology while also demonstrating why resource assessment and siting matter. This is a useful negative result from the project—a turbine's nameplate rating does not compensate for poor wind conditions.

### Installing the turbine foundation

The turbine installation used a concrete footing and a detachable pole base so the upper pole and turbine could be installed and serviced more easily:

1. The team excavated a cylindrical hole approximately **1 m deep and 30 cm in diameter** at the selected location.
2. Concrete was mixed on site and poured into the excavation to create the foundation.
3. The base section of the pole was positioned in the concrete. This base provides the bolted connection used to attach the remainder of the pole.
4. The concrete was left to set for approximately **30 hours** before the upper pole and turbine were secured to the base.

Separating the embedded base from the rest of the pole made assembly more manageable and preserves the ability to unbolt the pole for maintenance. The finished turbine completes the visual hybrid system, even though the assessment predicted that its electrical contribution would be small.

<div class="row justify-content-center hybrid-media-row">
  <div class="col-sm-12 col-md-7 mt-3 mt-md-0 hybrid-media-card hybrid-media-card--contain">
    {% include figure.liquid loading="lazy" path="assets/img/wind-resource-report.png" title="Regional wind-resource screening near Oberlin" caption="Regional wind-resource map used to screen the site's wind potential before applying hub-height and obstruction corrections." class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 col-md-5 mt-3 mt-md-0 hybrid-media-card hybrid-media-card--contain">
    {% include figure.liquid loading="lazy" path="assets/img/turbine-hole.JPEG" title="Preparing the turbine foundation before the 2025 installation" caption="The approximately 1 m-deep foundation excavation before the concrete footing was poured." class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="hybrid-media-wide hybrid-media-wide--hero">
  {% include figure.liquid loading="lazy" path="assets/img/hybrid-final.jpeg" title="Completed hybrid renewable energy system" caption="Completed hybrid system after the wind turbine was installed in 2025." class="img-fluid rounded z-depth-1" %}
</div>

## System architecture

The design separates generation paths before combining them at storage. This lets each source use appropriate regulation and isolation while the battery and inverter provide a stable interface to the buildings.

<div class="hybrid-flow" aria-label="Electrical energy flow">
  <div class="hybrid-flow-node">PV strings<br><small>primary source</small></div><div class="hybrid-flow-arrow">→</div>
  <div class="hybrid-flow-node">MPPT charge<br>controllers</div><div class="hybrid-flow-arrow">→</div>
  <div class="hybrid-flow-node">12 V battery<br>bank</div><div class="hybrid-flow-arrow">→</div>
  <div class="hybrid-flow-node">1,000 W<br>inverter</div>
</div>
<div class="hybrid-flow" aria-label="Wind and load distribution paths">
  <div class="hybrid-flow-node">Wind turbine<br><small>supplement</small></div><div class="hybrid-flow-arrow">→</div>
  <div class="hybrid-flow-node">Wind regulation<br>and disconnect</div><div class="hybrid-flow-arrow">→</div>
  <div class="hybrid-flow-node">Load center</div><div class="hybrid-flow-arrow">→</div>
  <div class="hybrid-flow-node">Three buildings</div>
</div>

The installed enclosure brings the solar charge controllers, over-current protection, disconnects, and distribution hardware into one weather-protected location. The batteries and inverter complete the storage and AC-conversion path, while the load center distributes power to the cabin, sugar shed, and outhouse.

<div class="row justify-content-center hybrid-media-row">
  <div class="col-sm-12 col-md-6 mt-3 mt-md-0 hybrid-media-card hybrid-media-card--contain">
    {% include figure.liquid loading="lazy" path="assets/img/hybrid-system-panel.png" title="Four-panel array installed on the cabin roof" caption="The donated four-panel array installed on the cabin's south-facing roof." class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 col-md-6 mt-3 mt-md-0 hybrid-media-card hybrid-media-card--contain">
    {% include figure.liquid loading="lazy" path="assets/img/hybrid-system-electrical.png" title="Installed control and protection enclosure" caption="Weather-protected charge control, disconnect, and distribution enclosure." class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Setbacks and design changes

The final installation differs from the first schematic in several important ways. Those changes capture much of the practical engineering work that happened after the initial resource and load calculations.

- **The available panels changed.** The first design specified four 365 W Q CELLS panels for a 1.5 kW array. Receiving four donated 325 W Silvantis panels reduced the final array to approximately 1.3 kW, but removed a major procurement cost and made completion possible within the budget.
- **The roof needed an electrical transition point.** The PV cables could not simply continue from the exposed roof into the main electrical enclosure. The team created a transition/combiner panel on the roof where the solar leads could connect to the longer conductors running to the main panel. Meeting notes track the resulting decisions around cable glands, solar-cable sizing, rain-tight connectors, EMT conduit, and extensions used to bend the wiring down from the roof.
- **Cable routing was both an electrical and architectural problem.** The three buildings are close together but not interconnected. Wiring had to be protected from weather and winter conditions while preserving the natural appearance of the learning center. Inside the cabin, the framing, exposed nails, baseboards, and finished wood surfaces limited where wiring could be concealed without damaging the structure.
- **The first shading tool was not reliable enough.** The team initially used ShadowCalculator, but its map imagery appeared outdated. The assessment shifted toward drone photographs, roof orientation, owner observations, PVWatts, and a conservative shading allowance rather than treating one digital model as definitive.
- **The wind resource was weaker at the real hub height.** Regional maps suggested some wind potential, but the site's trees, buildings, surface roughness, and short tower reduced the modeled hub-height speed to about 2.2 m/s. The turbine remained in the project for teaching and demonstration rather than dependable generation.
- **Testing was narrower than planned.** Time and available technical experience limited pre-installation testing. The team assessed representative string-light brightness and intended to measure individual loads with a Kill A Watt meter, but several consumption values remained based on ratings and usage assumptions.
- **Continuous monitoring exceeded the budget.** Both a custom-built datalogger and a commercial system were considered. After the solar and wind installations, neither option fit the remaining funds, so daily logging and a live dashboard were removed from the final scope.

These adaptations did not change the central objective: provide modest off-grid power while making renewable-energy design visible to students. They did, however, move the project from an idealized component list toward a system shaped by donated equipment, site conditions, construction details, and a fixed budget.

## Carbon-offset calculation

Because the learning center previously had no grid connection, this is best understood as a **hypothetical avoided-grid comparison**, not a measured reduction from a historical electric bill. The project spreadsheet records two grid-carbon factors: 1.5115 lb CO₂e/kWh from the EPA eGRID ZIP-code lookup and 1.162 lb CO₂/kWh from the 2022 EIA state dataset.

Using the modeled worst-case daily load throughout the year gives an auditable upper-use scenario:

<div class="hybrid-equation">
  <strong>Annual electricity served:</strong> 0.650825 kWh/day × 365 = 237.55 kWh/year<br>
  <strong>EPA factor:</strong> 237.55 × 1.5115 = 359 lb CO₂e/year avoided<br>
  <strong>EIA factor:</strong> 237.55 × 1.162 = 276 lb CO₂/year avoided
</div>

This corrects an early spreadsheet cell that annualized the daily estimate by multiplying by 12 rather than 365. The estimate also treats on-site wind and solar generation as operationally carbon-free; a full life-cycle assessment would additionally count manufacturing, transport, installation, maintenance, and end-of-life impacts. Because the project could not fund a datalogging system, the carbon comparison remains a modeled estimate rather than a calculation from metered energy delivered.

## What the records reveal

The archived meeting notes, calculations, grant materials, poster, and design report show how the project evolved:

- **Scope came from use patterns.** Interviews translated “we need power” into a finite list of lights, charging loads, and a continuously operating toilet fan.
- **The weakest month controlled the design.** Battery autonomy and February generation mattered more than annual energy totals.
- **Assessment changed the technology mix.** Regional wind maps initially made micro wind plausible; hub-height and shelter calculations showed why it should not carry critical loads.
- **Implementation forced practical revisions.** Procurement and installation notes track details such as roof attachments, cable sizing, combiner-box location, conduit, insulation, and enclosure layout.
- **Documentation supported continuity.** The proposal identifies student leads, the site owner, and a renewable-energy advisor so the system can outlast the original team.

## Current status

The solar array and electrical enclosure were installed in 2024, and the wind turbine was installed in 2025, completing the planned hybrid system. The original report discussed daily generation and consumption tracking as an educational extension. During implementation, the team considered creating a datalogger as well as purchasing a commercial system. The remaining budget could not support either approach, so datalogging and a live dashboard are no longer planned parts of the project.

This means the resource, autonomy, recharge, and carbon figures on this page should be read as design-stage models. The completed installation demonstrates the off-grid architecture and provides useful power to the three buildings, but it does not maintain a daily performance record.

<div class="row justify-content-center hybrid-media-row">
  <div class="col-sm-12 col-md-7 mt-3 mt-md-0 hybrid-media-card hybrid-media-card--contain">
    {% include figure.liquid loading="lazy" path="assets/img/battery-pack.JPG" title="Battery pack installed for the off-grid system" caption="The battery pack provides storage for lighting, device charging, and other small loads." class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 col-md-5 mt-3 mt-md-0 hybrid-media-card hybrid-media-card--contain">
    {% include figure.liquid loading="lazy" path="assets/img/inverter.png" title="Inverter installed for the off-grid system" caption="The inverter converts stored 12 V DC energy into AC power for the learning center loads." class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<p class="hybrid-note text-center mt-3">Thank you to Charles Newcomb, Ryan Fontanez, David Dorsey and his wife, and REpowering Schools for the opportunity to be part of this project.</p>
