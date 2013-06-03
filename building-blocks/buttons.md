---
layout: bffos
title: Buttons
section: building-blocks
h1: Building Blocks
h2: <strong>Firefox OS</strong> UI component's markup
weight: 1
---

## Buttons

Performs an action when tapped by the user. These are highly flexible user interface objects that have a wide variety of styles.

> ### Characteristics
> * Buttons have two components: a visual target and a hit target. The hit target is always larger, in order to reduce targeting errors by making the button easier to tap.
> * Buttons have two states: normal and pressed.
> * Buttons can also be disabled, which means they can't be activated by the user, and are displayed dimmed to indicate that they're disabled.

<div class="tabs">
  <ul>
    <li><a href="#buttons-default">Default</a></li>
    <li><a href="#buttons-disabled">Disabled buttons</a></li>
    <li><a href="#buttons-list">Button list</a></li>
  </ul>

  <div id="buttons-default">
    <p>Used when there are only a few actions and a list isn't needed. The main action button uses a special highlight color to indicate that it's the primary option.</p>
    <section class="example">
      <img src="../images/BB/buttons_1.jpg" alt="Buttons (Image replacing code)"/>
      <article class="frame">
        <button>Default</button>
        <a class="recommend" role="button" href="#">Recommend</a>
        <button class="danger">Danger</button>
      </article>
    </section>

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/buttons.css">{% endhighlight %}

    <label>HTML code:</label>
    {% highlight html linenos=table %}<button>Default</button>
<a class="recommend" role="button" href="#">Recommend</a>
<button class="danger">Danger</button>{% endhighlight %}
  </div>

  <div id="buttons-disabled">
    <section class="example">
      <img src="../images/BB/buttons_2.png" alt="Buttons (Image replacing code)"/>
      <article class="frame">
        <div>
          <button disabled="disabled">Default</button>
          <a class="recommend" role="button" aria-disabled="true" href="#">Recommend</a>
          <button class="danger" disabled="disabled">Danger</button>
        </div>
        <div class="dark"><!-- disabled buttons over dark background -->
          <button disabled="disabled">Default</button>
          <button class="recommend" disabled="disabled">Recommend</button>
          <button class="danger" disabled="disabled">Danger</button>
        </div>
      </article>
    </section>

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/buttons.css">{% endhighlight %}

    <label>HTML code:</label>
    {% highlight html linenos=table %}<div>
  <button disabled="disabled">Default</button>
  <a class="recommend" role="button" aria-disabled="true" href="#">Recommend</a>
  <button class="danger" disabled="disabled">Danger</button>
</div>
<div class="dark"><!-- disabled buttons over dark background -->
  <button disabled="disabled">Default</button>
  <button class="recommend" disabled="disabled">Recommend</button>
  <button class="danger" disabled="disabled">Danger</button>
</div>{% endhighlight %}
  </div>

  <div id="buttons-list">
    <p>Used when displaying a list of actions, or to trigger the display of a value selector.</p>
    <section class="example">
      <img src="../images/BB/buttons_3.png" alt="Buttons (Image replacing code)"/>
      <article class="frame">
        <ul>
          <li>
            <button>Default</button>
          </li>
          <li>
            <button disabled="disabled">Disabled</button>
          </li>
          <li><button>Action 1</button></li>
          <li><button class="icon icon-view">View Name</button></li>
          <li><button class="icon icon-dialog">Tuesday September 18, 2012</button></li>
        </ul>
      </article>
    </section>

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/buttons.css">{% endhighlight %}

    <label>HTML code:</label>
    {% highlight html linenos=table %}<ul>
  <li>
    <button>Default</button>
  </li>
  <li>
    <button disabled="disabled">Disabled</button>
  </li>
  <li><button>Action 1</button></li>
  <li><button class="icon icon-view">View Name</button></li>
  <li><button class="icon icon-dialog">Tuesday September 18, 2012</button></li>
</ul>{% endhighlight %}
  </div>
</div>

