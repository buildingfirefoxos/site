---
layout: bffos
title: App invokes app
section: transitions
h2: <strong>CSS transitions:</strong> Provide context using UI animations
---

## App invokes app

<section class="transition">
  <h4>Example</h4>
  <article id="example-invoke" class="phone-frame">
    <section class="full frame dark">
      <div class="play">
        <span class="glow"></span>
        <span class="shape"></span>
      </div>
      <div class="statusbar"></div>
      <div class="apps-container">
        <div id="invoke-app-1" class="app">
          <div class="overlay"></div>
          <img src="../images/transitions/email.png" alt="app background"/>
        </div>
        <div id="invoke-app-2" class="app">
          <div class="overlay"></div>
          <img src="../images/transitions/browser.png" alt="app background"/>
        </div>
      </div>
    </section>
  </article>
</section>

<h4>CSS Animations</h4>
{% highlight css linenos=table %}
/* Invoking app moves out */
animation: invokingApp 0.6s forwards ease-out;
@keyframes invokingApp {
  0%   { transform: scale(1.0); }
  50%  { transform: scale(0.8) translateX(0);    z-index: 12; }
  100% { transform: scale(0.6) translateX(105%); z-index: 10; }
}
/* Invoking app fades out */
animation: showOverlay 0.3s forwards ease-out 0.3s;
@keyframes showOverlay {
  0%   { background: rgba(0,0,0,0); }
  100% { background: rgba(0,0,0,0.7); }
}
/* Invoked app moves in */
animation: invokedApp 0.6s forwards ease-out;
@keyframes invokedApp {
  0%   { transform: scale(0.6) translateX(-133%); }
  50%  { transform: scale(0.6) translateX(-105%); z-index: 10; }
  100% { transform: scale(1.0) translateX(0);     z-index: 12; }
}
/* Invoked app overlay fades in */
animation: hideOverlay 0.3s forwards ease-in 0.3s;
@keyframes hideOverlay {
  0%   { background: rgba(0,0,0,0.7); }
  100% { background: rgba(0,0,0,0); }
}{% endhighlight %}
