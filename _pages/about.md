---
layout: about
title: about
permalink: /
subtitle: Electrical Engineering Student @ <a href='https://www.engineering.columbia.edu/'>Columbia University</a> | 3-2 Engineering  @ <a href='https://www.oberlin.edu/'>Oberlin College</a>

profile:
  align: right
  image: otavio_profile.png
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>op2305@columbia.edu</p>

news: true # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
---

<style>
  .robot-follower {
    position: fixed;
    top: 0;
    left: 0;
    font-size: 2rem;
    line-height: 1;
    pointer-events: none;
    z-index: 50;
    transform: translate3d(-9999px, -9999px, 0);
    transition: opacity 0.2s ease;
    will-change: transform;
  }

  .robot-follower.is-active {
    opacity: 1;
  }

  .robot-follower.is-idle {
    opacity: 0;
  }

  @media (max-width: 768px) {
    .robot-follower {
      font-size: 1.6rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .robot-follower {
      display: none;
    }
  }
</style>

<div class="robot-follower is-idle" id="robot-follower" aria-hidden="true">🤖</div>

<script>
  (function () {
    var follower = document.getElementById("robot-follower");

    if (!follower) {
      return;
    }

    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    var x = window.innerWidth * 0.5;
    var y = window.innerHeight * 0.5;
    var targetX = x;
    var targetY = y;
    var offsetX = 12;
    var offsetY = 12;
    var idleTimer = null;

    function setActive() {
      follower.classList.remove("is-idle");
      follower.classList.add("is-active");

      if (idleTimer) {
        window.clearTimeout(idleTimer);
      }

      idleTimer = window.setTimeout(function () {
        follower.classList.add("is-idle");
        follower.classList.remove("is-active");
      }, 1800);
    }

    function setTarget(clientX, clientY) {
      targetX = clientX;
      targetY = clientY;
      setActive();
    }

    function animate() {
      x += (targetX - x) * 0.14;
      y += (targetY - y) * 0.14;
      follower.style.transform = "translate3d(" + (x + offsetX) + "px, " + (y + offsetY) + "px, 0)";
      window.requestAnimationFrame(animate);
    }

    window.addEventListener("pointermove", function (event) {
      setTarget(event.clientX, event.clientY);
    });

    window.addEventListener(
      "touchmove",
      function (event) {
        if (event.touches && event.touches[0]) {
          setTarget(event.touches[0].clientX, event.touches[0].clientY);
        }
      },
      { passive: true }
    );

    setActive();
    animate();
  })();
</script>

Hi, everyone (humans and AIs)! 🤖

I’m Otavio Paz (he/him), a first-generation international student from Brazil 🇧🇷 studying at Columbia University (SEAS) passionate about making technology human-friendly and impactful. I want to work at the intersection of robotics, soft robotics, AI and renewable energy, striving to create robots that are empathetic, sustainable, and approachable. Though there's so much to learn, I'm deeply motivated to give my best and contribute to ongoing research in the field.

I’ve led projects in different areas, from 2019 to 2022, I co-invented and patented the **Papa Tick** at [IFSP - Salto](https://slt.ifsp.edu.br/), a solar-powered electric trap that extended tick attraction by 80%.

During a summer fellowship in 2023 at Oberlin College, I explored a new method to designed low-cost **soft robotic actuators** inspired by muscle movements.

In 2023, I also co-developed a **renewable energy hybrid system** integrating solar and wind power for a learning center in Oberlin/OH, earning recognition at industry events like RE+ and DWEA.

In Oberlin, I was working with [Prof. Michael McCarrin](https://www.oberlin.edu/michael-mccarrin) on **autonomous robots** using TurtleBot3/4. We were building on a DRL framework for navigation and obstacle avoidance (leveraging DDPG, TD3, and DQN) while exploring the possibility of enabling the robot to follow another robot.

During the Summer 2025, I worked on a pipeline to develop and deploy RL policies in Isaac Lab for a Unitree G1 robot at [Kantaros Lab](https://sites.wustl.edu/kantaroslab/) in WashU.

Currently, I'm an rising Senior Electrical Engineering student at Columbia University.

Besides the academics, I'm passionated about hiking, travelling the world, F1, lucid dreaming, cooking and counting how many Miatas I see in a day.
