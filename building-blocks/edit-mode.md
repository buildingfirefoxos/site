---
layout: bffos
title: Edit mode
section: building-blocks
h2: <strong>Building Blocks:</strong> markup & examples
scroll: top
---

## Edit mode

State of an app where content becomes editable by the user (eg: deleting messages).

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/edit_mode.jpg" alt="Edit mode (Image replacing code)"/>
    <article class="edit-mode frame">
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

  <h4>Css shared link</h4>
  {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/edit_mode.css">{% endhighlight %}

  <h4>HTML code</h4>
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