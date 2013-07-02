---
layout: bffos
title: Opening and closing apps
section: transitions
h2: <strong>CSS transitions:</strong> Provide context using UI animations
---

## Opening and closing apps

### Opening an app

<section class="transition">
  <h4>Example</h4>
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

<h4>CSS Animations</h4>
{% highlight css linenos=table %}
/* Scale icons */
animation: openAppIcons 0.3s forwards ease;
@keyframes openAppIcons {
  0%   { transform: scale(1.0); }
  100% { transform: scale(1.8); }
}

/* Show app */
animation: openApp 0.3s forwards ease;
@keyframes openApp {
  0%   { transform: scale(0.1); opacity: 0; }
  100% { transform: scale(1.0); opacity: 1; }
}{% endhighlight %}

<hr>

### Closing an app

<section class="transition">
  <h4>Example</h4>
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

<h4>CSS Animations</h4>
{% highlight css linenos=table %}
/* Scale icons */
animation: closeAppIcons 0.3s forwards ease;
@keyframes closeAppIcons {
  0%   { transform: scale(1.8); }
  100% { transform: scale(1.0); }
}

/* Hide app */
animation: closeApp 0.3s forwards ease;
@keyframes closeApp {
  0%   { transform: scale(1.0); opacity: 1; }
  100% { transform: scale(0.1); opacity: 0; }
}{% endhighlight %}
