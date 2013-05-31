---
layout: bffos
title: Lists
section: building-blocks
h1: Building Blocks
h2: UI component's markup
---

## Lists

Used for displaying an enumeration of a set of items.

<div class="tabs">
  <ul>
    <li><a href="#lists-default">Default</a></li>
    <li><a href="#lists-edit-mode">Edit mode</a></li>
  </ul>
  <div id="lists-default">
    <section class="example">
      <img src="../images/BB/lists_1.png" alt="Lists (Image replacing code)"/>
      <article class="frame">
        <section data-type="list">
          <header>Title</header>
          <ul>
            <li>
              <p>Margherita <strong>Gomez</strong></p>
            </li>
            <li>
              <a href="#">
                <p>Margherita Clickable <strong>Gomez</strong></p>
              </a>
            </li>
            <li>
              <aside class="pack-end">
                <img alt="placeholder" src="myimage.jpg">
              </aside>
              <a href="#">
                <p>Margherita <strong>Gomez</strong></p>
                <p>Family</p>
              </a>
            </li>
          </ul>
          <header>Another title</header>
          <ul>
            <li aria-disabled="true">
              <aside class="pack-end">
                <img alt="placeholder" src="myimage.jpg">
              </aside>
              <a href="#">
                <p>Margherita <strong>Gomez</strong></p>
                <p>Family</p>
              </a>
            </li>
            <li>
              <a href="#">
                <aside class="icon icon-callout">
                  asidecall
                </aside>
                <p>
                  Margherita <strong>Gomez</strong>
                  <em>(2)</em>
                </p>
                <p>
                  <time datetime="17:43">5:43PM</time>
                  Mobile, Vivo
                </p>
              </a>
            </li>
          </ul>
        </section>
      </article>
    </section>

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style_unstable/lists.css">{% endhighlight %}

    <label>HTML code:</label>
    {% highlight html linenos=table %}
<section data-type="list">
  <header>Title</header>
  <ul>
    <li>
      <p>Margherita <strong>Gomez</strong></p>
    </li>
    <li>
      <a href="#">
        <p>Margherita Clickable <strong>Gomez</strong></p>
      </a>
    </li>
    <li>
      <aside class="pack-end">
        <img alt="placeholder" src="myimage.jpg">
      </aside>
      <a href="#">
        <p>Margherita <strong>Gomez</strong></p>
        <p>Family</p>
      </a>
    </li>
  </ul>
  <header>Another title</header>
  <ul>
    <li aria-disabled="true">
      <aside class="pack-end">
        <img alt="placeholder" src="myimage.jpg">
      </aside>
      <a href="#">
        <p>Margherita <strong>Gomez</strong></p>
        <p>Family</p>
      </a>
    </li>
    <li>
      <a href="#">
        <aside class="icon icon-callout">
          asidecall
        </aside>
        <p>
          Margherita <strong>Gomez</strong>
          <em>(2)</em>
        </p>
        <p>
          <time datetime="17:43">5:43PM</time>
          Mobile, Vivo
        </p>
      </a>
    </li>
  </ul>
</section>{% endhighlight %}
  </div>

  <div id="lists-edit-mode">
    <section class="example">
      <img src="../images/BB/lists_2.png" alt="Lists (Image replacing code)"/>
      <article class="frame">
        <section data-type="list">
          <ul data-type="edit">
            <li>
              <label class="danger">
                <input type="checkbox">
                <span></span>
              </label>
              <aside class="pack-end">
                <img alt="placeholder" src="myimage.jpg">
              </aside>
              <a href="#">
                <p>Margherita <strong>Gomez</strong></p>
                <p>Family</p>
              </a>
            </li>
            <li>
              <label class="danger">
                <input type="checkbox">
                <span></span>
              </label>
              <a href="#">
                <aside class="icon icon-callout"></aside>
                <p>
                  Margherita <strong>Gomez</strong>
                  <em>(2)</em>
                </p>
                <p>
                  <time datetime="17:43">5:43PM</time>
                  Mobile, Vivo
                </p>
              </a>
            </li>
          </ul>
        </section>
      </article>
    </section>

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style_unstable/lists.css">{% endhighlight %}

    <label>HTML code:</label>
    {% highlight html linenos=table %}
<section data-type="list">
  <ul data-type="edit">
    <li>
      <label class="danger">
        <input type="checkbox">
        <span></span>
      </label>
      <aside class="pack-end">
        <img alt="placeholder" src="myimage.jpg">
      </aside>
      <a href="#">
        <p>Margherita <strong>Gomez</strong></p>
        <p>Family</p>
      </a>
    </li>
    <li>
      <label class="danger">
        <input type="checkbox">
        <span></span>
      </label>
      <a href="#">
        <aside class="icon icon-callout"></aside>
        <p>
          Margherita <strong>Gomez</strong>
          <em>(2)</em>
        </p>
        <p>
          <time datetime="17:43">5:43PM</time>
          Mobile, Vivo
        </p>
      </a>
    </li>
  </ul>
</section>{% endhighlight %}
  </div>
</div>

