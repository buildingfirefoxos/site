---
layout: bffos
title: Confirm
section: /building-blocks/
h1: Building Blocks
h2: UI component's markup
---

## Confirm

A confirmation prompt asks the user to take or confirm an action, such as responding to a system event such as asking the user to restart the device after swapping SIM cards, or to ask the user to grant or deny permission to perform a task.

> ### Characteristics
> * Opened from buttons within app content; these buttons are often inside toolbars (for example, the Browser app’s “Share” button).
> * Action menus contain one or more items.
> * Buttons have two states: normal and pressed.
> * These menus expand in height to accomodate their items, to a maximum of the screen’s height. Once that maximum height is reached.

<section class="example">
  <img src="http://buildingfirefoxos.com/wp-content/uploads/2013/02/confirm_1.jpg" alt="Confirm (Image replacing code)"/>
  <article class="frame">
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

Css shared link:

```html
<link rel="stylesheet" type="text/css" href="shared/style/confirm.css">
```

HTML code:

```html
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
```
