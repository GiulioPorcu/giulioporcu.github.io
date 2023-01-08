---
layout: page
permalink: /projects/
title: Giulio Porcu - Projects
---
<div>
  {% for post in site.posts %}
      {% if post.category == "projects" %}
          <h2>
            <a href="{{ post.url }}">
              {{ post.title }}
            </a>
          </h2>
          {{ post.excerpt }}
      {% endif %}
  {% endfor %}
</div>