---
layout: bffos
title: Headers
section: building-blocks
h2: <strong>Building Blocks:</strong> markup & examples
---

## Headers

Used for labeling the active view and providing top-level navigation and inputs for the active view.

### Characteristics

* A header is a horizontal bar the full width of the screen, which appears at the top of the screen in most apps.
* Headers float above content, with the option of flowing with content in special instances, such as in the Browser app.
* The heading's text provides the name of the current view.
* The heading may optionally include additional text; for example, in an email app, the number of unread messages may be displayed.
* Headers may include inputs for navigating and manipulating the current view.
* Most apps (full-screen games being an obvious exception) have a header.

### Default
  
<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/headers_1.jpg" alt="Headers (Image replacing code)"/>
    <article class="headers frame">
      <section role="region">
        <header>
          <menu type="toolbar">
            <a href="#"><span class="icon icon-edit">edit</span></a>
            <a href="#"><span class="icon icon-add">add</span></a>
          </menu>
          <h1>Messages</h1>
        </header>
      </section>
      <section role="region">
        <header>
          <button><span class="icon icon-menu">menu</span></button>
          <menu type="toolbar">
            <button><span class="icon icon-add">add</span></button>
          </menu>
          <h1>Inbox <em>(2)</em></h1>
        </header>
      </section>
      <section role="region">
        <header>
          <button><span class="icon icon-close">close</span></button>
          <menu type="toolbar"><button>done</button></menu>
          <h1>Title</h1>
        </header>
        <header>
          <h2>Subheader text</h2>
        </header>
      </section>
      <section role="region">
        <header>
          <button><span class="icon icon-back">back</span></button>
          <menu type="toolbar">
            <button><span class="icon icon-user">user</span></button>
          </menu>
          <form action="#">
            <input type="text" placeholder="search" required="required">
            <button type="reset">Remove text</button>
          </form>
        </header>
      </section>
    </article>
  </section>

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/style/headers.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}<section role="region">
  <header>
    <menu type="toolbar">
      <a href="#"><span class="icon icon-edit">edit</span></a>
      <a href="#"><span class="icon icon-add">add</span></a>
    </menu>
    <h1>Messages</h1>
  </header>
</section>
<section role="region">
  <header>
    <button><span class="icon icon-menu">menu</span></button>
    <menu type="toolbar">
      <button><span class="icon icon-add">add</span></button>
    </menu>
    <h1>Inbox <em>(2)</em></h1>
  </header>
</section>
<section role="region">
  <header>
    <button><span class="icon icon-close">close</span></button>
    <menu type="toolbar"><button>done</button></menu>
    <h1>Title</h1>
  </header>
  <header>
    <h2>Subheader text</h2>
  </header>
</section>
<section role="region">
  <header>
    <button><span class="icon icon-back">back</span></button>
    <menu type="toolbar">
      <button><span class="icon icon-user">user</span></button>
    </menu>
    <form action="#">
      <input type="text" placeholder="search" required="required">
      <button type="reset">Remove text</button>
    </form>
  </header>
</section>{% endhighlight %}
</div>

<hr>

### Skins: dark and organic

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/headers_2.jpg" alt="Headers (Image replacing code)"/>
    <article class="headers frame">
      <section class="skin-dark" role="region">
        <header>
          <a href="#"><span class="icon icon-back">back</span></a>
          <h1>Song title</h1>
        </header>
        <header>
          <h2>Subheader text</h2>
        </header>
      </section>
      <section class="skin-organic" role="region">
        <header>
          <a href="#"><span class="icon icon-back">back</span></a>
          <h1>Settings</h1>
        </header>
        <header>
          <h2>Subheader text</h2>
        </header>
      </section>
    </article>
  </section>

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/style/headers.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}
<section class="skin-dark" role="region">
  <header>
    <a href="#"><span class="icon icon-back">back</span></a>
    <h1>Song title</h1>
  </header>
  <header>
    <h2>Subheader text</h2>
  </header>
</section>
<section class="skin-organic" role="region">
  <header>
    <a href="#"><span class="icon icon-back">back</span></a>
    <h1>Settings</h1>
  </header>
  <header>
    <h2>Subheader text</h2>
  </header>
</section>{% endhighlight %}
</div>

