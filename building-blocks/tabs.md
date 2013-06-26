---
layout: bffos
title: Tabs
section: building-blocks
h2: <strong>Building Blocks:</strong> markup & examples
---

## Tabs

Tabs allow users to navigate between multiple views within a single screen. 

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/tabs.jpg" alt="Tabs (Image replacing code)"/>
    <article class="tab frame">
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

  <h4>Css shared link</h4>
  {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style_unstable/tabs.css">{% endhighlight %}

  <h4>HTML code</h4>
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
