---
layout: bffos
title: Edit mode
section: building-blocks
h1: Building Blocks
h2: <strong>Firefox OS</strong> UI component's markup
---

## Edit mode

State of an app where content becomes editable by the user (eg: deleting messages).

<div>
  <section class="example">
    <img src="../images/BB/edit_mode.jpg" alt="Edit mode (Image replacing code)"/>
    <article class="frame">
      <form role="dialog" data-type="edit">
        <section>
          <header>
            <button><span class="icon icon-close">close</span></button>
            <menu type="toolbar">
              <button>done</button>
            </menu>
            <h1>Edit</h1>
          </header>
        </section>
        <menu>
          <button>Delete all</button>
          <button>Delete selected</button>
        </menu>
      </form>
    </article>
  </section>

  <label>Css shared link:</label>
  {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/edit_mode.css">{% endhighlight %}

  <label>HTML code:</label>
  {% highlight html linenos=table %}<form role="dialog" data-type="edit">
    <section>
      <header>
        <button><span class="icon icon-close">close</span></button>
        <menu type="toolbar">
          <button>done</button>
        </menu>
        <h1>Edit</h1>
      </header>
    </section>
    <menu>
      <button>Delete all</button>
      <button>Delete selected</button>
    </menu>
  </form>{% endhighlight %}
</div>