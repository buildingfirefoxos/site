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

  <div id="calls-home" class="tabs">
    <ul>
      <li><a href="#calls-home-answer">Answering a call</a></li>
      <li><a href="#calls-home-finish">Finishing a call</a></li>
      <li><a href="#calls-home-reject">Rejecting a call</a></li>
    </ul>

    <div id="calls-home-answer">
      <section class="transition">
        <article id="example-call-3" class="phone-frame">
          <div class="play">
            <span class="glow"></span>
            <span class="shape"></span>
          </div>
          <section class="full frame dark">
            <div class="statusbar"></div>
            <div class="apps-container">
              <div id="example-call-3-1" class="app">
                <img src="../images/transitions/home_icons.png" alt="home_icons" class="icons">
                <img src="../images/transitions/home.png" alt="home">
              </div>
              <div id="example-call-3-2" class="app">
                <img src="../images/transitions/call_name.png" alt="call_name" class="top">
                <img src="../images/transitions/start.png" alt="start" class="text">
                <img src="../images/transitions/call_answer.png" alt="call_answer" class="bottom-1">
                <img src="../images/transitions/call_pad.png" alt="call_pad" class="bottom-2">
                <div class="photo">
                  <div class="overlay"></div>
                    <img src="../images/transitions/photo.png" alt="photo">
                </div>
              </div>
            </div>
        </section>
      </div>
    </div>

    <div id="calls-home-make">
      <section class="transition">
        <article id="example-call-4" class="phone-frame">

        </article>
      </section>
    </div>

    <div id="calls-home-reject">
      <section class="transition">
        <article id="example-call-5" class="phone-frame">

        </article>
      </section>
    </div>
  </div>

  <div id="calls-app" class="tabs">
    <ul>
      <li><a href="#calls-app-answer">Answering a call</a></li>
      <li><a href="#calls-app-finish">Finishing a call</a></li>
      <li><a href="#calls-app-reject">Rejecting a call</a></li>
    </ul>

    <div id="calls-app-answer">
      <section class="transition">
        <article id="example-call-6" class="phone-frame">

        </article>
      </section>
    </div>

    <div id="calls-app-make">
      <section class="transition">
        <article id="example-call-7" class="phone-frame">

        </article>
      </section>
    </div>

    <div id="calls-app-reject">
      <section class="transition">
        <article id="example-call-8" class="phone-frame">

        </article>
      </section>
    </div>
  </div>
</div>