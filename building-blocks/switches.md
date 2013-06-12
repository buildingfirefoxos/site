---
layout: bffos
title: Switches
section: building-blocks
h1: Building Blocks
h2: <strong>Firefox OS</strong> UI component's markup
scroll: top
---

## Switches

Activates/Deactivates a given item. It’s also used to select an element within a list.

### Checkboxes

<div>
  <section class="example">
    <img src="../images/BB/switches_1.jpg" alt="Switches (Image replacing code)"/>
    <article class="frame">
      <label>
        <input type="checkbox" checked="">
        <span></span>
      </label>
      <label>
        <input type="checkbox">
        <span></span>
      </label>
      <label class="danger">
        <input type="checkbox" checked="">
        <span></span>
      </label>
      <label class="danger">
        <input type="checkbox">
        <span></span>
      </label>
    </article>
  </section>

  <label>Css shared link:</label>
  {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/switches.css">{% endhighlight %}

  <label>HTML code:</label>
  {% highlight html linenos=table %}
<label>
  <input type="checkbox" checked="">
  <span></span>
</label>
<label>
  <input type="checkbox">
  <span></span>
</label>
<label class="danger">
  <input type="checkbox" checked="">
  <span></span>
</label>
<label class="danger">
  <input type="checkbox">
  <span></span>
</label>{% endhighlight %}
</div>

### Radio buttons

<div>
  <section class="example">
    <img src="../images/BB/switches_2.jpg" alt="Switches (Image replacing code)"/>
    <article class="frame">
      <label>
        <input type="radio" name="example" checked="">
        <span></span>
      </label>
      <label>
        <input type="radio" name="example">
        <span></span>
      </label>
      <label class="danger">
        <input type="radio" name="example2" checked="">
        <span></span>
      </label>
      <label class="danger">
        <input type="radio" name="example2">
        <span></span>
      </label>
    </article>
  </section>

  <label>Css shared link:</label>
  {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/switches.css">{% endhighlight %}

  <label>HTML code:</label>
  {% highlight html linenos=table %}
<label>
  <input type="radio" name="example" checked="">
  <span></span>
</label>
<label>
  <input type="radio" name="example">
  <span></span>
</label>
<label class="danger">
  <input type="radio" name="example2" checked="">
  <span></span>
</label>
<label class="danger">
  <input type="radio" name="example2">
  <span></span>
</label>{% endhighlight %}
</div>

### Switches

<div>
  <section class="example">
    <img src="../images/BB/switches_3.jpg" alt="Switches (Image replacing code)"/>
    <article class="switch frame">
      <label>
        <input type="checkbox" data-type="switch" checked="">
        <span></span>
      </label>
      <label>
        <input type="checkbox" data-type="switch">
        <span></span>
      </label>
    </article>
  </section>

  <label>Css shared link:</label>
  {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/switches.css">{% endhighlight %}

  <label>HTML code:</label>
  {% highlight html linenos=table %}
<label>
  <input type="checkbox" data-type="switch" checked="">
  <span></span>
</label>
<label>
  <input type="checkbox" data-type="switch">
  <span></span>
</label>{% endhighlight %}
</div>

