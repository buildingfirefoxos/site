---
layout: bffos
title: Tabs
section: building-blocks
h1: Building Blocks
h2: <strong>Firefox OS</strong> UI component's markup
---

## Tabs

Allows multiple instances to be contained within a single window. Tabs are used as a navigational widget for switching between sets of views.

<div>
  <section class="example">
    <img src="../images/BB/tabs.jpg" alt="Tabs (Image replacing code)"/>
    <article class="frame">
      <!-- if your tabs are at the top, remove class="bottom" -->
      <ul role="tablist" data-items="4" class="bottom">
        <li id="panel1" role="tab">
          <a href="#panel1" class="icon">comms</a>
          <div role="tabpanel"></div>
        </li>
        <li id="panel2" role="tab">
          <a href="#panel2" class="icon">contacts</a>
          <div role="tabpanel"></div>
        </li>
        <li id="panel3" role="tab" aria-disabled="true">
          <a class="icon">dialer</a>
          <div role="tabpanel"></div>
        </li>
        <li id="panel4" role="tab">
          <a href="#panel4">Tab name</a>
          <div role="tabpanel"></div>
        </li>
      </ul>
    </article>
  </section>

  <label>Css shared link:</label>
  {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style_unstable/tabs.css">{% endhighlight %}

  <label>HTML code:</label>
  {% highlight html linenos=table %}
<!-- if your tabs are at the top, remove class="bottom" -->
<ul role="tablist" data-items="4" class="bottom">
  <li id="panel1" role="tab">
    <a href="#panel1" class="icon">comms</a>
    <div role="tabpanel"></div>
  </li>
  <li id="panel2" role="tab">
    <a href="#panel2" class="icon">contacts</a>
    <div role="tabpanel"></div>
  </li>
  <li id="panel3" role="tab" aria-disabled="true">
    <a class="icon">dialer</a>
    <div role="tabpanel"></div>
  </li>
  <li id="panel4" role="tab">
    <a href="#panel4">Tab name</a>
    <div role="tabpanel"></div>
  </li>
</ul>{% endhighlight %}
</div>