---
layout: bffos
title: Confirm
section: building-blocks
h2: <strong>Building Blocks:</strong> markup & examples
---

## Confirm

A confirmation prompt is used to confirm an action or inform the user of an event. Confirmation prompts are frequently used to confirm tasks that cannot be undone, such as permanently deleting an item. Confirmation prompts are designed to disrupt tasks and, as a result, should be used sparingly.

> ### Characteristics
> * Confirmation prompts are currently modal - they occupy the entire screen, and require user input to close them.

> #### A confirmation prompts consist of:
> * Title (optional)
> * Body
> * Icon (optional)
> * A Confirmation input button, whose label can be customized
> * An optional Cancel input button, whose label can be customized


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

