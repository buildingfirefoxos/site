---
layout: bffos
title: Seek bars
section: building-blocks
h1: Building Blocks
h2: UI component's markup
---

## Seek bars

Used for scrolling through content (i.e. a song or video).

<div>
  <section class="example">
    <img src="../images/BB/seekbars.jpg" alt="Seek bars (Image replacing code)"/>
    <article class="frame">
      <section role="region">
        <div role="slider" aria-valuemin="0" aria-valuenow="80" aria-valuemax="100" aria-valuetext="slider description">
          <div>
            <progress value="80" max="100"></progress>
            <button>handler</button>
          </div>
        </div>
      </section>
      <section role="region">
        <div role="slider" aria-valuemin="0" aria-valuenow="80" aria-valuemax="100" aria-valuetext="slider description">
          <label>0</label>
          <label>100</label>
          <div>
            <progress value="80" max="100"></progress>
            <button>handler</button>
          </div>
        </div>
      </section>
      <section role="region">
        <div role="slider" aria-valuemin="0" aria-valuenow="80" aria-valuemax="100" aria-valuetext="slider description">
          <label class="icon">0</label>
          <label class="icon">100</label>
          <div>
            <progress value="80" max="100"></progress>
            <button>handler</button>
          </div>
        </div>
      </section>
    </article>
  </section>

  <label>Css shared link:</label>
  {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style_unstable/seekbars.css">{% endhighlight %}

  <label>HTML code:</label>
  {% highlight html linenos=table %}<section role="region">
  <div role="slider" aria-valuemin="0" aria-valuenow="80" aria-valuemax="100" aria-valuetext="slider description">
    <div>
      <progress value="80" max="100"></progress>
      <button>handler</button>
    </div>
  </div>
</section>
<section role="region">
  <div role="slider" aria-valuemin="0" aria-valuenow="80" aria-valuemax="100" aria-valuetext="slider description">
    <label>0</label>
    <label>100</label>
    <div>
      <progress value="80" max="100"></progress>
      <button>handler</button>
    </div>
  </div>
</section>
<section role="region">
  <div role="slider" aria-valuemin="0" aria-valuenow="80" aria-valuemax="100" aria-valuetext="slider description">
    <label class="icon">0</label>
    <label class="icon">100</label>
    <div>
      <progress value="80" max="100"></progress>
      <button>handler</button>
    </div>
  </div>
</section>{% endhighlight %}
</div>