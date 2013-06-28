---
layout: bffos
title: Toolbars
section: building-blocks
h2: <strong>Building Blocks:</strong> markup & examples
---

## Toolbars

Toolbars contain actions, indicators, and navigation associated with the current view. 

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/toolbars.jpg" alt="Toolbars (Image replacing code)"/>
    <article class="frame">
      <div role="toolbar">
        <ul>
          <li><button class="action-icon delete">delete</button></li>
        </ul>
        <ul>
          <li><button class="action-icon email-flag">Flag</button></li>
          <li><button class="action-icon email-markread">Mark read</button></li>
          <li><button class="action-icon move">Move</button></li>
        </ul>
      </div>
    </article>
  </section>

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/style_unstable/toolbars.css" rel="stylesheet" type="text/css">
<link href="(your styles folder)/icons/styles/action_icons.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}
<div role="toolbar">
  <ul>
    <li><button class="action-icon delete">delete</button></li>
  </ul>
  <ul>
    <li><button class="action-icon email-flag">Flag</button></li>
    <li><button class="action-icon email-markread">Mark read</button></li>
    <li><button class="action-icon move">Move</button></li>
  </ul>
</div>{% endhighlight %}
</div>
