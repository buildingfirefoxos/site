---
layout: bffos
title: Toolbars
section: building-blocks
h1: Building Blocks
h2: UI component's markup
---

## Toolbars

Contains actions, indicators, and navigation associated with the current view (eg: Delete selected items, Refresh content)

<div>
  <section class="example">
    <img src="../images/BB/toolbars.jpg" alt="Toolbars (Image replacing code)"/>
    <article class="frame">
      <div role="toolbar">
        <ul>
          <li><button class="pack-icon-delete">Delete</button></li>
        </ul>
        <ul>
          <li><button class="pack-icon-mark">Mark</button></li>
          <li><button class="pack-icon-send">Send</button></li>
          <li><button class="pack-icon-move">Move</button></li>
          <li><button class="pack-icon-share">Share</button></li>
        </ul>
      </div>
    </article>
  </section>

  <label>Css shared link:</label>
  {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style_unstable/toolbars.css">{% endhighlight %}

  <label>HTML code:</label>
  {% highlight html linenos=table %}
<div role="toolbar">
  <ul>
    <li><button class="pack-icon-delete">Delete</button></li>
  </ul>
  <ul>
    <li><button class="pack-icon-mark">Mark</button></li>
    <li><button class="pack-icon-send">Send</button></li>
    <li><button class="pack-icon-move">Move</button></li>
    <li><button class="pack-icon-share">Share</button></li>
  </ul>
</div>{% endhighlight %}
</div>