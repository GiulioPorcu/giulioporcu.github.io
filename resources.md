---
layout: page
permalink: /resources/
title: Giulio Porcu - Resources
---
<div>
  {% for post in site.posts %}
      {% if post.category == "resources" %}
          <h2>
            <a href="{{ post.url }}">
              {{ post.title }}
            </a>
          </h2>
          {{ post.excerpt }}
      {% endif %}
  {% endfor %}
</div>