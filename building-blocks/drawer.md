---
layout: bffos
title: Drawer
section: building-blocks
h2: <strong>Building Blocks:</strong> markup & examples
scroll: top
---

## Drawer

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
          <a href="#drawer_"><span class="icon icon-menu">show sidebar</span></a>
          <h1>Inbox</h1>
        </header>
        <div role="main"></div>
      </section>
    </article>
  </section>

  <h4>Css shared link</h4>
  {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style_unstable/drawer.css">{% endhighlight %}

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
    <a href="#drawer_"><span class="icon icon-menu">show sidebar</span></a>
    <h1>Inbox</h1>
  </header>
  <div role="main"></div>
</section>{% endhighlight %}
</div>