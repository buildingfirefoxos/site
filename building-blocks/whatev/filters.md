---
layout: bffos
title: Filters
section: building-blocks
theme: whatev
h2: <strong>Building Blocks:</strong> markup & examples
---

## Filters

Filters can be used for two purposes: data filtering, in which the user can view a single set of data in different ways (for example, the Calendar app uses filters to select the time scale to use when viewing data (that is, by day, week, or month); and secondary navigation (presenting a second set of tabs when tabs are already present in your user interface).

> ### Characteristics
> * Filters are presented as a horizontal sequence of buttons.
> * Only one button is focused at a time.
> * The best practice is to place filters within toolbars, so that they don't flow with content.
> * Left, middle, and right buttons can be styled uniquely. This lets you make, for example, the left and right ends of your bar take on a "sheen," or to make the bar rounded on the ends.
> * Filter buttons' widths vary depending on the number of filters in a single set.
> * You must have at least two and no more than five filters in a set.
> * A given set of filters may be labeled with either text or icons, but not both. Because filters’ heights are relatively small compared to tabs, text is typically the best practice.

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/filters.png" alt="Filters (Image replacing code)"/>
    <article class="filter frame">{% include building-blocks/filters.html %}</article>
  </section>

  <h4>Css link (Both Tabs and Filters are in tabs.css)</h4>
  {% highlight html linenos=table %}<link href="(your styles folder)/themes/whatev/tabs.css" rel="stylesheet" type="text/css">{% endhighlight %}

  <h4>HTML code</h4>
  {% highlight html linenos=table %}{% include building-blocks/filters.html %}{% endhighlight %}
</div>