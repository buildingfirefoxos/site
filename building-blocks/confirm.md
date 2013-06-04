---
layout: bffos
title: Confirm
section: building-blocks
h1: Building Blocks
h2: <strong>Firefox OS</strong> UI component's markup
---

## Confirm

A confirmation prompt asks the user to take or confirm an action, such as responding to a system event such as asking the user to restart the device after swapping SIM cards, or to ask the user to grant or deny permission to perform a task.

> ### Characteristics
> * Opened from buttons within app content; these buttons are often inside toolbars (for example, the Browser app’s “Share” button).
> * Action menus contain one or more items.
> * Buttons have two states: normal and pressed.
> * These menus expand in height to accomodate their items, to a maximum of the screen’s height. Once that maximum height is reached.

<div class="tabs">
  <ul>
    <li><a href="#confirm-default">Default</a></li>
    <li><a href="#confirm-content">Confirm with content</a></li>
  </ul>
  <div id="confirm-default">
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

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/confirm.css">{% endhighlight %}

    <label>HTML code:</label>
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

  <div id="confirm-content">
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

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/confirm.css">{% endhighlight %}

    <label>HTML code:</label>
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
</div>

