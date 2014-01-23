---
layout: bffos
title: Value selectors
section: building-blocks
h2: <strong>Building Blocks:</strong> markup & examples
---

## Value selectors

(SYSTEM COMPONENT: This is how `<select>`, `<input type="time" />` and `<input type="date" />` are displayed in Firefox OS)

Value selectors allow users to select one of more values from a single form field.

### Single selector

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/value_1.jpg" alt="Value selectors (Image replacing code)"/>
    <article class="full frame">{% include building-blocks/value_selector_1.html %}    
    </article>
  </section>

  <h4>To launch it use:</h4>
  {% highlight html linenos=table %}
<select>
  <option>None</option>
  <option>At time of event</option>
  <option>5 minutes before</option>
  <option>15 minutes before</option>
  <option>30 minutes before</option>
  <option>1 hour before</option>
  <option>2 hours before</option>
  <option>1 day before</option>
</select>{% endhighlight %}


  <h4>Note:</h4>
  <section class="example">
    You could also use this if you need multiple selection:
    {% highlight html %}<select multiple="true">{% endhighlight %}
  </section>
</div>

<hr>

### Time selector

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/value_3.jpg" alt="Value selectors (Image replacing code)"/>
    <article class="full frame">{% include building-blocks/value_selector_2.html %}
    </article>
  </section>

  <h4>To launch it use:</h4>
  {% highlight html linenos=table %}
<input type="time" />{% endhighlight %}
</div>

<hr>

### Date selector

<div>
  <h4>Example</h4>
  
  <section class="example">
    <img src="../images/BB/value_4.jpg" alt="Value selectors (Image replacing code)"/>
    
    <article class="full frame">
      <img src="../images/BB/value_4.jpg" alt="Date selector"/>
    </article>
  </section>

  <h4>To launch it use:</h4>
  {% highlight html linenos=table %}
<input type="date" />{% endhighlight %}
</div>

