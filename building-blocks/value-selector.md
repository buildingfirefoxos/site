---
layout: bffos
title: Value selectors
section: building-blocks
h1: Building Blocks
h2: <strong>Firefox OS</strong> UI component's markup
---

## Value selectors

(SYSTEM COMPONENT)

Provides a way for the user to select one of more values, usually from a Form interface. Most commonly associated with forms (eg: Setting up a Calendar event).

<div class="tabs">
  <ul>
    <li><a href="#value-single">Single selector</a></li>
    <li><a href="#value-multiple">Multiple selector</a></li>
    <li><a href="#value-time">Time selector</a></li>
  </ul>

  <div id="value-single">
    <section class="example">
      <img src="../images/BB/value_1.jpg" alt="Value selectors (Image replacing code)"/>
    </section>

    <label>To launch it use:</label>
    {% highlight html linenos=table %}
<select>
  <option>Option 1</option>
  <option>Option 2</option>
</select>{% endhighlight %}
  </div>

  <div id="value-multiple">
    <section class="example">
      <img src="../images/BB/value_2.jpg" alt="Value selectors (Image replacing code)"/>
    </section>

    <label>To launch it use:</label>
    {% highlight html linenos=table %}
<select multiple="true">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
  <option>Option 4</option>
  <option>Option 5</option>
  <option>Option 6</option>
  <option>Option 7</option>
  <option>Option 8</option>
  <option>Option 9</option>
</select>{% endhighlight %}
  </div>

  <div id="value-time">
    <section class="example">
      <img src="../images/BB/time.jpg" alt="Value selectors (Image replacing code)"/>
    </section>

    <label>To launch it use:</label>
    {% highlight html linenos=table %}
<input type="time" />{% endhighlight %}
  </div>
</div>

