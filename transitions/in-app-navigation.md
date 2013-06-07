---
layout: bffos
title: In app navigation
section: transitions
h1: Transitions
h2: <strong>Firefox OS</strong> CSS animations
---

## In app navigation

Going deeper and back within an application

<section class="transition">
  <article id="example-deeper" class="phone-frame">
    <div class="play">
      <span class="glow"></span>
      <span class="shape"></span>
    </div>
    <section class="full frame header">
      <div class="statusbar"></div>
      <div class="apps-container">
        <div id="deeper-app-1" class="app" data-position="current">
          <header>
            <h1>Contacts</h1>
            <img src="../images/transitions/contacts_header_1.png" alt="contacts_header_1">
          </header>
          <img src="../images/transitions/contacts.png" alt="contacts" class="body">
        </div>
        <div id="deeper-app-2" class="app" data-position="right">
          <header>
            <h1>Mark Alfentino</h1>
            <img src="../images/transitions/contacts_details_header_1.png" alt="contacts_details_header_1">
          </header>
          <img src="../images/transitions/contacts_details.png" alt="contacts_details" class="body">
        </div>
      </div>
    </section>
  </article>
  <label>CSS Animations:</label>
  {% highlight css linenos=table %}
/*------- Go Deeper -------*/
/* Move main screen header h1 */
animation: headerCurrentToLeft 0.4s forwards;
@keyframes headerCurrentToLeft {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-20%); }
}
/* Move main screen body */
animation: currentToLeft 0.4s forwards;
@keyframes currentToLeft {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
/* Move secondary screen */
animation: rightToCurrent 0.4s forwards;
@keyframes rightToCurrent {
  0%   { transform: translateX(100%); }
  100% { transform: translateX(0); }
}
/* Fade secondary screen header in */
animation: fadeIn 0.4s forwards;
@keyframes fadeIn {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
/*------- Go Back -------*/
/* Move main screen header h1 */
animation: headerLeftToCurrent 0.4s forwards;
@keyframes headerLeftToCurrent {
  0%   { transform: translateX(-20%); }
  100% { transform: translateX(0); }
}
/* Move main screen body */
animation: leftToCurrent 0.4s forwards;
@keyframes leftToCurrent {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(0); }
}
/* Move secondary screen */
animation: currentToRight 0.4s forwards;
@keyframes currentToRight {
  0%   { transform: translateX(0); }
  100% { transform: translateX(100%); }
}
/* Fade secondary screen header out */
animation: fadeOut 0.4s forwards;
@keyframes fadeOut {
  0%   { opacity: 1; }
  100% { opacity: 0; }
}{% endhighlight %}
</section>
