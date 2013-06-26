---
layout: bffos
title: Drawer
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
    <article class="full frame">
      <section data-type="sidebar">
        <header>
          <menu type="toolbar">
            <a href="#content"><span class="icon icon-add">add</span></a>
          </menu>
          <h1>Title <em>(9)</em></h1>
        </header>
        <nav>
          <ul>
            <li><a href="#content">label</a></li>
            <li><a href="#content">label</a></li>
            <li><a href="#content">label</a></li>
            <li><a href="#content">label</a></li>
          </ul>
          <h2>Subtitle</h2>
          <ul>
            <li><a href="#content">label</a></li>
            <li><a href="#content">label</a></li>
            <li><a href="#content">label larger label than the </a></li>
            <li><a href="#content">label</a></li>
          </ul>
        </nav>
      </section>
      <section id="drawer" role="region">
        <header>
          <a href="#content"><span class="icon icon-menu">hide sidebar</span></a>
          <a href="#drawer"><span class="icon icon-menu">show sidebar</span></a>
          <h1>Inbox</h1>
        </header>
        <div role="main"></div>
      </section>
    </article>
  </section>

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/style_unstable/drawer.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}
<section data-type="sidebar">
  <header>
    <menu type="toolbar">
      <a href="#content"><span class="icon icon-add">add</span></a>
    </menu>
    <h1>Title <em>(9)</em></h1>
  </header>
  <nav>
    <ul>
      <li><a href="#content">label</a></li>
      <li><a href="#content">label</a></li>
      <li><a href="#content">label</a></li>
      <li><a href="#content">label</a></li>
    </ul>
    <h2>Subtitle</h2>
    <ul>
      <li><a href="#content">label</a></li>
      <li><a href="#content">label</a></li>
      <li><a href="#content">label larger label than the </a></li>
      <li><a href="#content">label</a></li>
    </ul>
  </nav>
</section>
<section id="drawer" role="region">
  <header>
    <a href="#content"><span class="icon icon-menu">hide sidebar</span></a>
    <a href="#drawer"><span class="icon icon-menu">show sidebar</span></a>
    <h1>Inbox</h1>
  </header>
  <div role="main"></div>
</section>{% endhighlight %}
</div>
