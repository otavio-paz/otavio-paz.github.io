---
layout: page
title: Spider-Like Robot with OLED Display
description: A 4-leg robot for PHYS 242 (Electronics) class.
img:
importance: 3
category: work
---

### Project Overview

This project, completed for PHYS 242 - Electronics under Prof. Jason Stalnaker, involved creating a 4-leg spider-like robot capable of intricate movements using 12 SG90 servo motors. Equipped with an Arduino Nano microcontroller and an OLED screen displaying a customizable face, the robot combines mechanical precision and visual appeal. The project emphasizes control, design, and circuit layout.

---

### Design Goals

1. **Enhanced Motion Control**: Unlike simpler, wheel-based robots, this project challenges balance and movement by individually controlling 12 joints for a wide range of motion.
2. **Customization**: Programmed a personalized bitmap face on the OLED screen, inspired by prior experiments with LCD displays.
3. **Circuit Prototyping**: Built a circuit on a zero PCB board to understand layout and soldering, ensuring efficient accommodation of all components.

---

### Materials

- Arduino Nano  
- 12x SG90 Servo Motors  
- PLA 3D Filament for mechanical parts  
- Protoboard / PCB Board Zero  
- 2S LiPo Battery (7.4V, 900mAh)  
- IC7805 Voltage Regulator with Capacitors  
- OLED Screen (AOM12864A0-0.96WW-ANO)  
- Male and Female Header Strips  
- Optional: HC-06 Bluetooth Module  

---

### Circuit Design

#### Power Regulation
The voltage regulator circuit steps down the 7.4V from the LiPo battery to a stable 5V for the Arduino Nano and servos. Using the IC7805 with a 0.1µF ceramic capacitor ensures smooth power delivery while eliminating noise.  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/voltage-regulator.png" title="Voltage Regulator Circuit" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

#### Servo Motor Integration
Each SG90 servo motor operates on PWM signals for precise positioning. Servos are labeled and connected as follows:

| Label   | Arduino Pin | Label   | Arduino Pin |
|---------|-------------|---------|-------------|
| FLF     | D4          | BLF     | D10         |
| FLK     | D3          | BLK     | D9          |
| FLH     | D2          | BLH     | D8          |
| FRF     | D7          | BRF     | A3          |
| FRK     | D6          | BRK     | A2          |
| FRH     | D5          | BRH     | A1          |

#### OLED Screen
The OLED uses SPI communication, requiring specific connections for clock (SCL), data (SDA), chip select (CS), and data/command (DC). This setup enables dynamic facial expressions to be displayed.

---

### Testing and Assembly

- **Mechanical Parts**: All feet, knees, hips, and the main body were 3D printed using PLA. Assembly required careful alignment to ensure proper motion.  
- **Calibration**: Each servo was tested and adjusted to avoid strain or overheating. Replacement servos were used for those that failed during testing.  
- **Prototyping**: Breadboard connections were used to synchronize servos, and soldering was performed for essential components like the voltage regulator and OLED headers.  

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/spider-robot-assembly.png" title="Robot Assembly" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

### Results and Future Goals

**Results**: The robot successfully demonstrated multi-joint movement and OLED customization, providing valuable lessons in servo control, circuit design, and mechanical assembly.  

**Future Goals**:  
1. Complete the PCB soldering for a more durable circuit.  
2. Integrate an HC-06 Bluetooth module for remote control.  
3. Enhance servo motion sequences for smoother operation.  

<div class="row">
    <div class="col-sm-6 col-md-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/spider-robot-complete.png" title="Completed Robot" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 col-md-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/spider-robot-testing.png" title="Robot Testing" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 col-md-3 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/spider-robot-circuit.png" title="Circuit" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Highlights of the spider-like robot project: assembly, testing, motion, and OLED customization.
</div>