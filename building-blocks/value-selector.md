---
layout: bffos
title: Value selectors
section: building-blocks
h2: <strong>Building Blocks:</strong> markup & examples
---

## Value selectors

(SYSTEM COMPONENT: This is how `<select>` and `<input type="time" />` will be displayed in Firefox OS)

Value selectors allow users to select one of more values from a single form field.

### Single selector

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/value_1.jpg" alt="Value selectors (Image replacing code)"/>
    <article class="full frame">
      <form onsubmit="return false;" data-type="value" role="dialog">
        <section>
          <h1>Choose social network</h1>
          <ul role="listbox">
            <li role="option">
              <label for="option-1">
                <input type="radio" id="option-1" name="option">
                <span>Twitter</span>
              </label>
            </li>
            <li role="option">
              <label for="option-2">
                <input type="radio" id="option-2" name="option">
                <span>Facebook</span>
              </label>
            </li>
          </ul>
        </section>
        <menu>
          <button class="full">Cancel</button>
        </menu>
      </form>
      </article>
  </section>

  <h4>To launch it use:</h4>
  {% highlight html linenos=table %}
<select>
  <option>Option 1</option>
  <option>Option 2</option>
</select>{% endhighlight %}
</div>

<hr>

### Multiple selector

<div>
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/value_2.jpg" alt="Value selectors (Image replacing code)"/>
    <article class="full frame">
      <form onsubmit="return false;" data-type="value" role="dialog">
        <section class="scrollable">
          <h1>Choose your option(s)</h1>
          <ul aria-multiselectable="true" role="listbox">
            <li role="option">
              <label for="option1">
                <input type="checkbox" id="option1">
                <span>Option 1</span>
              </label>
            </li>
            <li role="option">
              <label for="option2">
                <input type="checkbox" id="option2">
                <span>Option 2</span>
              </label>
            </li>
            <li role="option">
              <label for="option3">
                <input type="checkbox" id="option3">
                <span>Option 3</span>
              </label>
            </li>
            <li role="option">
              <label for="option4">
                <input type="checkbox" id="option4">
                <span>Option 4</span>
              </label>
            </li>
            <li role="option">
              <label for="option5">
                <input type="checkbox" id="option5">
                <span>Option 5</span>
              </label>
            </li>
            <li role="option">
              <label for="option6">
                <input type="checkbox" id="option6">
                <span>Option 6</span>
              </label>
            </li>
            <li role="option">
              <label for="option7">
                <input type="checkbox" id="option7">
                <span>Option 7</span>
              </label>
            </li>
            <li role="option">
              <label for="option8">
                <input type="checkbox" id="option8">
                <span>Option 8</span>
              </label>
            </li>
            <li role="option">
              <label for="option9">
                <input type="checkbox" id="option9">
                <span>Option 9</span>
              </label>
            </li>
          </ul>
        </section>
        <menu>
          <button>Cancel</button>
          <button class="recommend">Action</button>
        </menu>
      </form>
    </article>
  </section>

  <h4>To launch it use:</h4>
  {% highlight html linenos=table %}
<select multiple="true">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
  <option>Option 4</option>
  <option>Option 5</option>
  <option>Option 6</option>
  <option>Option 7</option>
  <option>Option 8</option>
  <option>Option 9</option>
</select>{% endhighlight %}
</div>

<hr>

### Time selector

<div id="value-time">
  <h4>Example</h4>
  <section class="example">
    <img src="../images/BB/time.jpg" alt="Value selectors (Image replacing code)"/>
    <article class="full frame">
      <form onsubmit="return false;" data-type="time" role="dialog">
        <h1>Select time</h1>
        <section role="spinbutton">
          <p>
            <span style="background-image: -moz-element(#hours);"></span>
            <span style="background-image: -moz-element(#minutes);"></span>
            <span style="background-image: -moz-element(#mode);"></span>
          </p>
          <div>
            <ol role="listbox" id="hours">
              <li role="option"><a href="#">1</a></li>
              <li role="option"><a href="#">2</a></li>
              <li role="option"><a href="#">3</a></li>
              <li role="option"><a href="#">4</a></li>
              <li role="option"><a href="#">5</a></li>
              <li role="option"><a href="#">6</a></li>
              <li role="option"><a href="#">7</a></li>
              <li role="option"><a href="#">8</a></li>
              <li role="option"><a href="#">9</a></li>
              <li role="option"><a href="#">10</a></li>
              <li role="option"><a href="#">11</a></li>
              <li role="option"><a href="#">12</a></li>
            </ol>
          </div>
          <div>
            <ol role="listbox" id="minutes">
              <li role="option"><a href="#">1</a></li>
              <li role="option"><a href="#">2</a></li>
              <li role="option"><a href="#">3</a></li>
              <li role="option"><a href="#">4</a></li>
              <li role="option"><a href="#">5</a></li>
              <li role="option"><a href="#">6</a></li>
              <li role="option"><a href="#">7</a></li>
              <li role="option"><a href="#">8</a></li>
              <li role="option"><a href="#">9</a></li>
              <li role="option"><a href="#">10</a></li>
              <li role="option"><a href="#">11</a></li>
              <li role="option"><a href="#">12</a></li>
            </ol>
          </div>
          <div class="mode">
            <ul role="listbox" id="mode">
              <li role="option"><a href="#">AM</a></li>
              <li role="option"><a href="#">PM</a></li>
            </ul>
          </div>
        </section>
        <menu>
          <button>Cancel</button>
          <button class="recommend">Action</button>
        </menu>
      </form>
    </article>
  </section>

  <h4>To launch it use:</h4>
  {% highlight html linenos=table %}
<input type="time" />{% endhighlight %}
</div>

