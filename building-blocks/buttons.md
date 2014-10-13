---
layout: bffos
title: Buttons
section: building-blocks
h2: <strong>Building Blocks:</strong> markup & examples
---

## Buttons

Buttons perform an action when tapped by the user. Firefox OS has a wide variety of button styles to accommodate different uses and contexts.

> ### Characteristics
> * Buttons have two components: a visual target and a hit target. The visual target is the button the user sees on the screen. The hit target is an invisible area that responds to the tap. To minimize tapping errors, the hit target is typically larger than the visual target.
> * Buttons have two states: normal and pressed.
> * Disabled buttons are buttons that do not respond to a tap. Disabled buttons are dimmed.

### Default
Default buttons are used when there are only a few actions and a list isn't needed. A primary action button uses a special highlight color to improve visibility and simplify the choice for the user. Buttons that have potentially negative consequences, such as deleting an item, are highlighted in red.

<div class="grouped-content">
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/buttons_1.jpg" alt="Buttons (Image replacing code)"/>
    <article class="frame buttons">{% include building-blocks/buttons_1.html %}</article>
  </section>

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/style/buttons.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}{% include building-blocks/buttons_1.html %}{% endhighlight %}
</div>

<hr>

### Disabled buttons
Disabled buttons do not respond to users' taps.

<div>
  <h4>Example</h4>
  <section class="example buttons">
    <img src="../images/BB/buttons_2.png" alt="Buttons (Image replacing code)"/>
    <article class="frame">{% include building-blocks/buttons_2.html %}</article>
  </section>

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/style/buttons.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}{% include building-blocks/buttons_2.html %}{% endhighlight %}
</div>

<hr>

### List buttons
List buttons are used when displaying a list of actions, or to trigger the display of a value selector.

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/buttons_3.png" alt="Buttons (Image replacing code)"/>
    <article class="frame buttons">{% include building-blocks/buttons_3.html %}</article>
  </section>

  <h4>Note</h4>
  <section class="note">
    <p>This example uses Gaia <a href="http://localhost:4000/building-blocks/icon-font.html">Icon Font</a>. For more details, please follow the link.</p>
  </section>

  <h4>Css link</h4>
    {% highlight html linenos=table %}<link href="(your styles folder)/style/buttons.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}{% include building-blocks/buttons_3.html %}{% endhighlight %}
</div>

