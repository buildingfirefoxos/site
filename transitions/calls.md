---
layout: bffos
title: Calls
section: transitions
h1: Transitions
h2: <strong>Firefox OS</strong> CSS animations
---

## Calls

<div class="tabs">
  <ul>
    <li><a href="#calls-dialer">From dialer</a></li>
    <li><a href="#calls-home">From home</a></li>
    <li><a href="#calls-app">From app</a></li>
  </ul>

  <div id="calls-dialer" class="tabs">
      <ul>
        <li><a href="#calls-dialer-make">Making a call</a></li>
        <li><a href="#calls-dialer-finish">Finishing a call</a></li>
      </ul>

      <div id="calls-dialer-make">
        <section class="transition">
          <article id="example-call-1" class="phone-frame">
            <div class="play">
              <span class="glow"></span>
              <span class="shape"></span>
            </div>
            <section class="full frame dark">
              <div class="statusbar"></div>
              <div class="apps-container">
                <div id="example-call-1-1" class="app">
                  <img src="../images/transitions/dialer.png" alt="dialer">
                </div>
                <div id="example-call-1-2" class="app">
                  <img src="../images/transitions/call_name.png" alt="call_name" class="top">
                  <img src="../images/transitions/connecting.png" alt="connecting" class="text">
                  <img src="../images/transitions/call_pad.png" alt="call_pad" class="bottom">
                  <div class="overlay"></div>
                    <img src="../images/transitions/photo.png" alt="photo">
                </div>
            </section>
          </article>
          <label>CSS Animations:</label>
          {% highlight html linenos=table %}
          {% endhighlight %}
        </section>
      </div>

      <div id="calls-dialer-finish">
        <section class="transition">
          <article id="example-call-2" class="phone-frame">
            <div class="play yellow">
              <span class="glow"></span>
              <span class="shape"></span>
            </div>
            <section class="full frame dark">
              <div class="statusbar"></div>
              <div class="apps-container">
                <div id="example-call-2-1" class="app">
                  <img src="../images/transitions/dialer.png" alt="dialer">
                </div>
                <div id="example-call-2-2" class="app">
                  <img src="../images/transitions/call_name.png" alt="call_name" class="top">
                  <img src="../images/transitions/duration.png" alt="duration" class="text">
                  <img src="../images/transitions/call_pad.png" alt="call_pad" class="bottom">
                  <div class="overlay"></div>
                    <img src="../images/transitions/photo.png" alt="photo">
                </div>
              </div>
            </section>
          </article>
          <label>CSS Animations:</label>
          {% highlight html linenos=table %}
          {% endhighlight %}
        </section>
      </div>
    </div>
  </div>
</div>