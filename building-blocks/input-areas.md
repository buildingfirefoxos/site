---
layout: bffos
title: Input areas
section: building-blocks
h1: Building Blocks
h2: <strong>Firefox OS</strong> UI component's markup
---

## Input areas

Activates/Deactivates a given item. It’s also used to select an element within a list.

<div class="tabs">
  <ul>
    <li><a href="#input-default">Default</a></li>
    <li><a href="#input-fielset">Fieldset</a></li>
    <li><a href="#input-forms">Forms</a></li>
  </ul>

  <div id="input-default">
    <section class="example">
      <img src="../images/BB/input_1.png" alt="Input areas (Image replacing code)"/>
      <article class="frame">
        <form>
          <p>
            <input type="text" placeholder="Placeholder" required="">
            <button type="reset">Clear</button>
          </p>
          <p>
            <textarea placeholder="Placeholder in textarea" required=""></textarea>
          </p>
          <p>
            <input type="text" placeholder="Placeholder" value="Some written text" required="">
            <button type="reset">Clear</button>
          </p>
        </form>
      </article>
    </section>

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/input_areas.css">{% endhighlight %}

    <label>HTML code:</label>
    {% highlight html linenos=table %}
<form>
  <p>
    <input type="text" placeholder="Placeholder" required="">
    <button type="reset">Clear</button>
  </p>
  <p>
    <textarea placeholder="Placeholder in textarea" required=""></textarea>
  </p>
  <p>
    <input type="text" placeholder="Placeholder" value="Some written text" required="">
    <button type="reset">Clear</button>
  </p>
</form>{% endhighlight %}
  </div>

  <div id="input-fielset">
    <section class="example">
      <img src="../images/BB/input_2.png" alt="Input areas (Image replacing code)"/>
      <article class="frame">
        <form>
          <fieldset>
            <legend class="action">Mobile</legend>
            <section>
              <p>
                <input type="tel" placeholder="Phone number" required="">
                <button type="reset">Clear</button>
              </p>
              <p>
                <input type="text" placeholder="Name" value="Jessy James" required="">
                <button type="reset">Clear</button>
              </p>
            </section>
          </fieldset>
          <fieldset>
            <legend>Work</legend>
            <section>
              <p>
                <input type="tel" placeholder="Email" required="">
                <button type="reset">Clear</button>
              </p>
            </section>
          </fieldset>
        </form>
      </article>
    </section>

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/input_areas.css">{% endhighlight %}

    <label>HTML code:</label>
    {% highlight html linenos=table %}
<form>
  <fieldset>
    <legend class="action">Mobile</legend>
    <section>
      <p>
        <input type="tel" placeholder="Phone number" required="">
        <button type="reset">Clear</button>
      </p>
      <p>
        <input type="text" placeholder="Name" value="Jessy James" required="">
        <button type="reset">Clear</button>
      </p>
    </section>
  </fieldset>
  <fieldset>
    <legend>Work</legend>
    <section>
      <p>
        <input type="tel" placeholder="Email" required="">
        <button type="reset">Clear</button>
      </p>
    </section>
  </fieldset>
</form>{% endhighlight %}
  </div>

  <div id="input-forms">
    <section class="example">
      <img src="../images/BB/input_3.png" alt="Input areas (Image replacing code)"/>
      <article class="input frame">
        <!-- form used at the top of the page with fixed/absolute position and content scrolls underneath -->
        <form role="search">
          <button type="submit">Cancel</button>
          <p>
            <input type="text" placeholder="Search..." required="">
            <button type="reset">Clear</button>
          </p>
        </form>
        <!-- form used under a header, this form scrolls together with the content underneath the header -->
        <section role="region">
          <header>
              <!-- here should be the content of the header -->
          </header>
          <form role="search" class="full">
            <button type="submit">Send</button>
            <p>
              <input type="text" placeholder="Search..." required="">
              <button type="reset">Clear</button>
            </p>
          </form>
        </section>
        <form role="search" class="bottom">
          <button class="icon icon-attachment">Attachment</button>
          <button type="submit" disabled="">Send</button>
          <p>
            <input type="text" placeholder="Search..." required="">
            <button type="reset">Clear</button>
          </p>
        </form>
        <form role="search" class="bottom">
          <button class="icon icon-attachment">Attachment</button>
          <button type="submit">Send</button>
          <p>
            <textarea placeholder="Search..." required="">Some text here</textarea>
          </p>
        </form>
      </article>
    </section>

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/input_areas.css">{% endhighlight %}

    <label>HTML code:</label>
    {% highlight html linenos=table %}
<!-- form used at the top of the page with fixed/absolute position and content scrolls underneath -->
<form role="search">
  <button type="submit">Cancel</button>
  <p>
    <input type="text" placeholder="Search..." required="">
    <button type="reset">Clear</button>
  </p>
</form>
<!-- form used under a header, this form scrolls together with the content underneath the header -->
<section role="region">
  <header>
      <!-- here should be the content of the header -->
  </header>
  <form role="search" class="full">
    <button type="submit">Send</button>
    <p>
      <input type="text" placeholder="Search..." required="">
      <button type="reset">Clear</button>
    </p>
  </form>
</section>
<form role="search" class="bottom">
  <button class="icon icon-attachment">Attachment</button>
  <button type="submit" disabled="">Send</button>
  <p>
    <input type="text" placeholder="Search..." required="">
    <button type="reset">Clear</button>
  </p>
</form>
<form role="search" class="bottom">
  <button class="icon icon-attachment">Attachment</button>
  <button type="submit">Send</button>
  <p>
    <textarea placeholder="Search..." required="">Some text here</textarea>
  </p>
</form>{% endhighlight %}
  </div>
</div>

