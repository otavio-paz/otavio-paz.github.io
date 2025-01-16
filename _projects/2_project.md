---
layout: page
title: Hybrid Renewable Energy System
description: An off-grid power solution for remote learning center in Oberlin/OH.
img: assets/img/hybrid-system.png
importance: 2
category: work
giscus_comments: false
---

### Project Overview

This hybrid renewable energy system was designed to power Shagbark Learning Center, a multi-purpose retreat in Oberlin/OH. Designed as an off-grid solution, the system provides sustainable energy to three buildings—a cabin, a sugar shed, and an outhouse—using a photovoltaic (PV) array and a micro wind turbine.

In 2024, we have sucessfully installed the solar array and we expect to install the micro wind turbine in the first semester of 2025.

---

### Key Features

- **Primary Power Source**: Four Silvantis F Series (SunEdison) 325W solar panels arranged in a 1.3kW array on the cabin roof, optimized for maximum sunlight capture and discrete implementation.
- **Wind Energy Supplement**: A 400W Air X Marine Wind Turbine, primarily educational due to limited wind resources, adds resilience and serves as an awareness tool for sustainable practices (in progress).
- **Energy Storage**: A 2400Wh battery pack ensures consistent power and storage, even during overcast or low-wind conditions.
- **Off-Grid Flexibility**: The system is expected to support lighting, charging devices, and other critical needs across all buildings.

---

### Wind and Solar Resources

The Shagbark Learning Center is located in a woodland clearing in North Central Ohio, where renewable energy potential is limited in terms of wind resources but sufficient for small-scale project. In terms of solar availability, the region has good solar radiation for most of the months:

- **Solar Resources**: The site receives an average of 1.710 kWh/Year fixed-tilt sunlight hours per day, as estimated using the NREL PVWatts tool. The panels are mounted on a south-facing roof to maximize exposure and minimize shading.

<div class="row justify-content-center">
  <div class="col-sm-12 col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/solar-resource-report.png" title="Solar Resource Report" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

- **Wind Resources**: Using WINDExchange data, we found average wind speeds in the area to be suboptimal (5 m/s at 30m). As a result, the wind turbine is primarily ornamental and educational, contributing marginally to power generation.

<div class="row justify-content-center">
    <div class="col-sm-12 col-md-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/wind-resource-report.png" title="Wind Resource Report" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

### Sizing Consumption and System Autonomy

We calculated energy consumption based on a worst-case scenario: continuous use during winter with lights, devices charging, and other essential loads. Our estimates include:

- **Daily Energy Needs**: The combined loads of the cabin, sugar shed, and outhouse total approximately 650Wh per day under peak usage conditions.
- **Battery Autonomy**: With a 2400Wh battery pack, the system can provide power for up to **4.4 days** without additional sunlight or wind. It takes approximately **2.1 days** to fully recharge the batteries in ideal solar conditions.

This sizing ensures reliable operation during extended cloudy periods or increased usage, maintaining power for critical needs.

---

### Design and Implementation

- **Solar and Wind Integration**: The system combines solar and wind energy sources with two MPPT charge controllers for efficient energy management.
- **Storage and Conversion**: A PROwatt 1000W inverter and deep-cycle batteries ensure reliable AC power distribution.
- **Aesthetic Consideration**: All components are mounted with minimal environmental and aesthetic impact, preserving the natural appeal of the learning center.

---

### Results and Future Goals

The system design meets the energy needs of the Shagbark Learning Center while promoting renewable energy education. Future plans include adding daily tracking energy consumption and generation.

---

<div class="row justify-content-center">
  <div class="col-sm-12 col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/hybrid-system-shagbark.png" title="Property" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/hybrid-system-panel.png" title="Solar Panels" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="row justify-content-center">
  <div class="col-sm-12 col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/hybrid-system-electrical.png" title="Electrical System" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-12 col-md-6 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/hybrid-system.jpg" title="System" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption text-center">Key parts of the hybrid renewable energy system development at Shagbark Learning Center.</div>
