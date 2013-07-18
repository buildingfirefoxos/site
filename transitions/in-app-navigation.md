---
layout: bffos
title: In app navigation
section: transitions
h2: <strong>CSS transitions:</strong> Provide context using UI animations
---

## In app navigation

Going deeper and back within an application

<section class="transition">
  <h4>Example</h4>
  <article id="example-deeper" class="phone-frame">
    <div class="play">
      <span class="glow"></span>
      <span class="shape"></span>
    </div>
    <section class="full frame header">
      <div class="statusbar"></div>
      <div class="apps-container">
        <div id="deeper-app-1" class="app" data-position="current">
          <img src="../images/transitions/contacts.jpg" alt="contacts_body" class="body">
        </div>
        <div id="deeper-app-2" class="app" data-position="right">
          <img src="../images/transitions/contacts_details.jpg" alt="contacts_details" class="body">
        </div>
      </div>
    </section>
  </article>
</section>

<h4>CSS Animations</h4>
{% highlight css linenos=table %}
/*------- Go Deeper -------*/
animation: currentToLeft 0.4s forwards;
@keyframes currentToLeft {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
animation: rightToCurrent 0.4s forwards;
@keyframes rightToCurrent {
  0%   { transform: translateX(100%); }
  100% { transform: translateX(0); }
}
/*------- Go Back -------*/
animation: leftToCurrent 0.4s forwards;
@keyframes leftToCurrent {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}
animation: currentToRight 0.4s forwards;
@keyframes currentToRight {
  0%   { transform: translateX(0); }
  100% { transform: translateX(100%); }
}{% endhighlight %}