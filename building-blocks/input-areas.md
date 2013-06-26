---
layout: bffos
title: Input areas
section: building-blocks
h2: <strong>Building Blocks:</strong> markup & examples
---

## Input areas

An input area is a data entry field. There are many variations on what an input area can look like - they can be as simple as a text entry field, and as complex as a multi-part entry field with text entry, value selectors, and buttons. 

### Default

<div>
  <h4>Example</h4>
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

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/style/input_areas.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
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

<hr>

### Fieldset

<div>
  <h4>Example</h4>
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

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/style/input_areas.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
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

<hr>

### Forms

<div>
  <h4>Example</h4>
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

  <h4>Css link</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/style/input_areas.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
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

