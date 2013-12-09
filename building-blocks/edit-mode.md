---
layout: bffos
title: Edit mode
section: building-blocks
h2: <strong>Building Blocks:</strong> markup & examples
---

## Edit mode

State of an app where content becomes editable by the user (eg: deleting messages).

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/edit_mode.jpg" alt="Edit mode (Image replacing code)"/>
    <article class="edit-mode frame">{% include building-blocks/edit_mode.html %}</article>
  </section>

  <h4>Note</h4>
  <section class="note">
    <p>Use <code>&lt;button type="button"&gt;</code> in case you don't want your form to be submitted.</p>
  </section>
  
  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/style/edit_mode.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}{% include building-blocks/edit_mode.html %}{% endhighlight %}
</div>
