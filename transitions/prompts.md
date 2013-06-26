---
layout: bffos
title: Prompts
section: transitions
h2: <strong>CSS transitions:</strong> Provide context using UI animations
---

## Prompts

<section class="transition">
  <h4>Example</h4>
  <article id="example-modal" class="phone-frame">
    <section class="full frame dark">
      <div class="play" style="left: 243px; top: 78px;">
        <span class="glow"></span>
        <span class="shape"></span>
      </div>
      <div class="apps-container">
        <div id="modal-email" class="app">
            <img src="../images/transitions/Email_Settings.png" alt="Email Settings">
        </div>
        <div id="modal-value" class="app">
            <img src="../images/transitions/Email_Settings_ValueSelector.png" alt="Email Settings Value Selector">
        </div>
      </div>
    </section>
  </article>
</section>

<h4>CSS Animations</h4>
{% highlight css linenos=table %}
/* Launch Value Selector */
animation: fadeIn 0.2s forwards;
@keyframes fadeIn {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
/* Close Value Selector */
animation: fadeOut 0.2s forwards;
@keyframes fadeOut {
  0%   { opacity: 1; }
  100% { opacity: 0; }
}{% endhighlight %}
