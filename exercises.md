---
layout: page
permalink: /exercises/
title: Giulio Porcu - Exercises
---
<div>
  <h2>All available exercises</h2>
  <hr />
  <ul>
  {% for post in site.posts %}
      {% if post.category == "exercise" %}
        <li>
            <h3>
                <a href="{{ post.url }}" >{{ post.title }}</a>
            </h3>
        </li>
      {% endif %}
  {% endfor %}
  </ul>
</div>