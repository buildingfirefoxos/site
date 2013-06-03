---
layout: bffos
title: Headers
section: building-blocks
h1: Building Blocks
h2: <strong>Firefox OS</strong> UI component's markup
---

## Headers

Used for labeling the active view and providing top-level navigation and inputs for the active view.

<div class="tabs">
  <ul>
    <li><a href="#headers-default">Default</a></li>
    <li><a href="#headers-skins">Skins: dark and organic</a></li>
  </ul>
  <div id="headers-default">
    <section class="example">
      <img src="../images/BB/headers_1.jpg" alt="Headers (Image replacing code)"/>
      <article class="frame">
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

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/headers.css">{% endhighlight %}

    <label>HTML code:</label>
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

  <div id="headers-skins">
    <section class="example">
      <img src="../images/BB/headers_2.jpg" alt="Headers (Image replacing code)"/>
      <article class="frame">
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

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/headers.css">{% endhighlight %}

    <label>HTML code:</label>
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
</div>

