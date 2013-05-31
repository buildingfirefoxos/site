---
layout: bffos
title: Switches
section: building-blocks
h1: Building Blocks
h2: UI component's markup
---

## Switches

Activates/Deactivates a given item. It’s also used to select an element within a list.

<div class="tabs">
  <ul>
    <li><a href="#switches-checkboxes">Checkboxes</a></li>
    <li><a href="#switches-radio">Radio buttons</a></li>
    <li><a href="#switches-switches">Switches</a></li>
  </ul>

  <div id="switches-checkboxes">
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

  <div id="switches-radio">
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

  <div id="switches-switches">
    <section class="example">
      <img src="../images/BB/switches_3.jpg" alt="Switches (Image replacing code)"/>
      <article class="frame">
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
</div>

