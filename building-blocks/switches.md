---
layout: bffos
title: Switches
section: building-blocks
h2: <strong>Building Blocks:</strong> markup & examples
---

## Switches

Switches activate/deactivate a given item. They are also used to select a elements within a list.

### Checkboxes

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/switches_1.jpg" alt="Switches (Image replacing code)"/>
    <article class="frame">
      <label class="pack-checkbox">
        <input type="checkbox" checked>
        <span></span>
      </label>
      <label class="pack-checkbox">
        <input type="checkbox">
        <span></span>
      </label>
      <label class="pack-checkbox danger">
        <input type="checkbox" checked>
        <span></span>
      </label>
      <label class="pack-checkbox danger">
        <input type="checkbox">
        <span></span>
      </label>
    </article>
  </section>

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/style/switches.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}
<label class="pack-checkbox">
  <input type="checkbox" checked>
  <span></span>
</label>
<label class="pack-checkbox">
  <input type="checkbox">
  <span></span>
</label>
<label class="pack-checkbox danger">
  <input type="checkbox" checked>
  <span></span>
</label>
<label class="pack-checkbox danger">
  <input type="checkbox">
  <span></span>
</label>{% endhighlight %}
</div>

<hr>

### Radio buttons

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/switches_2.jpg" alt="Switches (Image replacing code)"/>
    <article class="frame">
      <label class="pack-radio">
        <input type="radio" name="example" checked>
        <span></span>
      </label>
      <label class="pack-radio">
        <input type="radio" name="example">
        <span></span>
      </label>
      <label class="pack-radio danger">
        <input type="radio" name="example2" checked>
        <span></span>
      </label>
      <label class="pack-radio danger">
        <input type="radio" name="example2">
        <span></span>
      </label>
    </article>
  </section>

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/style/switches.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}
<label class="pack-radio">
  <input type="radio" name="example" checked>
  <span></span>
</label>
<label class="pack-radio">
  <input type="radio" name="example">
  <span></span>
</label>
<label class="pack-radio danger">
  <input type="radio" name="example2" checked>
  <span></span>
</label>
<label class="pack-radio danger">
  <input type="radio" name="example2">
  <span></span>
</label>{% endhighlight %}
</div>

<hr>

### Switches

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/switches_3.jpg" alt="Switches (Image replacing code)"/>
    <article class="switch frame">
      <label class="pack-switch">
        <input type="checkbox" checked>
        <span></span>
      </label>
      <label class="pack-switch">
        <input type="checkbox">
        <span></span>
      </label>
    </article>
  </section>

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/style/switches.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}
<label class="pack-switch">
  <input type="checkbox" checked>
  <span></span>
</label>
<label class="pack-switch">
  <input type="checkbox">
  <span></span>
</label>{% endhighlight %}
</div>

