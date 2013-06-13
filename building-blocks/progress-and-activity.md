---
layout: bffos
title: Progress and activity
section: building-blocks
h1: Building Blocks
h2: <strong>Firefox OS</strong> UI component's markup
scroll: top
---

## Progress and activity

Used for providing user with visual feedback that a process is active.

### Inline

<div class="dropdown">
  <a class="dropdown-toggle" href="#">Dropdown trigger</a>
  <ul class="dropdown-menu">
    <li><a tabindex="-1" href="#progress-spinner">Spinner</a></li>
    <li><a tabindex="-1" href="#progress-activity">Activity bar</a></li>
    <li><a tabindex="-1" href="#progress-progress">Progress bar</a></li>
    <li><a tabindex="-1" href="#progress-progress-activity">Progress + activity bar</a></li>
  </ul>
</div>
<ul class="dropdown-content">
  <li id="progress-spinner">
    <label>Example</label>
    <section class="example">
      <img src="../images/BB/progress_1.jpg" alt="Progress (Image replacing code)"/>
      <article class="frame">
        <progress></progress>
      </article>
    </section>

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style_unstable/progress_activity.css">{% endhighlight %}

    <label>HTML code:</label>
    {% highlight html linenos=table %}<progress></progress>{% endhighlight %}
  </li>

  <li id="progress-activity">
    <label>Example</label>
    <section class="example">
      <img src="../images/BB/progress_2.jpg" alt="Progress (Image replacing code)"/>
      <article class="frame">
        <progress class="pack-activity" value="80" max="100"></progress>
      </article>
    </section>

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style_unstable/progress_activity.css">{% endhighlight %}

    <label>HTML code:</label>
    {% highlight html linenos=table %}
<progress class="pack-activity" value="80" max="100"></progress>{% endhighlight %}
  </li>
  
  <li id="progress-progress">
    <label>Example</label>
    <section class="example">
      <img src="../images/BB/progress_3.jpg" alt="Progress (Image replacing code)"/>
      <article class="frame">
        <progress value="80" max="100"></progress>
      </article>
    </section>

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style_unstable/progress_activity.css">{% endhighlight %}

    <label>HTML code:</label>
    {% highlight html linenos=table %}
<progress value="80" max="100"></progress>{% endhighlight %}
  </li>

  <li id="progress-progress-activity">
    <label>Example</label>
    <section class="example">
      <img src="../images/BB/progress_4.jpg" alt="Progress (Image replacing code)"/>
      <article class="frame">
        <progress class="pack-activity" value="80" max="100"></progress>
      </article>
    </section>

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style_unstable/progress_activity.css">{% endhighlight %}

    <label>HTML code:</label>
    {% highlight html linenos=table %}
<progress class="pack-activity" value="80" max="100"></progress>{% endhighlight %}
  </li>
</ul>

### Modal

<div class="dropdown">
  <a class="dropdown-toggle" href="#">Dropdown trigger</a>
  <ul class="dropdown-menu">
    <li><a tabindex="-1" href="#progress-modal-spinner">Spinner</a></li>
    <li><a tabindex="-1" href="#progress-modal-progress">Progress bar</a></li>
    <li><a tabindex="-1" href="#progress-modal-activity">Activity bar</a></li>
  </ul>
</div>
<ul class="dropdown-content">
  <li id="progress-modal-spinner">
    <section class="example">
      <img src="../images/BB/progress_5.jpg" alt="Progress (Image replacing code)"/>
      <article class="full frame">
        <form role="dialog" data-type="confirm">
          <section>
            <h1>Name of the action</h1>
            <!-- Note: inline style only for demo purposes -->
            <p style="text-align: center;"><progress></progress></p>
          </section>
          <menu><button class="full">Cancel</button></menu>
        </form>
      </article>
    </section>

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style_unstable/progress_activity.css">{% endhighlight %}

    <label>HTML code:</label>
    {% highlight html linenos=table %}
<form role="dialog" data-type="confirm">
  <section>
    <h1>Name of the action</h1>
    <!-- Note: inline style only for demo purposes -->
    <p style="text-align: center;"><progress></progress></p>
  </section>
  <menu><button class="full">Cancel</button></menu>
