---
layout: bffos
title: Buttons
section: building-blocks
theme: whatev
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
    <img src="../../images/BB/themes/whatev/buttons_1.jpg" alt="Buttons (Image replacing code)"/>
    <article class="frame">{% include building-blocks/buttons_1.html %}</article>
  </section>

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/themes/whatev/buttons.css" rel="stylesheet" type="text/css">{% endhighlight %}
  
  <h4>HTML code</h4>
  {% highlight html linenos=table %}{% include building-blocks/buttons_1.html %}{% endhighlight %}
</div>

<hr>

### Disabled buttons
Disabled buttons do not respond to users' taps.

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../../images/BB/themes/whatev/buttons_2.jpg" alt="Buttons (Image replacing code)"/>
    <article class="frame">{% include building-blocks/buttons_2.html %}</article>
  </section>

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/themes/whatev/buttons.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}{% include building-blocks/buttons_2.html %}{% endhighlight %}
</div>

<hr>

### Large buttons

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../../images/BB/themes/whatev/buttons_3.jpg" alt="Buttons (Image replacing code)"/>
    <article class="frame">{% include building-blocks/buttons_3.html %}</article>
  </section>

  <h4>Css link</h4>
    {% highlight html linenos=table %}<link href="(your styles folder)/themes/whatev/buttons.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}{% include building-blocks/buttons_3.html %}{% endhighlight %}
</div>

### Buttons with icons

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../../images/BB/themes/whatev/buttons_4.jpg" alt="Buttons (Image replacing code)"/>
    <article class="frame">{% include building-blocks/buttons_4.html %}</article>
  </section>

  <h4>Css link</h4>
    {% highlight html linenos=table %}<link href="(your styles folder)/themes/whatev/icons.css" rel="stylesheet" type="text/css">
<link href="(your styles folder)/themes/whatev/buttons.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}{% include building-blocks/buttons_4.html %}{% endhighlight %}
</div>

