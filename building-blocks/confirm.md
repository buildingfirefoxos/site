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
> * Opened from buttons within application content; these buttons are often inside toolbars (for example, the Browser app’s “Share” button).
> * Action menus contain one or more items.
> * Buttons have two states: normal and pressed.
> * These menus expand in height to accomodate their items, to a maximum of the screen’s height. Once that maximum height is reached.

<!--ul class="nav nav-tabs clearfix">
  <li class="active">
    <a href="#default">Default</a>
  </li>
  <li><a href="#confirm-with-content">Confirm with content</a></li>
</ul-->

<div id="tabs">
  <ul>
    <li><a href="#tabs-1">First</a></li>
    <li><a href="#tabs-2">Second</a></li>
    <li><a href="#tabs-3">Third</a></li>
  </ul>
  <div id="tabs-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
  <div id="tabs-2">Phasellus mattis tincidunt nibh. Cras orci urna, blandit id, pretium vel, aliquet ornare, felis. Maecenas scelerisque sem non nisl. Fusce sed lorem in enim dictum bibendum.</div>
  <div id="tabs-3">Nam dui erat, auctor a, dignissim quis, sollicitudin eu, felis. Pellentesque nisi urna, interdum eget, sagittis et, consequat vestibulum, lacus. Mauris porttitor ullamcorper augue.</div>
</div>


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
