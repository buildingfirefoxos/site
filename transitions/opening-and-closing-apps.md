---
layout: bffos
title: Opening and closing apps
section: transitions
h1: Transitions
h2: <strong>Firefox OS</strong> CSS animations
---

## Opening and closing apps

(SYSTEM TRANSITION)

<div class="tabs">
  <ul>
    <li><a href="#open-app">Opening an app</a></li>
    <li><a href="#close-app">Closing an app</a></li>
  </ul>

  <div id="open-app">
    <section class="transition">
      <article id="example-open" class="phone-frame">
        <div class="play">
          <span class="glow"></span>
          <span class="shape"></span>
        </div>
        <section class="full frame">
          <div class="statusbar"></div>
          <div class="apps-container">
            <div id="open-app-1" class="app">
              <img src="../images/transitions/home_icons.png" alt="home_icons" class="icons">
              <img src="../images/transitions/home.png" alt="home">
            </div>
            <div id="open-app-2" class="app">
              <img src="../images/transitions/clock.png" alt="clock">
            </div>
          </div>
        </section>
      </article>
    </section>
  </div>

  <div id="close-app">
    <section class="transition">
      <article id="example-close" class="phone-frame">
        <div class="play">
          <span class="glow"></span>
          <span class="shape"></span>
        </div>
        <section class="full frame">
          <div class="statusbar"></div>
          <div class="apps-container">
            <div id="close-app-1" class="app">
              <img src="../images/transitions/home_icons.png" alt="home_icons" class="icons">
              <img src="../images/transitions/home.png">
            </div>
            <div id="close-app-2" class="app">
              <img src="../images/transitions/clock.png" alt="clock">
            </div>
          </div>
        </section>
      </article>
    </section>
  </div>
</div>
