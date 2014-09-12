---
layout: bffos
title: Layout
section: building-blocks
h2: <strong>Building Blocks:</strong> markup & examples
---

## Layout

This utility will help us creating most common layout structures.

### Basic

You could find this structure in most apps in Firefox OS: Fixed header and footer with scrollable content.

Using `layout.css` is easy to achieve it, using `display: flex` in your main container and classes `fit` and `scroll` in your content section.

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/layout_1.png" alt="Layout (Image replacing code)"/>
    <article class="full flex frame white">{% include building-blocks/layout_1.html %}</article>
  </section>

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/style/layout.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}{% include building-blocks/layout_1.html %}{% endhighlight %}
</div>
