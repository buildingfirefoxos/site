---
layout: bffos
title: Functionalities
section: transitions
h2: <strong>CSS transitions:</strong> Provide context using UI animations
---

## Functionalities

<section class="transition">
  <h4>Example</h4>
  <article id="example-fuctionalities" class="phone-frame">
    <div class="play">
      <span class="glow"></span>
      <span class="shape"></span>
    </div>
    <section class="full frame dark">
      <div class="statusbar"></div>
      <div class="apps-container">
        <div id="fuctionality-app" class="app">
        </div>
        <div id="fuctionality" class="app">
        </div>
      </div>
    </section>
  </article>
</section>

<h4>CSS Animations</h4>
{% highlight css linenos=table %}
transition: transform 0.2s ease-in;
/* Show functionality */
transform: translateY(234px); /* Screen height - functionality height, (translateY(0) for full screen functionalities) */
/* Hide functionality */
transform: translateY(100%);{% endhighlight %}
