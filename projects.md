---
layout: page
permalink: /projects/
title: Giulio Porcu - Projects
---
<div>
  <h2>All available project pages</h2>
  <hr />
  <ul>
  {% for post in site.posts %}
      {% if post.category == "projects" %}
        <li>
            <h3>
                <a href="{{ post.url }}" >{{ post.title }}</a>
            </h3>
        </li>
      {% endif %}
  {% endfor %}
  </ul>
</div>