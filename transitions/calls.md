---
layout: bffos
title: Calls
section: transitions
h2: <strong>CSS animations</strong>
---

## Calls

(SYSTEM TRANSITION)

### From dialer:

<div class="dropdown">
  <a class="dropdown-toggle" href="#">Dropdown trigger</a>
  <ul class="dropdown-menu">
    <li><a tabindex="-1" href="#calls-dialer-make">Making a call</a></li>
      <li><a tabindex="-1" href="#calls-dialer-finish">Finishing a call</a></li>
  </ul>
</div>
<ul class="dropdown-content">
  <li id="calls-dialer-make">
    <h4>Example</h4>
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
          </div>
        </section>
      </article>
    </section>
  </li>

  <li id="calls-dialer-finish">
    <h4>Example</h4>
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
    </section>
  </li>
</ul>

### From home:

<div class="dropdown">
  <a class="dropdown-toggle" href="#">Dropdown trigger</a>
  <ul class="dropdown-menu">
    <li><a tabindex="-1" href="#calls-home-answer">Answering a call</a></li>
    <li><a tabindex="-1" href="#calls-home-finish">Finishing a call</a></li>
    <li><a tabindex="-1" href="#calls-home-reject">Rejecting a call</a></li>
  </ul>
</div>
<ul class="dropdown-content">
  <li id="calls-home-answer">
    <h4>Example</h4>
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
      </article>
    </section>
  </li>

  <li id="calls-home-finish">
    <h4>Example</h4>
    <section class="transition">
      <article id="example-call-4" class="phone-frame">
        <div class="play yellow">
          <span class="glow"></span>
          <span class="shape"></span>
        </div>
        <section class="full frame dark">
          <div class="statusbar"></div>
          <div class="apps-container">
            <div id="example-call-4-1" class="app">
              <img src="../images/transitions/home_icons.png" alt="home_icons" class="icons">
              <img src="../images/transitions/home.png" alt="home">
            </div>
            <div id="example-call-4-2" class="app">
              <img src="../images/transitions/call_name.png" alt="call_name" class="top">
              <img src="../images/transitions/duration.png" alt="duration" class="text">
              <img src="../images/transitions/call_pad.png" alt="call_pad" class="bottom">
              <div class="overlay"></div>
              <img src="../images/transitions/photo.png" alt="photo">
            </div>
          </div>
        </section>
      </article>
    </section>
  </li>

  <li id="calls-home-reject">
    <h4>Example</h4>
    <section class="transition">
      <article id="example-call-5" class="phone-frame">
        <div class="play yellow">
          <span class="glow"></span>
          <span class="shape"></span>
        </div>
        <section class="full frame dark">
          <div class="statusbar"></div>
          <div class="apps-container">
            <div id="example-call-5-1" class="app">
              <img src="../images/transitions/home_icons.png" alt="home_icons" class="icons">
              <img src="../images/transitions/home.png" alt="home">
            </div>
            <div id="example-call-5-2" class="app">
              <img src="../images/transitions/call_name.png" alt="call_name" class="top">
              <img src="../images/transitions/call_answer.png" alt="call_answer" class="bottom">
              <div class="overlay"></div>
              <img src="../images/transitions/photo.png" alt="photo">
            </div>
          </div>
        </section>
      </article>
    </section>
  </li>
</ul>

### From app:

<div class="dropdown">
  <a class="dropdown-toggle" href="#">Dropdown trigger</a>
  <ul class="dropdown-menu">
    <li><a tabindex="-1" href="#calls-app-answer">Answering a call</a></li>
    <li><a tabindex="-1" href="#calls-app-finish">Finishing a call</a></li>
    <li><a tabindex="-1" href="#calls-app-reject">Rejecting a call</a></li>
  </ul>
</div>
<ul class="dropdown-content">
  <li id="calls-app-answer">
    <h4>Example</h4>
    <section class="transition">
      <article id="example-call-6" class="phone-frame">
        <div class="play">
          <span class="glow"></span>
          <span class="shape"></span>
        </div>
        <section class="full frame dark">
          <div class="statusbar"></div>
          <div class="apps-container">
            <div id="example-call-6-1" class="app">
              <div class="overlay"></div>
              <img src="../images/transitions/email.png" alt="email">
            </div>
            <div id="example-call-6-2" class="app">
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
      </article>
    </section>
  </li>

  <li id="calls-app-finish">
    <h4>Example</h4>
    <section class="transition">
      <article id="example-call-7" class="phone-frame">
        <div class="play yellow">
          <span class="glow"></span>
          <span class="shape"></span>
        </div>
        <section class="full frame dark">
          <div class="statusbar"></div>
          <div class="apps-container">
            <div id="example-call-7-1" class="app">
              <div class="overlay"></div>
              <img src="../images/transitions/email.png" alt="email">
            </div>
            <div id="example-call-7-2" class="app">
              <img src="../images/transitions/call_name.png" alt="call_name" class="top">
              <img src="../images/transitions/duration.png" alt="duration" class="text">
              <img src="../images/transitions/call_pad.png" alt="call_pad" class="bottom">
              <div class="photo">
                <div class="overlay"></div>
                <img src="../images/transitions/photo.png" alt="photo">
              </div>
            </div>
          </div>
        </section>
      </article>
    </section>
  </li>

  <li id="calls-app-reject">
    <h4>Example</h4>
    <section class="transition">
      <article id="example-call-8" class="phone-frame">
        <div class="play yellow">
          <span class="glow"></span>
          <span class="shape"></span>
        </div>
        <section class="full frame dark">
          <div class="statusbar"></div>
          <div class="apps-container">
            <div id="example-call-8-1" class="app">
              <div class="overlay"></div>
              <img src="../images/transitions/email.png" alt="email">
            </div>
            <div id="example-call-8-2" class="app">
              <img src="../images/transitions/call_name.png" alt="call_name" class="top">
              <img src="../images/transitions/call_answer.png" alt="call_answer" class="bottom">
              <div class="photo">
                <div class="overlay"></div>
                  <img src="../images/transitions/photo.png" alt="photo">
              </div>
            </div>
          </div>
        </section>
      </article>
    </section>
  </li>
</ul>
