---
layout: bffos
title: Headers
section: building-blocks
theme: whatev
h2: <strong>Building Blocks:</strong> markup & examples
---

## Headers

Used for labeling the active view and providing top-level navigation and inputs for the active view.

> ### Characteristics
> * A header is a horizontal bar the full width of the screen, which appears at the top of the screen in most apps.
> * Headers float above content, with the option of flowing with content in special instances, such as in the Browser app.
> * The heading's text provides the name of the current view.
> * The heading may optionally include additional text; for example, in an email app, the number of unread messages may be displayed.
> * Headers may include inputs for navigating and manipulating the current view.
> * Most apps (full-screen games being an obvious exception) have a header.

### Default
  
<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/headers_1.jpg" alt="Headers (Image replacing code)"/>
    <article class="headers frame">{% include building-blocks/headers_1.html%}</article>
  </section>

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/themes/whatev/headers.css" rel="stylesheet" type="text/css">
<link href="(your styles folder)/themes/whatev/buttons.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}{% include building-blocks/headers_1.html %}{% endhighlight %}
</div>

<hr>

### Skins

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/headers_2.jpg" alt="Headers (Image replacing code)"/>
    <article class="headers frame">{% include building-blocks/headers_2.html %}</article>
  </section>

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/themes/whatev/headers.css" rel="stylesheet" type="text/css">
<link href="(your styles folder)/themes/whatev/buttons.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}
<section class="skin-dark" role="region">{% include building-blocks/headers_2.html %}{% endhighlight %}
</div>

