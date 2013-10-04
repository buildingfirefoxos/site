---
layout: bffos
title: Confirm
section: building-blocks
h2: <strong>Building Blocks:</strong> markup & examples
---

## Confirm

A confirmation prompt is used to confirm an action or inform the user of an event. Confirmation prompts are frequently used to confirm tasks that cannot be undone, such as permanently deleting an item. Confirmation prompts are designed to disrupt tasks and, as a result, should be used sparingly.

> ### Characteristics
> * Confirmation prompts are currently modal - they occupy the entire screen, and require user input to close them.

> ##### A confirmation prompts consist of:
> * Title (optional)
> * Body
> * Icon (optional)
> * A Confirmation input button, whose label can be customized
> * An optional Cancel input button, whose label can be customized


### Default

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/confirm_1.jpg" alt="Confirm (Image replacing code)"/>
    <article class="full frame">{% include building-blocks/confirm_1.html %}</article>
  </section>

  <h4>Note</h4>
  <section class="note">
    <p>Use <code>&lt;button type="buton"&gt;</code> in case you don't want your form to be submitted.</p>
  </section>
  
  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/style/confirm.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}{% include building-blocks/confirm_1.html %}{% endhighlight %}
</div>

<hr>

### Confirm with content

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/confirm_2.jpg" alt="Confirm (Image replacing code)"/>
    <article class="full frame">{% include building-blocks/confirm_2.html %}</article>
  </section>

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/style/confirm.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}{% include building-blocks/confirm_2.html %}{% endhighlight %}
</div>