</form>{% endhighlight %}
  </li>

  <li id="progress-modal-progress">
    <section class="example">
      <img src="../images/BB/progress_6.jpg" alt="Progress (Image replacing code)"/>
      <article class="full frame">
        <form role="dialog" data-type="confirm">
          <section>
            <h1>Name of the action</h1>
            <p role="status"><span>80%</span></p>
            <progress value="80" max="100"></progress>
          </section>
          <menu><button class="full">Cancel</button></menu>
        </form>
      </article>
    </section>

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style_unstable/progress_activity.css">{% endhighlight %}

    <label>HTML code:</label>
    {% highlight html linenos=table %}
<form role="dialog" data-type="confirm">
  <section>
    <h1>Name of the action</h1>
    <p role="status"><span>80%</span></p>
    <progress value="80" max="100"></progress>
  </section>
  <menu><button class="full">Cancel</button></menu>
</form>{% endhighlight %}
  </li>
  
  <li id="progress-modal-activity">
    <section class="example">
      <img src="../images/BB/progress_7.png" alt="Progress (Image replacing code)"/>
      <article class="full frame">
        <form role="dialog" data-type="confirm">
          <section>
            <h1>Name of the action</h1>
            <p role="status">
              <span></span>
              <progress class="pack-activity" value="0" max="100"></progress>
            </p>
          </section>
          <menu><button class="full">Cancel</button></menu>
        </form>            
      </article>
    </section>

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style_unstable/progress_activity.css">{% endhighlight %}

    <label>HTML code:</label>
    {% highlight html linenos=table %}
<form role="dialog" data-type="confirm">
  <section>
    <h1>Name of the action</h1>
    <p role="status">
      <span></span>
      <progress class="pack-activity" value="0" max="100"></progress>
    </p>
  </section>
  <menu><button class="full">Cancel</button></menu>
</form>{% endhighlight %}
  </li>
</ul>

### Header

<div class="dropdown">
  <a class="dropdown-toggle" href="#">Dropdown trigger</a>
  <ul class="dropdown-menu">
    <li><a tabindex="-1" href="#progress-header">Progress</a></li>
    <li><a tabindex="-1" href="#progress-header-activity">Activity bar in light Headers</a></li>
  </ul>
</div>
<ul class="dropdown-content">
  <li id="progress-header">
    <section class="example">
      <img src="../images/BB/progress_8.jpg" alt="Progress (Image replacing code)"/>
      <article class="frame">
        <section role="region">
          <header>
            <a href="#"><span class="icon icon-back">back</span></a>
            <h1>Song title</h1>
          </header>
          <progress value="80" max="100"></progress>
          <header>
            <h2>Subheader text</h2>
          </header>
        </section><section role="region">
          <header>
            <a href="#"><span class="icon icon-back">back</span></a>
            <h1>Song title</h1>
          </header>
          <progress value="80" max="100" class="pack-activity"></progress>
          <header>
            <h2>Subheader text</h2>
          </header>
        </section>
      </article>
    </section>

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style_unstable/progress_activity.css">{% endhighlight %}

    <label>HTML code:</label>
    {% highlight html linenos=table %}
<section role="region">
  <header>
    <a href="#"><span class="icon icon-back">back</span></a>
    <h1>Song title</h1>
  </header>
  <progress value="80" max="100"></progress>
  <header>
    <h2>Subheader text</h2>
  </header>
</section><section role="region">
  <header>
    <a href="#"><span class="icon icon-back">back</span></a>
    <h1>Song title</h1>
  </header>
  <progress value="80" max="100" class="pack-activity"></progress>
  <header>
    <h2>Subheader text</h2>
  </header>
</section>{% endhighlight %}
  </li>

  <li id="progress-header-activity">
    <section class="example">
      <img src="../images/BB/progress_9.jpg" alt="Progress (Image replacing code)"/>
      <article class="frame">
        <div id="browser-header">browser header</div>
        <progress class="pack-activity light" value="0" max="100"></progress>
      </article>
    </section>

    <label>Css shared link:</label>
    {% highlight html linenos=table %}<link rel="stylesheet" type="text/css" href="shared/style_unstable/progress_activity.css">{% endhighlight %}

    <label>HTML code:</label>
    {% highlight html linenos=table %}
<div id="browser-header">browser header</div>
<progress class="pack-activity light" value="0" max="100"></progress>{% endhighlight %}
  </li>
</ul>

