---
layout: bffos
title: Drawer
theme: whatev
section: building-blocks
h2: <strong>Building Blocks:</strong> markup & examples
---

## Drawer

Drawers provide access to top-level navigation options that may be too numerous for a tabs or toolbar interface. Drawers can also be used to access user-generated content such as browser tabs, accounts in an email or messaging client, or multiple calendars. Drawers slide out from the edge of the screen at the user's request (pushing the underlying content aside), then slide back out of the way when no longer needed.

> ### Characteristics
> * Drawers provide access to top-level navigation links that are usually user-configurable. For example, these are used for accessing accounts in the Email and Calendar apps, and for the list of open tabs in the Browser app.
> * Drawers can also be used to provide access to secondary or "power-user" features.
> * With the exception of browser, drawers are positioned on the left side of the screen.
> * To open a drawer, the user taps the standard "drawer" button. The drawer then slides in from the left side of the display, pushing aside the content below.
> * The drawer is closed when the user either taps the "drawer" button again, or anywhere on the visible area of the underlying primary interface. The drawer then slides off the screen to the left, pulling the primary content back into its usual position behind it.
> * Drawers are of variable width; however, enough room must be left for the drawer button on the primary interface to remain fully visible.

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/drawer.jpg" alt="Drawer (Image replacing code)"/>
    <article class="full frame drawer">{% include building-blocks/drawer.html %}</article>
  </section>

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/themes/whatev/headers.css" rel="stylesheet" type="text/css">
<link href="(your styles folder)/themes/whatev/buttons.css" rel="stylesheet" type="text/css">
<link href="(your styles folder)/themes/whatev/toolbars.css" rel="stylesheet" type="text/css">
<link href="(your styles folder)/themes/whatev/drawer.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}{% include building-blocks/drawer.html %}{% endhighlight %}
</div>
