---
layout: bffos
title: Confirm
section: building-blocks
h2: <strong>Building Blocks:</strong> markup & examples
---

## Confirm

A confirmation prompt asks the user to take or confirm an action, such as responding to a system event such as asking the user to restart the device after swapping SIM cards, or to ask the user to grant or deny permission to perform a task.

> ### Characteristics
> * Opened from buttons within app content; these buttons are often inside toolbars (for example, the Browser app’s “Share” button).
> * Action menus contain one or more items.
> * Buttons have two states: normal and pressed.
> * These menus expand in height to accomodate their items, to a maximum of the screen’s height. Once that maximum height is reached.

### Default

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/confirm_1.jpg" alt="Confirm (Image replacing code)"/>
    <article class="full frame">
      <form role="dialog" data-type="confirm">
        <section>
          <h1>Confirmation</h1><!-- this heading is optional -->
          <p>Are you sure you want to delete this contact?</p>
        </section>
        <menu>
          <button>Cancel</button>
          <button class="danger">Delete</button>
        </menu>
      </form>
    </article>
  </section>

  <h4>Css shared link</h4>
  {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/confirm.css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}<form role="dialog" data-type="confirm">
  <section>
    <h1>Confirmation</h1><!-- this heading is optional -->
    <p>Are you sure you want to delete this contact?</p>
  </section>
  <menu>
    <button>Cancel</button>
    <button class="danger">Delete</button>
  </menu>
</form>{% endhighlight %}
</div>

<hr>

### Confirm with content

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/confirm_2.jpg" alt="Confirm (Image replacing code)"/>
    <article class="full frame">
      <form role="dialog" data-type="confirm">
        <section>
          <h1>Confirmation</h1>
          <p>
            <img src="../images/BB/app_logo.png" alt="Lightbox Icon" width="55" height="55">
            <strong>Lightbox</strong>
            <small>Lightbox Enterprises LLC.</small>
          </p>
          <p>Do you want to download and install this application?</p>
        </section>
        <menu>
          <button>Cancel</button>
          <button class="recommend">Yes</button>
        </menu>
      </form>
    </article>
  </section>

  <h4>Css shared link</h4>
  {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/confirm.css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}<form role="dialog" data-type="confirm">
  <section>
    <h1>Confirmation</h1>
    <p>
      <img src="../images/BB/app_logo.png" alt="Lightbox Icon" width="55" height="55">
      <strong>Lightbox</strong>
      <small>Lightbox Enterprises LLC.</small>
    </p>
    <p>Do you want to download and install this application?</p>
  </section>
  <menu>
    <button>Cancel</button>
    <button class="recommend">Yes</button>
  </menu>
</form>{% endhighlight %}
</div>

