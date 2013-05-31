---
layout: bffos
title: Drawer
section: building-blocks
h1: Building Blocks
h2: UI component's markup
---

## Drawer

<div>
  <section class="example">
    <img src="../images/BB/drawer.jpg" alt="Drawer (Image replacing code)"/>
    <article class="frame">
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
          <a href="#drawer_"><span class="icon icon-menu">show sidebar</span></a>
          <h1>Inbox</h1>
        </header>
        <div role="main"></div>
      </section>
    </article>
  </section>

  <label>Css shared link:</label>
  {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style_unstable/drawer.css">{% endhighlight %}

  <label>HTML code:</label>
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
    <a href="#drawer_"><span class="icon icon-menu">show sidebar</span></a>
    <h1>Inbox</h1>
  </header>
  <div role="main"></div>
</section>{% endhighlight %}
</div>