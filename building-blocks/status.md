---
layout: bffos
title: Status
section: building-blocks
h1: Building Blocks
h2: <strong>Firefox OS</strong> UI component's markup
---

## Status

Relays information to the user in a transitory fashion, typically to confirm a user action or to alert the user to a system event. Sometimes status bars are referred to as “banners.”

<div>
  <section class="example">
    <img src="../images/BB/status.png" alt="Status (Image replacing code)"/>
    <article class="status frame">
      <section role="status">
        <p>The Alarm is set for <strong>7 hours</strong> and <strong>14 minutes</strong> from now</p>
      </section>
    </article>
  </section>

  <label>Css shared link:</label>
  {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/status.css">{% endhighlight %}

  <label>HTML code:</label>
  {% highlight html linenos=table %}<section role="status">
  <p>The Alarm is set for <strong>7 hours</strong> and <strong>14 minutes</strong> from now</p>
</section>{% endhighlight %}
</div>