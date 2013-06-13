---
layout: bffos
title: Status
section: building-blocks
h2: <strong>Building Blocks:</strong> markup & examples
---

## Status

Relays information to the user in a transitory fashion, typically to confirm a user action or to alert the user to a system event. Sometimes status bars are referred to as “banners.”

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/status.png" alt="Status (Image replacing code)"/>
    <article class="status frame">
      <section role="status">
        <p>The Alarm is set for <strong>7 hours</strong> and <strong>14 minutes</strong> from now</p>
      </section>
    </article>
  </section>

  <h4>Css shared link</h4>
  {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style/status.css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}<section role="status">
  <p>The Alarm is set for <strong>7 hours</strong> and <strong>14 minutes</strong> from now</p>
</section>{% endhighlight %}
</div>