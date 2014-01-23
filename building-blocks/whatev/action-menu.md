---
layout: bffos
title: Action Menu
section: building-blocks
theme: whatev
h2: <strong>Building Blocks:</strong> markup & examples
---

## Action menu

An action menu presents a list of actions, related to the app's content, from which the user may make a selection.

> ### Characteristics
> * Opened from buttons within app content; these buttons are often inside toolbars (for example, the Browser app's "Share" button).
> * Action menus contain one or more items.
> * These menus expand in height to accomodate their items, to a maximum of the screen's height. Once that maximum height is reached, the content becomes scrollable vertically. Generally, the best practice is to try to include no more than five items plus a menu title.
> * The title string is optional.
> * The menu is closed by one of:
>   * Selecting one of the actions.
>   * Tapping the "Cancel" button.

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../../images/BB/themes/whatev/action_menu.jpg" alt="Action menu (Image replacing code)"/>
    <article class="full frame">{% include building-blocks/action_menu.html %}</article>
  </section>

  <h4>Note</h4>
  <section class="note">
    <p>Use <code>&lt;button type="button"&gt;</code> in case you don't want your form to be submitted.</p>
  </section>
  
  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/themes/whatev/action_menu.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}{% include building-blocks/action_menu.html %}{% endhighlight %}
</div>